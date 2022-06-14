import { useState, useEffect } from "react";
import "../App.css";


export function Navbar(props){
    return (
        <nav id="navbar" class="header">
            <div id="navbar-left-wrapper">
                <h1 className="regular-text header-text" id="logo-text">
                    <span>F</span>
                    <span>D</span>
                    <span>.</span>                
                </h1>
                <div id="color-scheme-changer">
                    <div id="color-scheme-toggle" onClick={props.colorSchemeToggler}>
                        <div id="color-scheme-button"></div>
                    </div>
                    <h1>{props.colorSchemePreference === 'dark' ? 'Dark' : 'Light'}</h1>
                </div>                
            </div>

            <ul id="web-navigation">
                <a onClick={()=>props.NavigateScroll("landing")}>Home</a>
                <a onClick={()=>props.NavigateScroll("about")}>About</a>
                <a onClick={()=>props.NavigateScroll("experience")}>Experience</a>
                <a onClick={()=>props.NavigateScroll("projects")}>Projects</a>                
                <a onClick={()=>props.NavigateScroll("contact")}>Contacts</a>                
            </ul>
        </nav>
    );
}

export function DropdownNavbar(props){


    function buttonClickAnimation(){
    }

    useEffect(buttonClickAnimation, []);

    function CollapseNavigation(){
        return (<div id="navbar-collapse">
                <button className="navi" onClick={()=>props.NavigateScroll("landing")}>Home</button>
                <button className="navi" onClick={()=>props.NavigateScroll("about")}>About</button>
                <button className="navi" onClick={()=>props.NavigateScroll("experience")}>Experience</button>
                <button className="navi" onClick={()=>props.NavigateScroll("projects")}>Projects</button>               
                <button className="navi" onClick={()=>props.NavigateScroll("contact")}>Contacts</button>  
        </div>);
    }

    const [collapseDropdown, setCollapseDropdown] = useState(false);

    const toggleDropdown = () => {
        setCollapseDropdown(!collapseDropdown);
    }


    return (
        <div id="navbar-top">        
            <nav id="navbar" className="header">
                <div id="navbar-left-wrapper">
                    <h1 className="regular-text header-text" id="logo-text">
                        <span>F</span>
                        <span>D</span>
                        <span>.</span>                
                    </h1>
                    <div id="color-scheme-changer">
                        <div id="color-scheme-toggle" onClick={()=>props.colorSchemeToggler()}>
                            <div id="color-scheme-button"></div>
                        </div>
                        <h1>{props.colorSchemePreference === 'dark' ? 'Dark' : 'Light'}</h1>
                    </div>                
                </div>       
                <button id="nav-dropdown-button" onClick={toggleDropdown}><i class="fa fa-bars"></i></button>
            </nav>            
            {collapseDropdown ? <CollapseNavigation/> : null}            
        </div>
    )
}

