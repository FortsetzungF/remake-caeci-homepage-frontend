import Head from 'next/head'
import Header from './header'
import Navigation from './navigation'
import Banner from './banner'
import Berichte from './berichte'
import Mitteilungen from './mitteilungen'
import Footer from './footer'

const siteTitle = 'not Gymnasium Cäcilienschule Oldenburg'

export default function Layout({ children, home }) {
  return (
    <div className="">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <main className="m-2">
        {/* Header */}
        <Header />

        <div className="grid gap-4 lg:grid-cols-5 xl:grid-cols-7">
          <Navigation className="lg:col-span-1 xl:col-span-1" />
          <Banner className="lg:col-span-4 xl:col-span-6" />
        </div>

        <div className="mb-4 grid gap-4 grid-cols-1 xl:grid-cols-6">
          <Berichte className="col-span-1 xl:col-span-4" />
          <Mitteilungen className="col-span-1 xl:col-span-2" />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
