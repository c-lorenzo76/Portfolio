import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { technologies, frameworks, tools, databases } from "@/constants/expertise";


export function Competencies() {
    return (
        <div className="mx-auto w-[90%] pb-15 md:pb-32 flex flex-col">
            <div>
                <h1 className="font-matemasie text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text py-20 text-center dark:text-emerald-300">
                    💡 Competencies
                </h1>
            </div>
            <div className={"flex justify-center items-center mx-auto w-full"}>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-16 font-inconsolata">
                    <Card className="technologies mx-auto flex flex-col w-full max-w-screen items-center">
                        <CardHeader>
                            <CardTitle
                                className="text-center">
                                Technologies
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <ul className="space-y-3">
                                {technologies.map((technology, index) => (
                                    <li key={index} className={"flex items-center"}>
                                        {technology.icon}
                                        <span>{technology.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card
                        className="libraries-frameworks border mx-auto flex flex-col w-full max-w-screen items-center">
                        <CardHeader>
                            <CardTitle className="text-center">
                                Frameworks/Libraries
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <ul className="space-y-3">
                                {frameworks.map((framework, index) => (
                                    <li key={index} className={"flex items-center"}>
                                        {framework.icon}
                                        <span>{framework.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border mx-auto flex flex-col w-full max-w-screen items-center">
                        <CardHeader>
                            <CardTitle className="text-center">
                                Tools
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <ul className="space-y-3">
                                {tools.map((tool, index) => (
                                    <li key={index} className={"flex items-center"}>
                                        {tool.icon}
                                        <span>{tool.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border mx-auto flex flex-col w-full max-w-screen items-center">
                        <CardHeader>
                            <CardTitle className="text-center">
                                Databases
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <ul className="space-y-3">
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
        </div>
    )
}
