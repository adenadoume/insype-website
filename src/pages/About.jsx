import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Heart, Star, Clock, Award, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INSTITUTE, MANAGERS, INSTITUTE_IMAGES } from '../constants/insype'
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

export default function About() {
  const { data: content } = usePageContent('about')

  const heroTitle = content?.hero_title || 'Σχετικά με εμάς'
  const heroSubtitle = content?.hero_subtitle || INSTITUTE.name
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.about

  useSEO({
    title: content?.extra_content?.seo_title || 'Σχετικά',
    description: content?.extra_content?.seo_description || `Ιστορία και αποστολή του ${INSTITUTE.name}. Ιδρύθηκε το 1986 ως κέντρο ημερήσιας φροντίδας ΑΜΕΑ.`,
  })

  const historyContent = content?.section_1_text || `Το ${INSTITUTE.name} ιδρύθηκε το 1986 και αρχικά λειτούργησε ως μονάδα ειδικής αγωγής επί της οδού Μαρκορά στην Αθήνα.

Δόκιμα εκπαιδευτικά προγράμματα και σύγχρονες για την εποχή μέθοδοι, εκπαιδευμένο προσωπικό και έμπειροι επιστήμονες συνέβαλαν στην υλοποίηση των προγραμμάτων. Ομιλίες - διαλέξεις από σημαντικούς επιστήμονες, έκδοση περιοδικού, δημιουργία αναλυτικών ομάδων για τους γονείς, συνέτειναν, την πρώτη περίοδο λειτουργίας, στην επίτευξη των στόχων.

Η επιθυμία για ουσιαστικές αλλαγές, που αποτελεί προϊόν της πολύχρονης εμπειρίας μας στη θεραπευτική αντιμετώπιση, μας οδήγησε σε σοβαρές μετατροπές και προσαρμογές.

Το Φεβρουάριο του 2008 το Ινστιτούτο μεταφέρθηκε στην Οδό Τεώ 25 και Ολοφύτου στην Αθήνα (Α.Πατήσια), σ' ένα ιδιαίτερα φροντισμένο και σύγχρονο χώρο και λειτουργεί πλέον με προδιαγραφές Κέντρου Αποθεραπείας - Αποκατάστασης, στην κατηγορία Κέντρου Διημέρευσης Ημερήσιας Φροντίδας για άτομα με νοητική καθυστέρηση.`

  const missionContent = content?.section_2_title || 'Σκοπός του κέντρου είναι μέσω της θεραπευτικής εκπαίδευσης να αναπτύξει τις δεξιότητες αυτών των ατόμων και να τα εντάξει κοινωνικά.'

  const values = [
    { icon: Heart, title: 'Συμπόνια', desc: 'Κάθε άτομο αξίζει σεβαστή και αγάπη.' },
    { icon: BookOpen, title: 'Εκπαίδευση', desc: 'Εξατομικευμένα εκπαιδευτικά προγράμματα.' },
    { icon: Shield, title: 'Ασφάλεια', desc: 'Ασφαλές και υποστηρικτικό περιβάλλον.' },
    { icon: Award, title: 'Αριστεία', desc: 'Υψηλά πρότυπα θεραπευτικής φροντίδας.' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="eyebrow mb-4"
          >
            {INSTITUTE.nameEn}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-hero text-white"
          >
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-4">Ιστορία</p>
              <h2 className="font-serif text-heading mb-6">Η Πορεία μας</h2>
              {historyContent.split('\n\n').map((para, i) => (
                <p key={i} className="text-lg leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <img
                src={INSTITUTE_IMAGES.building1}
                alt="Ινστιτούτο"
                className="w-full aspect-[4/3] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">Αποστολή</p>
            <h2 className="font-serif text-heading text-white mb-8">Ο Σκοπός μας</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              {missionContent}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="eyebrow mb-4">Αξίες</p>
            <h2 className="font-serif text-heading">Οι Αξίες μας</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-8 text-center shadow-lg"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-charcoal/70">{value.desc}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-serif text-heading">Η Ηγεσία μας</h2>
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

      {/* Research */}
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
                src={INSTITUTE_IMAGES.building3}
                alt="Έρευνα"
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
              <p className="eyebrow mb-4">Έρευνα</p>
              <h2 className="font-serif text-heading mb-6">Ερευνητικό Έργο</h2>
              <p className="text-lg leading-relaxed mb-6">
                Σε συνεργασία με το Ερευνητικό και Ακαδημαϊκό Ινστιτούτο Αθηνών εργαζόμαστε στην ανάπτυξη κλιμάκων αξιολόγησης και κλιμάκων μέτρησης των αποτελεσμάτων των θεραπευτικών εφαρμογών.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Οι κλίμακες αυτές μπορούν να χρησιμοποιηθούν τόσο για την ανάπτυξη υπηρεσιών ψυχικής υγείας σε ευρύτερο πεδίο όσο και στην αξιολόγηση των θεραπευτικών μεθόδων.
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