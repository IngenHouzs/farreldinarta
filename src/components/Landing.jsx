import "../App.css";
import FotoProfil from "../assets/Foto_3x4_Kemeja_Putih (NoBG).png";
import University from "../assets/university.png";
import Location from "../assets/location.png";

export default function Landing(props){
    return (<section id="landing" class="header">  
        <div className="curve">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="aqua" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,218.7C672,224,768,256,864,250.7C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div id="profile-picture">
            <div id="name">
                <h1>Farrel</h1>
                <h1>Dinarta</h1>
                <div className="line"></div>                
                <div className="triangle"></div>
            </div>                  
            <img src={FotoProfil} alt="Foto Profil"/>
        </div>
        <div id="profile-description">
            <h1>STUDENT | BEGINNER DEVELOPER</h1>   
            <div className="profile-mini-description">
                    <img className="landing-icon" src={Location}/>
                    <h1>Indonesia</h1>
            </div>                    
            <div className="profile-mini-description">
                    <img className="landing-icon" src={University}/>
                    <h1>Computer Science (3<sup>rd</sup> Semester)</h1>
            </div>
            <a className="link" onClick={()=>props.NavigateScroll("about")}>LEARN MORE</a>
        </div>        
    </section>);
}

