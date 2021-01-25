import Head from 'next/head'
import Navigation from './navigation'
import Berichte from './berichte'
import Footer from './footer'

const siteTitle = 'Gymnasium Cäcilienschule Oldenburg'

export default function Layout({ children, home }) {
  return (
    <div className="">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <main>
        {/* Header */}
        <div className="bg-blue-800 text-white text-center rounded my-2 p-4">
          <div className="text-3xl">Gymnasium Cäcilienschule Oldenburg</div>
          <div className="text-1xl">unesco-projekt-schule</div>
        </div>

        {/* Container */}
        <div className="grid gap-4 lg:grid-cols-5 xl:grid-cols-7">
          {/* Navigation */}
          <Navigation className="lg:col-span-1 xl:col-span-1" />

          {/* Main Content */}
          <Berichte className="rounde col-span-1 xl:col-span-4 border border-blue-800" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
