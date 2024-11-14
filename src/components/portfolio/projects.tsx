import {Tabs} from "@/components/ui/tabs"
import {Badge} from "@/components/ui/badge.tsx";


export function Projects() {
    const tabs = [
        {
            title: "Remodeling",
            value: "remodel",
            content: (
                <div
                    className="w-full space-y-2 overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-5xl text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <h1 className={"font-bold"}>Remodeling</h1>
                    <div className={"text-xs md:text-xl lg:text-2xl md:h-[50%]"}>
                        <ul className={"list-disc list-inside md:space-y-4"}>
                            <li>
                                Developed a website for a remodeling company, increasing customer engagement by 25%
                                through a
                                user friendly interface
                            </li>
                            <li>
                                Streamlined the collection and management of potential clients' information during quote
                                requests, ensuring timely notifications for follow up
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <ul className={"flex flex-row space-x-1 lg:space-x-2 items-end mx-auto justify-center"}>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>
                                React
                            </Badge>
                        </li>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>
                                Golang
                            </Badge>
                        </li>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>
                                Tailwind
                            </Badge>
                        </li>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>
                                MySQL
                            </Badge>
                        </li>
                    </ul>
                    <a
                        href="https://github.com/c-lorenzo76/remodeling-co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-primary text-primary-foreground hover:bg-primary/90 rounded-md flex items-center justify-center w-full h-fit p-2 md:p-4 lg:p-6 text-xs md:text-sm lg:text-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.261.82-.58v-2.042c-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.107-.775.42-1.305.762-1.605-2.665-.302-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.524.116-3.176 0 0 1.008-.323 3.302 1.23.957-.266 1.983-.399 3.002-.403 1.02.004 2.046.137 3.002.403 2.293-1.554 3.3-1.23 3.3-1.23.654 1.652.242 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.624-5.478 5.922.43.37.823 1.102.823 2.222v3.293c0 .321.217.695.824.577C20.565 21.798 24 17.303 24 12 24 5.372 18.628 0 12 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Repo
                    </a>
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
                    <div className={"text-xs md:text-xl lg:text-2xl md:h-[50%]"}>
                        <ul className={"list-disc list-inside md:space-y-4"}>
                            <li>
                                An interactive poll application to help a group of people with deciding where to eat by
                                giving personalized recommendations based upon poll responses
                            </li>
                            <li>
                                Established real-time voting functionality through WebSocket connections, enabling users
                                to
                                view live updates on poll results
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <ul className={"flex flex-row space-x-1 lg:space-x-2 items-end mx-auto justify-center "}>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>React</Badge>
                        </li>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>Express</Badge>
                        </li>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>Tailwind</Badge>
                        </li>
                        <li>
                            <Badge variant="default"
                                   className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>Google
                                Cloud</Badge>
                        </li>
                    </ul>
                    <a
                        href="https://github.com/c-lorenzo76/Veeto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md flex items-center justify-center w-full h-fit p-2 md:p-4 lg:p-6 text-xs md:text-sm lg:text-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.261.82-.58v-2.042c-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.107-.775.42-1.305.762-1.605-2.665-.302-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.524.116-3.176 0 0 1.008-.323 3.302 1.23.957-.266 1.983-.399 3.002-.403 1.02.004 2.046.137 3.002.403 2.293-1.554 3.3-1.23 3.3-1.23.654 1.652.242 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.624-5.478 5.922.43.37.823 1.102.823 2.222v3.293c0 .321.217.695.824.577C20.565 21.798 24 17.303 24 12 24 5.372 18.628 0 12 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Repo
                    </a>


                </div>
            )
        },
        {
            title: "Marketplace",
            value:
                "marketplace",
            content:
                (
                    <div
                        className="w-full space-y-2 overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-5xl text-white bg-gradient-to-br from-purple-700 to-violet-900">
                        <h1 className={"font-bold"}>UNCG Marketplace</h1>
                        <div className={"text-xs md:text-xl lg:text-2xl md:h-[50%]"}>
                            <ul className="list-disc list-inside md:space-y-4">
                                <li>Collaborated with a team of 3 and developed an ecommerce application for UNCG
                                    students,
                                    faculty, and staff to buy and sell from other UNCG fellows
                                </li>
                                <li>Implemented security measures to restrict sign-ups exclusively to users with a UNCG
                                    email
                                    domain, ensuring access control and protecting user data
                                </li>
                            </ul>
                        </div>
                        <hr/>
                        <ul className={"flex flex-row space-x-1 lg:space-x-2 items-end mx-auto justify-center"}>
                            <li>

                                <Badge variant="default"
                                       className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>Angular</Badge>
                            </li>
                            <li>
                            <Badge variant="default"
                                       className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>Express</Badge>
                            </li>
                            <li>
                                <Badge variant="default"
                                       className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>Linode</Badge>
                            </li>
                            <li>
                                <Badge variant="default"
                                       className={"md:w-36 md:h-12 text-xs md:text-lg lg:px-2 flex justify-center items-center"}>GitHub
                                    Action</Badge>
                            </li>
                        </ul>
                        <a
                            href="https://github.com/usman-z/Campus_Marketplace"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md flex items-center justify-center w-full h-fit p-2 md:p-4 lg:p-6 text-xs md:text-sm lg:text-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.261.82-.58v-2.042c-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.107-.775.42-1.305.762-1.605-2.665-.302-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.524.116-3.176 0 0 1.008-.323 3.302 1.23.957-.266 1.983-.399 3.002-.403 1.02.004 2.046.137 3.002.403 2.293-1.554 3.3-1.23 3.3-1.23.654 1.652.242 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.624-5.478 5.922.43.37.823 1.102.823 2.222v3.293c0 .321.217.695.824.577C20.565 21.798 24 17.303 24 12 24 5.372 18.628 0 12 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Repo
                        </a>
                    </div>
                )
        },

    ]

    return (
        <div className="flex flex-col items-center w-full mx-auto ">
            <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text py-20 md:py-0 md:mb-10 text-center ">
                ⚡ Selected Projects
            </h1>
            <div
                className="h-[18rem] w-[360px] md:h-[30rem] md:w-[45rem] lg:h-[40rem] lg:w-full [perspective:1000px] relative-b flex flex-col max-w-5xl mx-auto items-start justify-start">
                <Tabs tabs={tabs}/>
            </div>

        </div>
    )
}