function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode("One")
  await sleep(200)
  yield encoder.encode("Two")
  await sleep(200)
  yield encoder.encode("Three")
}

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const url = new URL(request.url)
  const id = url.pathname.split("/")[2]
  const start = url.pathname.split("/")[3]

  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();
  // write foo 3 times, once every second
  await writer.write(encoder.encode("foo"));


  return new Response(responseStream.readable, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Connection: "keep-alive",
    },
  })
}
