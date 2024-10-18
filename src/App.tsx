import {Navbar} from "@/components/portfolio/navbar.tsx";
import {AboutMe} from "@/components/portfolio/aboutme.tsx";
import {Competencies} from "@/components/portfolio/competencies.tsx";
import {Projects} from "@/components/portfolio/projects.tsx";
import {Contact} from "@/components/portfolio/contact.tsx";
import {Footer} from "@/components/portfolio/footer.tsx";
import {Landing} from "@/components/portfolio/landingpage.tsx";

function App() {
  return (
      <div>
          <div className="light:text-black flex flex-col w-full border">
              {/*<Navbar/>*/}
              <div className={"landing-page"}>
                  <Landing/>
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
      </div>

  )
}

export default App
