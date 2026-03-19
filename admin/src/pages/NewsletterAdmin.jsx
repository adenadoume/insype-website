import { useAdminNewsletter } from '../hooks/useAdmin'

export default function NewsletterAdmin() {
  const { data: subscribers, isLoading } = useAdminNewsletter()

  if (isLoading) return <div className="p-8 text-slate-400">Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-white mb-8">Newsletter Subscribers</h1>

      <div className="card">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3 text-left text-slate-400 font-medium text-sm">Email</th>
              <th className="px-4 py-3 text-left text-slate-400 font-medium text-sm">Status</th>
              <th className="px-4 py-3 text-left text-slate-400 font-medium text-sm">Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {subscribers?.map((sub) => (
              <tr key={sub.id} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                <td className="px-4 py-3 text-slate-300">{sub.email}</td>
                <td className="px-4 py-3">
                  <span className={sub.is_active ? 'badge-published' : 'badge-draft'}>
                    {sub.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400 text-sm">{new Date(sub.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {(!subscribers || subscribers.length === 0) && (
          <div className="p-8 text-center text-slate-400">No subscribers yet.</div>
        )}
      </div>
    </div>
  )
}