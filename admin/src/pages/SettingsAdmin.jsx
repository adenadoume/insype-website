import { useState } from 'react'
import { useAdminSettings, useUpdateSettings } from '../hooks/useAdmin'

export default function SettingsAdmin() {
  const { data: settings, isLoading } = useAdminSettings()
  const updateMutation = useUpdateSettings()
  const [saved, setSaved] = useState(false)

  async function handleSave(e) {
    e.preventDefault()
    const form = e.target
    const fields = {
      name: form.name.value,
      name_en: form.name_en.value,
      tagline: form.tagline.value,
      tagline_en: form.tagline_en.value,
      description: form.description.value,
      phone: form.phone.value,
      email: form.email.value,
      address: form.address.value,
      facebook_url: form.facebook_url.value,
      instagram_url: form.instagram_url.value,
    }
    try {
      await updateMutation.mutateAsync({ id: settings.id, ...fields })
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <div className="p-8 text-slate-400">Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-white mb-8">Settings</h1>

      <form onSubmit={handleSave} className="card p-8 space-y-6 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="label">Name (GR)</label><input name="name" defaultValue={settings?.name} className="input" /></div>
          <div><label className="label">Name (EN)</label><input name="name_en" defaultValue={settings?.name_en} className="input" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="label">Tagline (GR)</label><input name="tagline" defaultValue={settings?.tagline} className="input" /></div>
          <div><label className="label">Tagline (EN)</label><input name="tagline_en" defaultValue={settings?.tagline_en} className="input" /></div>
        </div>
        <div><label className="label">Description</label><textarea name="description" defaultValue={settings?.description} className="input h-24 resize-none" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="label">Phone</label><input name="phone" defaultValue={settings?.phone} className="input" /></div>
          <div><label className="label">Email</label><input name="email" defaultValue={settings?.email} className="input" /></div>
        </div>
        <div><label className="label">Address</label><input name="address" defaultValue={settings?.address} className="input" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="label">Facebook URL</label><input name="facebook_url" defaultValue={settings?.facebook_url} className="input" /></div>
          <div><label className="label">Instagram URL</label><input name="instagram_url" defaultValue={settings?.instagram_url} className="input" /></div>
        </div>
        <div className="flex items-center gap-4">
          <button type="submit" className="btn-primary" disabled={updateMutation.isPending}>
            {updateMutation.isPending ? 'Saving...' : 'Save Settings'}
          </button>
          {saved && <span className="text-green-400 text-sm">Saved!</span>}
        </div>
      </form>
    </div>
  )
}