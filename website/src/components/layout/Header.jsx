import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { INSTITUTE } from '../../constants/insype'
import MobileMenu from './MobileMenu'

const navLinks = [
  { to: '/', label: 'Αρχική' },
  { to: '/about', label: 'Σχετικά' },
  { to: '/services', label: 'Υπηρεσίες' },
  { to: '/cases', label: 'Περιστατικά' },
  { to: '/personnel', label: 'Προσωπικό' },
  { to: '/gallery', label: 'Φωτογραφίες' },
  { to: '/contact', label: 'Επικοινωνία' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

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
      <div className="bg-navy text-white/80 text-sm py-2 px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${INSTITUTE.contact.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              {INSTITUTE.contact.phone}
            </a>
            <a href={`mailto:${INSTITUTE.contact.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              {INSTITUTE.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className={location.pathname === '/' ? 'text-gold' : 'hover:text-gold transition-colors'}>ΕΛ</Link>
            <span className="text-white/30">|</span>
            <Link to="/en" className="hover:text-gold transition-colors">EN</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-lg lg:top-0' 
          : 'bg-transparent lg:top-10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className={`font-serif text-xl font-semibold tracking-wide ${
                scrolled ? 'text-navy' : 'text-white'
              }`}>
                {INSTITUTE.name}
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-sans font-medium tracking-wide uppercase transition-colors duration-300 ${
                    location.pathname === link.to
                      ? (scrolled ? 'text-gold' : 'text-gold-light')
                      : (scrolled ? 'text-charcoal hover:text-gold' : 'text-white/90 hover:text-gold-light')
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} />
    </>
  )
}