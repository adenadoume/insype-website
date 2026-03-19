import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { INSTITUTE } from '../../constants/insype'

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-navy z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className="block py-3 px-4 text-white/90 hover:text-gold hover:bg-white/5 rounded-lg transition-all font-sans text-sm tracking-wider uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
                <a href={`tel:${INSTITUTE.contact.phone}`} className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">{INSTITUTE.contact.phone}</span>
                </a>
                <a href={`mailto:${INSTITUTE.contact.email}`} className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{INSTITUTE.contact.email}</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">{INSTITUTE.contact.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}