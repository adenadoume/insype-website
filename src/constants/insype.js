// Insype Institute Constants
// Ινστιτούτο Σύγχρονης Παιδαγωγικής
// Institute of Modern Education - Day Care Center for People with Special Needs

export const INSTITUTE = {
  name: 'Ινστιτούτο Σύγχρονης Παιδαγωγικής',
  nameEn: 'Institute of Modern Education',
  tagline: 'Κέντρο Ημερήσιας Φροντίδας ΑΜΕΑ',
  taglineEn: 'Medical Day Care Center for People with Special Needs',
  founded: 1986,
  location: {
    street: 'Τεώ 25 & Ολοφύτου',
    postalCode: '11142',
    city: 'Αθήνα',
    cityEn: 'Athens',
    country: 'Ελλάδα',
    countryEn: 'Greece',
    coords: {
      lat: 38.023864,
      lng: 23.742185,
    },
  },
  contact: {
    phone: '210-2281031',
    email: 'info@insype.com.gr',
    address: 'Τεώ 25 & Ολοφύτου, Τ.Κ. 11142 Αθήνα',
  },
  social: {
    facebook: '',
    instagram: '',
  },
}

export const MANAGERS = [
  {
    name: 'Αίγλη Κωνσταντοπούλου',
    nameEn: 'Aegli Konstantopoulou',
    role: 'Διευθύνουσα',
    roleEn: 'Director',
  },
  {
    name: 'Τρύφων Ζαχαριάδης',
    nameEn: 'Tryfon Zahariadis',
    role: 'Διευθύνων Σύμβουλος',
    roleEn: 'Managing Director',
  },
  {
    name: 'Δημήτρης Αδάμης',
    nameEn: 'Dimitrios Adamis',
    role: 'Επιστημονικός Διευθυντής - Ψυχίατρος',
    roleEn: 'Scientific Director - Psychiatrist',
  },
]

export const SERVICES = [
  {
    id: 'diagnostic',
    name: 'Διαγνωστική Αξιολόγηση',
    nameEn: 'Diagnostic Evaluation',
    description: 'Ολοκληρωμένη αξιολόγηση μαθησιακών δυσκολιών και αναπτυξιακών θεμάτων.',
    descriptionEn: 'Comprehensive evaluation of learning difficulties and developmental issues.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'special-education',
    name: 'Ειδική Αγωγή',
    nameEn: 'Special Education',
    description: 'Εξατομικευμένα εκπαιδευτικά προγράμματα προσαρμοσμένα στις ανάγκες κάθε ατόμου.',
    descriptionEn: 'Individualized educational programs tailored to each person\'s needs.',
    icon: 'BookOpen',
  },
  {
    id: 'occupational-therapy',
    name: 'Εργοθεραπεία',
    nameEn: 'Occupational Therapy',
    description: 'Υποστήριξη για δεξιότητες καθημερινής ζωής και αισθητηριακή ενσωμάτωση.',
    descriptionEn: 'Support for daily living skills and sensory integration.',
    icon: 'Hand',
  },
  {
    id: 'speech-therapy',
    name: 'Λογοθεραπεία',
    nameEn: 'Speech Therapy',
    description: 'Εξειδικευμένες υπηρεσίες λογοθεραπείας για όλες τις ηλικίες.',
    descriptionEn: 'Specialized speech and language therapy services for all ages.',
    icon: 'MessageCircle',
  },
  {
    id: 'physiotherapy',
    name: 'Φυσικοθεραπεία',
    nameEn: 'Physiotherapy',
    description: 'Φυσικοθεραπευτική αγωγή για τη βελτίωση της κινητικότητας.',
    descriptionEn: 'Physiotherapy to improve mobility and physical function.',
    icon: 'Activity',
  },
  {
    id: 'psychotherapy',
    name: 'Ψυχοθεραπεία',
    nameEn: 'Psychotherapy',
    description: 'Ατομική και ομαδική ψυχοθεραπεία για συναισθηματική υποστήριξη.',
    descriptionEn: 'Individual and group psychotherapy for emotional support.',
    icon: 'Heart',
  },
  {
    id: 'family-therapy',
    name: 'Συμβουλευτική Γονέων',
    nameEn: 'Parent Counseling',
    description: 'Συμβουλευτική και υποστήριξη γονέων / οικογενειακή θεραπεία.',
    descriptionEn: 'Parent guidance and support / family therapy.',
    icon: 'Users',
  },
  {
    id: 'crisis-intervention',
    name: 'Επέμβαση Κρίσης',
    nameEn: 'Crisis Intervention',
    description: 'Άμεση υποστήριξη σε περιόδους κρίσης.',
    descriptionEn: 'Immediate support during crisis periods.',
    icon: 'AlertCircle',
  },
  {
    id: 'medical-supervision',
    name: 'Ιατρική Παρακολούθηση',
    nameEn: 'Medical Supervision',
    description: 'Καθημερινή ψυχιατρική/ιατρική παρακολούθηση.',
    descriptionEn: 'Daily psychiatric/medical supervision.',
    icon: 'Stethoscope',
  },
]

export const CASES = [
  {
    id: 'autism',
    name: 'Αυτισμός',
    nameEn: 'Autism',
    description: 'Αυτιστική διαταραχή και συναφείς καταστάσεις.',
  },
  {
    id: 'down-syndrome',
    name: 'Σύνδρομο Down',
    nameEn: 'Down Syndrome',
    description: 'Υποστήριξη για άτομα με σύνδρομο Down.',
  },
  {
    id: 'mental-retardation',
    name: 'Νοητική Καθυστέρηση',
    nameEn: 'Mental Retardation',
    description: 'Θεραπευτική αγωγή για άτομα με νοητική καθυστέρηση.',
  },
  {
    id: 'asperger',
    name: 'Σύνδρομο Asperger',
    nameEn: 'Asperger Syndrome',
    description: 'Εξειδικευμένη υποστήριξη για άτομα με σύνδρομο Asperger.',
  },
  {
    id: 'behavioral',
    name: 'Συμπεριφορικές Διαταραχές',
    nameEn: 'Behavioral Disorders',
    description: 'Συμπεριφορικές και συναισθηματικές διαταραχές παιδικής ηλικίας.',
  },
  {
    id: 'adhd',
    name: 'ΔΕΠ-Υ',
    nameEn: 'ADHD',
    description: 'Διαταραχή Ελλειμματικής Προσοχής - Υπερκινητικότητα.',
  },
  {
    id: 'rett',
    name: 'Σύνδρομο Rett',
    nameEn: 'Rett Syndrome',
    description: 'Θεραπευτική υποστήριξη για άτομα με σύνδρομο Rett.',
  },
  {
    id: 'other',
    name: 'Άλλες Αναπτυξιακές Διαταραχές',
    nameEn: 'Other Developmental Disorders',
    description: 'Άλλες αναπτυξιακές διαταραχές και συνδρομικές καταστάσεις.',
  },
]

export const PERSONNEL = [
  {
    id: 'psychiatrist',
    name: 'Ψυχίατρος',
    nameEn: 'Psychiatrist',
    icon: 'Stethoscope',
  },
  {
    id: 'child-psychologist',
    name: 'Παιδοψυχολόγος',
    nameEn: 'Child Psychologist',
    icon: 'Brain',
  },
  {
    id: 'family-therapist',
    name: 'Οικογενειακός Θεραπευτής',
    nameEn: 'Family Therapist',
    icon: 'Users',
  },
  {
    id: 'psychologist',
    name: 'Ψυχολόγος',
    nameEn: 'Psychologist',
    icon: 'Heart',
  },
  {
    id: 'speech-therapist',
    name: 'Λογοθεραπευτής',
    nameEn: 'Speech Therapist',
    icon: 'MessageCircle',
  },
  {
    id: 'physiotherapist',
    name: 'Φυσικοθεραπευτής',
    nameEn: 'Physiotherapist',
    icon: 'Activity',
  },
  {
    id: 'pedagogue',
    name: 'Ειδικός Παιδαγωγός',
    nameEn: 'Special Pedagogue',
    icon: 'GraduationCap',
  },
  {
    id: 'occupational-therapist',
    name: 'Εργοθεραπευτής',
    nameEn: 'Occupational Therapist',
    icon: 'Hand',
  },
  {
    id: 'social-worker',
    name: 'Κοινωνικός Λειτουργός',
    nameEn: 'Social Worker',
    icon: 'Shield',
  },
  {
    id: 'nurse',
    name: 'Νοσηλεύτρια',
    nameEn: 'Nurse',
    icon: 'Cross',
  },
]

const IMG = '/images'

export const INSTITUTE_IMAGES = {
  // Building & Facility
  building1: `${IMG}/ktirio1.jpg`,
  building2: `${IMG}/ktirio2.jpg`,
  building3: `${IMG}/ktirio3.jpg`,
  building4: `${IMG}/ktirio4.jpg`,
  building5: `${IMG}/ktirio5.jpg`,
  building6: `${IMG}/ktirio6.jpg`,
  building7: `${IMG}/ktirio7.jpg`,
  logo: `${IMG}/logo.gif`,

  // Default fallbacks
  hero: `${IMG}/ktirio1.jpg`,
  about: `${IMG}/ktirio2.jpg`,
  services: `${IMG}/ktirio3.jpg`,
  contact: `${IMG}/ktirio4.jpg`,
}