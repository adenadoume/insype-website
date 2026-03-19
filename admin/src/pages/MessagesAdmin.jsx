import { useAdminMessages, useUpdateMessageStatus } from '../hooks/useAdmin'

export default function MessagesAdmin() {
  const { data: messages, isLoading } = useAdminMessages()
  const updateStatus = useUpdateMessageStatus()

  if (isLoading) return <div className="p-8 text-slate-400">Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-white mb-8">Contact Messages</h1>

      <div className="space-y-4">
        {messages?.map((msg) => (
          <div key={msg.id} className="card p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white font-medium">{msg.name}</h3>
                  <span className={`badge-${msg.status === 'new' ? 'published' : 'draft'}`}>
                    {msg.status}
                  </span>
                </div>
                <p className="text-gold text-sm mb-2">{msg.email} {msg.phone && `• ${msg.phone}`}</p>
                <p className="text-slate-400 text-sm mb-3">Subject: {msg.subject}</p>
                <p className="text-slate-300">{msg.message}</p>
                <p className="text-slate-500 text-xs mt-3">{new Date(msg.created_at).toLocaleString()}</p>
              </div>
              <div className="flex gap-2 ml-4">
                {msg.status === 'new' && (
                  <button onClick={() => updateStatus.mutate({ id: msg.id, status: 'read' })} className="btn-secondary text-xs">
                    Mark Read
                  </button>
                )}
                {msg.status !== 'replied' && (
                  <button onClick={() => updateStatus.mutate({ id: msg.id, status: 'replied' })} className="btn-primary text-xs">
                    Mark Replied
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {(!messages || messages.length === 0) && (
          <div className="card p-8 text-center text-slate-400">No messages yet.</div>
        )}
      </div>
    </div>
  )
}