import {FlipWords} from "@/components/ui/flip-words.tsx";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button.tsx";
import picture from '/profile_page.jpeg';
import resume from '/CL_Resume.pdf';
import {GraduationCap, Building2} from 'lucide-react';
import {LinkPreview} from "@/components/ui/link-preview";

import {education} from "@/constants/education";
import {experience} from "@/constants/experience";


export function AboutMe() {
    const words = [
        "Student", "Software Engineer", "Fast Learner", "Full-Stack Developer"
    ]

    return (
        <motion.div
            initial={{opacity: 0.0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <div
                className="md:min-h-screen bg-dot-black/[0.2] dark:bg-dot-white/[0.2] w-full border-b-1 shadow-md flex flex-col lg:flex-row items-center justify-center"
                // backgroundColor:"rgba(116,188,207,255)"
            >

                <div className="flex flex-col items-center mx-auto sm:w-2/3 lg:items-end pt-10">
                    <motion.div
                        initial={{opacity: 0.0, x: -40}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="about flex flex-col justify-center items-center mx-auto">
                            <img src={picture} alt="Picture"
                                 className="w-64 h-64 md:h-96 md:w-96 xl:w-[28rem] xl:h-[28rem] rounded-full"
                            />
                            <span className="font-bold text-xl mt-4">Cristian Lorenzo-Pavon 👋</span>
                            <div>
                                <FlipWords words={words}/>
                            </div>
                        </div>
                    </motion.div>

                </div>
                <div className="about-me w-full mx-auto">
                    <h1 className="mb-2 text-4xl text-center sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-950 py-4">
                        About me
                    </h1>
                    <div
                        className="mx-auto max-w-sm md:max-w-lg lg:max-w-xl flex flex-col items-center font-inconsolata">

                        <div className="education w-[98%]">
                            <a className="flex items-center mb-2">
                                <GraduationCap className="mr-2"/>
                                <span>Education</span>
                            </a>
                            <div className="space-y-2">
                                {education.map((edu, index) => (
                                    <div key={index} className="flex flex-row items-start">
                                        <div className="w-1/3 md:w-1/4 font-light text-center">
                                            <span>{edu.date}</span>
                                        </div>
                                        <div className="w-2/3 md:w-3/4">
                                            <LinkPreview url={edu.website}>
                                                <p className="font-semibold hover:underline cursor-pointer">
                                                    {edu.university}
                                                </p>
                                            </LinkPreview>
                                            <p className="font-extralight">{edu.degree}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="work-experience mt-4 w-[98%]">
                            <a className="flex items-center mb-2">
                                <Building2 className="mr-2" fill={"gray"}/>
                                <span>Experience</span>
                            </a>
                            <div className="space-y-2">
                                {experience.map((exp, index) => (
                                    <div key={index} className={"flex flex-row items-start"}>
                                        <div className={"w-1/3 md:w-1/4 font-light text-center"}>
                                            <span>{exp.date}</span>
                                        </div>
                                        <div className={"w-2/3 md:w-3/4"}>
                                            <LinkPreview url={exp.website}>
                                                <p className={"font-semibold hover:underline cursor-pointer"}>
                                                    {exp.company}
                                                </p>
                                            </LinkPreview>
                                            <p className={"font-extralight bg-neutral-200 dark:bg-neutral-700 px-1 w-fit py-0.5"}>{exp.title}</p>
                                            <ul className="list-disc list-inside mt-1 font-extralight hidden md:block">
                                                {exp.responsibilities.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center my-10">
                        <a href={resume}>
                            <Button
                            >
                                <svg className="mr-2 fill-white dark:fill-black" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"></path>
                                    <path
                                        d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    ></path>
                                    <path
                                        d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    ></path>
                                    <path
                                        d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    ></path>
                                </svg>
                                View Resume
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )

}