//import {useState} from 'react'
import lottie from 'lottie-web'
import {useEffect, useRef, useState} from "react";

import heroAnimation from './assets/hero/hero.json'

import toolkitAfterEffects from './assets/toolkit/toolkit-aftereffects.svg'
import toolkitCSS from './assets/toolkit/toolkit-css.svg'
import toolkitFigma from './assets/toolkit/toolkit-figma.svg'
import toolkitGithub from './assets/toolkit/toolkit-github.svg'
import toolkitGitlab from './assets/toolkit/toolkit-gitlab.svg'
import toolkitHTML from './assets/toolkit/toolkit-html.svg'
import toolkitIllustrator from './assets/toolkit/toolkit-illustrator.svg'
import toolkitJava from './assets/toolkit/toolkit-java.svg'
import toolkitJavascript from './assets/toolkit/toolkit-javascript.svg'
import toolkitNodeJS from './assets/toolkit/toolkit-nodejs.svg'
import toolkitPhotoshop from './assets/toolkit/toolkit-photoshop.svg'
import toolkitPython from './assets/toolkit/toolkit-python.svg'
import toolkitReact from './assets/toolkit/toolkit-react.svg'
import toolkitScenebuilder from './assets/toolkit/toolkit-scenebuilder.svg'
import toolkitSQL from './assets/toolkit/toolkit-sql.svg'
import toolkitVSCode from './assets/toolkit/toolkit-vscode.svg'
import toolkitWebstorm from './assets/toolkit/toolkit-webstorm.svg'
import toolkitWebflow from './assets/toolkit/webflow.svg'

import navigatorIcon from './assets/projects/navigator_icon.svg'
import emunahIcon from './assets/projects/emunah_icon.svg'
import reserBiyaheIcon from './assets/projects/reserbiyahe_icon.svg'
import anailyzerIcon from './assets/projects/anailyzer_icon.svg'
import langMapIcon from './assets/projects/langmap_icon.svg'
import navigatoColoredrIcon from './assets/projects/navigator_color_icon.svg'
import emunahColoredIcon from './assets/projects/emunah_color_icon.svg'
import reserBiyaheColoredIcon from './assets/projects/reserbiyahe_color_icon.svg'
import anailyzerColoredIcon from './assets/projects/anailyzer_color_icon.svg'
import langMapColoredIcon from './assets/projects/langmap_color_icon.svg'
import navigator from "./assets/projects/navigator_logo.svg";
import emunah from "./assets/projects/emunah_logo.svg";
import reserbiyahe from "./assets/projects/reserbiyahe_logo.svg";
import anailyzer from "./assets/projects/anailyzer_logo.svg";
import langmap from "./assets/projects/langmap_logo.svg";

import contactEmail from './assets/contact/contact-linkedin.svg'
import contactLoc from './assets/contact/contact-loc.svg'
import contactLinkedin from './assets/contact/contact-linkedin.svg'
import contactGithub from './assets/contact/contact-github.svg'
import contactBubbles from './assets/contact/contact-bubbles.json'

import './App.css'
import ProjectContainer from "./ProjectContainer.jsx";
import ProjectButton from "./ProjectButton.jsx";

function App() {
    const lottieHero = useRef(null)
    const lottieContactBubbles = useRef(null)
    const [selectedProject, setSelectedProject] = useState("emunah")
    const projects = {
        emunah: {
            id: "emunah",
            image: emunah,
            description:
                `<p>Emunah Accounting Firm Website is a professional website designed for an accounting firm to showcase its services, establish its online presence, and provide clients with accessible information about the firm.</p>
                 <p>The website was developed using Webflow, focusing on a clean, professional, and user-friendly design that reflects the firm's identity and services.</p>`,
            tags: ["Webflow"],
            disclaimer: "",
            linkBtn: "Visit Webpage",
            githubBtn: "NA",
            link: "https://emunah-a463ca.webflow.io/ ",
            github: "",
            icon: emunahIcon,
            selectedIcon: emunahColoredIcon,
            alt: "Emunah Logo"
        },

        navigator: {
            id: "navigator",
            image: navigator,
            description:
                `<p>Navigator is a web-based chatbot designed to help freshmen navigate the premises of Saint Louis University. It provides information about campus locations, buildings, and facilities to help new students become familiar with the university. </p>
                 <p>The project was developed as a practical application of web development concepts and technologies, created in compliance with the requirements of the Web Development Project.</p>`,
            tags: ["HTML", "CSS", "Node.js", "Python"],
            disclaimer: "* Due to the limitations of Vercel, only the hero page is accessible. Check the Github link to view and test the whole project.",
            linkBtn: "Visit Webpage",
            githubBtn: "View Github Project",
            link: "https://navigator-9jio.vercel.app/_enquirer",
            github: "https://github.com/olivertyu/navigator",
            icon: navigatorIcon,
            selectedIcon: navigatoColoredrIcon,
            alt: "Navigator Logo"
        },

        langmap: {
            id: "langmap",
            image: langmap,
            description:
                `<p>Language Map is an academic web project that visualizes the distribution of languages spoken across a specific province in the Philippines. It provides an interactive map that allows users to explore the geographic presence of different languages within the province.</p>
                 <p>The project aims to promote awareness of the Philippines' linguistic diversity while demonstrating the use of web mapping, data visualization, and interactive web technologies.</p>`,
            tags: ["React", "SQL", "Python", "NLP"],
            disclaimer: "",
            linkBtn: "Visit Webpage",
            githubBtn: "View Github Project",
            link: "https://language-map.vercel.app/",
            github: "https://github.com/olivertyu/language-map",
            icon: langMapIcon,
            selectedIcon: langMapColoredIcon,
            alt: "Language Map Logo"
        },

        anailyzer: {
            id: "anailyzer",
            image: anailyzer,
            description:
                `<p>Anailyzer is an academic web project that uses an AI-powered chatbot and image detection to analyze nail images and identify possible nail conditions. It provides users with an interactive way to learn more about the visual characteristics detected in their nail images.</p>
                 <p>The project demonstrates the application of artificial intelligence, image processing, and web development in creating an interactive and practical digital tool.</p>`,
            tags: ["React", "Python", "NLP"],
            disclaimer: "",
            linkBtn: "Visit Webpage",
            githubBtn: "View Github Project",
            link: "https://anailyzer.vercel.app/",
            github: "https://github.com/olivertyu/anailyzer",
            icon: anailyzerIcon,
            selectedIcon: anailyzerColoredIcon,
            alt: "Anailyzer Logo"
        },

        reserbiyahe: {
            id: "reserbiyahe",
            image: reserbiyahe,
            description:
                `<p>ReserBiyahe is an academic mobile app prototype designed as a centralized platform for bus transportation reservations. It allows users to browse bus services, view available trips, and reserve seats through a single platform.</p>
                 <p>The prototype was designed using Figma, focusing on an intuitive and user-friendly experience for passengers while demonstrating mobile UI/UX design and prototyping concepts.</p>`,
            tags: ["Figma"],
            disclaimer: "",
            linkBtn: "Visit Figma Prototype",
            githubBtn: "NA",
            link: "https://www.figma.com/proto/tZrJJEyADKR3APuBR8uAuk/Untitled?node-id=85-150&p=f&t=gkw92YkyMmPjksO8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=85%3A150&show-proto-sidebar=1",
            github: "",
            icon: reserBiyaheIcon,
            selectedIcon: reserBiyaheColoredIcon,
            alt: "ReserBiyahe Logo"
        }
    }

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: lottieHero.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: heroAnimation,
        })

        const handleScroll = () => {
            const hero = lottieHero.current.closest('#hero')

            const rect = hero.getBoundingClientRect()
            const scrollProgress = Math.min(
                Math.max((-rect.top / rect.height) * 0.7, 0),
                1
            )

            const frame = scrollProgress * (animation.totalFrames - 1)

            animation.goToAndStop(frame, true)
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            animation.destroy()
        }
    }, [])

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: lottieContactBubbles.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: contactBubbles,
        })

        return () => {
            animation.destroy()
        }
    }, [])



    return (
        <>
            <section id="hero">
                <div className="sticky-wrapper flex-vertical center-horizontal">
                    <div className="hero-animation"
                         ref={lottieHero}
                    />
                    <div className="hero-headline flex-vertical gap-25">
                        <h1>I Design It. I Build It.</h1>
                        <h3>From intuitive UI/UX to responsive web experiences,<br/>I turn ideas into polished digital products.</h3>
                    </div>
                </div>
            </section>

            <section id="intro">
                <div className="flex-horizontal gap-20">
                    <div className="intro-left">
                        <div className="flex-vertical">
                            <h1>Oliver Yu</h1>
                        </div>
                        <div className="flex-vertical gap-20">
                            <h3>Bachelor of Science in Computer Science, 2026<br/>(Cum Laude)</h3>
                            <h3><b>Saint Louis University</b></h3>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="intro-right">
                            {/*shapes here*/}
                        </div>
                        <div className="toolkit-container flex-vertical">
                            <h1>Toolkit</h1>
                            <div className="toolkit-list flex-horizontal gap-20">
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img id="html" className="toolkit-img" src={toolkitHTML} alt="HTML Logo"/>
                                        <img id="css" className="toolkit-img" src={toolkitCSS} alt="CSS Logo"/>
                                        <img id="js" src={toolkitJavascript} alt="Javascript Logo"/>
                                        <img id="react" src={toolkitReact} alt="React Logo"/>
                                        <img id="nodejs" src={toolkitNodeJS} alt="Node JS Logo"/>
                                    </div>
                                    <h5>Web Technologies</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitWebflow} alt="Webflow Logo"/>
                                    </div>
                                    <h5>Web & UI<br/>Development</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitGithub} alt="Github Logo"/>
                                        <img className="toolkit-img" src={toolkitGitlab} alt="Gitlab Logo"/>
                                    </div>
                                    <h5>Version Control &<br/>Collaboration</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitAfterEffects} alt="After Effects Logo"/>
                                        <img className="toolkit-img" src={toolkitIllustrator} alt="Illustrator Logo"/>
                                        <img className="toolkit-img" src={toolkitPhotoshop} alt="Photoshop Logo"/>
                                        <img className="toolkit-img" src={toolkitFigma} alt="Figma Logo"/>
                                    </div>
                                    <h5>Design & UI</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitSQL} alt="HTML Logo"/>
                                    </div>
                                    <h5>Database</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitScenebuilder} alt="Scene Builder Logo"/>
                                        <img className="toolkit-img" src={toolkitVSCode} alt="VS Code Logo"/>
                                        <img className="toolkit-img" src={toolkitWebstorm} alt="Webstorm Logo"/>
                                    </div>
                                    <h5>Development Tools & IDEs</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitJava} alt="Java Logo"/>
                                        <img className="toolkit-img" src={toolkitPython} alt="Python Logo"/>
                                    </div>
                                    <h5>Programming<br/>Languages</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="projects" style={{ background: `var(--${selectedProject}-bg)`, color: `var(--${selectedProject}-text` }}>
                <h1>Projects</h1>
                <div className="flex-horizontal gap-50">
                    <div className="project-buttons-container flex-vertical">
                        {Object.values(projects).map((project) => (
                            <ProjectButton
                                key={project.id}
                                project={project}
                                selectedProject={selectedProject}
                                setSelectedProject={setSelectedProject}
                            />
                        ))}
                    </div>
                    <ProjectContainer
                        project={projects[selectedProject]}
                    />
                </div>
            </section>

            <section id="contact">
                <div className="contact-container flex-vertical">
                    <h1>Let's keep in touch!</h1>
                    <div className="flex-vertical gap-20">
                        <div className="flex-horizontal gap-10 center-horizontal">
                            <img src={contactEmail} alt=""/>
                            <h4>yu.oliver20202@gmail.com</h4>
                        </div>
                        <div className="flex-horizontal gap-10 center-horizontal">
                            <img src={contactLoc} alt=""/>
                            <h4>Baguio City, Philippines 2600</h4>
                        </div>
                        <div className="flex-horizontal gap-10 center-horizontal">
                            <img src={contactLinkedin} alt=""/>
                            <h4>linkedin.com/in/olivertyu</h4>
                        </div>
                        <div className="flex-horizontal gap-10 center-horizontal">
                            <img src={contactGithub} alt=""/>
                            <h4>github.com/olivertyu</h4>
                        </div>
                    </div>
                </div>
                <div className="contact-animation flex-vertical center-vertical center-horizontal">
                    <div
                        ref={lottieContactBubbles}
                        style={{ width: '100%' }}
                    />
                </div>
            </section>

            <section id="footer" className="flex-vertical ">
                <div className="line"></div>
                <div className="flex-horizontal">
                    <h4 style={{fontWeight: 800, width: "100%"}}>Oliver Yu</h4>
                    <h4 style={{fontWeight: 400}}>2026</h4>
                </div>
            </section>
        </>
    )
}

export default App
