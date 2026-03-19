import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Heart, Star, Phone, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INSTITUTE, SERVICES, MANAGERS, INSTITUTE_IMAGES } from '../constants/insype'
import { usePageContent, useTestimonials } from '../hooks/useSupabase'
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

const stats = [
  { number: '1986', label: 'Έτος Ίδρυσης' },
  { number: '38+', label: 'Χρόνια Εμπειρίας' },
  { number: '9', label: 'Θεραπευτικές Υπηρεσίες' },
  { number: '10+', label: 'Ειδικοί Επιστήμονες' },
]

const featuredServices = SERVICES.slice(0, 3)

export default function Home() {
  const { data: content } = usePageContent('home')
  const { data: testimonials } = useTestimonials()

  const heroTitle = content?.hero_title || INSTITUTE.name
  const heroSubtitle = content?.hero_subtitle || INSTITUTE.tagline
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.hero
  const introTitle = content?.section_1_title || 'Καλωσήρθατε στο Ινστιτούτο'
  const introText = content?.section_1_text || `Το ${INSTITUTE.name} ιδρύθηκε το 1986 και λειτούργει ως κέντρο ημερήσιας φροντίδας ΑΜΕΑ. Προσφέρουμε εξειδικευμένες θεραπευτικές υπηρεσίες για άτομα με νοητική καθυστέρηση, με σκοπό την ανάπτυξη των δεξιοτήτων τους και την κοινωνική τους ένταξη.`

  useSEO({
    title: content?.extra_content?.seo_title || 'Αρχική',
    description: content?.extra_content?.seo_description || `${INSTITUTE.name} - ${INSTITUTE.tagline}. Εξειδικευμένες θεραπευτικές υπηρεσίες για άτομα με ειδικές ανάγκες.`,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-navy/80" />
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <p className="eyebrow mb-6">Ιδρύθηκε το {INSTITUTE.founded}</p>
            <h1 className="font-serif text-hero md:text-display text-white mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                <span>Οι Υπηρεσίες μας</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                <span>Επικοινωνία</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-4">Σχετικά</p>
              <h2 className="font-serif text-heading mb-6">{introTitle}</h2>
              <p className="text-lg leading-relaxed mb-8">{introText}</p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                <span>Μάθετε Περισσότερα</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="relative"
            >
              <img
                src={INSTITUTE_IMAGES.building2}
                alt="Ινστιτούτο Σύγχρονης Παιδαγωγικής"
                className="w-full aspect-[4/3] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 shadow-xl">
                <p className="font-serif text-3xl font-bold">{INSTITUTE.founded}</p>
                <p className="text-sm uppercase tracking-wider">Έτος Ίδρυσης</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.number}</p>
                <p className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="eyebrow mb-4">Υπηρεσίες</p>
            <h2 className="font-serif text-heading mb-6">Οι Θεραπευτικές μας Υπηρεσίες</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Προσφέρουμε ολοκληρωμένες θεραπευτικές υπηρεσίες προσαρμοσμένες στις ανάγκες κάθε ατόμου.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  {service.icon === 'ClipboardCheck' && <BookOpen className="w-7 h-7 text-gold" />}
                  {service.icon === 'BookOpen' && <BookOpen className="w-7 h-7 text-gold" />}
                  {service.icon === 'Heart' && <Heart className="w-7 h-7 text-gold" />}
                  {service.icon === 'Hand' && <Users className="w-7 h-7 text-gold" />}
                  {service.icon === 'MessageCircle' && <Star className="w-7 h-7 text-gold" />}
                  {service.icon === 'Activity' && <Clock className="w-7 h-7 text-gold" />}
                  {!['ClipboardCheck','BookOpen','Heart','Hand','MessageCircle','Activity'].includes(service.icon) && <Star className="w-7 h-7 text-gold" />}
                </div>
                <h3 className="font-serif text-xl mb-3">{service.name}</h3>
                <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-outline-dark inline-flex items-center gap-2">
              <span>Όλες οι Υπηρεσίες</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="eyebrow mb-4">Διοίκηση</p>
            <h2 className="font-serif text-heading mb-6">Η Ηγεσία μας</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MANAGERS.map((manager, index) => (
              <motion.div
                key={manager.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-8 text-center shadow-lg"
              >
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-navy" />
                </div>
                <h3 className="font-serif text-xl mb-1">{manager.name}</h3>
                <p className="text-gold text-sm mb-3">{manager.role}</p>
                <p className="text-charcoal/60 text-sm">{manager.nameEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="section-padding bg-navy">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="eyebrow mb-4">Μαρτυρίες</p>
              <h2 className="font-serif text-heading text-white mb-6">Τι Λένε οι Οικογένειες</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className="bg-white/5 border border-white/10 p-8"
                >
                  <Star className="w-5 h-5 text-gold mb-4" />
                  <p className="text-white/80 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    {testimonial.country && <p className="text-white/50 text-sm">{testimonial.country}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="section-padding bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">Επικοινωνία</p>
            <h2 className="font-serif text-heading mb-6">Θέλετε να Μάθετε Περισσότερα;</h2>
            <p className="text-lg text-charcoal/70 mb-10 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με τις υπηρεσίες μας και πώς μπορούμε να βοηθήσουμε.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Επικοινωνήστε</span>
              </Link>
              <a href={`tel:${INSTITUTE.contact.phone}`} className="btn-outline-dark inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{INSTITUTE.contact.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}