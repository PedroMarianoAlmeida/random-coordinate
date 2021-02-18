import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-red-600'>
        <h1>
         H1
        </h1>

        <p>
          Paragraph
          <code >code</code>
        </p>       
      </main>

      <footer >
        Footer
      </footer>
    </div>
  )
}
