import "../App.css";
import ShopeeCodeLeague from "../assets/shopee_code_league_2022.png";
import UMNPC from "../assets/umnpc.png";
import Progate from "../assets/progate.png";
import Dicoding from "../assets/dicoding.png";


function ExpCard(properties){
    return (<div className="experience-card">
        <img src={properties.image} className="icons exp-icons" alt="gk ad"/>
        <h1 className="experience-description">{properties.description}</h1>
        <h1 className="experience-date">{properties.date}</h1>
        {properties.certificate ? <a href={properties.url}><button className="view-certificate">View Certificate</button></a>: null}
    </div>)
}


export default function Experience(){
    return (<section id="experience" className="sections">
        <div id="experience-title">
            <div id="logo-experience">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>                                                
            </div>            
            <h1>EXPERIENCE</h1>
            <div className="line"></div>
        </div>
        <div id="experience-list">
            <ExpCard image={ShopeeCodeLeague} description="Shopee Code League 2022 Participant" date="March 2022" certificate={true} url="https://www.credly.com/badges/a882764b-c03b-4548-8bbb-a85b80afe142?source=linked_in_profile"/>                                                                          
            <ExpCard image={UMNPC} description="UMN Programming Club Member" date="October 2021 - Now" certificate={false}/>               
            <ExpCard image={Progate} description="Progate Python Basic Training" date="October 2021" certificate={true} url="https://progate.com/course_certificate/5f549418r1iu6e"/>               
            <ExpCard image={Dicoding} description="Belajar Dasar Pemrograman JavaScript - Dicoding" date="June 2022" certificate={true} url="https://www.dicoding.com/certificates/N9ZO7OO5DZG5"/>
            <ExpCard image={Dicoding} description="Belajar Aplikasi Back-End Pemula - Dicoding" date="June 2022" certificate={true} url="https://www.dicoding.com/certificates/N9ZO7MYE8ZG5"/>            
        </div>
    </section>)
}