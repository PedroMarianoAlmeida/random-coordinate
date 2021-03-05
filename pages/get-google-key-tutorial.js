import Link from 'next/link';

import Seo from '../src/components/Seo';
import tailwindDirective from '../src/tailwindDirective';

const GetGoogleKeyTutorial = () => {
    return (
        <>
            <Seo
                title={'Dummy Coordinate | Google Key Tutorial'}
                description={'Check your current coordenate to use in some endpoint'}
            />

            <h1 className={tailwindDirective.exampleTitle}>Get your Google Key - Tutorial</h1>
            <div className='my-3 flex justify-center'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/5hTlSGD4_zk"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>

            <ul className='list-disc mx-4'>
                <li>In 4:22, search by "Geocoding API", and not the Translator, same thing in 5:41</li>
                <li>This video isn't mine =D</li>
            </ul>

            <div className='my-3 flex justify-center'>
                <Link href='documentation/random-circular-by-local-name'>
                    <a className='border-2 border-primary rounded-full font-bold px-4 py-3 transition duration-300 ease-in-out text-primary hover:bg-primary hover:text-white mr-6 text-center'>
                        Go back to Random Circular by Local Name Endpoint
                    </a>
                </Link>
            </div>
        </>
    );
}

export default GetGoogleKeyTutorial;