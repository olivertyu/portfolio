import { useEffect, useState } from "react";
import './App.css';

function ProjectContainer({ project }) {
    const [displayedProject, setDisplayedProject] = useState(project);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const fadeOut = setTimeout(() => {
            setIsVisible(false);
        }, 0);

        const changeProject = setTimeout(() => {
            setDisplayedProject(project);
            setIsVisible(true);
        }, 250);

        return () => {
            clearTimeout(fadeOut);
            clearTimeout(changeProject);
        };
    }, [project]);

    const {
        id,
        image,
        description,
        tags,
        disclaimer,
        linkBtn,
        githubBtn,
        link,
        github,
    } = displayedProject;

    return (
        <div className={`project-container ${isVisible ? 'fade-in' : 'fade-out'}` }
             style={{
            color: `var(--${displayedProject.id}-text)`
        }}>

            <div className="tech-icon-container">
                {/* tags/icons later */}
            </div>

            <img
                src={image}
                alt={`${id} logo`}
                style={{ height: '80px' }}
            />

            <div className="tags flex-horizontal gap-10">
                {tags.map((tag) => (
                    <span key={tag} className="tag" style={{ background: `var(--${displayedProject.id}-tag)`, borderColor: `var(--${displayedProject.id})`, color: `var(--${displayedProject.id}-tag-text)` }}>{tag}</span>
                ))}
            </div>

            <div className="flex-vertical gap-50">

                <div id="description-container">
                    <div dangerouslySetInnerHTML={{ __html: description }} />

                    {disclaimer && (
                        <div id="disclaimer">
                            <p>{disclaimer}</p>
                        </div>
                    )}
                </div>

                <div className="flex-horizontal gap-10">
                    <button onClick={() => window.open(link, "_blank")} style={{ color: `var(--${id}-text)`, background: `var(--${id})`, borderColor: `var(--${id})` }}>{linkBtn}</button>

                    {githubBtn !== "NA" && (
                        <button className="hollow" onClick={() => window.open(github, "_blank")} style={{ color: `var(--${id}-text)`, borderColor: `var(--${id})` }}>
                            {githubBtn}
                        </button>
                    )}
                </div>

            </div>

        </div>
    );
}

export default ProjectContainer;