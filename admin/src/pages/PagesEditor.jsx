import { useState } from 'react'
import { useAdminPageContent, useUpdatePageContent } from '../hooks/useAdmin'

const pages = [
  { name: 'home', label: 'Home Page' },
  { name: 'about', label: 'About Page' },
  { name: 'services', label: 'Services Page' },
  { name: 'cases', label: 'Cases Page' },
  { name: 'personnel', label: 'Personnel Page' },
  { name: 'gallery', label: 'Gallery Page' },
  { name: 'contact', label: 'Contact Page' },
]

export default function PagesEditor() {
  const { data: allPages, isLoading } = useAdminPageContent()
  const updateMutation = useUpdatePageContent()
  const [selectedPage, setSelectedPage] = useState('home')
  const [saved, setSaved] = useState(false)

  const pageData = allPages?.find(p => p.page_name === selectedPage)

  async function handleSave(e) {
    e.preventDefault()
    const form = e.target
    const fields = {
      hero_title: form.hero_title.value,
      hero_subtitle: form.hero_subtitle.value,
      hero_image_url: form.hero_image_url.value,
      section_1_title: form.section_1_title.value,
      section_1_text: form.section_1_text.value,
      section_1_image_url: form.section_1_image_url.value,
    }
    try {
      await updateMutation.mutateAsync({ id: pageData.id, ...fields })
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <div className="p-8 text-slate-400">Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-white mb-8">Pages Editor</h1>

      <div className="flex gap-4 mb-8 flex-wrap">
        {pages.map((page) => (
          <button
            key={page.name}
            onClick={() => setSelectedPage(page.name)}
            className={`px-4 py-2 rounded text-sm transition-all ${
              selectedPage === page.name
                ? 'bg-gold text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {page.label}
          </button>
        ))}
      </div>

      {pageData && (
        <form onSubmit={handleSave} className="card p-8 space-y-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-white">{pages.find(p => p.name === selectedPage)?.label}</h2>

          <div>
            <label className="label">Hero Title</label>
            <input name="hero_title" defaultValue={pageData.hero_title || ''} className="input" />
          </div>

          <div>
            <label className="label">Hero Subtitle</label>
            <input name="hero_subtitle" defaultValue={pageData.hero_subtitle || ''} className="input" />
          </div>

          <div>
            <label className="label">Hero Image URL</label>
            <input name="hero_image_url" defaultValue={pageData.hero_image_url || ''} className="input" />
          </div>

          <div>
            <label className="label">Section 1 Title</label>
            <input name="section_1_title" defaultValue={pageData.section_1_title || ''} className="input" />
          </div>

          <div>
            <label className="label">Section 1 Text</label>
            <textarea name="section_1_text" defaultValue={pageData.section_1_text || ''} className="input h-32 resize-none" />
          </div>

          <div>
            <label className="label">Section 1 Image URL</label>
            <input name="section_1_image_url" defaultValue={pageData.section_1_image_url || ''} className="input" />
          </div>

          <div className="flex items-center gap-4">
            <button type="submit" className="btn-primary" disabled={updateMutation.isPending}>
              {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
            </button>
            {saved && <span className="text-green-400 text-sm">Saved!</span>}
          </div>
        </form>
      )}
    </div>
  )
}