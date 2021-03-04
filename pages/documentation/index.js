import Seo from '../../src/components/Seo';

import EndPointDocumentation from './../../src/components/EndPointDocumentation';

const endPointDocumentationData = [
    //Anywhere
    {
        name: 'Random Anywhere',
        linkPath: '/documentation/random-anywhere',
        linkEndPoint: 'https://dummy-coordinate.vercel.app/api/random/anywhere',
        generalExplanation: 'Return a random coordenate',
    },
    
    //Random Circular Origin Point
    {
        name: 'Random Circular Origin Point',
        linkPath: '/documentation/random-circular-origin-point',
        linkEndPoint: 'https://dummy-coordinate.vercel.app/api/random/circular/origin-point',
        generalExplanation: 'Return a coordenate based on one input coordenate and the radius limit',
        parameters: [
            {
                name: 'latitude',
                explanation: 'The origin latitude',
                format: 'A number between -90 and +90',
                example: '25'
            },
            {
                name: 'longitude',
                explanation: 'The origin longitude',
                format: 'A number between -180 and +180',
                example: '50'
            },
            {
                name: 'maxDistance',
                explanation: 'The maximum distance between the coordenate and the origin point',
                format: `A number and a unit "km" or "miles"`,
                example: '200miles'
            },            
        ]
    },

    //Random Circular By Local Name
    {
        name: 'Random Circular By Local Name',
        linkPath: '/documentation/random-circular-by-local-name',
        linkEndPoint: 'https://dummy-coordinate.vercel.app/api/random/circular/by-local-name',
        generalExplanation: 'Return a coordenate based on your current coordenate and the radius limit. Note: The first time that you use it will a window where you have to allow this website check your position',
        parameters: [
            {
                name: 'addres',
                explanation: 'The address/city refernce to be in reference center',
                format: 'Text',
                example: 'Rio de Janeiro'
            },
            {
                name: 'googleCloudKey',
                explanation: 'The google cloud key that allows the search (with geocode enabled)',
                format: 'A text',
                example: 'xchodsopdskh'
            },
            {
                name: 'maxDistance (NEED TO CHANGE THE API CODE)',
                explanation: 'The maximum distance of the origin point',
                format: `A number and a unit "km" or "miles"`,
                example: '100km'
            },
        ]
    },

    //Tracking Circular Origin Point
    {
        name: 'Tracking Circular Origin Point',
        linkPath: '/documentation/tracking-circular-origin-point',
        linkEndPoint: 'https://dummy-coordinate.vercel.app/api/tracking/circular/origin-point/',
        generalExplanation: 'Return a moving coordenate based on your current coordenate and the radius',
        parameters: [
            {
                name: 'latitude',
                explanation: 'The origin latitude',
                format: 'A number between -90 and +90',
                example: '25'
            },
            {
                name: 'longitude',
                explanation: 'The origin longitude',
                format: 'A number between -180 and +180',
                example: '50'
            },
            {
                name: 'radius',
                explanation: 'The distance of the origin (the point will be allways at the same distance, only changing the position)',
                format: `A number and a unit "km" or "miles"`,
                example: '100km'
            },
            {
                name: 'velocity',
                explanation: `The velocity in your distance unit per hour that this point will 'run'`,
                format: `A number`,
                example: '200'
            },
        ]
    },

    //Random Circular Current Position
    {
        name: 'Random Circular Current Position',
        linkPath: '/documentation/random-circular-by-local-name',
        linkEndPoint: 'https://dummy-coordinate.vercel.app/current-position',
        generalExplanation: 'Return a coordenate based on your current coordenate and the radius limit. Note: The first time that you use it will a window where you have to allow this website check your position',
        parameters: [
            {
                name: 'addres',
                explanation: 'The address/city refernce to be in reference center',
                format: 'Text',
                example: 'Rio de Janeiro'
            },
            {
                name: 'googleCloudKey',
                explanation: 'The google cloud key that allows the search (with geocode enabled)',
                format: 'A text',
                example: 'xchodsopdskh'
            },
            {
                name: 'maxDistance (NEED TO CHANGE THE API CODE)',
                explanation: 'The maximum distance of the origin point',
                format: `A number and a unit "km" or "miles"`,
                example: '100km'
            },
        ]
    },

]
const Documentation = () => {
    return (
        <>
            <Seo 
                title={'Dummy Coordinate | Documentation'}
                description={'How to use the Dummy Coordinate web API'}
            />
            <h1 className="text-4xl">Documentation: End Points</h1>

            {endPointDocumentationData.map((item) => (
                <EndPointDocumentation 
                    key={item.name}
                    name={item.name}
                    linkPath={item.linkPath}
                    linkEndPoint={item.linkEndPoint}
                    parameters={item.parameters}
                    generalExplanation={item.generalExplanation}
                />
            ))}

            <div className='mt-3 border border-black rounded p-2'>
                <h2 className="text-xl">Random Current Position</h2>
                <p>Return a coordenate based on your current coordenate and the reach</p>
                <p>Note: The first time that you use it will a window where you have to allow this website check your position</p>
                <p>Parameters:</p>
                <ul className='ml-3'>
                    <li>reach: The distance of the origin point in kilometers (the values is in the square are based the center in the origin point)</li>
                </ul>
                <h3 className="mt-1">Endpoint example</h3>
                <code className='break-all'>https://dummy-coordinate.vercel.app/current-position/=?&reach=<strong>150</strong></code>
            </div>
        </>


    );
}

export default Documentation;