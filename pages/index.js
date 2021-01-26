import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>not Gymnasium Cäcilienschule Oldenburg</title>
      </Head>
      <div class="flex h-screen justify-center items-center bg-blue-500">
        <div class="text-center m-2">
          <div className="bg-blue-800 text-white p-4 rounded">
            <h1 class="text-4xl">not Gymnasium Cäcilienschule Oldenburg</h1>
          </div>
          <div className="text-blue-300 m-2">
            <Link href="/beta">
              beta
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
