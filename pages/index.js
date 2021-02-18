import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dummy Coordinate | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          <h1 className="text-base text-primary font-semibold tracking-wide uppercase">
            Dummy Coordinate web API
          </h1>

          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Test fast your application that uses latitude and longitude
          </h2>

          <ul className="mt-4 max-w-2xl text-2xl text-secondary-dark mx-auto">
            <li>No instalation</li>
            <li>Simple request</li>
            <li>Free</li>
            <li>Open Source</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
