import { isValidElement, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import type { ProjectCardProps } from '../components/ProjectCard';

const Projects = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const projectCards = [
        // Project: AstraKala
        <ProjectCard
            key="astrakala"
            title="Astrakala"
            description="Astrakala is a story-based game that tells the story of a schoolboy who finds something odd at his school. What did he find? Let's continue the journey with us."
            imageSrc="https://img.itch.zone/aW1nLzg0MDgzNjcucG5n/original/ZalTpz.png"
            iconClass="ph-game-controller"
            linkTo="https://pejuangdaring.itch.io/astrakala"
            isExternal={true}
            linkText="Play on itch.io"
        />,
        // Project: Kahuruan
        <ProjectCard
            key="kahuruan"
            title="Kahuruan"
            description="Kahuruan is a fast-paced, mouse-click-based arcade game that tests players' dexterity and reflexes in preserving the forest ecosystem. Playing as a forest ranger, players must juggle two tasks: extinguishing randomly appearing fires and rescuing wildlife falling from the trees before time runs out."
            imageSrc="https://img.itch.zone/aW1hZ2UvNTI0NzUxMC8zMTQ2NDQyOS5wbmc=/347x500/3r41ds.png"
            iconClass="ph-tree"
            linkTo="https://gbusyaeri.itch.io/kahuruan"
            isExternal={true}
            linkText="Play on itch.io"
        />,
        // Project: Rusunawa
        <ProjectCard
            key="rusunawa"
            title="Rusunawa: Mimpi Edition"
            description="An atmospheric horror and puzzle game where players are trapped in a nightmare controlled by a child spirit. Navigate a tense, labyrinthine haunted apartment complex in the dark to find the single door that leads to survival."
            imageSrc="/assets/img/rusunawa.jpeg"
            iconClass="ph-ghost"
            linkTo="https://drive.google.com/file/d/1Txet3m15Sc3_zd5ZeZUDmLxJGFepeSn0/view"
            isExternal={true}
            linkText="Explore Case"
        />,
        // Project: Karaventure
        <ProjectCard
            key="karaventure"
            title="Karaventure"
            description="A Roblox and AI-powered platform bringing Karawang's cultural heritage to life through interactive virtual learning."
            imageSrc="/assets/img/karaventure.png"
            iconClass="ph-game-controller"
            linkTo="#"
            customLinks={
                <>
                    <a href="https://karaventure.up.railway.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-300 hover:underline">
                        Karaventure Website <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="https://www.roblox.com/games/106041739530903/Karaventure" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-300 hover:underline">
                        Karaventure Roblox <i className="ph ph-arrow-right"></i>
                    </a>
                </>
            }
        />,
        // Project: Seblak Cihuyy
        <ProjectCard
            key="seblak-cihuyy"
            title="Seblak Cihuyy"
            description="A fast-paced time-management game celebrating Indonesian street food culture. Players are challenged to run a bustling Seblak stall, mastering complex customer orders and extreme spice levels under pressure."
            imageSrc="/assets/img/seblak.png"
            iconClass="ph-fire"
            linkTo="https://karavan-studios.itch.io/seblak-cihuyy"
            isExternal={true}
            linkText="Play on itch.io"
        />,
        // Project: Brewek
        <ProjectCard
            key="brewek"
            title="Brewek"
            description="A digital simulator that brings a beloved local card game to the virtual space. Engineered with realistic card physics, real-time matchmaking, and authentic mechanics to preserve the traditional tabletop experience online."
            imageSrc="/assets/img/brewek.png"
            iconClass="ph-cards"
            linkTo="https://www.roblox.com/games/90229198050659/Brewek"
            isExternal={true}
            linkText="View Project"
        />,
        // Project: Karawang Voice Map
        <ProjectCard
            key="karawang-voice-map"
            title="Karawang Voice Map"
            description="Interactive audio map of local culture and stories."
            imageSrc="/assets/img/kv.png"
            iconClass="ph-map-pin"
            linkTo="https://www.roblox.com/share?code=a42ca2e5b3e36d48b16a1b91db2dce1b&type=ExperienceDetails&stamp=1790562198126"
            isExternal={true}
            linkText="View Project"
        />,
        // Project: Leumpang
        <ProjectCard
            key="leumpang"
            title="Leumpang (In Development)"
            description="An innovative Roblox experience recreating Karawang's Singaperbangsa Stadium. This ongoing project bridges physical fitness and the metaverse by seamlessly integrating real-world sports tracking with virtual gameplay."
            imageSrc="/assets/img/leumpang.jpeg"
            iconClass="ph-sneaker"
            linkTo="#"
            linkText="View Project"
        />,
        // Project: Sorai
        <ProjectCard
            key="sorai"
            title="Sorai (In Development)"
            description="Inspired by titles like Coffee Talk, Sorai is a cozy visual novel that celebrates local Indonesian culture. Players step into the role of a traditional stall owner, conversing with patrons and influencing their personal storylines exclusively through the art of customizing and cooking the perfect surabi."
            imageSrc="/assets/img/sorai.jpg"
            iconClass="ph-coffee"
            linkTo="#"
            linkText="View Project"
        />,
        // Project: Semprong Ceria
        <ProjectCard
            key="semprong-ceria"
            title="Semprong Ceria (In Development)"
            description="A heartwarming slice-of-life business simulator. Guide Asep, an ambitious high school graduate from a humble family, as he manages a roadside shop to achieve his dream of becoming a master semprong entrepreneur."
            imageSrc="/assets/img/semprong.png"
            iconClass="ph-storefront"
            linkTo="#"
            linkText="View Project"
        />,
        // Project: Kangru
        <ProjectCard
            key="kangru"
            title="Kangru (Akang Guru) - Under Maintenance"
            description="An AI-powered career mapping application tailored to MBTI personality profiles. The platform empowers students and fresh graduates by aligning their unique psychological traits with optimized industry pathways and personalized mentorship."
            imageSrc="/assets/img/kangru.jpeg"
            iconClass="ph-briefcase"
            linkTo="#"
            linkText="View Project"
        />,
    ];
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
    const visibleProjectCards = projectCards.filter((card) => (
        isValidElement<ProjectCardProps>(card)
        && `${card.props.title} ${card.props.description}`.toLocaleLowerCase().includes(normalizedQuery)
    ));

    return (
        <main className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-10">
            {/* Projects Section */}
            <section className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit">All Projects</h2>
                    <div className="relative w-full md:max-w-sm">
                        <label htmlFor="project-search" className="sr-only">Search projects</label>
                        <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary"></i>
                        <input
                            id="project-search"
                            type="search"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="Search projects..."
                            className="w-full rounded-full bg-surface border border-white/10 py-3 pl-11 pr-4 text-sm text-textPrimary placeholder:text-textSecondary focus:outline-none focus:border-accent"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjectCards}
                </div>
                {visibleProjectCards.length === 0 && (
                    <p className="text-textSecondary text-center py-8" role="status">No projects found. Try a different search.</p>
                )}
            </section>
        </main>
    );
};

export default Projects;
