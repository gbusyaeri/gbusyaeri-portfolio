const Footer = () => {
    return (
        <footer className="w-full py-10 mt-auto border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-textSecondary text-sm">© 2026 Gunawan Busyaeri. Built with empathy and code.</p>
                <div className="flex items-center gap-4 text-2xl text-textSecondary">
                    <a href="https://www.linkedin.com/in/gunawan-busyaeri/" target="_blank" rel="noopener noreferrer"
                        className="hover:text-textPrimary transition-colors"><i className="ph ph-linkedin-logo"></i></a>
                    <a href="https://github.com/gbusyaeri" target="_blank" rel="noopener noreferrer" className="hover:text-textPrimary transition-colors"><i className="ph ph-github-logo"></i></a>
                    <a href="https://www.instagram.com/gbusyaeri/" target="_blank" rel="noopener noreferrer" className="hover:text-textPrimary transition-colors"><i className="ph ph-instagram-logo"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
