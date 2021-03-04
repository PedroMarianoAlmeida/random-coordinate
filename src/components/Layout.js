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
            <div style={{ height: "64px" }}>
                <Header pages={pages}/>
            </div>
            <div className='p-4 align-middle bg-secondary-light text-terciary-dark' style={{ minHeight: 'calc(100vh - 114px)' }}>
                {main}
            </div>
            <div style={{ height: "50px" }}>
                <Footer />
            </div>
        </div>
      );
}
 
export default Layout;