import { Link, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import {
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  Star,
  Image,
  Settings,
  Mail,
  LogOut,
} from 'lucide-react'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/pages', icon: FileText, label: 'Pages' },
  { to: '/services', icon: Users, label: 'Services' },
  { to: '/testimonials', icon: Star, label: 'Testimonials' },
  { to: '/gallery', icon: Image, label: 'Gallery' },
  { to: '/messages', icon: MessageSquare, label: 'Messages' },
  { to: '/newsletter', icon: Mail, label: 'Newsletter' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

export default function Layout() {
  const { user, signOut } = useAuth()
  const location = useLocation()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-48 bg-navy flex flex-col">
        <div className="p-6">
          <h1 className="text-gold font-semibold text-lg tracking-wider">INSYPE</h1>
          <p className="text-white/40 text-xs mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-4 py-2.5 rounded text-sm transition-all ${
                  isActive
                    ? 'bg-gold text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <p className="text-white/60 text-xs mb-3">{user?.email}</p>
          <button
            onClick={signOut}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-slate-900 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}