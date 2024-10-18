import {Navbar} from "@/components/portfolio/navbar";
import {AboutMe} from "@/components/portfolio/aboutme";
import {Competencies} from "@/components/portfolio/competencies"
import {Projects} from "@/components/portfolio/projects";
import {Contact} from "@/components/portfolio/contact";
import {Footer} from "@/components/portfolio/footer";
import {Landing} from "@/components/portfolio/landingpage.tsx";
import {useEffect, useState} from "react";

export const Home = () => {

    const [isTransparent, setIsTransparent] = useState(true);

    const handleScroll = () => {
        const landingHeight = window.innerHeight; // Height of the landing section
        const halfwayPoint = landingHeight / 2; // Halfway through the landing section

        if (window.scrollY > halfwayPoint) {
            setIsTransparent(false); // Change to opaque when scrolled past halfway
        } else {
            setIsTransparent(true); // Keep it transparent when above halfway
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className="light:text-black flex flex-col w-full border">
        <Navbar isTransparent={isTransparent} />
        <div className={"landing-page"}>
            <Landing />
        </div>
        <div id={"about-me"} className="about-me">
            <AboutMe/>
        </div>
        <div id={"competencies"} className="compentencies">
            <Competencies/>
        </div>
        <div id={"projects"} className="projects">
            <Projects/>
        </div>
        <div id={"contact"} className="contact">
            <Contact/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>

}