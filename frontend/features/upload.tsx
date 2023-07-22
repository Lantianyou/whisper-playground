"use client"
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'
import { FFmpeg, createFFmpeg } from '@ffmpeg/ffmpeg'

export default function Upload() {
  const ref = useRef<FFmpeg>()
  useEffect(() => {
    async function initFFmpeg() {
      if (ref.current) {
        return
      }
      ref.current = createFFmpeg({
        log: true, corePath: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js'
      })
      ref.current.setProgress(({ ratio }) => {
        console.log(ratio)
      })
      await ref.current.load()
    }
    initFFmpeg()
  }, [])
  return <Button>Upload</Button>
}