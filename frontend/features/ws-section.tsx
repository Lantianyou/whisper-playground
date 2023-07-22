
"use client"
import useSWRSubscription from 'swr/subscription'

const wsURl = 'ws://localhost:3001/'


export default function WSSection({ startId }: { startId: number }) {
  const { data, error } = useSWRSubscription(wsURl + startId, (key, { next }) => {
    const socket = new WebSocket(key)
    socket.addEventListener('message', (e: MessageEvent<{ texts: string[] }>) => {
      next(e.data)
    })
    socket.addEventListener('error', (e) => {
      next(e.error)
    })
    return () => socket.close()
  })

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <div>
    <div>WebSocket section</div>
    <div>{data.texts.join("\n")}</div>
  </div>
}