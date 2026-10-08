import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    iconClass: string;
    linkTo?: string;
    isExternal?: boolean;
    linkText?: string;
    customLinks?: React.ReactNode;
}

const ProjectCard = ({ title, description, imageSrc, iconClass, linkTo = "#", isExternal = false, linkText = "View Case Study", customLinks }: ProjectCardProps) => {
    const cardContent = (
        <>
            <div className="w-full h-48 md:h-56 overflow-hidden relative">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 backdrop-blur-md border border-accent/30 flex items-center justify-center text-accent">
                        <i className={`ph ${iconClass} text-xl`}></i>
                    </div>
                </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-3 flex-grow justify-between">
                <div>
                    <h3 className="text-2xl font-bold font-outfit text-textPrimary group-hover:text-accent transition-colors duration-300">{title}</h3>
                    <p className="text-textSecondary text-sm leading-relaxed mt-2">{description}</p>
                </div>
                {customLinks ? (
                    <div className="flex flex-col gap-2 mt-4">
                        {customLinks}
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-300">
                            {linkText} <i className="ph ph-arrow-right"></i>
                        </div>
                    </div>
                )}
            </div>
        </>
    );

    const className = "group block bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 shadow-lg";

    // If there's no main link to wrap the card, just render a div
    if (linkTo === "#" && customLinks) {
         return (
             <div className={className}>
                 {cardContent}
             </div>
         );
    }

    if (isExternal) {
        return (
            <a href={linkTo} target="_blank" rel="noopener noreferrer" className={className}>
                {cardContent}
            </a>
        );
    }

    return (
        <Link to={linkTo} className={className}>
            {cardContent}
        </Link>
    );
};

export default ProjectCard;
