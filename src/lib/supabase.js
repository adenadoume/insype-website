import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Only create client if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
      realtime: {
        params: {
          eventsPerSecond: 2,
        },
      },
    })
  : null

// Check if Supabase is configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)

// API functions
export const insypeAPI = {
  // Get institute settings
  async getSettings() {
    if (!supabase) return null
    const { data, error } = await supabase
      .from('institute_settings')
      .select('*')
      .single()
    if (error) throw error
    return data
  },

  // Get all services
  async getServices() {
    if (!supabase) return []
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_published', true)
      .order('display_order', { ascending: true })
    if (error) throw error
    return data || []
  },

  // Get single service by slug
  async getService(slug) {
    if (!supabase) return null
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .single()
    if (error) throw error
    return data
  },

  // Get all case types
  async getCaseTypes() {
    if (!supabase) return []
    const { data, error } = await supabase
      .from('case_types')
      .select('*')
      .eq('is_published', true)
      .order('display_order', { ascending: true })
    if (error) throw error
    return data || []
  },

  // Get all team members
  async getPersonnel() {
    if (!supabase) return []
    const { data, error } = await supabase
      .from('personnel')
      .select('*')
      .eq('is_published', true)
      .order('display_order', { ascending: true })
    if (error) throw error
    return data || []
  },

  // Get all testimonials
  async getTestimonials() {
    if (!supabase) return []
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_published', true)
      .order('display_order', { ascending: true })
    if (error) throw error
    return data || []
  },

  // Get gallery images
  async getGalleryImages(categorySlug) {
    if (!supabase) return []
    let query = supabase
      .from('gallery_images')
      .select('*, category:gallery_categories(*)')
      .eq('is_published', true)
      .order('display_order', { ascending: true })

    if (categorySlug) {
      query = query.eq('gallery_categories.slug', categorySlug)
    }

    const { data, error } = await query
    if (error) throw error
    return data || []
  },

  // Get gallery categories
  async getGalleryCategories() {
    if (!supabase) return []
    const { data, error } = await supabase
      .from('gallery_categories')
      .select('*')
      .order('display_order', { ascending: true })
    if (error) throw error
    return data || []
  },

  // Get page content
  async getPageContent(pageName) {
    if (!supabase) return null
    const { data, error } = await supabase
      .from('page_content')
      .select('*')
      .eq('page_name', pageName)
      .single()
    if (error) throw error
    return data
  },

  // Get text snippet
  async getText(key) {
    if (!supabase) return null
    const { data, error } = await supabase
      .from('texts')
      .select('value')
      .eq('key', key)
      .single()
    if (error) throw error
    return data?.value
  },

  // Submit contact form
  async submitContact(formData) {
    if (!supabase) throw new Error('Supabase not configured')
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([formData])
    if (error) throw error
    return data
  },

  // Subscribe to newsletter
  async subscribeNewsletter(email) {
    if (!supabase) throw new Error('Supabase not configured')
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
    if (error) throw error
    return data
  },
}