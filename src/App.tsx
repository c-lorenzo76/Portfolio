import {Navbar} from "@/components/portfolio/navbar.tsx";
import {AboutMe} from "@/components/portfolio/aboutme.tsx";
import {Competencies} from "@/components/portfolio/competencies.tsx";
import {Projects} from "@/components/portfolio/projects.tsx";
import {Contact} from "@/components/portfolio/contact.tsx";
import {Footer} from "@/components/portfolio/footer.tsx";
import {Landing} from "@/components/portfolio/landingpage.tsx";
import {useEffect, useState} from "react";
import {Toaster} from "@/components/ui/toaster.tsx";

function App() {
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

  return (
      <div>
          <div className="light:text-black flex flex-col w-full border bg-gray-100 dark:bg-gray-900 dark:text-white">
              <Navbar isTransparent={isTransparent}/>
              <div>
                  <Landing/>
              </div>
              <div id={"about-me"}>
                  <AboutMe/>
              </div>
              <div id={"competencies"}>
                  <Competencies/>
              </div>
              <div id={"projects"}>
                  <Projects/>
              </div>
              <div id={"contact"}>
                  <Contact/>
              </div>
              <div>
                  <Footer/>
              </div>
              <Toaster />
          </div>
      </div>

  )
}

export default App
