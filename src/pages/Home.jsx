import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Heart, Star, Phone, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INSTITUTE, SERVICES, MANAGERS, INSTITUTE_IMAGES } from '../constants/insype'
import { usePageContent, useTestimonials } from '../hooks/useSupabase'
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

export default function Home() {
  const { data: content } = usePageContent('home')
  const { data: testimonials } = useTestimonials()
  const { t, language } = useLanguage()

  const heroTitle = content?.hero_title || (language === 'el' ? INSTITUTE.name : 'Institute of Modern Pedagogy')
  const heroSubtitle = content?.hero_subtitle || (language === 'el' ? INSTITUTE.tagline : 'Medical Day Care Center for People with Special Needs')
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.hero
  const introTitle = content?.section_1_title || t('welcomeTitle')
  const introText = content?.section_1_text || t('welcomeText')

  const stats = [
    { number: '1986', label: t('yearFounded') },
    { number: '38+', label: language === 'el' ? 'Χρόνια Εμπειρίας' : 'Years of Experience' },
    { number: '9', label: language === 'el' ? 'Θεραπευτικές Υπηρεσίες' : 'Therapeutic Services' },
    { number: '10+', label: language === 'el' ? 'Ειδικοί Επιστήμονες' : 'Specialist Scientists' },
  ]

  const featuredServices = SERVICES.slice(0, 3)

  useSEO({
    title: content?.extra_content?.seo_title || (language === 'el' ? 'Αρχική' : 'Home'),
    description: content?.extra_content?.seo_description || `${INSTITUTE.name} - ${INSTITUTE.tagline}. ${language === 'el' ? 'Εξειδικευμένες θεραπευτικές υπηρεσίες για άτομα με ειδικές ανάγκες.' : 'Specialized therapeutic services for people with special needs.'}`,
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

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <p className="eyebrow mb-4 sm:mb-6">{t('founded')} {INSTITUTE.founded}</p>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-hero lg:text-display text-white mb-3 sm:mb-4 md:mb-6">
              {heroTitle}
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-10">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/services" className="btn-primary inline-flex items-center justify-center gap-2">
                <span>{t('allServices')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center justify-center gap-2">
                <span>{t('contactUs')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-3 sm:mb-4">{language === 'el' ? 'Σχετικά' : 'About'}</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{introTitle}</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{introText}</p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                <span>{t('learnMore')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gold text-white p-4 sm:p-6 shadow-xl">
                <p className="font-serif text-2xl sm:text-3xl font-bold">{INSTITUTE.founded}</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider">{t('yearFounded')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
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
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold mb-2">{stat.number}</p>
                <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
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
            className="text-center mb-10 sm:mb-16"
          >
            <p className="eyebrow mb-3 sm:mb-4">{language === 'el' ? 'Υπηρεσίες' : 'Services'}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{t('therapeuticServices')}</h2>
            <p className="text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t('servicesDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold/20 transition-colors">
                  {service.icon === 'ClipboardCheck' && <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />}
                  {service.icon === 'BookOpen' && <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />}
                  {service.icon === 'Heart' && <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />}
                  {service.icon === 'Hand' && <Users className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />}
                  {service.icon === 'MessageCircle' && <Star className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />}
                  {service.icon === 'Activity' && <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />}
                  {!['ClipboardCheck','BookOpen','Heart','Hand','MessageCircle','Activity'].includes(service.icon) && <Star className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />}
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 sm:mb-3">{language === 'el' ? service.name : service.nameEn}</h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">{language === 'el' ? service.description : service.descriptionEn}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link to="/services" className="btn-outline-dark inline-flex items-center gap-2">
              <span>{t('allServices')}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Research */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-3 sm:mb-4">{t('research')}</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{t('researchTitle')}</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {t('researchText1')}
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {t('studentEducationText')}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <img
                src={INSTITUTE_IMAGES.building3}
                alt={language === 'el' ? 'Έρευνα' : 'Research'}
                className="w-full aspect-[4/3] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="eyebrow mb-3 sm:mb-4">{language === 'el' ? 'Διοίκηση' : 'Management'}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{t('leadership')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {MANAGERS.map((manager, index) => (
              <motion.div
                key={manager.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-6 sm:p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-navy" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-1">{manager.name}</h3>
                <p className="text-gold text-xs sm:text-sm mb-2 sm:mb-3">{language === 'el' ? manager.role : manager.roleEn}</p>
                <p className="text-charcoal/60 text-xs sm:text-sm">{manager.nameEn}</p>
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
              className="text-center mb-10 sm:mb-16"
            >
              <p className="eyebrow mb-3 sm:mb-4">{language === 'el' ? 'Μαρτυρίες' : 'Testimonials'}</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading text-white mb-4 sm:mb-6">{t('testimonialsTitle')}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className="bg-white/5 border border-white/10 p-6 sm:p-8"
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold mb-3 sm:mb-4" />
                  <p className="text-white/80 italic leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">{testimonial.name}</p>
                    {testimonial.country && <p className="text-white/50 text-xs sm:text-sm">{testimonial.country}</p>}
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
            <p className="eyebrow mb-3 sm:mb-4">{language === 'el' ? 'Επικοινωνία' : 'Contact'}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{t('wantToLearnMore')}</h2>
            <p className="text-base sm:text-lg text-charcoal/70 mb-8 sm:mb-10 max-w-2xl mx-auto">
              {t('contactDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t('contactUs')}</span>
              </Link>
              <a href={`tel:${INSTITUTE.contact.phone}`} className="btn-outline-dark inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{INSTITUTE.contact.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}