import Link from 'next/link';

import Seo from './../src/components/Seo';
import tailwindDirective from './../src/tailwindDirective';

export default function Home() {
  return (
    <div>

      <Seo
        title='Dummy Coordinate | Home'
        description='Dummy Coordinate web API, test fast your application that uses latitude and longitude'
      />

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

          <div className='my-10 flex justify-center'>
            <div className='flex justify-center w-1/2'>
              <Link href='documentation/'>
                <a className='border-2 border-primary rounded-full font-bold px-4 py-3 transition duration-300 ease-in-out text-primary hover:bg-primary hover:text-white text-center'>
                  Get Started
                      </a>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
