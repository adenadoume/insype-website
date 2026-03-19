import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { INSTITUTE_IMAGES } from '../constants/insype'
import { usePageContent, useGalleryImages, useGalleryCategories } from '../hooks/useSupabase'
import { useLanguage } from '../contexts/LanguageContext'
import useSEO from '../hooks/useSEO'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
}

const defaultImages = [
  { id: 1, image_url: INSTITUTE_IMAGES.building1, title: 'Εξωτερικός Χώρος', category: 'building' },
  { id: 2, image_url: INSTITUTE_IMAGES.building2, title: 'Κτίριο', category: 'building' },
  { id: 3, image_url: INSTITUTE_IMAGES.building3, title: 'Αίθουσα', category: 'facility' },
  { id: 4, image_url: INSTITUTE_IMAGES.building4, title: 'Χώρος Θεραπείας', category: 'facility' },
  { id: 5, image_url: INSTITUTE_IMAGES.building5, title: 'Κήπος', category: 'building' },
  { id: 6, image_url: INSTITUTE_IMAGES.building6, title: 'Εσωτερικός Χώρος', category: 'facility' },
  { id: 7, image_url: INSTITUTE_IMAGES.building7, title: 'Χώρος Δραστηριοτήτων', category: 'facility' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const { data: content } = usePageContent('gallery')
  const { data: dbImages } = useGalleryImages()
  const { data: categories } = useGalleryCategories()
  const { t, language } = useLanguage()

  const images = dbImages && dbImages.length > 0 ? dbImages : defaultImages
  const filters = categories || [
    { slug: 'all', name: language === 'el' ? 'Όλα' : 'All' },
    { slug: 'building', name: language === 'el' ? 'Κτίριο' : 'Building' },
    { slug: 'facility', name: language === 'el' ? 'Χώροι' : 'Spaces' },
  ]

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category?.slug === activeFilter || img.category === activeFilter)

  const heroTitle = content?.hero_title || t('galleryTitle')
  const heroSubtitle = content?.hero_subtitle || t('gallerySubtitle')
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.building1

  useSEO({
    title: content?.extra_content?.seo_title || t('galleryTitle'),
    description: content?.extra_content?.seo_description || (language === 'el' ? 'Φωτογραφίες των χώρων του Ινστιτούτου.' : 'Photos of the Institute spaces.'),
  })

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-navy/80" />
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 text-center px-6">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="eyebrow mb-4">
            {t('gallery')}
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="font-serif text-hero text-white">
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-heading mb-6">{heroSubtitle}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.slug}
                  onClick={() => setActiveFilter(filter.slug)}
                  className={`px-6 py-2 text-sm font-sans font-medium tracking-wider uppercase transition-all ${
                    activeFilter === filter.slug
                      ? 'bg-gold text-white'
                      : 'bg-white text-charcoal hover:bg-gold/10'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square cursor-pointer overflow-hidden group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.image_url}
                    alt={image.title || (language === 'el' ? 'Φωτογραφία' : 'Photo')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[lightboxIndex]?.image_url}
              alt={filteredImages[lightboxIndex]?.title || (language === 'el' ? 'Φωτογραφία' : 'Photo')}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}