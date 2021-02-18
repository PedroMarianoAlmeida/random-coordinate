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

          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Quickiest and easyiest way to get a coordenate
          </h2>

          <ul className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            <li>No instalation</li>
            <li>Simple request</li>
            <li>For free</li>
            <li>Open Source</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
