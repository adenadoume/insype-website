import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react'
import { INSTITUTE, INSTITUTE_IMAGES } from '../constants/insype'
import { usePageContent, useContactForm } from '../hooks/useSupabase'
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

  const heroTitle = content?.hero_title || 'Επικοινωνία'
  const heroSubtitle = content?.hero_subtitle || 'Επικοινωνήστε μαζί μας'
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.contact

  useSEO({
    title: content?.extra_content?.seo_title || 'Επικοινωνία',
    description: content?.extra_content?.seo_description || 'Επικοινωνήστε με το Ινστιτούτο Σύγχρονης Παιδαγωγικής.',
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
        <div className="relative z-10 text-center px-6">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="eyebrow mb-4">
            Επικοινωνία
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="font-serif text-hero text-white">
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-heading mb-8">{heroSubtitle}</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Τηλέφωνο</h3>
                    <a href={`tel:${INSTITUTE.contact.phone}`} className="text-charcoal/70 hover:text-gold transition-colors">
                      {INSTITUTE.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Email</h3>
                    <a href={`mailto:${INSTITUTE.contact.email}`} className="text-charcoal/70 hover:text-gold transition-colors">
                      {INSTITUTE.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Διεύθυνση</h3>
                    <p className="text-charcoal/70">{INSTITUTE.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Ωράριο Λειτουργίας</h3>
                    <p className="text-charcoal/70">Δευτέρα - Παρασκευή: 08:00 - 16:00</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <iframe
                  title="Χάρτης"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.123!2d${INSTITUTE.location.coords.lng}!3d${INSTITUTE.location.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAxJzI1LjkiTiAyM8KwNDQnMzEuOSJF!5e0!3m2!1sel!2sgr!4v1`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="shadow-lg"
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
              <div className="bg-white p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-2xl mb-6">Στείλτε μας μήνυμα</h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="font-serif text-xl mb-2">Ευχαριστούμε!</h4>
                    <p className="text-charcoal/70 mb-6">Το μήνυμά σας εστάλη επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Νέο Μήνυμα
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-sans font-medium text-charcoal mb-2">Ονοματεπώνυμο *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-charcoal mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-charcoal mb-2">Τηλέφωνο</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-charcoal mb-2">Θέμα *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-charcoal mb-2">Μήνυμα *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {contactMutation.isPending ? (
                        'Αποστολή...'
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Αποστολή</span>
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