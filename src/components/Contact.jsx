import "../App.css";
import Email from "../assets/email.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import WhatsApp from "../assets/whatsapp.png";


export default function Contact(){
    return (<section id="contact" className="sections">
        <h1>Get in touch.</h1>
        <div className="line"></div>
        <div id="social-medias">
            <div id="email">
                <img className="icons" src={Email}/>
                <h1>farreldinarta12@gmail.com</h1>
            </div>            
            <div id="sosmed-list">
                <a href="https://www.instagram.com/farreldinarta/"><img src={Instagram} className="icons"/></a>
                <a href="https://github.com/IngenHouzs"><img src={Github} className="icons"/></a>
                <a href="https://www.linkedin.com/in/farreldinarta/"><img src={Linkedin} className="icons"/></a>
                <a href="https://wa.me/6281383533583"><img src={WhatsApp} className="icons"/></a>                                                
            </div>
        </div>
        <h1 id="copyright">Copyright &copy; 2022. Farrel Dinarta</h1>
    </section>)
}