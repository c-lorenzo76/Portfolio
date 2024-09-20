import { Tabs } from "@/components/ui/tabs"

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
            title: "Veeto",
            value: "food",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <h1>Veeto</h1>
                    <strong className={"text-xs sm:text-md md:text-lg lg:text-2xl"}>Utilized: React, Express, Tailwind, Google Cloud</strong>
                    <div className={"mt-1 space-y-2 text-xs md:text-sm lg:text-lg"}>
                        <p>When you or your partner can't decided on what to eat</p>
                        <p></p>
                    </div>

                </div>
            )
        },
        {
            title: "Marketplace",
            value: "marketplace",
            content:(
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <h1>UNCG Marketplace</h1>
                    <strong className={"text-xs sm:text-md md:text-lg lg:text-2xl"}>Utilized: Angular, Express, Linode, GitHub actions</strong>
                    <div className={"md:mt-1 md:space-y-2 space-y-1 text-xs md:text-sm lg:text-lg"}>
                        <p>Ecommerce marketplace for UNCG students, faculty, and staff to buy
                            items from on-campus</p>
                        <p>Collaborated with other software engineers delivering duties in weekly
                            sprints</p>
                        <p>Responsible for handling the user information for logging in and
                            registering, handling images new posts</p>
                    </div>
                </div>
            )
        },
        {
            title: "Home server",
            value: "home",
            content:(
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <h1>Home Server</h1>
                    <strong className={"text-xs sm:text-md md:text-lg lg:text-2xl"}>Utilized: Debian Linux, JellyFin</strong>
                    <div className={"md:mt-1 space-y-2 text-xs md:text-sm lg:text-lg"}>
                        <p>Established personal home server for file storage, web hosting, and viewing LEGALLY obtained
                            movies </p>
                        <p>Future plans are to set up smart home automation using Home Assistant</p>
                    </div>
                </div>
            )
        }
    ]

    return (
        <div className="flex flex-col items-center w-full mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text py-8 mt-12 mb-12 text-center ">
                ⚡ Selected Projects
            </h1>
            <div
                className="h-[20rem] w-[25rem] md:h-[30rem] md:w-[45rem] lg:h-[40rem] lg:w-full [perspective:1000px] relative-b flex flex-col max-w-5xl mx-auto items-start justify-start">
                <Tabs tabs={tabs}/>
            </div>

        </div>
    )
}