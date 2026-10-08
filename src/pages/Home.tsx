import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    const nameToType = "Gunawan";
    const [typedText, setTypedText] = useState("");
    
    useEffect(() => {
        let i = 0;
        let isDeleting = false;
        let timeout: ReturnType<typeof setTimeout>;

        const typeWriter = () => {
            if (!isDeleting && i < nameToType.length) {
                setTypedText(nameToType.substring(0, i + 1));
                i++;
                timeout = setTimeout(typeWriter, 100);
            } else if (isDeleting && i > 0) {
                setTypedText(nameToType.substring(0, i - 1));
                i--;
                timeout = setTimeout(typeWriter, 50);
            } else {
                isDeleting = !isDeleting;
                timeout = setTimeout(typeWriter, isDeleting ? 3000 : 500);
            }
        };

        timeout = setTimeout(typeWriter, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <main className="flex-grow pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-24 lg:gap-32">

            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto pt-8 md:pt-16">

                {/* Left Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-3/5 gap-6">
                    {/* Eyebrow */}
                    <p className="text-accent font-medium tracking-wide uppercase text-sm">
                        Software Engineer and Game Developer
                    </p>

                    {/* Headline */}
                    <h1
                        className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-outfit leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
                        Hi, I'm <br/>
                        <span>{typedText}</span><span className="animate-custom-blink">|</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-textSecondary font-poppins leading-relaxed max-w-lg">
                        I build software that scales and experiences that teach.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 w-full">
                        <Link to="/projects"
                            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-textPrimary text-background font-semibold hover:bg-white/90 transition-colors">
                            See What I've Built
                        </Link>
                        <a href="https://www.linkedin.com/in/gunawan-busyaeri/" target="_blank" rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-textPrimary font-medium hover:bg-white/10 transition-colors">
                            Let's Collaborate
                        </a>
                    </div>
                </div>

                {/* Right Profile Photo */}
                <div className="lg:w-2/5 flex justify-center lg:justify-end w-full relative mt-12 lg:mt-0">
                    {/* Glowing background blob */}
                    <div
                        className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-red-600/30 blur-3xl rounded-full transform -translate-y-4">
                    </div>

                    {/* Photo Card */}
                    <div
                        className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2.5rem] border border-white/10 overflow-hidden bg-surface shadow-2xl group">
                        <img src="/assets/img/profile.png"
                            alt="Gunawan Busyaeri"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                        {/* Bottom overlay gradient */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90">
                        </div>

                        {/* Floating Glassmorphism Nameplate */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div
                                className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between group-hover:bg-white/20 transition-colors duration-300">
                                <div className="text-left">
                                    <p className="text-white font-bold font-outfit text-lg">Gunawan Busyaeri</p>
                                    <p className="text-white/70 text-xs mt-0.5">Software Engineer</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                                    <i className="ph ph-sparkle text-lg"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Snapshot (Bento Grid) */}
            <section className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit">Impact Snapshot</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div
                        className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-center items-start gap-4 min-h-[180px] group">
                        <div
                            className="p-3 rounded-2xl bg-white/5 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                            <i className="ph ph-trophy text-2xl"></i>
                        </div>
                        <div>
                            <h3
                                className="text-3xl font-bold font-outfit mb-1 group-hover:text-accent transition-colors duration-300">
                                150+</h3>
                            <p className="text-sm font-medium text-textPrimary mb-1">AI Apps in 8 Hours</p>
                            <p className="text-xs text-textSecondary">Guinness World Record Participant</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-center items-start gap-4 min-h-[180px] group">
                        <div
                            className="p-3 rounded-2xl bg-white/5 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                            <i className="ph ph-eye text-2xl"></i>
                        </div>
                        <div>
                            <h3
                                className="text-3xl font-bold font-outfit mb-1 group-hover:text-accent transition-colors duration-300">
                                100,000+</h3>
                            <p className="text-sm font-medium text-textPrimary mb-1">Visits</p>
                            <p className="text-xs text-textSecondary">Virtual Communities & Metaverse</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-center items-start gap-4 min-h-[180px] group">
                        <div
                            className="p-3 rounded-2xl bg-white/5 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                            <i className="ph ph-users text-2xl"></i>
                        </div>
                        <div>
                            <h3
                                className="text-3xl font-bold font-outfit mb-1 group-hover:text-accent transition-colors duration-300">
                                500+</h3>
                            <p className="text-sm font-medium text-textPrimary mb-1">Students</p>
                            <p className="text-xs text-textSecondary">Vocational Tech Mentorship</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div
                        className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-center items-start gap-4 min-h-[180px] group">
                        <div
                            className="p-3 rounded-2xl bg-white/5 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                            <i className="ph ph-trend-up text-2xl"></i>
                        </div>
                        <div>
                            <h3
                                className="text-3xl font-bold font-outfit mb-1 group-hover:text-accent transition-colors duration-300">
                                Top 10</h3>
                            <p className="text-sm font-medium text-textPrimary mb-1">Seblak Cihuyy</p>
                            <p className="text-xs text-textSecondary">Finalist Compfest 16</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Teaser */}
            <section className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProjectCard 
                        title="Kangru (AI Career)" 
                        description="Career guidance and mentorship platform using AI." 
                        imageSrc="/assets/img/kangru.jpeg" 
                        iconClass="ph-briefcase" 
                        linkTo="/projects" 
                    />
                    <ProjectCard 
                        title="Karawang Voice Map" 
                        description="Interactive audio map of local culture and stories." 
                        imageSrc="/assets/img/kv.png" 
                        iconClass="ph-map-pin" 
                        linkTo="https://www.roblox.com/share?code=a42ca2e5b3e36d48b16a1b91db2dce1b&type=ExperienceDetails&stamp=1790562198126" 
                        isExternal={true}
                    />
                    <ProjectCard 
                        title="Seblak Cihuyy" 
                        description="A fast-paced time-management game challenging players to manage complex orders and extreme spice levels at a bustling Indonesian Seblak stall." 
                        imageSrc="/assets/img/seblak.png" 
                        iconClass="ph-fire" 
                        linkTo="/projects" 
                    />
                </div>

                <div className="flex justify-center mt-4">
                    <Link to="/projects"
                        className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm font-medium flex items-center gap-2 group">
                        View All Projects
                        <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default Home;
