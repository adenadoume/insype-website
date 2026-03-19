import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { INSTITUTE } from '../../constants/insype'

const footerLinks = [
  { to: '/about', label: 'Σχετικά' },
  { to: '/services', label: 'Υπηρεσίες' },
  { to: '/cases', label: 'Περιστατικά' },
  { to: '/personnel', label: 'Προσωπικό' },
  { to: '/gallery', label: 'Φωτογραφίες' },
  { to: '/contact', label: 'Επικοινωνία' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl text-white mb-4">{INSTITUTE.name}</h3>
            <p className="text-sm leading-relaxed mb-6">
              {INSTITUTE.tagline}<br />
              {INSTITUTE.nameEn}
            </p>
            <p className="text-sm text-white/60">
              Ιδρύθηκε το {INSTITUTE.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-xs uppercase tracking-eyebrow text-gold mb-6">
              Γρήγοροι Σύνδεσμοι
            </h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-medium text-xs uppercase tracking-eyebrow text-gold mb-6">
              Επικοινωνία
            </h4>
            <div className="space-y-4">
              <a href={`tel:${INSTITUTE.contact.phone}`} className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {INSTITUTE.contact.phone}
              </a>
              <a href={`mailto:${INSTITUTE.contact.email}`} className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                {INSTITUTE.contact.email}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {INSTITUTE.contact.address}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-medium text-xs uppercase tracking-eyebrow text-gold mb-6">
              Ακολουθήστε μας
            </h4>
            <div className="flex gap-4">
              {INSTITUTE.social.facebook && (
                <a href={INSTITUTE.social.facebook} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {INSTITUTE.social.instagram && (
                <a href={INSTITUTE.social.instagram} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} {INSTITUTE.name}. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link to="/privacy" className="hover:text-gold transition-colors">Πολιτική Απορρήτου</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">Όροι Χρήσης</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}