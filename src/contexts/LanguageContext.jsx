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
    researchText1: 'Σε συνεργασία με το Ερευνητικό και Ακαδημαϊκό Ινστιτούτο Αθηνών εργαζόμαστε στην ανάπτυξη κλιμάκων αξιολόγησης και κλιμάκων μέτρησης των αποτελεσμάτων των θεραπευτικών εφαρμογών.',
    researchText2: 'Το ερευνητικό μας έργο επικεντρώνεται στην ανάπτυξη καινοτόμων θεραπευτικών προσεγγίσεων για άτομα με νευροαναπτυξιακές διαταραχές.',
    studentEducation: 'Εκπαίδευση Φοιτητών',
    studentEducationText: 'Στο πλαίσιο εκπαίδευσης (πρακτικής) φοιτητών, το Ινστιτούτο έχει δεχθεί άτομα από πανεπιστήμια.',
    therapeuticEducationNote: 'Η θεραπευτική εκπαίδευση παρέχεται ατομικά και σε μικρές ομάδες.',
    
    // Page Titles
    servicesTitle: 'Υπηρεσίες',
    servicesSubtitle: 'Οι Θεραπευτικές μας Υπηρεσίες',
    casesTitle: 'Περιστατικά',
    casesSubtitle: 'Τα Περιστατικά που Δεχόμαστε',
    personnelTitle: 'Προσωπικό',
    personnelSubtitle: 'Το Εξειδικευμένο Προσωπικό μας',
    galleryTitle: 'Φωτογραφίες',
    gallerySubtitle: 'Οι Χώροι μας',
    contactTitle: 'Επικοινωνία',
    contactSubtitle: 'Επικοινωνήστε μαζί μας',
    
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
    messageSent: 'Το μήνυμά σας εστάλη επιτυχώς.',
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
    welcomeText: 'The Institute of Modern Education was founded in 1986 and operates as a medical day care center for people with special needs.',
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
    researchText1: 'In collaboration with the Research and Academic Institute of Athens, we work on developing evaluation scales for therapeutic applications.',
    researchText2: 'Our research focuses on developing innovative therapeutic approaches for individuals with neurodevelopmental disorders.',
    studentEducation: 'Student Education',
    studentEducationText: 'In the framework of student education, the Institute has accepted individuals from universities.',
    therapeuticEducationNote: 'Therapeutic education is provided individually and in small groups.',
    
    // Page Titles
    servicesTitle: 'Services',
    servicesSubtitle: 'Our Therapeutic Services',
    casesTitle: 'Cases',
    casesSubtitle: 'Cases We Accept',
    personnelTitle: 'Personnel',
    personnelSubtitle: 'Our Specialized Personnel',
    galleryTitle: 'Photos',
    gallerySubtitle: 'Our Spaces',
    contactTitle: 'Contact',
    contactSubtitle: 'Contact Us',
    
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
    messageSent: 'Your message has been sent successfully.',
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