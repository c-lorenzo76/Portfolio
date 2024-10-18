import { Tabs } from "@/components/ui/tabs"
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";

export function Projects(){
    const tabs =[
        // {
        //     title: "Peak Strength",
        //     value: "peak",
        //     content: (
        //         <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 space-y-2">
        //             <h1>Peak Strength</h1>
        //             <p className="text-sm">Social platform to view gym progress, workouts, and meet other enthusiasts</p>
        //             {/*<img*/}
        //             {/*    src="https://media3.giphy.com/media/4bjIKBOWUnVPICCzJc/giphy.gif?cid=6c09b95255ki8tezm1k6o9soefq5jciifkm7g5ycrxd5kvsi&ep=v1_gifs_search&rid=giphy.gif&ct=g"*/}
        //             {/*    alt="dummy image"*/}
        //             {/*    width="1000"*/}
        //             {/*    height="1000"*/}
        //             {/*    className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"*/}
        //             {/*/>*/}
        //
        //         {/*https://media3.giphy.com/media/4bjIKBOWUnVPICCzJc/giphy.gif?cid=6c09b95255ki8tezm1k6o9soefq5jciifkm7g5ycrxd5kvsi&ep=v1_gifs_search&rid=giphy.gif&ct=g*/}
        //         </div>
        //     )
        // },
        {
            title: "Remodeling",
            value: "remodel",
            content:(
                <div
                    className="w-full space-y-2 overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-5xl text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <h1 className={"font-bold"}>Remodeling</h1>
                    <div className={"text-xs md:text-sm lg:text-lg md:h-[50%]"}>
                        <ul className={"list-disc list-inside"}>
                            <li>
                                Developed a website for a remodeling company, increasing customer engagement by 25% through a
                                user friendly interface
                            </li>
                            <li>
                                Streamlined the collection and management of potential clients' information during quote
                                requests, ensuring timely notifications for follow up
                            </li>
                        </ul>

                    </div>
                    <hr />
                    <ul className={"flex flex-row space-x-1 lg:space-x-2 items-end"}>
                        <li>
                            <Badge variant="default">React</Badge>
                        </li>
                        <li>
                            <Badge variant="default">Golang</Badge>
                        </li>
                        <li>
                            <Badge variant="default">TailwindCSS</Badge>
                        </li>
                        <li>
                            <Badge variant="default">MySQL</Badge>
                        </li>
                    </ul>
                    <Button className={"h-fit"} >
                        Repo
                    </Button>
                </div>
            )
        },
        {
            title: "Veeto",
            value: "food",
            content: (
                <div
                    className="w-full space-y-2 overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-5xl text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <h1 className={"font-bold"}>Veeto</h1>
                    <div className={"text-xs md:text-sm lg:text-lg md:h-[50%]"}>
                        <ul className={"list-disc list-inside"}>
                            <li>
                                An interactive poll application to help a group of people with deciding where to eat by
                                giving personalized recommendations based upon poll responses
                            </li>
                            <li>
                                Established real-time voting functionality through WebSocket connections, enabling users to
                                view live updates on poll results
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <ul className={"flex flex-row space-x-1 "}>
                        <li>
                            <Badge variant="default" className={"text-white"}>React</Badge>
                        </li>
                        <li>
                            <Badge variant="default" className={"text-white"}>Express</Badge>
                        </li>
                        <li>
                            <Badge variant="default" className={"text-white"}>TailwindCSS</Badge>
                        </li>
                        <li>
                            <Badge variant="default" className={"text-white"}>Google Cloud</Badge>
                        </li>
                    </ul>
                    <Button className={""} >
                        Repo
                    </Button>


                </div>
            )
        },
        {
            title: "Marketplace",
            value: "marketplace",
            content: (
                <div
                    className="w-full space-y-2 overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-5xl text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <h1 className={"font-bold"}>UNCG Marketplace</h1>
                    <div className={"text-xs md:text-sm lg:text-lg md:h-[50%]"}>
                        <ul className="list-disc list-inside">
                            <li>Collaborated with a team of 3 and developed an ecommerce application for UNCG students,
                                faculty, and staff to buy and sell from other UNCG fellows
                            </li>
                            <li>Implemented security measures to restrict sign-ups exclusively to users with a UNCG
                                email
                                domain, ensuring access control and protecting user data
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <ul className={"flex flex-row space-x-1 "}>
                        <li>

                            <Badge variant="default" className={"text-white"}>Angular</Badge>
                        </li>
                        <li>
                            <Badge variant="default" className={"text-white"}>Express</Badge>
                        </li>
                        <li>
                            <Badge variant="default" className={"text-white"}>Linode</Badge>
                        </li>
                        <li>
                            <Badge variant="default" className={"text-white"}>GitHub Actions</Badge>
                        </li>
                    </ul>
                    <Button className={""}>
                        Repo
                    </Button>

                </div>
            )
        },

    ]

    return (
        <div className="flex flex-col items-center w-full mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text py-8 mt-12 mb-12 text-center ">
                ⚡ Selected Projects
            </h1>
            <div
                className="h-[18rem] w-[360px] md:h-[30rem] md:w-[45rem] lg:h-[40rem] lg:w-full [perspective:1000px] relative-b flex flex-col max-w-5xl mx-auto items-start justify-start">
                <Tabs tabs={tabs}/>
            </div>

        </div>
    )
}