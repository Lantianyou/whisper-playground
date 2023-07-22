import Upload from "@/features/upload"
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen w-screen p-24 flex flex-col justify-center items-center">
      <Link href="/process/foo">
        <Upload />
      </Link>
    </div>
  )
}
