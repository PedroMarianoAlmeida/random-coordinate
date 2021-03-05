import Link from 'next/link'

const EndPointDocumentation = ({ name, linkPath, generalExplanation, linkEndPoint, parameters }) => {

    return (
        <div className='mt-3 border border-black rounded p-2'>
            <h2 className="text-xl">{name} - <Link href={linkPath}><a className='underline'>Check an example</a></Link></h2>
            <p>{generalExplanation}</p>
            <p>Parameters:</p>

            {parameters ? (
                <table className='w-full px-2 break-words'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 border-b-2 border-secondary-dark text-left leading-4 text-primary tracking-wider'>Name</th>
                            <th className='px-6 py-3 border-b-2 border-secondary-dark text-left leading-4 text-primary tracking-wider'>Description</th>
                            <th className='px-6 py-3 border-b-2 border-secondary-dark text-left leading-4 text-primary tracking-wider'>Values</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parameters.map((parameter => (
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap border-b border-secondary-dark'>
                                    <div className="flex items-center">
                                        <div>
                                            <div className="leading-5">
                                                {parameter.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className='px-6 py-4 whitespace-no-wrap border-b border-secondary-dark'>
                                    <div className="flex items-center">
                                        <div>
                                            <div className="leading-5">
                                                {parameter.explanation}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className='px-6 py-4 whitespace-no-wrap border-b border-secondary-dark'>
                                    <div className="flex items-center">
                                        <div>
                                            <div className="leading-5">
                                                {parameter.format}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )))}
                    </tbody>



                </table>
            ) : (
                    <p>
                        None
                    </p>
                )}

            <div className='my-3'>
                <h3 className="my-2">Endpoint example</h3>
                <code className='bg-black p-2 text-white break-all text-left flex-initial'>
                    {linkEndPoint}{parameters ? '/=?' : ''}{parameters?.map((parameter) => <span>&<span className='text-green-300'>{parameter.name}</span>=<span className='text-red-300'>{parameter.example}</span></span>)}
                </code>
            </div>
        </div>
    );
}

export default EndPointDocumentation;