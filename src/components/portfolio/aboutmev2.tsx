import { useEffect, useRef, useState } from "react";
import { FlipWords } from "@/components/ui/flip-words.tsx";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GraduationCap, Building2, ChevronDown, ChevronUp } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

import picture from "/profile_page.jpeg";

import { education } from "@/constants/education";
import { experience } from "@/constants/experience";

export interface EducationEntry {
    logo: string;
    university: string;
    website: string;
    degree: string;
    date: string;
}

const EducationCard = ({ logo, university, website, degree, date }: EducationEntry) => {
    return (
        <div className="flex gap-3 items-center">
            <div className="bg-white flex size-10 shrink-0 items-center justify-center rounded-md p-0.5">
                <img src={logo} alt={`${university} logo`} loading="lazy" className="size-full object-contain" />
            </div>
            <div>
                <LinkPreview url={website}>
                    <p className="font-semibold hover:underline cursor-pointer text-sm">{university}</p>
                </LinkPreview>
                <p className="font-extralight text-xs">{degree}</p>
                <p className="text-muted-foreground text-xs">{date}</p>
            </div>
        </div>
    );
};

export interface ExperienceStep {
    logo: string;
    logoBg?: string;
    company: string;
    title: string;
    date: string;
    status?: { text: string; tone: "positive" | "accent" };
    stack: string[];
    achievement: string;
    description: string;
}

const ExperienceCard = ({
    logo,
    logoBg,
    company,
    title,
    date,
    status,
    stack,
    achievement,
    description,
}: ExperienceStep) => {
    return (
        <div className="space-y-2">
            <div className="mb-1 flex gap-3 sm:items-center">
                <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-md p-0.5", logoBg ?? "bg-muted")}>
                    <img src={logo} alt={`${company} logo`} loading="lazy" className="size-full object-contain" />
                </div>
                <div>
                    <p className="text-muted-foreground text-xs">{company}</p>
                    <h4 className="text-base font-semibold">{title}</h4>
                </div>
            </div>

            <div className="space-y-1.5 text-xs">
                <p className="flex items-center gap-1">
                    <span>{date}</span>
                    {status && (
                        <span
                            className={cn(
                                "font-medium",
                                status.tone === "positive"
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-amber-600 dark:text-amber-400"
                            )}
                        >
                            {status.text}
                        </span>
                    )}
                </p>

                <div className="flex flex-wrap items-center gap-1.5">
                    {stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-foreground bg-muted h-5 rounded-full text-[10px]">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <p className="font-medium">{achievement}</p>
            </div>

            <p className="text-muted-foreground text-xs">{description}</p>
        </div>
    );
};

export function AboutMeV2() {
    const words = [
        "Student", "Software Engineer", "Fast Learner", "Full-Stack Developer"
    ]

    const experienceScrollRef = useRef<HTMLDivElement>(null);
    const [isScrollable, setIsScrollable] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isAtBottom, setIsAtBottom] = useState(false);

    const updateScrollState = () => {
        const el = experienceScrollRef.current;
        if (!el) return;
        setIsScrollable(el.scrollHeight > el.clientHeight + 4);
        setIsAtTop(el.scrollTop < 4);
        setIsAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 4);
    };

    useEffect(() => {
        updateScrollState();
    }, []);

    return (
        <div
            className="h-dvh bg-dot-black/[0.2] dark:bg-dot-white/[0.2] w-full border-b-1 shadow-md flex flex-col lg:flex-row items-center justify-start lg:justify-center overflow-y-auto py-8 md:py-10"
        >
            <div className="flex flex-col items-center mx-auto sm:w-2/3 lg:w-2/5 lg:shrink-0 lg:items-end pt-4">
                <motion.div
                    initial={{ opacity: 0.0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    <div className="about flex flex-col justify-center items-center mx-auto">
                        <img src={picture} alt="Picture"
                            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full"
                        />
                        <span className="font-bold text-xl mt-4">Cristian Lorenzo-Pavon 👋</span>
                        <div>
                            <FlipWords words={words} />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="about-me w-full min-w-0 lg:w-3/5 mx-auto">
                <div className="mx-auto max-w-sm md:max-w-lg lg:max-w-xl flex flex-col items-center font-inconsolata">
                    <div className="education w-full">
                        <a className="flex items-center mb-2">
                            <GraduationCap className="mr-2" />
                            <span>Education</span>
                        </a>
                        <motion.div
                            initial={{ opacity: 0.0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="space-y-3 w-full rounded-md border border-border/50 bg-muted/20 px-4 py-3"
                        >
                            {education.map((edu) => (
                                <EducationCard key={edu.university} {...edu} />
                            ))}
                        </motion.div>
                    </div>

                    <div className="work-experience mt-4 w-full">
                        <a className="flex items-center mb-2">
                            <Building2 className="mr-2" fill={"gray"} />
                            <span>Experience</span>
                        </a>
                        <motion.div
                            initial={{ opacity: 0.0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className="relative w-full"
                        >
                            <div
                                ref={experienceScrollRef}
                                onScroll={updateScrollState}
                                className="h-72 w-full overflow-y-auto snap-y snap-mandatory rounded-md border border-border/50 bg-muted/20"
                            >
                                {experience.map((exp) => (
                                    <div key={exp.company} className="snap-start min-h-full flex items-center px-4 py-3">
                                        <ExperienceCard {...exp} />
                                    </div>
                                ))}
                            </div>

                            {isScrollable && (
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 rounded-b-md bg-gradient-to-t from-background/90 to-transparent pb-1.5 pt-6 text-xs font-medium text-muted-foreground">
                                    <ChevronUp className={cn("size-3.5", isAtTop && "invisible")} />
                                    <ChevronDown className={cn("size-3.5", isAtBottom && "invisible")} />
                                    Scroll to view more
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
