import { useState } from 'react'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'
import { useAdminServices, useCreateService, useUpdateService, useDeleteService } from '../hooks/useAdmin'

export default function ServicesAdmin() {
  const { data: services, isLoading } = useAdminServices()
  const createMutation = useCreateService()
  const updateMutation = useUpdateService()
  const deleteMutation = useDeleteService()
  const [editing, setEditing] = useState(null)
  const [creating, setCreating] = useState(false)

  const emptyForm = { name: '', name_en: '', slug: '', description: '', description_en: '', icon: 'Heart', is_published: true, display_order: 0 }

  async function handleSave(e, id) {
    e.preventDefault()
    const form = e.target
    const fields = {
      name: form.name.value,
      name_en: form.name_en.value,
      slug: form.slug.value,
      description: form.description.value,
      description_en: form.description_en.value,
      icon: form.icon.value,
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
        <h1 className="text-2xl font-semibold text-white">Services</h1>
        <button onClick={() => setCreating(true)} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      {creating && (
        <form onSubmit={(e) => handleSave(e, null)} className="card p-6 mb-6 space-y-4">
          <h2 className="text-lg text-white">New Service</h2>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Name (GR)</label><input name="name" className="input" required /></div>
            <div><label className="label">Name (EN)</label><input name="name_en" className="input" required /></div>
            <div><label className="label">Slug</label><input name="slug" className="input" required /></div>
            <div><label className="label">Icon</label><input name="icon" className="input" defaultValue="Heart" /></div>
            <div><label className="label">Display Order</label><input name="display_order" type="number" className="input" defaultValue="0" /></div>
            <div className="flex items-end"><label className="flex items-center gap-2"><input name="is_published" type="checkbox" defaultChecked className="accent-gold" /><span className="text-slate-300 text-sm">Published</span></label></div>
          </div>
          <div><label className="label">Description (GR)</label><textarea name="description" className="input h-24 resize-none" /></div>
          <div><label className="label">Description (EN)</label><textarea name="description_en" className="input h-24 resize-none" /></div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary" disabled={createMutation.isPending}>Save</button>
            <button type="button" onClick={() => setCreating(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {services?.map((service) => (
          <div key={service.id} className="card p-6">
            {editing === service.id ? (
              <form onSubmit={(e) => handleSave(e, service.id)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="label">Name (GR)</label><input name="name" defaultValue={service.name} className="input" /></div>
                  <div><label className="label">Name (EN)</label><input name="name_en" defaultValue={service.name_en} className="input" /></div>
                  <div><label className="label">Slug</label><input name="slug" defaultValue={service.slug} className="input" /></div>
                  <div><label className="label">Icon</label><input name="icon" defaultValue={service.icon} className="input" /></div>
                  <div><label className="label">Display Order</label><input name="display_order" type="number" defaultValue={service.display_order} className="input" /></div>
                  <div className="flex items-end"><label className="flex items-center gap-2"><input name="is_published" type="checkbox" defaultChecked={service.is_published} className="accent-gold" /><span className="text-slate-300 text-sm">Published</span></label></div>
                </div>
                <div><label className="label">Description (GR)</label><textarea name="description" defaultValue={service.description} className="input h-24 resize-none" /></div>
                <div><label className="label">Description (EN)</label><textarea name="description_en" defaultValue={service.description_en} className="input h-24 resize-none" /></div>
                <div className="flex gap-3">
                  <button type="submit" className="btn-primary" disabled={updateMutation.isPending}>Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="btn-secondary">Cancel</button>
                </div>
              </form>
            ) : (
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-medium">{service.name}</h3>
                  <p className="text-sm text-gold">{service.name_en}</p>
                  <p className="text-slate-400 text-sm mt-2">{service.description}</p>
                  <div className="flex gap-3 mt-3">
                    {service.is_published ? <span className="badge-published">Published</span> : <span className="badge-draft">Draft</span>}
                    <span className="text-slate-500 text-xs">Order: {service.display_order}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditing(service.id)} className="btn-secondary p-2"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deleteMutation.mutate(service.id)} className="btn-danger p-2"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}