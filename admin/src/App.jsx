import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PagesEditor from './pages/PagesEditor'
import ServicesAdmin from './pages/ServicesAdmin'
import TestimonialsAdmin from './pages/TestimonialsAdmin'
import GalleryAdmin from './pages/GalleryAdmin'
import MessagesAdmin from './pages/MessagesAdmin'
import NewsletterAdmin from './pages/NewsletterAdmin'
import SettingsAdmin from './pages/SettingsAdmin'

function ProtectedRoute() {
  const { user, loading } = useAuth()
  if (loading) return <div className="min-h-screen bg-navy" />
  if (!user) return <Navigate to="/login" replace />
  return <Layout />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pages" element={<PagesEditor />} />
          <Route path="/services" element={<ServicesAdmin />} />
          <Route path="/testimonials" element={<TestimonialsAdmin />} />
          <Route path="/gallery" element={<GalleryAdmin />} />
          <Route path="/messages" element={<MessagesAdmin />} />
          <Route path="/newsletter" element={<NewsletterAdmin />} />
          <Route path="/settings" element={<SettingsAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}