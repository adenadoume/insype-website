import { motion } from 'framer-motion'
import { Users, FileText, MessageSquare, Star, Image, Mail } from 'lucide-react'
import { useAdminStats } from '../hooks/useAdmin'

const statCards = [
  { key: 'services', label: 'Services', icon: Users, color: 'bg-blue-500/20 text-blue-400' },
  { key: 'cases', label: 'Case Types', icon: FileText, color: 'bg-green-500/20 text-green-400' },
  { key: 'newMessages', label: 'New Messages', icon: MessageSquare, color: 'bg-yellow-500/20 text-yellow-400' },
  { key: 'personnel', label: 'Personnel', icon: Star, color: 'bg-purple-500/20 text-purple-400' },
]

export default function Dashboard() {
  const { data: stats, isLoading } = useAdminStats()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">{card.label}</p>
                <p className="text-3xl font-bold text-white mt-2">
                  {isLoading ? '...' : stats?.[card.key] || 0}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a href="/pages" className="flex items-center gap-3 text-slate-300 hover:text-gold transition-colors">
              <FileText className="w-5 h-5" />
              Edit Page Content
            </a>
            <a href="/services" className="flex items-center gap-3 text-slate-300 hover:text-gold transition-colors">
              <Users className="w-5 h-5" />
              Manage Services
            </a>
            <a href="/messages" className="flex items-center gap-3 text-slate-300 hover:text-gold transition-colors">
              <MessageSquare className="w-5 h-5" />
              View Messages
            </a>
            <a href="/gallery" className="flex items-center gap-3 text-slate-300 hover:text-gold transition-colors">
              <Image className="w-5 h-5" />
              Manage Gallery
            </a>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-white mb-4">System Info</h2>
          <div className="space-y-3 text-sm text-slate-400">
            <p><span className="text-slate-300">Framework:</span> Vite + React 19</p>
            <p><span className="text-slate-300">Database:</span> Supabase</p>
            <p><span className="text-slate-300">Hosting:</span> Vercel</p>
            <p><span className="text-slate-300">Status:</span> <span className="text-green-400">Active</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}