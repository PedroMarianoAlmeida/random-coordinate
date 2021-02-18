const Contribute = () => {
    return (
        <>
            <p>Current demands</p>
            <ul className='pl-4'>
                <li className="my-1">Fix the navbar (it is a customized Tailwind with React state component)</li>
                <li className="my-1">Documentation page: Some of customized Tailwind classes doesn't work too</li>
                <li className="my-1">Strech the body to fill all the high of page (with Tailwind)</li>
                <li className="my-1">A better way to get the current location (whithout require that the user open the browser and accept share your location)</li>
                <li className="my-1">New feature: A endpoint with one coordenate that change position every minture (but the new location need to be close than the previus one</li>
            </ul>

            <a href="https://github.com/PedroMarianoAlmeida/random-coordinate" target="_blank">
                Check the code herer
            </a>
        </>
    );
}

export default Contribute;