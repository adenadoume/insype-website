import { useState } from 'react'
import { Plus, Edit, Trash2, Upload } from 'lucide-react'
import { useAdminGallery, useCreateGalleryImage, useUpdateGalleryImage, useDeleteGalleryImage } from '../hooks/useAdmin'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || ''
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || ''

export default function GalleryAdmin() {
  const { data: images, isLoading } = useAdminGallery()
  const createMutation = useCreateGalleryImage()
  const updateMutation = useUpdateGalleryImage()
  const deleteMutation = useDeleteGalleryImage()
  const [editing, setEditing] = useState(null)
  const [creating, setCreating] = useState(false)
  const [uploading, setUploading] = useState(false)

  async function uploadToCloudinary(file) {
    const fd = new FormData()
    fd.append('file', file)
    fd.append('upload_preset', UPLOAD_PRESET)
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: fd })
    const data = await res.json()
    return data.secure_url
  }

  async function handleUpload(e) {
    const files = e.target.files
    if (!files.length) return
    setUploading(true)
    try {
      for (const file of files) {
        const url = await uploadToCloudinary(file)
        await createMutation.mutateAsync({ image_url: url, title: file.name, is_published: true, display_order: 0 })
      }
    } catch (err) {
      console.error(err)
    }
    setUploading(false)
  }

  async function handleSave(e, id) {
    e.preventDefault()
    const form = e.target
    const fields = {
      image_url: form.image_url.value,
      title: form.title.value,
      description: form.description.value,
      is_published: form.is_published.checked,
      display_order: parseInt(form.display_order.value) || 0,
    }
    if (id) {
      await updateMutation.mutateAsync({ id, ...fields })
    }
    setEditing(null)
  }

  if (isLoading) return <div className="p-8 text-slate-400">Loading...</div>

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-white">Gallery</h1>
        <div className="flex gap-3">
          <label className="btn-primary flex items-center gap-2 cursor-pointer">
            <Upload className="w-4 h-4" />
            {uploading ? 'Uploading...' : 'Upload Images'}
            <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
          </label>
          <button onClick={() => setCreating(true)} className="btn-secondary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add URL
          </button>
        </div>
      </div>

      {creating && (
        <form onSubmit={(e) => { e.preventDefault(); createMutation.mutate({ image_url: e.target.image_url.value, title: e.target.title.value, is_published: true, display_order: 0 }); setCreating(false) }} className="card p-6 mb-6 space-y-4">
          <h2 className="text-lg text-white">Add Image by URL</h2>
          <div><label className="label">Image URL</label><input name="image_url" className="input" required /></div>
          <div><label className="label">Title</label><input name="title" className="input" /></div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary" disabled={createMutation.isPending}>Save</button>
            <button type="button" onClick={() => setCreating(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images?.map((img) => (
          <div key={img.id} className="card overflow-hidden">
            {editing === img.id ? (
              <form onSubmit={(e) => handleSave(e, img.id)} className="p-4 space-y-3">
                <div><label className="label">URL</label><input name="image_url" defaultValue={img.image_url} className="input text-xs" /></div>
                <div><label className="label">Title</label><input name="title" defaultValue={img.title} className="input" /></div>
                <div><label className="label">Description</label><input name="description" defaultValue={img.description} className="input" /></div>
                <div><label className="label">Order</label><input name="display_order" type="number" defaultValue={img.display_order} className="input" /></div>
                <label className="flex items-center gap-2"><input name="is_published" type="checkbox" defaultChecked={img.is_published} className="accent-gold" /><span className="text-slate-300 text-sm">Published</span></label>
                <div className="flex gap-2">
                  <button type="submit" className="btn-primary text-xs" disabled={updateMutation.isPending}>Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="btn-secondary text-xs">Cancel</button>
                </div>
              </form>
            ) : (
              <>
                <img src={img.image_url} alt={img.title} className="w-full aspect-square object-cover" />
                <div className="p-3">
                  <p className="text-white text-sm truncate">{img.title || 'Untitled'}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={img.is_published ? 'badge-published' : 'badge-draft'}>{img.is_published ? 'Published' : 'Draft'}</span>
                    <div className="flex gap-1">
                      <button onClick={() => setEditing(img.id)} className="btn-secondary p-1"><Edit className="w-3 h-3" /></button>
                      <button onClick={() => deleteMutation.mutate(img.id)} className="btn-danger p-1"><Trash2 className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}