import Header from './Header';
import Footer from './Footer';

const Layout = ({main}) => {
    return (
        <div>
            <Header />
            {main}
            <Footer />
        </div>
      );
}
 
export default Layout;