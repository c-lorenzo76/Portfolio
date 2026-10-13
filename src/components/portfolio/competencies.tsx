import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { technologies, frameworks, tools, databases } from "@/constants/expertise";


export function Competencies() {
    return (
        <div className="h-dvh w-full flex flex-col lg:flex-row items-center justify-start lg:justify-center overflow-y-auto py-8 md:py-10 transform-gpu">
            <div className="order-2 lg:order-1 w-full min-w-0 lg:w-1/2 mx-auto flex justify-center items-center">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 font-inconsolata">
                    <Card className="technologies mx-auto flex flex-col w-full max-w-[260px] items-center">
                        <CardHeader className="p-5 pb-2">
                            <CardTitle
                                className="text-center text-xl">
                                Technologies
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center p-5 pt-0 text-base">
                            <ul className="space-y-2.5">
                                {technologies.map((technology, index) => (
                                    <li key={index} className={"flex items-center"}>
                                        {technology.icon}
                                        <span>{technology.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border mx-auto flex flex-col w-full max-w-[260px] items-center">
                        <CardHeader className="p-5 pb-2">
                            <CardTitle className="text-center text-xl">
                                Tools
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center p-5 pt-0 text-base">
                            <ul className="space-y-2.5">
                                {tools.map((tool, index) => (
                                    <li key={index} className={"flex items-center"}>
                                        {tool.icon}
                                        <span>{tool.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card
                        className="libraries-frameworks border mx-auto flex flex-col w-full max-w-[260px] items-center">
                        <CardHeader className="p-5 pb-2">
                            <CardTitle className="text-center text-xl">
                                Frameworks/Libraries
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center p-5 pt-0 text-base">
                            <ul className="space-y-2.5">
                                {frameworks.map((framework, index) => (
                                    <li key={index} className={"flex items-center"}>
                                        {framework.icon}
                                        <span>{framework.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border mx-auto flex flex-col w-full max-w-[260px] items-center">
                        <CardHeader className="p-5 pb-2">
                            <CardTitle className="text-center text-xl">
                                Databases
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center p-5 pt-0 text-base">
                            <ul className="space-y-2.5">
                                {databases.map((database, index) => (
                                    <li key={index} className={"flex items-center"}>
                                        {database.icon}
                                        <span>{database.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center justify-center mx-auto sm:w-2/3 lg:w-1/2 lg:shrink-0 pt-4 transform-gpu">
                <h1 className="font-matemasie text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-center dark:text-emerald-300">
                    💡 Competencies
                </h1>
            </div>
        </div>
    )
}
