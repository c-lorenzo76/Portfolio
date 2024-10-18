import {AuroraBackground} from "@/components/ui/aurora-background.tsx";

export const Landing = () => {
    return (
        <AuroraBackground>
            <div
                className={"font-poppins relative h-[100vh] w-full flex flex-col gap-4 items-center justify-center px-4"}>
                <h1 className={"text-7xl"}>Cristian Lorenzo-Pavon</h1>
                <h4 className={"text-4xl"}>B.S. Computer Science UNCG</h4>
                <h4 className={"text-4xl"}>M.S. Computer Science NCSU</h4>

            </div>
        </AuroraBackground>

    )
}