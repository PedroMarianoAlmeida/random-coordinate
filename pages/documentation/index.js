import Seo from '../../src/components/Seo';

const Documentation = () => {
    return (
        <>
            <Seo 
                title={'Dummy Coordinate | Documentation'}
                description={'How to use the Dummy Coordinate web API'}
            />
            <h1 className="text-4xl">Documentation: End Points</h1>

            <div className='mt-3 border border-black rounded p-2'>
                <h2 className="text-xl">Anywhere</h2>
                <p>Return a random coordenate</p>
                <h3 className="mt-1">Endpoint</h3>
                <code className='break-all'>https://dummy-coordinate.vercel.app/api/random/anywhere</code>
            </div>

            <div className='mt-3 border border-black rounded p-2'>
                <h2 className="text-xl">Origin point</h2>
                <p>Return a coordenate based on one input coordenate and the reach</p>
                <p>Parameters:</p>
                <ul className='ml-3'>
                    <li>latitude: A number between -90 and 90</li>
                    <li>longitude: A number between -180 and 180</li>
                    <li>reach: The distance of the origin point in kilometers (the values is in the square are based the center in the origin point)</li>
                </ul>
                <h3 className="mt-1">Endpoint example</h3>
                <code className='break-all'>https://dummy-coordinate.vercel.app/api/random/origin-point/=?&latitude=<strong>25</strong>&longitude=<strong>50</strong>&reach=<strong>200</strong></code>
            </div>

            <div className='mt-3 border border-black rounded p-2'>
                <h2 className="text-xl">Current Position</h2>
                <p>Return a coordenate based on your current coordenate and the reach</p>
                <p>Note: The first time that you use it will a window where you have to allow this website check your position</p>
                <p>Parameters:</p>
                <ul className='ml-3'>
                    <li>reach: The distance of the origin point in kilometers (the values is in the square are based the center in the origin point)</li>
                </ul>
                <h3 className="mt-1">Endpoint example</h3>
                <code className='break-all'>https://dummy-coordinate.vercel.app/current-position/=?&reach=<strong>150</strong></code>
            </div>

            <div className='mt-3 border border-black rounded p-2'>
                <h2 className="text-xl">By Local Name</h2>
                <p>Return a coordenate based on your current coordenate and the reach</p>
                <p>Note: The first time that you use it will a window where you have to allow this website check your position</p>
                <p>Parameters:</p>
                <ul className='ml-3'>
                    <li>address: The name of the reference position</li>
                    <li>reach: The distance of the origin point in kilometers (the values is in the square are based the center in the origin point)</li>
                    <li>googleCloudKey: A google cloud key whih authorization to run GEOCODE</li>
                </ul>
                <h3 className="mt-1">Endpoint example</h3>
                <code className='break-all'>https://dummy-coordinate.vercel.app/api/random/by-local-name/=?&addres=<strong>Rio de Janeiro</strong>&reach=<strong>150</strong>&googleCloudKey=<strong>YOUR_KEY</strong></code>
            </div>



        </>


    );
}

export default Documentation;