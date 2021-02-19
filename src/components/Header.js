import { useState } from 'react';
import Link from 'next/link';

const FormatedLinks = ({page, stylingClasses}) => {
    return (
        <Link href={page.path} >
            <a className={stylingClasses}>
                {page.name}
            </a>
        </Link>
    )
}

const NonResponsiveLink = ({ page }) => {
    const stylingNonResponsive = 'text-white hover:bg-primary hover:text-5xl px-3 py-2 rounded-md text-sm font-medium';
    return <FormatedLinks page={page} stylingClasses={stylingNonResponsive} />
}

const ResponsiveLink = ({ page }) => {
    const stylingResponsive = 'text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium';
    return <FormatedLinks page={page} stylingClasses={stylingResponsive} />
}

const Header = ({ pages }) => {
    const [showResposiveMenu, setShowResponsiveMenu] = useState(false);

    return (
        <div>
            <nav className="bg-terciary-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-white">
                                <Link href='/'><div>Dummy Coordinate</div></Link>
                            </div>

                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {pages.map(page => <NonResponsiveLink page={page} key={page.name} />)}
                            </div>
                        </div>

                        <div onClick={() => setShowResponsiveMenu(!showResposiveMenu)} className="-mr-2 flex md:hidden">

                            <button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary outline-none ring-0 ring-offset-2 ring-offset-secondary-dark">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6 text-secondary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="md:hidden">
                    <div className={`${!showResposiveMenu && 'hidden'} px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
                        {pages.map(page => (
                            <div key={page.name} onClick={() => setShowResponsiveMenu(false)}>
                                <ResponsiveLink page={page}/>
                            </div>
                        ))}
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Header;