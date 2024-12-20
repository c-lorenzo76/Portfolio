import {Tabs} from "@/components/ui/tabs"
import { projects } from "@/constants/projects";

export function Projects() {

    return (
        <div className="flex flex-col items-center w-full mx-auto ">
            <h1 className="font-matemasie dark:text-emerald-300 text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text py-20 md:py-10 text-center ">
                ⚡ Selected Projects
            </h1>
            <div
                className="h-[18rem] w-[360px] md:h-[30rem] md:w-[45rem] lg:h-[35rem] lg:w-[50rem] xl:h-[40rem] xl:w-full [perspective:1000px] relative-b flex flex-col max-w-5xl mx-auto items-start justify-start">
                <Tabs tabs={projects}/>
            </div>

        </div>
    )
}
