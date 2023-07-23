"use client"

import useSWRSubscription from "swr/subscription"
import { usePathname } from "next/navigation"

export default function WSSection({ startId }: { startId: number }) {
  const pathname = usePathname()
  const { data, error } = useSWRSubscription(
    `${pathname}/${startId}`,
    (key, { next }) => {
      const source = new EventSource(key)
      source.addEventListener(
        "message",
        (e: MessageEvent<{ texts: string[] }>) => {
          next(e.data)
        },
      )
      source.addEventListener("error", (e) => {
        // next(e.error)
      })
      return () => source.close()
    },
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <div>WebSocket section</div>
      <div>{data.texts.join("\n")}</div>
    </div>
  )
}
