"use client"
import { Button } from "@/components/ui/button"
// import { useEffect, useRef } from 'react'
// import { FFmpeg, createFFmpeg } from '@ffmpeg/ffmpeg'
import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone } from "@uploadthing/react";
import { ArrowUpFromLine } from "lucide-react"

// function useFFmpeg() {
// const ref = useRef<FFmpeg>()
// useEffect(() => {
//   async function initFFmpeg() {
//     if (ref.current) {
//       return
//     }
//     ref.current = createFFmpeg({
//       log: true, corePath: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core'
//     })
//     ref.current.setProgress(({ ratio }) => {
//       console.log(ratio)
//     })
//     await ref.current.load()
//   }
//   initFFmpeg()
// }, [])
// return ref.current
// }

export default function Upload() {
  return (
    <>
    <Button>
      <ArrowUpFromLine className="w-4 h-4 mr-4" />
      Upload
    </Button>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <UploadDropzone<any>
        endpoint="withoutMdwr"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  )
}
