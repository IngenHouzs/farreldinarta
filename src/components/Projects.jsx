import "../App.css";

import Chess from "../assets/project-chess.png";
import Cashier from "../assets/project-cashier.png";
import ECommerce from "../assets/project-eCommerce.png";





function ProjectCard(properties){
    return (<div className="project-card">
        <div className="project-description">
            <div className="project-text">
                <h1 className="project-title">{properties.title}</h1>
                <p className="project-details">{properties.description}</p>
            </div>
            <a href={properties.url}><button className="view-certificate view-project">View Project</button></a>
        </div>
        <img src={properties.image} className="project-preview" alt="wkwk"/>
    </div>);
}

export default function Projects(){
    return (
        <section id="projects" className="sections">
            <div id="projects-title">
                <div id="logo-project">
                    <div id="hammer-hold"></div>
                    <div id="hammer-head">
                        <div className="hammer-edge"></div>
                        <div className="hammer-edge"></div>                        
                    </div>
                </div>                
                <h1>MY PROJECTS</h1>
                <div className="line"></div>
            </div>
            <div id="projects-list">
                <ProjectCard url="https://github.com/IngenHouzs/Cashier---Python-Tkinter" title="Cashier" description="Simple cashier application built in Python & SQL. This is my very first personal project." image={Cashier}/>
                <ProjectCard url="https://github.com/IngenHouzs/Chess---Python-PyQt5" title="Chess" description="My second personal project built in Python. Integrated with Stockfish (one of the most powerful chess engine) API, users are allowed to play against it and customize the difficulty." image={Chess}/>
                <ProjectCard url="https://github.com/IngenHouzs/E-Commerce-Web-App-LANDING-LOGIN-Page" title="E-Commerce Landing & Login Page" description="My first personal web-based project, focusing on UI and responsive web design." image={ECommerce}/>                                
            </div>

        </section>

    )
}