import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-textPrimary transition-colors duration-300"
            : "text-textSecondary hover:text-textPrimary transition-colors duration-300";

    const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-accent text-xl font-bold transition-colors block py-2 duration-300"
            : "text-textSecondary text-xl hover:text-textPrimary transition-colors block py-2 duration-300";

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    }

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-md bg-white/10 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
                <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300" onClick={closeMenu}>
                    <img src="/assets/img/logo-gb.png" alt="GB Logo" className="h-8 w-auto rounded-sm" />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <NavLink to="/" className={linkClasses}>Home</NavLink>
                    <NavLink to="/achievements" className={linkClasses}>Achievements</NavLink>
                    <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
                    <NavLink to="/experiences" className={linkClasses}>Experiences</NavLink>
                    <NavLink to="/about" className={linkClasses}>About</NavLink>
                </div>

                <a href="https://www.linkedin.com/in/gunawan-busyaeri/" target="_blank" rel="noopener noreferrer"
                    className="bg-accent hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-md shadow-accent/20 hidden md:inline-flex">
                    Get In Touch
                </a>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-textPrimary p-2 z-50 focus:outline-none">
                    <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-lg font-medium transition-all duration-300 z-40 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <NavLink to="/" className={mobileLinkClasses} onClick={closeMenu}>Home</NavLink>
                <NavLink to="/achievements" className={mobileLinkClasses} onClick={closeMenu}>Achievements</NavLink>
                <NavLink to="/projects" className={mobileLinkClasses} onClick={closeMenu}>Projects</NavLink>
                <NavLink to="/experiences" className={mobileLinkClasses} onClick={closeMenu}>Experiences</NavLink>
                <NavLink to="/about" className={mobileLinkClasses} onClick={closeMenu}>About</NavLink>

                <a href="https://www.linkedin.com/in/gunawan-busyaeri/" target="_blank" rel="noopener noreferrer"
                    className="bg-accent hover:bg-red-600 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 shadow-md shadow-accent/20 mt-4">
                    Get In Touch
                </a>
            </div>
        </>
    );
};

export default Navbar;
