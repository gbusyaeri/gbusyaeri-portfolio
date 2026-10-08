import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="bg-background text-textPrimary relative min-h-screen flex flex-col selection:bg-accent/30 selection:text-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
