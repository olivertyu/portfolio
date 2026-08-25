import {useState} from 'react'
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

import contactEmail from './assets/contact/contact-linkedin.svg'
import contactLoc from './assets/contact/contact-loc.svg'
import contactLinkedin from './assets/contact/contact-linkedin.svg'
import contactGithub from './assets/contact/contact-github.svg'
import './App.css'

function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <section id="hero">
                <p>hero here</p>
            </section>
            <section id="intro">
                <div className="flex-horizontal gap-20">
                    <div className="intro-left">
                        <div className="flex-vertical">
                            <h2>Hi, I'm</h2>
                            <h1>Oliver Yu</h1>
                        </div>
                        <div className="flex-vertical gap-20">
                            <h3>Bachelor of Science in Computer Science, 2026<br/>(Cum Laude)</h3>
                            <h3><b>Saint Louis University</b></h3>
                        </div>
                    </div>

                    <div className="right-container">
                        <div className="intro-right">
                            shapes here
                        </div>

                        <div className="toolkit-container flex-vertical">
                            <h1>Toolkit</h1>
                            <div className="toolkit-list flex-horizontal gap-20">
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitHTML} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitCSS} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitJavascript} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitReact} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitNodeJS} alt="HTML Logo"/>
                                    </div>
                                    <h5>Web Technologies</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitWebflow} alt="HTML Logo"/>
                                    </div>
                                    <h5>Web & UI<br/>Development</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitGithub} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitGitlab} alt="HTML Logo"/>
                                    </div>
                                    <h5>Version Control &<br/>Collaboration</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitAfterEffects} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitIllustrator} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitPhotoshop} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitFigma} alt="HTML Logo"/>
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
                                        <img className="toolkit-img" src={toolkitScenebuilder} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitVSCode} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitWebstorm} alt="HTML Logo"/>
                                    </div>
                                    <h5>Development Tools & IDEs</h5>
                                </div>
                                <div className="category-card flex-vertical center-horizontal gap-10">
                                    <div className="category-icn-container flex-horizontal">
                                        <img className="toolkit-img" src={toolkitJava} alt="HTML Logo"/>
                                        <img className="toolkit-img" src={toolkitPython} alt="HTML Logo"/>
                                    </div>
                                    <h5>Programming<br/>Languages</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>
            <section id="projects">
                <h1>Projects</h1>
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
