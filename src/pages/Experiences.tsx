const Experiences = () => {
    return (
        <main className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-10">
        {/* Header Context */}
        <div className="flex flex-col gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit">Experience & Leadership</h2>
            <p className="text-textSecondary text-lg leading-relaxed max-w-3xl">I believe the best way to understand technology is to build it, and the best way to master it is to teach it. Here is a look at my professional journey across software development, educational leadership, and global tech initiatives.</p>
        </div>
        
        <div className="flex flex-col gap-16 md:gap-20">

            {/* Section: Education */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-lg shadow-accent/5">
                        <i className="ph ph-graduation-cap text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-white">Education</h3>
                </div>
                
                <div className="relative border-l-2 border-white/10 ml-6 pl-8 md:pl-12 flex flex-col gap-10">
                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Post-Graduate Teacher Certification Program, Software and Game Development Specialization</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-student"></i> Universitas Negeri Surabaya, Surabaya, Indonesia
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    Jul 2025 - Dec 2025
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Designed 8+ project-based lesson plans and modular curricula, achieving 95% student engagement in microteaching sessions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Co-created UI/UX assessment rubrics with peer educators through agile feedback cycles, improving evaluation quality by 40% based on mentor metrics.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Bachelor's Degree, Computer Science Education</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-student"></i> Universitas Pendidikan Indonesia, Bandung, Indonesia
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    Sep 2013 - Dec 2017
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Designed and delivered 15+ project-based lesson plans (algorithms, object-oriented programming, UI/UX) during field teaching practice at SMK Pasundan 1 Bandung, achieving 94% average student competency mastery.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Led a 12-member community service team (KKN Posdaya Pagerwangi) that established a waste bank and cultivated 1,000 family medicinal plants, benefiting 120+ households.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Developed interactive learning media as a contributor to the ClubInk Graphic Design Society.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">GPA: 3.48/4.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Education & Technical Leadership */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-lg shadow-accent/5">
                        <i className="ph ph-chalkboard-teacher text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-white">Education & Technical Leadership</h3>
                </div>
                
                <div className="relative border-l-2 border-white/10 ml-6 pl-8 md:pl-12 flex flex-col gap-10">
                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Head of Software Engineering & Educator</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-buildings"></i> SMKN 1 Karawang
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold tracking-wide text-accent whitespace-nowrap self-start">
                                    Sep 2020 – Present
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Redesigned the vocational curriculum to integrate UI/UX design, IoT, and game development, driving a 65% increase in national competition participation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Managed departmental operations for 500+ students and launched innovation programs that yielded 15 national awards and 30+ industry internships.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Technology Mentor & Developer</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-users-three"></i> REEPAL Club
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold tracking-wide text-accent whitespace-nowrap self-start">
                                    Sep 2020 – Present
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Guided 40+ students in full-stack development, deploying an e-voting system adopted by 2,500+ users with 99% uptime.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Established an agile prototyping framework that produced 3 national hackathon finalist teams.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Curriculum Strategist</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-books"></i> MGMP Rekayasa Perangkat Lunak
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    Sep 2020 – 2025
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Spearheaded curriculum mapping with 12 educators, creating a unified teaching framework implemented across 30+ regional schools.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Global Tech Initiatives & AI Integration */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-lg shadow-accent/5">
                        <i className="ph ph-planet text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-white">Global Tech Initiatives & AI Integration</h3>
                </div>
                
                <div className="relative border-l-2 border-white/10 ml-6 pl-8 md:pl-12 flex flex-col gap-10">
                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Think Big Space Coordinator & Keynote</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-cloud"></i> Amazon Web Services (AWS)
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold tracking-wide text-accent whitespace-nowrap self-start">
                                    Oct 2024 – Present
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Manage ASEAN's first AWS-powered Think Big Space Lab, guiding 50+ students through AWS Cloud Practitioner certification pathways.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Delivered technical keynote demonstrations of student cloud projects to AWS global leadership and international delegates.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">AI App Development Lead</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-trophy"></i> Guinness World Records
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    Oct 2025
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Directed 50 students to develop 150+ functional applications within 8 hours using AI coding assistants, securing a world record and elevating national visibility for AI education.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Program Lead & Mentor</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-graduation-cap"></i> AI Ready for ASEAN & Sekolah Gen AI
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    Nov 2025 – Jan 2026
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Facilitated AWS-backed AI literacy training for 40 educators and 500+ students, achieving a 98% completion rate.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Coached top-performing "Gen AI Champions," securing their placements in edtech product development internships.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Industry Collaboration & Event Management */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-lg shadow-accent/5">
                        <i className="ph ph-handshake text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-white">Industry Collaboration & Event Management</h3>
                </div>
                
                <div className="relative border-l-2 border-white/10 ml-6 pl-8 md:pl-12 flex flex-col gap-10">
                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Tech Exhibitor & E-commerce Lead</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-storefront"></i> ATIKAN Jabar & Lazada
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    2023 – 2025
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Led live technical demonstrations of IoT and ERP systems to government officials, securing direct industry partnerships.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Orchestrated a marketplace showcase, equipping 45 students with hands-on e-commerce and digital marketing experience.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Chair of the Organizing Committee</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-medal"></i> LKS, Industrial Visits & Campus Leagues
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    2022 – 2024
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Spearheaded Indonesia’s first vocational-edutainment hybrid program, integrating academic immersion with game industry exposure (Agate International, ITB).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Orchestrated regional tech competitions, e-sports leagues, and industrial visits for 300+ participants with zero logistical disruptions.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Early Career: Operations & Data Management */}
            <section className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-lg shadow-accent/5">
                        <i className="ph ph-database text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-white">Early Career: Operations & Data Management</h3>
                </div>
                
                <div className="relative border-l-2 border-white/10 ml-6 pl-8 md:pl-12 flex flex-col gap-10">
                    {/* Role */}
                    <div className="relative group">
                        <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent -left-[41px] md:-left-[57px] top-6 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(237,59,59,0.5)] transition-all duration-300"></div>
                        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-textPrimary mb-1">Financial Administration & Invoicing</h4>
                                    <p className="text-accent font-medium flex items-center gap-2 text-sm md:text-base">
                                        <i className="ph ph-calculator"></i> PT Tenang Jaya Sejahtera, CV Sangtau Erte, CV Asy-Syifa
                                    </p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-textSecondary whitespace-nowrap self-start">
                                    2018 – 2020
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
                                    <span className="text-textSecondary text-sm md:text-base leading-relaxed">Managed high-volume financial data and automated invoicing workflows across three regional enterprises, consistently maintaining 99.5%+ accuracy and accelerating processing times by up to 40%.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    );
};

export default Experiences;
