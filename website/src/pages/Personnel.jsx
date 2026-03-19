import { motion } from 'framer-motion'
import { ArrowRight, Stethoscope, Brain, Users, Heart, MessageCircle, Activity, GraduationCap, Hand, Shield, Cross } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PERSONNEL, INSTITUTE_IMAGES } from '../constants/insype'
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
  Stethoscope: <Stethoscope className="w-8 h-8 text-gold" />,
  Brain: <Brain className="w-8 h-8 text-gold" />,
  Users: <Users className="w-8 h-8 text-gold" />,
  Heart: <Heart className="w-8 h-8 text-gold" />,
  MessageCircle: <MessageCircle className="w-8 h-8 text-gold" />,
  Activity: <Activity className="w-8 h-8 text-gold" />,
  GraduationCap: <GraduationCap className="w-8 h-8 text-gold" />,
  Hand: <Hand className="w-8 h-8 text-gold" />,
  Shield: <Shield className="w-8 h-8 text-gold" />,
  Cross: <Cross className="w-8 h-8 text-gold" />,
}

export default function Personnel() {
  const { data: content } = usePageContent('personnel')

  const heroTitle = content?.hero_title || 'Προσωπικό'
  const heroSubtitle = content?.hero_subtitle || 'Το Εξειδικευμένο Προσωπικό μας'
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.building6

  useSEO({
    title: content?.extra_content?.seo_title || 'Προσωπικό',
    description: content?.extra_content?.seo_description || 'Το εξειδικευμένο προσωπικό του Ινστιτούτου Σύγχρονης Παιδαγωγικής.',
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
            Προσωπικό
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="font-serif text-hero text-white">
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Personnel Grid */}
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
              Το Ινστιτούτο διαθέτει εξειδικευμένο προσωπικό από διάφορους επιστημονικούς κλάδους.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONNEL.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  {iconMap[member.icon] || <Users className="w-8 h-8 text-gold" />}
                </div>
                <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                <p className="text-sm text-gold">{member.nameEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={INSTITUTE_IMAGES.building7}
                alt="Προσωπικό"
                className="w-full aspect-[4/3] object-cover shadow-2xl"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <p className="eyebrow mb-4">Εκπαίδευση</p>
              <h2 className="font-serif text-heading mb-6">Συνεχής Εκπαίδευση</h2>
              <p className="text-lg leading-relaxed mb-6">
                Το προσωπικό μας συμμετέχει σε συνεχείς εκπαιδευτικές δραστηριότητες και συνέδρια για την παρακολούθηση των νεότερων εξελίξεων στον τομέα της ειδικής αγωγής.
              </p>
              <p className="text-lg leading-relaxed">
                Συνεργαζόμαστε με πανεπιστήμια και ερευνητικά ιδρύματα για την ανάπτυξη νέων θεραπευτικών μεθόδων.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-heading mb-6">Θέλετε να Μάθετε Περισσότερα;</h2>
            <p className="text-lg text-charcoal/70 mb-10">
              Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.
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