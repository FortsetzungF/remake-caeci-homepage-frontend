import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout></Layout>

      {/* <Head>
        <title>Gymnasium Cäcilienschule Oldenburg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="m-2">
          <div className="bg-blue-800 text-white text-center rounded my-2 p-4">
            <div className="text-3xl">Gymnasium Cäcilienschule Oldenburg</div>
            <div className="text-1xl">unesco-projekt-schule</div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 border-t border-gray-300 absolute inset-x-0 bottom-0">
        <div className="text-center font-mono text-gray-500 p-2">
          © 2021 CÃ¤cilienschule Oldenburg | Design & Technik Tom Springwald
        </div>
      </footer> */}
    </div>
  )
}
