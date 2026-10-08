import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <main className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-10">
            {/* Projects Section */}
            <section className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit">All Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project: Rusunawa */}
                    <ProjectCard
                        title="Rusunawa: Mimpi Edition"
                        description="An atmospheric horror and puzzle game where players are trapped in a nightmare controlled by a child spirit. Navigate a tense, labyrinthine haunted apartment complex in the dark to find the single door that leads to survival."
                        imageSrc="/assets/img/rusunawa.jpeg"
                        iconClass="ph-ghost"
                        linkTo="https://drive.google.com/file/d/1Txet3m15Sc3_zd5ZeZUDmLxJGFepeSn0/view"
                        isExternal={true}
                        linkText="Explore Case"
                    />

                    {/* Project: Karaventure */}
                    <ProjectCard
                        title="Karaventure"
                        description="A Roblox and AI-powered platform bringing Karawang's cultural heritage to life through interactive virtual learning."
                        imageSrc="/assets/img/karaventure.png"
                        iconClass="ph-game-controller"
                        linkTo="#"
                        customLinks={
                            <>
                                <a href="https://senior-robina-himarpl-f0a49bc9.koyeb.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-300 hover:underline">
                                    Karaventure Website <i className="ph ph-arrow-right"></i>
                                </a>
                                <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-300">
                                    Karaventure Roblox <i className="ph ph-arrow-right"></i>
                                </div>
                            </>
                        }
                    />

                    {/* Project: Semprong Ceria */}
                    <ProjectCard
                        title="Semprong Ceria"
                        description="A heartwarming slice-of-life business simulator. Guide Asep, an ambitious high school graduate from a humble family, as he manages a roadside shop to achieve his dream of becoming a master semprong entrepreneur."
                        imageSrc="/assets/img/semprong.png"
                        iconClass="ph-storefront"
                        linkTo="#"
                        linkText="Explore Case"
                    />

                    {/* Project: Leumpang */}
                    <ProjectCard
                        title="Leumpang (In Development)"
                        description="An innovative Roblox experience recreating Karawang's Singaperbangsa Stadium. This ongoing project bridges physical fitness and the metaverse by seamlessly integrating real-world sports tracking with virtual gameplay."
                        imageSrc="/assets/img/leumpang.jpeg"
                        iconClass="ph-sneaker"
                        linkTo="#"
                        linkText="View Project"
                    />

                    {/* Project: Seblak Cihuyy */}
                    <ProjectCard
                        title="Seblak Cihuyy"
                        description="A fast-paced time-management game celebrating Indonesian street food culture. Players are challenged to run a bustling Seblak stall, mastering complex customer orders and extreme spice levels under pressure."
                        imageSrc="/assets/img/seblak.png"
                        iconClass="ph-fire"
                        linkTo="#"
                        linkText="Explore Case"
                    />

                    {/* Project: Sorai */}
                    <ProjectCard
                        title="Sorai (In Development)"
                        description="Inspired by titles like Coffee Talk, Sorai is a cozy visual novel that celebrates local Indonesian culture. Players step into the role of a traditional stall owner, conversing with patrons and influencing their personal storylines exclusively through the art of customizing and cooking the perfect surabi."
                        imageSrc="/assets/img/sorai.jpg"
                        iconClass="ph-coffee"
                        linkTo="#"
                        linkText="View Project"
                    />

                    {/* Project: Brewek */}
                    <ProjectCard
                        title="Brewek"
                        description="A digital simulator that brings a beloved local card game to the virtual space. Engineered with realistic card physics, real-time matchmaking, and authentic mechanics to preserve the traditional tabletop experience online."
                        imageSrc="/assets/img/brewek.png"
                        iconClass="ph-cards"
                        linkTo="https://www.roblox.com/games/90229198050659/Brewek"
                        isExternal={true}
                        linkText="View Project"
                    />

                    {/* Project: Kangru (Akang Guru) */}
                    <ProjectCard
                        title="Kangru (Akang Guru)"
                        description="An AI-powered career mapping application tailored to MBTI personality profiles. The platform empowers students and fresh graduates by aligning their unique psychological traits with optimized industry pathways and personalized mentorship."
                        imageSrc="/assets/img/kangru.jpeg"
                        iconClass="ph-briefcase"
                        linkTo="#"
                        linkText="View Project"
                    />

                    {/* Project: Karawang Voice Map */}
                    <ProjectCard
                        title="Karawang Voice Map"
                        description="Interactive audio map of local culture and stories."
                        imageSrc="/assets/img/kv.png"
                        iconClass="ph-map-pin"
                        linkTo="https://www.roblox.com/share?code=a42ca2e5b3e36d48b16a1b91db2dce1b&type=ExperienceDetails&stamp=1790562198126"
                        isExternal={true}
                        linkText="View Project"
                    />
                </div>
            </section>
        </main>
    );
};

export default Projects;
