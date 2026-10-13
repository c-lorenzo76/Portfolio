import {Tabs} from "@/components/ui/tabs"
import { projects } from "@/constants/projects";

export function Projects() {

    return (
        <div className="flex flex-col items-center w-full mx-auto py-16 md:py-24 bg-slate-100 dark:bg-slate-950">
            <h1 className="font-matemasie dark:text-emerald-300 text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text pt-4 pb-8 md:pb-12 text-center">
                ⚡ Selected Projects
            </h1>
            <div
                className="h-[26rem] w-[90vw] max-w-sm sm:h-[24rem] sm:w-[34rem] md:h-[26rem] md:w-[38rem] lg:h-[28rem] lg:w-[42rem] xl:h-[30rem] xl:max-w-4xl [perspective:1000px] relative-b flex flex-col mx-auto items-start justify-start">
                <Tabs tabs={projects} contentClassName="mt-10 md:mt-14"/>
            </div>

        </div>
    )
}
