import Header from './Header';
import Footer from './Footer';

const pages = [
    {name: 'Home', path:'/'},
    {name: 'Documentation', path:'/documentation'},
    {name: 'Your Coordinate', path:'/your-coordinate'},
]

const Layout = ({main}) => {
    return (
        <div>
            <Header pages={pages}/>
            <div className='p-4 align-middle bg-secondary-light text-terciary-dark'>
                {main}
            </div>
            <Footer />
        </div>
      );
}
 
export default Layout;