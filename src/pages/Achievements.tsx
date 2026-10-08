import { useState } from 'react';

const Achievements = () => {
    const [modalImage, setModalImage] = useState<string | null>(null);

    return (
        <main className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-10">
        
  
        <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-bold font-outfit">Achievements</h2>
            </div>
            
            <div className="flex flex-col gap-6">
                
                <div className="bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col md:flex-row items-stretch">
                    <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto relative overflow-hidden bg-background shrink-0 border-b md:border-b-0 md:border-r border-white/5">
                        <img src="assets/img/achievement_trophy.jpg" alt="Winner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center gap-5 flex-grow">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent border border-white/10 shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                            <i className="ph ph-medal text-3xl"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-outfit mb-3">Winner</h3>
                            <p className="text-textSecondary leading-relaxed">Logo Design Competition for 70th Diplomatic Relations between Bulgaria and Indonesia, Embassy of Bulgaria in Indonesia, February 2026</p>
                            <button onClick={() => setModalImage('assets/img/bulgaria_2.jpg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                                <i className="ph ph-arrows-out-simple"></i> View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-medal text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">AWS AIdeas Global Semifinalist (Top 300)</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Amazon Web Services (2026)<br />Recognized globally for building impactful generative AI solutions bridging advanced cloud technology with real-world applications.</p>
                        <a href="https://builder.aws.com/content/3BrFEOlOyHnmaFXbFtVCoHDs97Q/explore-the-top-300-interactive-directory-for-aideas-semifinalists" target="_blank" className="mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrow-up-right"></i> View Details
                        </a>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-map-pin text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Creator: Karawang Voice Map on Roblox</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Karawang Anniversary (2025)<br />Developed an interactive cultural landmark map with audio storytelling, generating 50,000+ views and viral local engagement.</p>
                        <a href="https://www.roblox.com/share?code=a42ca2e5b3e36d48b16a1b91db2dce1b&type=ExperienceDetails&stamp=1790562198126" target="_blank" className="mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrow-up-right"></i> View Details
                        </a>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-lightbulb text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">PERIODA Innovation Showcase</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Dinas Pendidikan Kabupaten Karawang (2025)<br />Exhibited "Kangru," an AI-powered career mapping application based on MBTI personality profiles.</p>
                        <button onClick={() => setModalImage('assets/img/perioda_sertifikat.jpeg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrows-out-simple"></i> View Details
                        </button>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-users text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Winning Mentor: Terampil di Awan</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Generative AI Innovation (2025)<br />Guided vocational student teams to secure 2nd Place, 3rd Place, and the Innovative Award for AI-powered edtech applications.</p>
                        <button onClick={() => setModalImage('assets/img/awan.jpeg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrows-out-simple"></i> View Details
                        </button>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-desktop text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Top Scorer: AI Website Builder (94.3)</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Talentclass Batch 18<br />Achieved the highest score among 40+ participants, demonstrating advanced proficiency in AI-assisted web development and no-code platforms.</p>
                        <a href="assets/img/websiteAI.pdf" target="_blank" className="mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-file-pdf"></i> View Details
                        </a>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-translate text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Top Scorer: TOEFL (95.9) & IELTS (91.9)</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Talentclass Batches 17 & 18<br />Ranked 1st among 40+ participants in both cohorts, demonstrating advanced English proficiency for international academic and professional standards.</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <a href="assets/img/toefl.pdf" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                                <i className="ph ph-file-pdf"></i> TOEFL
                            </a>
                            <a href="assets/img/ielts.pdf" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                                <i className="ph ph-file-pdf"></i> IELTS
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-chalkboard-teacher text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Supervising Teacher: Lomba Dinamik UPI</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">National UI Web Design Competition (2024)<br />Mentored two students to the national finals through intensive coaching in UI/UX principles, wireframing, and prototyping.</p>
                        <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrows-out-simple"></i> View Details
                        </button>
                    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-figma-logo text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">National Participant: The Ace UI/UX Competition</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Universitas Diponegoro (2024)<br />Competed among 200+ teams in full-cycle user-centered design challenges, including wireframing and usability testing.</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-globe-hemisphere-west text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Participant: FedEx / JA International Trade Challenge</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Indonesia (2024)<br />Engaged in global trade simulation, market analysis, and cross-border business strategy development.</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-medal text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Semifinalist: Compassionate Gamification Challenge</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">2025<br />Advancing among the top teams by designing empathy-driven gamified learning solutions for social impact education.</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-medal text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Finalist (Project Lead & UX Researcher): CITE UP UI/UX Competition</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Universitas Pertamina (2024)<br />Led Team Yume (SMKN 1 Karawang) to the finals in a national UI/UX design competition.</p>
                        <a href="assets/img/citeup.pdf" target="_blank" className=" mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-file-pdf"></i> View Details
                        </a>
                    </div>
                </div>
                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-medal text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">5th & 6th Place (Project Lead & UX Designer): Falcon UI/UX Competition</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Universitas Pelita Harapan (2024)<br />Directed the UX research and UI design for dual projects, 'Haloway' and 'Trabx'.</p>
                        <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrows-out-simple"></i> View Details
                        </button>
                    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-chalkboard-teacher text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Mentor: 3rd National Business Case Competition</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Universitas Satya Negara Indonesia (2024)<br />Guided Team 'Soffia the First' (SMKN 1 Karawang) through intensive business strategy development.</p>
            <button onClick={() => setModalImage('assets/img/businesscase3rd.jpeg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-game-controller text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Finalist: Indie Game Ignite Competition</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">COMPFEST 16, Universitas Indonesia (2024)<br />Showcased 'Seblak Cihuyy: Warisan Rasa' in one of Indonesia's premier national game development events.</p>
                        <a href="assets/img/igi2024.pdf" target="_blank" className=" mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-file-pdf"></i> View Details
                        </a>
                    </div>
                </div>
                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-article text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Participant: Karya Tulis Ilmiah Papedanomics</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Bank Indonesia Papua Barat & Universitas Papua (2024)<br />Contributed to scientific writing and economic research initiatives.</p>
                        <a href="assets/img/papedanomic.pdf" target="_blank" className=" mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-file-pdf"></i> View Details
                        </a>
                    </div>
                </div>
                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-chalkboard-teacher text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Winning Mentor: LKS Graphic Design Technology</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">West Java Provincial Level, Dinas Pendidikan (2023)<br />Mentored student Midori Harahap to secure 2nd Place in a highly competitive regional skills competition.</p>
                        <button onClick={() => setModalImage('assets/img/lks.jpg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrows-out-simple"></i> View Details
                        </button>
                    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-medal text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Grand Finalist: STEAM Innovation Festival</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">AWS & Prestasi Junior Indonesia (2023)<br />Recognized for developing innovative technical solutions using Amazon Web Services.</p>
            <button onClick={() => setModalImage('assets/img/steam.jpg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-medal text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">2nd Place: IoT Competition 4.0</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Fakultas Teknik, Universitas Majalengka (2023)<br />Developed and engineered a 'Smart Door Lock System' project.</p>
            <button onClick={() => setModalImage('assets/img/majalengka.jpg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-medal text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Runner-Up & 1st Runner-Up: AWS Cloud Computing Club</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">AWS Competition (2023)<br />Secured top placements for dual cloud-based projects: 'Ayo Cerita!' and 'Locativy'.</p>
            <button onClick={() => setModalImage('assets/img/awsc4.jpg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-pen-nib text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Top 27 Best Essay: Jabar Future Leaders Scholarship</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Pemerintah Provinsi Jawa Barat (2023)<br />Selected from thousands of applicants for exceptional writing and visionary leadership concepts.</p>
            <button onClick={() => setModalImage('assets/img/isman.jpeg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-medal text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">3rd Contender: Perempuan Inovasi</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Markoding & UNICEF (2022)<br />Recognized in a national innovation program aimed at empowering young women in tech.</p>
            <button onClick={() => setModalImage('assets/img/markoding.jpg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-chalkboard-teacher text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Winning Mentor: FLS2N Poster Design (2nd Place)</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Kabupaten Karawang Level<br />Mentored a student to secure 2nd place in the district-level National Student Art Competition (Festival dan Lomba Seni Siswa Nasional).</p>
            <button onClick={() => setModalImage('assets/img/fls3n.jpeg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
</div >
        </section >

       
        <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-bold font-outfit">Certifications</h2>
            </div>
            
            <div className="flex flex-col gap-6">
                
                <div className="bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col md:flex-row items-stretch">
                    <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto relative overflow-hidden bg-background shrink-0 border-b md:border-b-0 md:border-r border-white/5">
                        <img src="assets/img/achievement_cert.jpg" alt="Certified Technical Educator" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center gap-5 flex-grow">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent border border-white/10 shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                            <i className="ph ph-certificate text-3xl"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-outfit mb-2">Certified Technical Educator</h3>
                            <p className="text-accent text-sm font-medium mb-3">Universitas Negeri Surabaya — Software and Game Development</p>
                            <p className="text-textSecondary leading-relaxed">Post-Graduate Teacher certification demonstrating proficiency in designing and delivering practical learning experiences.</p>
                            <button onClick={() => setModalImage('assets/img/achievement_cert.jpg')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                                <i className="ph ph-arrows-out-simple"></i> View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-certificate text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Graduated with Great Praise from Latsar CPNS</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">BPSDM Pemerintah Provinsi Jawa Barat Nomor: 00039840/LATSAR CPNS III/6100/017/LAN-PEMPPROV JABAR/2021, 2022</p>
                                            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrows-out-simple"></i> View Details
                        </button>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
                        <i className="ph ph-certificate text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="text-base font-bold font-outfit leading-snug">Certified Video Content Creator (VCC)</h4>
                        <p className="text-textSecondary text-xs mt-2 leading-relaxed">Digital Talent Scholarship 2023, Kominfo, Nomor 1945897850-28/TA/BLSDM.Kominfo/2023, 2023</p>
                                            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
                            <i className="ph ph-arrows-out-simple"></i> View Details
                        </button>
                    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Certified Copywriting</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Digital Skills Area, Nomor 0008/DSA/C/122022, 2022</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Certified Google Ads</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Digital Skills Area, Nomor 0006/DSA/GA/122022, 2022</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Certified Facebook & Instagram Ads</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Digital Skills Area, Nomor 0006/DSA/FIA/122022</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Certified Data Science for High School Teacher</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Digital Talent Scholarship 2022, Kominfo, Nomor TA/2022/4157/1464157165101-907, 2022</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Product Management (DSF 30)</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Dibimbing.id, Issued September 2024</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Social Media Analyst</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Government Transformation Academy, Kominfo, No. 19975031320-76, Mar 2024</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">AWS Knowledge: Cloud Essentials</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Amazon Web Services, Jan 2025</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Belajar Dasar AI</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Dicoding Indonesia, No. MEPJQEJ8JX3V, Jan 2025 (exp. Jan 2028)</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Belajar Dasar Manajemen Proyek</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Dicoding Indonesia, No. 81P2LQ9VOZOY, Jan 2025 (exp. Jan 2028)</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >

    <div className="bg-surface rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10 mt-1">
            <i className="ph ph-certificate text-2xl"></i>
        </div>
        <div>
            <h4 className="text-base font-bold font-outfit leading-snug">Introduction to Cybersecurity</h4>
            <p className="text-textSecondary text-xs mt-2 leading-relaxed">Cisco, Jan 2025</p>
            <button onClick={() => setModalImage('')} className="view-details-btn mt-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-colors w-max flex items-center gap-2 text-textPrimary hover:text-accent group-hover:border-white/20">
            <i className="ph ph-arrows-out-simple"></i> View Details
        </button>
    </div>
                </div >
</div >
        </section >


    {/* Image Modal */ }
    < div className = {`fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center transition-opacity duration-300 ${modalImage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick = {() => setModalImage(null)}>
        <div className="relative max-w-4xl max-h-[90vh] p-4 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalImage(null)} className="absolute -top-12 right-0 text-white hover:text-accent transition-colors p-2 z-50">
                <i className="ph ph-x text-3xl"></i>
            </button>
            {modalImage && <img src={modalImage} alt="Achievement Details" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />}
        </div>
            </div >
        </main >
    );
};

export default Achievements;
