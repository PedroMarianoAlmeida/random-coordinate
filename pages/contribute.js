import Seo from './../src/components/Seo';

const Contribute = () => {
    return (
        <>

            <Seo
                title={'Dummy Coordinate | Contribute'}
                description={'Help the comunity of programmers improving the Dummy Coordinate web API!'}
            />

            <p>Current demands</p>
            <ul className='pl-4'>
                <li className="my-1">Strech the body to fill all the high of page (with Tailwind)</li>
                <li className="my-1">A better way to get the current location (whithout require that the user open the browser and accept share your location)</li>
            </ul>

            <a href="https://github.com/PedroMarianoAlmeida/random-coordinate" target="_blank">
                Check the code here
            </a>
        </>
    );
}

export default Contribute;