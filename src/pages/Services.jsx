import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Hand, MessageCircle, Activity, Heart, Users, AlertCircle, Stethoscope, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICES, INSTITUTE_IMAGES } from '../constants/insype'
import { usePageContent } from '../hooks/useSupabase'
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

const iconMap = {
  ClipboardCheck: <ClipboardCheck className="w-8 h-8 text-gold" />,
  BookOpen: <BookOpen className="w-8 h-8 text-gold" />,
  Hand: <Hand className="w-8 h-8 text-gold" />,
  MessageCircle: <MessageCircle className="w-8 h-8 text-gold" />,
  Activity: <Activity className="w-8 h-8 text-gold" />,
  Heart: <Heart className="w-8 h-8 text-gold" />,
  Users: <Users className="w-8 h-8 text-gold" />,
  AlertCircle: <AlertCircle className="w-8 h-8 text-gold" />,
  Stethoscope: <Stethoscope className="w-8 h-8 text-gold" />,
}

export default function Services() {
  const { data: content } = usePageContent('services')

  const heroTitle = content?.hero_title || 'Υπηρεσίες'
  const heroSubtitle = content?.hero_subtitle || 'Οι Θεραπευτικές μας Υπηρεσίες'
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.services

  useSEO({
    title: content?.extra_content?.seo_title || 'Υπηρεσίες',
    description: content?.extra_content?.seo_description || 'Ολοκληρωμένες θεραπευτικές υπηρεσίες για άτομα με ειδικές ανάγκες.',
  })

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
            Θεραπευτικές Υπηρεσίες
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="font-serif text-hero text-white">
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-heading mb-6">{heroSubtitle}</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Προσφέρουμε ολοκληρωμένες θεραπευτικές υπηρεσίες προσαρμοσμένες στις ανάγκες κάθε ατόμου.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  {iconMap[service.icon] || <BookOpen className="w-8 h-8 text-gold" />}
                </div>
                <h3 className="font-serif text-xl mb-3">{service.name}</h3>
                <p className="text-sm text-gold mb-3">{service.nameEn}</p>
                <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-heading text-white mb-6">Θέλετε Περισσότερες Πληροφορίες;</h2>
            <p className="text-lg text-white/70 mb-10">
              Επικοινωνήστε μαζί μας για να μάθετε περισσότερα για τις υπηρεσίες μας.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>Επικοινωνία</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}