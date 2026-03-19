import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { INSTITUTE } from '../../constants/insype'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()

  const footerLinks = [
    { to: '/about', label: t('about') },
    { to: '/services', label: t('services') },
    { to: '/cases', label: t('cases') },
    { to: '/personnel', label: t('personnel') },
    { to: '/gallery', label: t('gallery') },
    { to: '/contact', label: t('contact') },
  ]

  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg sm:text-xl text-white mb-3 sm:mb-4">{INSTITUTE.name}</h3>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              {INSTITUTE.tagline}<br />
              {INSTITUTE.nameEn}
            </p>
            <p className="text-xs sm:text-sm text-white/60">
              {t('founded')} {INSTITUTE.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-xs uppercase tracking-eyebrow text-gold mb-4 sm:mb-6">
              {t('quickLinks')}
            </h4>
            <nav className="space-y-2 sm:space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-xs sm:text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-medium text-xs uppercase tracking-eyebrow text-gold mb-4 sm:mb-6">
              {t('contact')}
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a href={`tel:${INSTITUTE.contact.phone}`} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm hover:text-gold transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {INSTITUTE.contact.phone}
              </a>
              <a href={`mailto:${INSTITUTE.contact.email}`} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm hover:text-gold transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {INSTITUTE.contact.email}
              </a>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                {INSTITUTE.contact.address}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-medium text-xs uppercase tracking-eyebrow text-gold mb-4 sm:mb-6">
              {t('followUs')}
            </h4>
            <div className="flex gap-3 sm:gap-4">
              {INSTITUTE.social.facebook && (
                <a href={INSTITUTE.social.facebook} target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
              {INSTITUTE.social.instagram && (
                <a href={INSTITUTE.social.instagram} target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-white/50">
              © {new Date().getFullYear()} {INSTITUTE.name}. {t('copyright')}
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/50">
              <Link to="/privacy" className="hover:text-gold transition-colors">{t('privacyPolicy')}</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">{t('termsOfUse')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}