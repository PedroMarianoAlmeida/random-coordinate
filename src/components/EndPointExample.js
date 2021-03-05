const EndPointExample = ({endPoint, coordinates, click}) => {
    return (
        <>
            <div className='my-2 text-center md:flex grid'>
                <div className='flex-none'>
                    <button className='border-2 border-primary rounded-full font-bold px-4 py-3 transition duration-300 ease-in-out text-primary hover:bg-primary hover:text-white mr-6' onClick={click}>
                        Call API
                    </button>
                </div>
                <div className='my-2 items-center'>
                    <div className='flex'>
                        <p className='flex-initial mr-2 py-2'>Endpoint:</p>
                        <code className='bg-black p-2 text-white break-all text-left flex-initial'>
                            {`https://dummy-coordinate.vercel.app/${endPoint}`}
                        </code>
                    </div>
                </div>
            </div>

            <div className='my-2 text-center text-secondary-dark font-bold'>
                <span className={coordinates.length === 0 ? 'hidden' : 'break-all'}>Result: {JSON.stringify(coordinates)}</span>
            </div>
        </>
    );
}

export default EndPointExample;