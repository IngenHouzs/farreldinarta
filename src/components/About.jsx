import { useState } from "react";
import "../App.css";

import CLang from "../assets/c.png";
import CPP from "../assets/cpp.png";
import Python from "../assets/python.png";
import SQL from "../assets/mysql.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import REACT from "../assets/react.png";

export default function About(){

    const [skillList, setSkillList] = useState([
        Python, SQL, CLang, CPP, HTML, CSS, JS, REACT
    ]);

    return (<div id="about" className="sections">
        <div id="about-logo">
            <div id="about-logo-text">
                <div id="logo-info"><h1>i</h1></div>
                <h1>ABOUT ME</h1>
                <div className="line"></div>
            </div>            
        </div>
        <div id="about-description">    
            <p>You can call me Farrel. Currently i am pursuing my Computer Science
                Degree while actively honing my skills inside / outside college courses. I don't have any specific field 
                of expertise yet, i'm still searching for what fits me really well, but currently i love to get my hands dirty on 
                web development since it can express my ideas visually. I am willing 
                to dig more, see you on top.
            </p>
            <h1>Skills</h1>
            <div id="skills">
                {skillList.map((images) => <img className="icons" src={images}/>)}
            </div>
        </div>
    </div>);
}