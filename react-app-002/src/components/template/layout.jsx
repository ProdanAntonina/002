import { Outlet, Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';

const Layout = () => {
  return (
    <>
       <div className="App">
            <Header></Header>
            
            <main id="page-content">
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    </>
  )
};

export default Layout;