import { FlipWords } from "@/components/ui/flip-words.tsx";
import { motion } from "framer-motion";
import picture from '/profile_page.jpeg';
import { GraduationCap, Building2 } from 'lucide-react';
import { LinkPreview } from "@/components/ui/link-preview";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { education } from "@/constants/education";
import { experience } from "@/constants/experience";


export function AboutMe() {
    const words = [
        "Student", "Software Engineer", "Fast Learner", "Full-Stack Developer"
    ]

    return (

        <div
            className="h-dvh bg-dot-black/[0.2] dark:bg-dot-white/[0.2] w-full border-b-1 shadow-md flex flex-col lg:flex-row items-center justify-start lg:justify-center overflow-y-auto py-8 md:py-10"
        // backgroundColor:"rgba(116,188,207,255)"
        >

            <div className="flex flex-col items-center mx-auto sm:w-2/3 lg:w-2/5 lg:shrink-0 lg:items-end pt-4">
                <motion.div
                    initial={{ opacity: 0.0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    <div className="about flex flex-col justify-center items-center mx-auto">
                        <img src={picture} alt="Picture"
                            className="w-48 h-48 md:h-64 md:w-64 xl:w-80 xl:h-80 rounded-full"
                        />
                        <span className="font-bold text-xl mt-4">Cristian Lorenzo-Pavon 👋</span>
                        <div>
                            <FlipWords words={words} />
                        </div>
                    </div>
                </motion.div>

            </div>
            <div className="about-me w-full min-w-0 lg:w-3/5 mx-auto">
                <h1 className="pt-2 pb-2 text-3xl text-center sm:text-5xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-950">
                    About me
                </h1>
                <div
                    className="mx-auto max-w-sm md:max-w-lg lg:max-w-xl flex flex-col items-center font-inconsolata">
                    <motion.div
                        initial={{ opacity: 0.0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="education w-[98%]">
                            <a className="flex items-center mb-2">
                                <GraduationCap className="mr-2" />
                                <span>Education</span>
                            </a>
                            <div className="space-y-3">
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="work-experience mt-4 w-full">
                            <a className="flex items-center mb-2">
                                <Building2 className="mr-2" fill={"gray"} />
                                <span>Experience</span>
                            </a>
                            <div className="space-y-3">
                                {experience.map((exp, index) => (
                                    <div key={index} className={"flex flex-row items-start min-w-0"}>
                                        <div className={"w-24 shrink-0 font-light text-center leading-tight"}>
                                            {exp.date.split(" - ").map((part, i, arr) => (
                                                <span key={i} className="block">
                                                    {part}
                                                    {i < arr.length - 1 && <span className="block">-</span>}
                                                </span>
                                            ))}
                                        </div>
                                        <div className={"flex-1 min-w-0 ml-4"}>
                                            <div className="flex flex-wrap items-center gap-x-2">
                                                <LinkPreview url={exp.website}>
                                                    <p className={"font-semibold hover:underline cursor-pointer"}>
                                                        {exp.company}
                                                    </p>
                                                </LinkPreview>
                                                <span className="font-extralight">-</span>
                                                <p className={"font-extralight bg-neutral-200 dark:bg-neutral-700 px-1 w-fit py-0.5"}>{exp.title}</p>
                                            </div>
                                            <Accordion type="single" collapsible className="w-full">
                                                <AccordionItem value="responsibilities" className="border-none">
                                                    <AccordionTrigger className="py-1 text-sm font-light hover:no-underline">
                                                        Details
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <ul className="list-disc list-inside font-extralight">
                                                            {exp.responsibilities.map((item, idx) => (
                                                                <li key={idx}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    )

}