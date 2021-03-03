import Link from 'next/link'

const EndPointDocumentation = ({ name, linkPath, generalExplanation, linkEndPoint, parameters }) => {

    console.log(name, linkPath, generalExplanation, linkEndPoint, parameters);

    return (
        <div className='mt-3 border border-black rounded p-2'>
            <h2 className="text-xl">{name} - <Link href={linkPath}><a className='underline'>Check an example</a></Link></h2>
            <p>{generalExplanation}</p>
            <p>Parameters:</p>
            <ul className='ml-3'>
                {parameters ? (
                    parameters.map((parameter) => (
                        <li key={parameter.name}>
                            {parameter.name}: {parameter.explanation}: {parameter.format}
                        </li>
                    )))
                    : 'None'
                }
            </ul>
            <h3 className="mt-1">Endpoint example</h3>
            <code className='break-all'>
                {linkEndPoint}{parameters ? '/=?' : ''}{parameters?.map((parameter) => <span>&{parameter.name}=<strong>{parameter.example}</strong></span>)}
            </code>
        </div>
    );
}

export default EndPointDocumentation;