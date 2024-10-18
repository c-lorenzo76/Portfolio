import {Navbar} from "@/components/portfolio/navbar";
import {AboutMe} from "@/components/portfolio/aboutme";
import {Competencies} from "@/components/portfolio/competencies"
import {Projects} from "@/components/portfolio/projects";
import {Contact} from "@/components/portfolio/contact";
import {Footer} from "@/components/portfolio/footer";
import {Landing} from "@/components/portfolio/landingpage.tsx";

export const Home = () => {

    return <div className="light:text-black flex flex-col w-full border">
        <Navbar/>
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