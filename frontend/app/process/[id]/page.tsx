import AudioPlayer from "@/features/audio-player"
import z from 'zod'
import WSSection from "@/features/ws-section"

const schema = z.object({
  params: z.object({
    id: z.string()
  })
})

type PageParams = z.infer<typeof schema>

const outputSchema = z.object({
  finished: z.boolean(),
  texts: z.array(z.string()),
  startId: z.number()
})

async function getHTTPText(id: string): Promise<z.infer<typeof outputSchema>> {
  return Promise.resolve({
    finished: false,
    texts: ["hi", "http"],
    startId: 2
  })
}

export default async function Page({ params }: PageParams) {
  const data = await getHTTPText(params.id)
  const finishedProcess = data.finished
  return <>
    <div className='w-screen h-screen flex justify-center flex-col items-center p-24'>
      <AudioPlayer />
      <div>
        Streaming text output
        <div>
          <div>
            HTTP section
          </div>
          <div>
            {data.texts.join("\n")}
          </div>
          {!finishedProcess && <WSSection startId={data.startId}></WSSection>}
        </div>
      </div>
    </div>
  </>
}