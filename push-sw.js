// Importado pelo service worker gerado (vite.config.ts): recebe push com o app fechado.
self.addEventListener('push', (e) => {
  const d = e.data ? e.data.json() : {}
  e.waitUntil(
    self.registration.showNotification(d.titulo || 'Conecta Sapezal', {
      body: d.mensagem || '',
      icon: 'icons/icon-192.png',
      data: { url: d.reportId ? `problema/${d.reportId}` : 'inicio' },
    }),
  )
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  e.waitUntil(self.clients.openWindow(new URL(e.notification.data.url, self.registration.scope).href))
})
