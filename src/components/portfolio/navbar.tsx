import {Menu} from 'lucide-react';
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ThemeToggle} from "@/components/portfolio/themetoggle.tsx";


interface NavbarProps {
    isTransparent: boolean;
}

export function Navbar({isTransparent}: NavbarProps) {
// #423944

    return (
        <header
            className={`header mx-auto z-50 font-poppins flex h-16 items-center justify-between shadow-md fixed top-0 w-full transition-all duration-300 ${isTransparent
                ? 'bg-transparent shadow-none'
                : 'bg-white dark:bg-gray-800 shadow-md'}`}>
            <div className="me h-full flex items-center flex-shrink-0 w-fit md:w-[300px]">
                <img
                    src="https://media.tenor.com/OEAjabUzGKEAAAAi/microsoft-computer.gif"
                    alt="Picture"
                    className="w-14 h-14 ml-8 mr-2 md:ml-8 lg:ml-12"
                />
                <span className="text-lg font-medium whitespace-nowrap font-matemasie">Portfolio</span>
            </div>
            <nav
                className="links font-inconsolata h-full items-center space-x-2s md:space-x-4 lg:space-x-12 md:mr-3 lg:mr-12 hidden md:flex ">
                <a>
                    <ThemeToggle/>
                </a>
                <a href={"#about-me"}>
                    <Button
                        className="dark:text-white hover:border bg-transparent hover:bg-gray-200 hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-black w-24 ">About</Button>
                </a>
                <a href={"#competencies"}>
                    <Button
                        className="dark:text-white hover:border bg-transparent hover:bg-gray-200 hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-black w-24 ">Expertise</Button>
                </a>
                <a href={"#projects"}>
                    <Button
                        className="dark:text-white hover:border bg-transparent hover:bg-gray-200 hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-black w-24 ">Projects</Button>
                </a>
                <a href={"#contact"}>
                    <Button
                        className="dark:text-white hover:border bg-transparent hover:bg-gray-200 hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-black w-24 ">Contact</Button>
                </a>
            </nav>
            <div className="flex items-center md:hidden space-x-4 mr-2">
                <ThemeToggle/>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="grid gap-6 text-lg font-medium">
                            <a href={"#about-me"}>About</a>
                            <a href={"#competencies"}>Expertise</a>
                            <a href={"#projects"}>Projects</a>
                            <a href={"#contact"}>Contact</a>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}