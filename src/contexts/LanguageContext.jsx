import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  el: {
    // Navigation
    home: 'Αρχική',
    about: 'Ιστορικό',
    services: 'Υπηρεσίες',
    cases: 'Περιστατικά',
    personnel: 'Προσωπικό',
    gallery: 'Φωτογραφίες',
    contact: 'Επικοινωνία',
    
    // Common
    learnMore: 'Μάθετε Περισσότερα',
    contactUs: 'Επικοινωνήστε',
    allServices: 'Όλες οι Υπηρεσίες',
    founded: 'Ιδρύθηκε το',
    yearFounded: 'Έτος Ίδρυσης',
    
    // Home
    welcomeTitle: 'Καλωσήρθατε στο Ινστιτούτο',
    welcomeText: 'Το Ινστιτούτο Σύγχρονης Παιδαγωγικής ιδρύθηκε το 1986 και λειτούργει ως κέντρο ημερήσιας φροντίδας ΑΜΕΑ. Προσφέρουμε εξειδικευμένες θεραπευτικές υπηρεσίες για άτομα με νοητική καθυστέρηση, με σκοπό την ανάπτυξη των δεξιοτήτων τους και την κοινωνική τους ένταξη.',
    therapeuticServices: 'Οι Θεραπευτικές μας Υπηρεσίες',
    servicesDescription: 'Προσφέρουμε ολοκληρωμένες θεραπευτικές υπηρεσίες προσαρμοσμένες στις ανάγκες κάθε ατόμου.',
    leadership: 'Η Ηγεσία μας',
    testimonialsTitle: 'Τι Λένε οι Οικογένειες',
    wantToLearnMore: 'Θέλετε να Μάθετε Περισσότερα;',
    contactDescription: 'Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με τις υπηρεσίες μας και πώς μπορούμε να βοηθήσουμε.',
    
    // About
    aboutTitle: 'Σχετικά με εμάς',
    history: 'Ιστορία',
    historyTitle: 'Η Πορεία μας',
    mission: 'Αποστολή',
    missionTitle: 'Ο Σκοπός μας',
    missionText: 'Σκοπός του κέντρου είναι μέσω της θεραπευτικής εκπαίδευσης να αναπτύξει τις δεξιότητες αυτών των ατόμων και να τα εντάξει κοινωνικά.',
    values: 'Αξίες',
    valuesTitle: 'Οι Αξίες μας',
    research: 'Έρευνα',
    researchTitle: 'Ερευνητικό Έργο',
    researchText1: 'Σε συνεργασία με το Ερευνητικό και Ακαδημαϊκό Ινστιτούτο Αθηνών εργαζόμαστε στην ανάπτυξη κλιμάκων αξιολόγησης και κλιμάκων μέτρησης των αποτελεσμάτων των θεραπευτικών εφαρμογών οι οποίες μπορούν εν συνεχεία να χρησιμοποιηθούν τόσο για την ανάπτυξη υπηρεσιών ψυχικής υγείας σε ευρύτερο πεδίο αλλά πολύ περισσότερο στην αξιολόγηση των θεραπευτικών τους μεθόδων.',
    researchText2: '',
    studentEducation: 'Εκπαίδευση φοιτητών',
    studentEducationText: 'Στο πλαίσιο εκπαίδευσης (πρακτικής) φοιτητών ή πτυχιούχων συναφών σπουδών, το Ινστιτούτο έχει δεχθεί άτομα από το πανεπιστήμιο Fontys (Ολλανδία), Πανεπιστήμιο Κρήτης κ.α.',
    therapeuticEducationNote: 'Η θεραπευτική εκπαίδευση παρέχεται ατομικά και σε μικρές ομάδες.',
    specialPedagogy: 'Ειδική διαπαιδαγώγηση',
    specialPedagogyDesc: 'Εξειδικευμένη εκπαίδευση προσαρμοσμένη στις ανάγκες κάθε ατόμου.',
    occupationalTherapy: 'Εργοθεραπεία',
    occupationalTherapyDesc: 'Υποστήριξη για δεξιότητες καθημερινής ζωής και αισθητηριακή ενσωμάτωση.',
    speechTherapy: 'Λογοθεραπεία',
    speechTherapyDesc: 'Εξειδικευμένες υπηρεσίες λογοθεραπείας για όλες τις ηλικίες.',
    psychotherapy: 'Ψυχοθεραπεία',
    psychotherapyDesc: 'Ατομική και ομαδική ψυχοθεραπεία για συναισθηματική υποστήριξη.',
    physiotherapy: 'Φυσικοθεραπεία',
    physiotherapyDesc: 'Φυσικοθεραπευτική αγωγή για τη βελτίωση της κινητικότητας.',
    parentCounseling: 'Συμβουλευτική γονέων',
    parentCounselingDesc: 'Συμβουλευτική και υποστήριξη γονέων και οικογένειας.',
    dailyMedicalSupervision: 'Καθημερινή ιατρική παρακολούθηση',
    dailyMedicalSupervisionDesc: 'Ημερήσια ψυχιατρική και ιατρική παρακολούθηση.',
    news: 'Ανακοινώσεις/Νέα',
    newsExample: 'Ομιλία: Τ. Ζαχαριάδης Παρασκευή 27/3/09 8μ.μ. Θέμα: "Γονείς παιδιών με ιδιαιτερότητες. Η ματαίωση Ενός ρόλου."',
    areaMap: 'Χάρτης περιοχής',
    viewLargerMap: 'Προβολή μεγαλύτερου χάρτη',
    howToFindUs: 'Πως θα μας βρείτε',
    
    // Page Titles
    servicesTitle: 'Υπηρεσίες',
    servicesSubtitle: 'Οι Θεραπευτικές μας Υπηρεσίες',
    servicesIntro: 'Προσφέρουμε ολοκληρωμένες θεραπευτικές υπηρεσίες προσαρμοσμένες στις ανάγκες κάθε ατόμου.',
    casesTitle: 'Περιστατικά',
    casesSubtitle: 'Τα Περιστατικά που Δεχόμαστε',
    casesIntro: 'Δεχόμαστε περιστατικά με νευροαναπτυξιακές διαταραχές, σύνδρομα και αναπηρίες:',
    personnelTitle: 'Προσωπικό',
    personnelSubtitle: 'Το Εξειδικευμένο Προσωπικό μας',
    personnelIntro: 'Το Ινστιτούτο διαθέτει εξειδικευμένο προσωπικό από διάφορους επιστημονικούς κλάδους.',
    galleryTitle: 'Φωτογραφίες',
    gallerySubtitle: 'Οι Χώροι μας',
    contactTitle: 'Επικοινωνία',
    contactSubtitle: 'Επικοινωνήστε μαζί μας',
    
    // Personnel Roles
    psychiatrist: 'Ψυχίατρος',
    childPsychologist: 'Παιδοψυχολόγος',
    familyTherapist: 'Οικογενειακός Θεραπευτής',
    psychologist: 'Ψυχολόγος',
    speechTherapist: 'Λογοθεραπευτής',
    physiotherapist: 'Φυσικοθεραπευτής',
    specialPedagogue: 'Ειδικός Παιδαγωγός',
    occupationalTherapist: 'Εργοθεραπευτής',
    
    // Services
    diagnostic: 'Διαγνωστική Αξιολόγηση',
    diagnosticDesc: 'Ολοκληρωμένη αξιολόγηση μαθησιακών δυσκολιών και αναπτυξιακών θεμάτων.',
    specialEducation: 'Ειδική Αγωγή',
    specialEducationDesc: 'Εξατομικευμένα εκπαιδευτικά προγράμματα προσαρμοσμένα στις ανάγκες κάθε ατόμου.',
    speechTherapyService: 'Λογοθεραπεία',
    speechTherapyServiceDesc: 'Εξειδικευμένες υπηρεσίες λογοθεραπείας για όλες τις ηλικίες.',
    physiotherapyService: 'Φυσικοθεραπεία',
    physiotherapyServiceDesc: 'Φυσικοθεραπευτική αγωγή για τη βελτίωση της κινητικότητας.',
    psychotherapyService: 'Ψυχοθεραπεία',
    psychotherapyServiceDesc: 'Ατομική και ομαδική ψυχοθεραπεία για συναισθηματική υποστήριξη.',
    parentCounselingService: 'Συμβουλευτική Γονέων',
    parentCounselingServiceDesc: 'Συμβουλευτική και υποστήριξη γονέων / οικογενειακή θεραπεία.',
    crisisIntervention: 'Επέμβαση Κρίσης',
    crisisInterventionDesc: 'Άμεση υποστήριξη σε περιόδους κρίσης.',
    medicalSupervision: 'Ιατρική Παρακολούθηση',
    medicalSupervisionDesc: 'Καθημερινή ψυχιατρική/ιατρική παρακολούθηση.',
    
    // Cases
    autism: 'Αυτισμός',
    autismDesc: 'Αυτιστική διαταραχή και συναφείς καταστάσεις.',
    downSyndrome: 'Σύνδρομο Down',
    downSyndromeDesc: 'Υποστήριξη για άτομα με σύνδρομο Down.',
    mentalRetardation: 'Νοητική Καθυστέρηση',
    mentalRetardationDesc: 'Θεραπευτική αγωγή για άτομα με νοητική καθυστέρηση.',
    asperger: 'Σύνδρομο Asperger',
    aspergerDesc: 'Εξειδικευμένη υποστήριξη για άτομα με σύνδρομο Asperger.',
    behavioralDisorders: 'Συμπεριφορικές Διαταραχές',
    behavioralDisordersDesc: 'Συμπεριφορικές και συναισθηματικές διαταραχές παιδικής ηλικίας.',
    adhd: 'ΔΕΠ-Υ',
    adhdDesc: 'Διαταραχή Ελλειμματικής Προσοχής - Υπερκινητικότητα.',
    
    // Contact
    phone: 'Τηλέφωνο',
    email: 'Email',
    address: 'Διεύθυνση',
    workingHours: 'Ωράριο Λειτουργίας',
    workingHoursText: 'Δευτέρα - Παρασκευή: 08:00 - 16:00',
    sendMessage: 'Στείλτε μας μήνυμα',
    fullName: 'Ονοματεπώνυμο',
    subject: 'Θέμα',
    message: 'Μήνυμα',
    sending: 'Αποστολή...',
    thankYou: 'Ευχαριστούμε!',
    messageSent: 'Το μήνυμά σας εστάλη επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.',
    newMessage: 'Νέο Μήνυμα',
    
    // Footer
    quickLinks: 'Γρήγοροι Σύνδεσμοι',
    followUs: 'Ακολουθήστε μας',
    copyright: 'Με επιφύλαξη παντός δικαιώματος.',
    privacyPolicy: 'Πολιτική Απορρήτου',
    termsOfUse: 'Όροι Χρήσης',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'Background',
    services: 'Offered Services',
    cases: 'Cases',
    personnel: 'Personnel',
    gallery: 'Photo gallery',
    contact: 'Contact',
    
    // Common
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    allServices: 'All Services',
    founded: 'Founded in',
    yearFounded: 'Year Founded',
    
    // Home
    welcomeTitle: 'Welcome to the Institute',
    welcomeText: 'The Institute of Modern Education was founded in 1986 and operates as a medical day care center for people with special needs. We provide specialized therapeutic services for individuals with mental disabilities, aiming to develop their skills and social integration.',
    therapeuticServices: 'Our Therapeutic Services',
    servicesDescription: 'We provide comprehensive therapeutic services tailored to the needs of each individual.',
    leadership: 'Our Leadership',
    testimonialsTitle: 'What Families Say',
    wantToLearnMore: 'Want to Learn More?',
    contactDescription: 'Contact us for more information about our services and how we can help.',
    
    // About
    aboutTitle: 'About Us',
    history: 'History',
    historyTitle: 'Our Journey',
    mission: 'Mission',
    missionTitle: 'Our Purpose',
    missionText: 'The purpose of the center is through therapeutic education to develop the skills of these individuals and integrate them socially.',
    values: 'Values',
    valuesTitle: 'Our Values',
    research: 'Research',
    researchTitle: 'Research Work',
    researchText1: 'In collaboration with the Research and Academic Institute of Athens, we work on developing evaluation scales and measurement scales for the results of therapeutic applications which can subsequently be used both for the development of mental health services in a broader field but more importantly for the evaluation of their therapeutic methods.',
    researchText2: '',
    studentEducation: 'Student Education',
    studentEducationText: 'In the framework of education (internship) of students or graduates of related studies, the Institute has accepted individuals from Fontys University (Netherlands), University of Crete, etc.',
    therapeuticEducationNote: 'Therapeutic education is provided individually and in small groups.',
    specialPedagogy: 'Special Pedagogy',
    specialPedagogyDesc: 'Specialized education tailored to the needs of each individual.',
    occupationalTherapy: 'Occupational Therapy',
    occupationalTherapyDesc: 'Support for daily living skills and sensory integration.',
    speechTherapy: 'Speech Therapy',
    speechTherapyDesc: 'Specialized speech and language therapy services for all ages.',
    psychotherapy: 'Psychotherapy',
    psychotherapyDesc: 'Individual and group psychotherapy for emotional support.',
    physiotherapy: 'Physiotherapy',
    physiotherapyDesc: 'Physiotherapy to improve mobility and physical function.',
    parentCounseling: 'Parent Counseling',
    parentCounselingDesc: 'Parent guidance and support / family therapy.',
    dailyMedicalSupervision: 'Daily Medical Supervision',
    dailyMedicalSupervisionDesc: 'Daily psychiatric and medical supervision.',
    news: 'News',
    newsExample: 'Speech: T. Zaxariadis Friday 27/3/09 8p.m. Subject: "Children\'s Parents with Special Needs."',
    areaMap: 'Area map',
    viewLargerMap: 'View Larger Map',
    howToFindUs: 'Address',
    
    // Page Titles
    servicesTitle: 'Services',
    servicesSubtitle: 'Our Therapeutic Services',
    servicesIntro: 'We provide comprehensive therapeutic services tailored to the needs of each individual.',
    casesTitle: 'Cases',
    casesSubtitle: 'Cases We Accept',
    casesIntro: 'We accept cases with neurodevelopmental disorders, syndromes and disabilities:',
    personnelTitle: 'Personnel',
    personnelSubtitle: 'Our Specialized Personnel',
    personnelIntro: 'The Institute has specialized personnel from various scientific fields.',
    galleryTitle: 'Photos',
    gallerySubtitle: 'Our Spaces',
    contactTitle: 'Contact',
    contactSubtitle: 'Contact Us',
    
    // Personnel Roles
    psychiatrist: 'Psychiatrist',
    childPsychologist: 'Child Psychologist',
    familyTherapist: 'Family Therapist',
    psychologist: 'Psychologist',
    speechTherapist: 'Speech Therapist',
    physiotherapist: 'Physiotherapist',
    specialPedagogue: 'Special Pedagogue',
    occupationalTherapist: 'Occupational Therapist',
    
    // Services
    diagnostic: 'Diagnostic Evaluation',
    diagnosticDesc: 'Comprehensive evaluation of learning difficulties and developmental issues.',
    specialEducation: 'Special Education',
    specialEducationDesc: 'Individualized educational programs tailored to each person\'s needs.',
    speechTherapyService: 'Speech Therapy',
    speechTherapyServiceDesc: 'Specialized speech and language therapy services for all ages.',
    physiotherapyService: 'Physiotherapy',
    physiotherapyServiceDesc: 'Physiotherapy to improve mobility and physical function.',
    psychotherapyService: 'Psychotherapy',
    psychotherapyServiceDesc: 'Individual and group psychotherapy for emotional support.',
    parentCounselingService: 'Parent Counseling',
    parentCounselingServiceDesc: 'Parent guidance and support / family therapy.',
    crisisIntervention: 'Crisis Intervention',
    crisisInterventionDesc: 'Immediate support during crisis periods.',
    medicalSupervision: 'Medical Supervision',
    medicalSupervisionDesc: 'Daily psychiatric/medical supervision.',
    
    // Cases
    autism: 'Autism',
    autismDesc: 'Autistic disorder and related conditions.',
    downSyndrome: 'Down Syndrome',
    downSyndromeDesc: 'Support for individuals with Down Syndrome.',
    mentalRetardation: 'Mental Retardation',
    mentalRetardationDesc: 'Therapeutic treatment for individuals with mental retardation.',
    asperger: 'Asperger Syndrome',
    aspergerDesc: 'Specialized support for individuals with Asperger Syndrome.',
    behavioralDisorders: 'Behavioral Disorders',
    behavioralDisordersDesc: 'Behavioral and emotional disorders of childhood and adolescence.',
    adhd: 'ADHD',
    adhdDesc: 'Attention Deficit Hyperactivity Disorder.',
    
    // Contact
    phone: 'Phone Nr.',
    email: 'e-mail',
    address: 'Address',
    workingHours: 'Working Hours',
    workingHoursText: 'Monday - Friday: 08:00 - 16:00',
    sendMessage: 'Send us a message',
    fullName: 'Full Name',
    subject: 'Subject',
    message: 'Message',
    sending: 'Sending...',
    thankYou: 'Thank you!',
    messageSent: 'Your message has been sent successfully. We will contact you soon.',
    newMessage: 'New Message',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'el'
    }
    return 'el'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    return translations[language][key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'el' ? 'en' : 'el')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}