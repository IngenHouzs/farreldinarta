import { useState, useEffect } from 'react';
import './App.css';
import {Navbar, DropdownNavbar} from './components/Navbar';
import Landing from './components/Landing';
import About from "./components/About";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {

  const [dropdownNavbar, setDropdownNavbar] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [colorSchemePreference, setColorSchemePreference] = useState(
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );


  useEffect(()=>setWindowSize(window.innerWidth));

  useEffect(()=>{
    // dropdown navbar detection
    if (typeof windowSize !== "undefined"){
      function handleResize(){
        setWindowSize(window.innerWidth);
        window.innerWidth < 700 ? setDropdownNavbar(true) : setDropdownNavbar(false);
      }
      window.innerWidth < 700 ? setDropdownNavbar(true) : setDropdownNavbar(false);    
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);    
    }
  }, []);

  useEffect(()=>{
    // page onload color mode detection
    let getToggle = document.getElementById("color-scheme-toggle");    
    document.documentElement.className = colorSchemePreference;
    if (colorSchemePreference == 'light'){
      getToggle.style.justifyContent = "flex-start";
    } else {
      getToggle.style.justifyContent = "flex-end";
    }
    colorSchemeToggler();
  },[]);


  const colorSchemeToggler = () => {
    // change color mode
    console.log("old", colorSchemePreference);
    let getToggle = document.getElementById("color-scheme-toggle");    
    if (colorSchemePreference === 'dark') {
      setColorSchemePreference('light');
      getToggle.style.justifyContent = "flex-start";
    }
    else {
      setColorSchemePreference('dark');
      getToggle.style.justifyContent = "flex-end";      
    }
    document.documentElement.className = colorSchemePreference;
    console.log("new", colorSchemePreference);    
  }


  function NavigateScroll(destination){
    const element = document.getElementById(destination);
    element.scrollIntoView({
      behavior : "smooth",
      block : "start",
      inline : "nearest"
    });
  }



  return (
    <div id="main-background">
        {!dropdownNavbar ? <Navbar 
          colorSchemeToggler={colorSchemeToggler} 
          colorSchemePreference={colorSchemePreference}
          NavigateScroll={NavigateScroll}
          /> : 
          <DropdownNavbar 
          colorSchemeToggler={colorSchemeToggler} 
          colorSchemePreference={colorSchemePreference}
          NavigateScroll={NavigateScroll}          
        />}
        <Landing NavigateScroll={NavigateScroll}/>
        <About NavigateScroll={NavigateScroll}/>
        <div className="line main-line"></div>        
        <Experience NavigateScroll={NavigateScroll}/>     
        <div className="line main-line"></div>        
        <Projects NavigateScroll={NavigateScroll}/>
        <div className="line main-line"></div>        
        <Contact NavigateScroll={NavigateScroll}/>         
    </div>
  );
}


