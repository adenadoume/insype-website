import { useState } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { useAdminTestimonials, useCreateTestimonial, useUpdateTestimonial, useDeleteTestimonial } from '../hooks/useAdmin'

export default function TestimonialsAdmin() {
  const { data: testimonials, isLoading } = useAdminTestimonials()
  const createMutation = useCreateTestimonial()
  const updateMutation = useUpdateTestimonial()
  const deleteMutation = useDeleteTestimonial()
  const [editing, setEditing] = useState(null)
  const [creating, setCreating] = useState(false)

  async function handleSave(e, id) {
    e.preventDefault()
    const form = e.target
    const fields = {
      quote: form.quote.value,
      name: form.name.value,
      country: form.country.value,
      is_published: form.is_published.checked,
      display_order: parseInt(form.display_order.value) || 0,
    }
    if (id) {
      await updateMutation.mutateAsync({ id, ...fields })
    } else {
      await createMutation.mutateAsync(fields)
    }
    setEditing(null)
    setCreating(false)
  }

  if (isLoading) return <div className="p-8 text-slate-400">Loading...</div>

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-white">Testimonials</h1>
        <button onClick={() => setCreating(true)} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      {creating && (
        <form onSubmit={(e) => handleSave(e, null)} className="card p-6 mb-6 space-y-4">
          <h2 className="text-lg text-white">New Testimonial</h2>
          <div><label className="label">Quote</label><textarea name="quote" className="input h-24 resize-none" required /></div>
          <div className="grid grid-cols-3 gap-4">
            <div><label className="label">Name</label><input name="name" className="input" required /></div>
            <div><label className="label">Country</label><input name="country" className="input" /></div>
            <div><label className="label">Display Order</label><input name="display_order" type="number" className="input" defaultValue="0" /></div>
          </div>
          <label className="flex items-center gap-2"><input name="is_published" type="checkbox" defaultChecked className="accent-gold" /><span className="text-slate-300 text-sm">Published</span></label>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary" disabled={createMutation.isPending}>Save</button>
            <button type="button" onClick={() => setCreating(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {testimonials?.map((t) => (
          <div key={t.id} className="card p-6">
            {editing === t.id ? (
              <form onSubmit={(e) => handleSave(e, t.id)} className="space-y-4">
                <div><label className="label">Quote</label><textarea name="quote" defaultValue={t.quote} className="input h-24 resize-none" /></div>
                <div className="grid grid-cols-3 gap-4">
                  <div><label className="label">Name</label><input name="name" defaultValue={t.name} className="input" /></div>
                  <div><label className="label">Country</label><input name="country" defaultValue={t.country} className="input" /></div>
                  <div><label className="label">Display Order</label><input name="display_order" type="number" defaultValue={t.display_order} className="input" /></div>
                </div>
                <label className="flex items-center gap-2"><input name="is_published" type="checkbox" defaultChecked={t.is_published} className="accent-gold" /><span className="text-slate-300 text-sm">Published</span></label>
                <div className="flex gap-3">
                  <button type="submit" className="btn-primary" disabled={updateMutation.isPending}>Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="btn-secondary">Cancel</button>
                </div>
              </form>
            ) : (
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-300 italic">"{t.quote}"</p>
                  <p className="text-white font-medium mt-2">{t.name}</p>
                  {t.country && <p className="text-slate-400 text-sm">{t.country}</p>}
                  <div className="flex gap-3 mt-3">
                    {t.is_published ? <span className="badge-published">Published</span> : <span className="badge-draft">Draft</span>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditing(t.id)} className="btn-secondary p-2"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deleteMutation.mutate(t.id)} className="btn-danger p-2"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}