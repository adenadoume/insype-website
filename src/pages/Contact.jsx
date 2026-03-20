import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react'
import { INSTITUTE, INSTITUTE_IMAGES } from '../constants/insype'
import { usePageContent, useContactForm } from '../hooks/useSupabase'
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const { data: content } = usePageContent('contact')
  const contactMutation = useContactForm()
  const { t, language } = useLanguage()

  const heroTitle = content?.hero_title || t('contactTitle')
  const heroSubtitle = content?.hero_subtitle || t('contactSubtitle')
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.contact

  useSEO({
    title: content?.extra_content?.seo_title || t('contactTitle'),
    description: content?.extra_content?.seo_description || (language === 'el' ? 'Επικοινωνήστε με το Ινστιτούτο Σύγχρονης Παιδαγωγικής.' : 'Contact the Institute of Modern Pedagogy.'),
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await contactMutation.mutateAsync(formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
    }
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
        <div className="relative z-10 text-center px-4 sm:px-6">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="eyebrow mb-3 sm:mb-4">
            {t('contact')}
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="font-serif text-3xl sm:text-hero text-white">
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-6 sm:mb-8">{heroSubtitle}</h2>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg mb-1">{t('phone')}</h3>
                    <a href={`tel:${INSTITUTE.contact.phone}`} className="text-sm sm:text-base text-charcoal/70 hover:text-gold transition-colors">
                      {INSTITUTE.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg mb-1">{t('email')}</h3>
                    <a href={`mailto:${INSTITUTE.contact.email}`} className="text-sm sm:text-base text-charcoal/70 hover:text-gold transition-colors">
                      {INSTITUTE.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg mb-1">{t('address')}</h3>
                    <p className="text-sm sm:text-base text-charcoal/70">{INSTITUTE.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg mb-1">{t('workingHours')}</h3>
                    <p className="text-sm sm:text-base text-charcoal/70">{t('workingHoursText')}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 sm:mt-10">
                <iframe
                  title={t('areaMap')}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.123!2d${INSTITUTE.location.coords.lng}!3d${INSTITUTE.location.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAxJzI1LjkiTiAyM8KwNDQnMzEuOSJF!5e0!3m2!1sel!2sgr!4v1`}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="shadow-lg sm:h-[300px]"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">{t('sendMessage')}</h3>

                {submitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                    <h4 className="font-serif text-lg sm:text-xl mb-2">{t('thankYou')}</h4>
                    <p className="text-sm sm:text-base text-charcoal/70 mb-4 sm:mb-6">{t('messageSent')}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary text-xs sm:text-sm"
                    >
                      {t('newMessage')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-medium text-charcoal mb-2">{t('fullName')} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-medium text-charcoal mb-2">{t('email')} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-medium text-charcoal mb-2">{t('phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-medium text-charcoal mb-2">{t('subject')} *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-medium text-charcoal mb-2">{t('message')} *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-charcoal/20 focus:border-gold focus:outline-none transition-colors resize-none sm:rows-5"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="btn-primary w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-50"
                    >
                      {contactMutation.isPending ? (
                        t('sending')
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>{t('sendMessage')}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}