const About = () => {
    return (
        <main className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-10">
            {/* About Section */}
            <section className="flex flex-col md:flex-row gap-12 bg-surface rounded-3xl p-8 md:p-12 border border-white/5 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/10 overflow-hidden bg-white/5 flex items-center justify-center shadow-xl">
                        <img src="/assets/img/profile.png" alt="Gunawan Busyaeri" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit">About Me</h2>
                    <p className="text-textSecondary leading-relaxed text-lg">
                        I'm Gunawan Busyaeri, an educator and Head of Software Engineering. I focus on building practical,
                        reliable software for the education sector and beyond.
                    </p>
                    <p className="text-textSecondary leading-relaxed text-lg">
                        My work ranges from mentoring hundreds of vocational students to developing engaging,
                        high-performance applications like Seblak Cihuyy. I enjoy tackling complex engineering problems and
                        delivering straightforward, usable tools.
                    </p>
                    <div className="mt-4">
                        <a href="https://www.linkedin.com/in/gunawan-busyaeri/" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all text-sm font-medium">
                            Let's Talk <i className="ph ph-envelope-simple"></i>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
