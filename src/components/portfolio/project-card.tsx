import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export interface ProjectLink {
    label: string;
    href: string;
    icon: "github" | "website";
}

export interface ProjectCardProps {
    title: string;
    bullets: string[];
    stack: string[];
    links: ProjectLink[];
}

export function ProjectCard({ title, bullets, stack, links }: ProjectCardProps) {
    return (
        <div className="group relative flex h-full w-full flex-col overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-4 text-white shadow-lg shadow-black/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/40 md:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400" />

            <h1 className="text-lg font-bold md:text-2xl lg:text-3xl">{title}</h1>

            <ul className="mt-3 flex-1 space-y-2 text-xs leading-relaxed text-slate-200 md:space-y-3 md:text-sm lg:text-base">
                {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-sky-400 md:mt-2" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-4 md:gap-2">
                {stack.map((tech) => (
                    <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full border-white/20 bg-white/5 text-[10px] text-slate-100 md:text-xs"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>

            <div className="mt-4 flex flex-row gap-2">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-fit flex-1 items-center justify-center gap-2 rounded-full bg-white/10 p-2 text-xs font-medium text-white transition-colors hover:bg-white/20 md:p-3 md:text-sm"
                    >
                        {link.icon === "github" ? (
                            <Github className="size-4 md:size-5" />
                        ) : (
                            <ExternalLink className="size-4 md:size-5" />
                        )}
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
