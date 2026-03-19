import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Globe } from 'lucide-react'
import { INSTITUTE } from '../../constants/insype'
import { useLanguage } from '../../contexts/LanguageContext'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/services', label: t('services') },
    { to: '/cases', label: t('cases') },
    { to: '/personnel', label: t('personnel') },
    { to: '/gallery', label: t('gallery') },
    { to: '/contact', label: t('contact') },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white/80 text-xs sm:text-sm py-2 px-4 sm:px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href={`tel:${INSTITUTE.contact.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              {INSTITUTE.contact.phone}
            </a>
            <a href={`mailto:${INSTITUTE.contact.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              {INSTITUTE.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className={language === 'el' ? 'text-gold font-medium' : ''}>ΕΛ</span>
              <span className="text-white/30">|</span>
              <span className={language === 'en' ? 'text-gold font-medium' : ''}>EN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-lg lg:top-0' 
          : 'bg-transparent lg:top-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <div className={`font-serif text-base sm:text-xl font-semibold tracking-wide ${
                scrolled ? 'text-navy' : 'text-white'
              }`}>
                {INSTITUTE.name}
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs xl:text-sm font-sans font-medium tracking-wide uppercase transition-colors duration-300 ${
                    location.pathname === link.to
                      ? (scrolled ? 'text-gold' : 'text-gold-light')
                      : (scrolled ? 'text-charcoal hover:text-gold' : 'text-white/90 hover:text-gold-light')
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button and language toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button 
                onClick={toggleLanguage}
                className={`p-2 ${scrolled ? 'text-navy' : 'text-white'}`}
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 ${scrolled ? 'text-navy' : 'text-white'}`}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} />
    </>
  )
}