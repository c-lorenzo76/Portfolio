import {FlipWords} from "@/components/ui/flip-words.tsx";
import { motion } from "framer-motion";
import {Button} from "@/components/ui/button.tsx";
import picture from '../../assets/profile_page.jpeg';


export function AboutMe(){
    const words = [
        "Student", "Software Engineer", "Fast Learner", "Full-Stack Developer"
    ]

    const dotBG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none">
        <circle fill="rgba(14, 31, 68, 0.3)" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle>
    </svg>`;

    const encodedSVG = `data:image/svg+xml;base64,${btoa(dotBG)}`;

    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <div
                className=" w-full border border-b-1 shadow-md flex flex-col md:flex-row items-center justify-center py-10"
                style={{  height:"auto", width:"auto" , backgroundImage: `url('${encodedSVG}')` }}
                // backgroundColor:"rgba(116,188,207,255)"
            >

                <div className="md:ml-4 flex flex-col items-center md:items-end sm:w-2/3 md:h-full">
                    <motion.div
                        initial={{opacity: 0.0, x: -40}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="about flex flex-col items-center">
                            <img src={picture} alt="Picture"
                                 className="w-64 h-64 md:h-72 md:w-72 lg:w-96 lg:h-96 rounded-full"
                            />
                            <span className="font-bold text-xl  mt-4 ">Cristian Lorenzo-Pavon 👋</span>
                            <div>
                                <FlipWords words={words}/>
                            </div>
                        </div>
                    </motion.div>

                </div>
                <div className="about-me w-full mx-auto mb-10 ">
                    <h1 className="mb-2 text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-950 py-4">
                    About me
                    </h1>
                    <p className="mx-auto w-full  max-w-sm md:max-w-lg lg:max-w-xl px-4 text-center">
                        I was born in <span className="text-blue-500">Chapel Hill, North Carolina</span> and
                        graduating
                        with
                        a
                        Bachelors in Computer Science,
                        with a concentration in Data Science and Big Data, from the University of North Carolina at
                        Greensboro this Fall.
                    </p>
                    <br/>
                    <p className="mx-auto w-full max-w-sm md:max-w-lg lg:max-w-xl px-4 text-center mb-4 ">
                        In my "free time" I enjoy being outside doing many activities such as working out,
                        gardening,
                        walking
                        two dogs
                        (chihuahua & maltipoo)
                    </p>

                    <div className="flex justify-center">
                        <Button className="mt-10"
                                onClick={() => window.open('../src/assets/Cristian_Lorenzo_2024_Resume.pdf', '_blank')}
                        >
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                    fill="white"></path>
                                <path
                                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    fill="white"></path>
                                <path
                                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    fill="white"></path>
                                <path
                                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    fill="white"></path>
                            </svg>
                            View Resume
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )

}