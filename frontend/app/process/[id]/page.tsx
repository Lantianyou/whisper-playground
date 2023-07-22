import AudioPlayer from "@/features/audio-player"
import z from "zod"
import WSSection from "@/features/ws-section"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const schema = z.object({
  params: z.object({
    id: z.string(),
  }),
})

type PageParams = z.infer<typeof schema>

const outputSchema = z.object({
  finished: z.boolean(),
  texts: z.array(z.string()),
  startId: z.number(),
})

async function getHTTPText(id: string): Promise<z.infer<typeof outputSchema>> {
  return Promise.resolve({
    finished: false,
    texts: ["hi", "http"],
    startId: 2,
  })
}

export default async function Page({ params }: PageParams) {
  const data = await getHTTPText(params.id)
  const finishedProcess = data.finished
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center p-24">
        <AudioPlayer />
        <div className='w-full p-12'>
          <div className='w-full'>
            <Card>
              <CardHeader>
                <CardTitle>
          Streaming text output
                </CardTitle>
                <CardDescription>
                  Transcript
                </CardDescription>
              </CardHeader>
              <CardContent>
                {data.texts.map((text) => (
                  <p>{text}</p>
                ))}
                {!finishedProcess && (
                  <WSSection startId={data.startId}></WSSection>
                )}
                <CardFooter>
                  <p>
                    {finishedProcess ? "Process finished" : "Process running"}
                  </p>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
