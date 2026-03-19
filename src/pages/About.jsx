import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Heart, Star, Clock, Award, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INSTITUTE, MANAGERS, INSTITUTE_IMAGES } from '../constants/insype'
import { usePageContent } from '../hooks/useSupabase'
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

export default function About() {
  const { data: content } = usePageContent('about')
  const { t, language } = useLanguage()

  const heroTitle = content?.hero_title || (language === 'el' ? 'Σχετικά με εμάς' : 'About Us')
  const heroSubtitle = content?.hero_subtitle || (language === 'el' ? INSTITUTE.name : 'Institute of Modern Pedagogy')
  const heroImage = content?.hero_image_url || INSTITUTE_IMAGES.about

  useSEO({
    title: content?.extra_content?.seo_title || t('about'),
    description: content?.extra_content?.seo_description || (language === 'el' ? `Ιστορία και αποστολή του ${INSTITUTE.name}. Ιδρύθηκε το 1986 ως κέντρο ημερήσιας φροντίδας ΑΜΕΑ.` : `History and mission of ${INSTITUTE.name}. Founded in 1986 as a day care center for people with special needs.`),
  })

  const historyContent = content?.section_1_text || (language === 'el' 
    ? `Το ${INSTITUTE.name} ιδρύθηκε το 1986 και αρχικά λειτούργησε ως μονάδα ειδικής αγωγής επί της οδού Μαρκορά στην Αθήνα.

Δόκιμα εκπαιδευτικά προγράμματα και σύγχρονες για την εποχή μέθοδοι, εκπαιδευμένο προσωπικό και έμπειροι επιστήμονες συνέβαλαν στην υλοποίηση των προγραμμάτων. Ομιλίες - διαλέξεις από σημαντικούς επιστήμονες, έκδοση περιοδικού, δημιουργία αναλυτικών ομάδων για τους γονείς, συνέτειναν, την πρώτη περίοδο λειτουργίας, στην επίτευξη των στόχων.

Η επιθυμία για ουσιαστικές αλλαγές, που αποτελεί προϊόν της πολύχρονης εμπειρίας μας στη θεραπευτική αντιμετώπιση, μας οδήγησε σε σοβαρές μετατροπές και προσαρμογές.

Το Φεβρουάριο του 2008 το Ινστιτούτο μεταφέρθηκε στην Οδό Τεώ 25 και Ολοφύτου στην Αθήνα (Α.Πατήσια), σ' ένα ιδιαίτερα φροντισμένο και σύγχρονο χώρο και λειτουργεί πλέον με προδιαγραφές Κέντρου Αποθεραπείας - Αποκατάστασης, στην κατηγορία Κέντρου Διημέρευσης Ημερήσιας Φροντίδας για άτομα με νοητική καθυστέρηση.`
    : `The ${INSTITUTE.name} was founded in 1986 and initially operated as a special education unit on Markora Street in Athens.

Experimental educational programs and modern methods for the time, trained personnel and experienced scientists contributed to the implementation of the programs. Lectures by important scientists, publication of a magazine, creation of analytical groups for parents, contributed, during the first period of operation, to achieving the goals.

The desire for substantial changes, which is a product of our long experience in therapeutic treatment, led us to serious transformations and adaptations.

In February 2008, the Institute was moved to 25 Teo Street and Olofytou in Athens (A. Patissia), in a particularly cared for and modern space and now operates with specifications of a Rehabilitation Center, in the category of Day Care Center for people with mental disabilities.`)

  const missionContent = content?.section_2_title || t('missionText')

  const values = [
    { icon: Heart, title: language === 'el' ? 'Συμπόνια' : 'Compassion', desc: language === 'el' ? 'Κάθε άτομο αξίζει σεβαστή και αγάπη.' : 'Every individual deserves respect and love.' },
    { icon: BookOpen, title: language === 'el' ? 'Εκπαίδευση' : 'Education', desc: language === 'el' ? 'Εξατομικευμένα εκπαιδευτικά προγράμματα.' : 'Individualized educational programs.' },
    { icon: Shield, title: language === 'el' ? 'Ασφάλεια' : 'Safety', desc: language === 'el' ? 'Ασφαλές και υποστηρικτικό περιβάλλον.' : 'Safe and supportive environment.' },
    { icon: Award, title: language === 'el' ? 'Αριστεία' : 'Excellence', desc: language === 'el' ? 'Υψηλά πρότυπα θεραπευτικής φροντίδας.' : 'High standards of therapeutic care.' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
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
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="eyebrow mb-3 sm:mb-4"
          >
            {INSTITUTE.nameEn}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-3xl sm:text-hero text-white"
          >
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-3 sm:mb-4">{t('history')}</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{t('historyTitle')}</h2>
              {historyContent.split('\n\n').map((para, i) => (
                <p key={i} className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{para}</p>
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
            <p className="eyebrow mb-3 sm:mb-4">{t('mission')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading text-white mb-6 sm:mb-8">{t('missionTitle')}</h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
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
            className="text-center mb-10 sm:mb-16"
          >
            <p className="eyebrow mb-3 sm:mb-4">{t('values')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading">{t('valuesTitle')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-6 sm:p-8 text-center shadow-lg"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-charcoal/70">{value.desc}</p>
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
            className="text-center mb-10 sm:mb-16"
          >
            <p className="eyebrow mb-3 sm:mb-4">{language === 'el' ? 'Διοίκηση' : 'Management'}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading">{t('leadership')}</h2>
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

      {/* Research */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
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
              <p className="eyebrow mb-3 sm:mb-4">{t('research')}</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{t('researchTitle')}</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {t('researchText1')}
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {t('researchText2')}
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
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-heading mb-4 sm:mb-6">{t('wantToLearnMore')}</h2>
            <p className="text-base sm:text-lg text-charcoal/70 mb-8 sm:mb-10">
              {t('contactDescription')}
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>{t('contactUs')}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}