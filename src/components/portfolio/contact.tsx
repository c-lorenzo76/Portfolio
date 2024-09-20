import { Copy, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";


export function Contact() {

    const [isPopoverVisible, setPopoverVisible] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('c.lorenzopav@gmail.com')
            .then(() => {
                setPopoverVisible(true);
                console.log('copied gmail');

                // Hide the popover after 3 seconds
                setTimeout(() => {
                    setPopoverVisible(false);
                }, 3000);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <motion.div
            initial={{opacity: 0.0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <div className="mt-36 h-full">
                <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text py-8 mt-12 mb-12 text-center ">
                    Contact me
                </h1>
                <div className="flex flex-col items-center mb-24 ">
                    <Card className="w-[380px] md:w-[600px]">
                        <CardHeader>
                            <CardTitle>Ready to work together?</CardTitle>
                            <CardDescription>Only one click away!</CardDescription>
                        </CardHeader>
                        <CardContent className="grid ">
                            <Button className="w-full"
                                    onClick={() => {
                                        window.location.href = window.location.href = 'mailto:c.lorenzopav@gmail.com?subject=Let%27s%20connect!&body=Hi%20Cristian%2C';
                                    }}
                            >
                                <Mail className="mr-2 h-4 w-4"/> Send me a message
                            </Button>
                        </CardContent>
                        <CardFooter>
                            <div className="flex flex-row w-full text-muted-foreground">
                                <div className="flex flex-col ">
                                    Connect
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button
                                                className="p-0 hover:bg-transparent bg-transparent text-muted-foreground"
                                                onClick={handleCopyEmail}
                                            >
                                                <Copy className="mr-1.5 h-5 w-5 "/> c.lorenzopav@gmail.com
                                            </Button>
                                        </PopoverTrigger>
                                        {isPopoverVisible && (
                                            <PopoverContent
                                                className={"w-40 h-20 flex justify-center items-center transition-opacity duration-300 ease-in-out bg-gray-100 shadow-lg rounded-lg"}>
                                                <div className="text-center font-semibold text-blue-600">
                                                    Email copied!
                                                </div>
                                            </PopoverContent>
                                        )}
                                    </Popover>
                                </div>
                                <div className="flex flex-col items-end w-full">
                                    Socials
                                    <div className="flex flex-row bg-transparent hover:bg-transparent p-0 space-x-2.5"
                                         role="icon">
                                        <a href={"https://github.com/c-lorenzo76"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                fill=""
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                />
                                            </svg>
                                        </a>
                                        <a href={"https://www.linkedin.com/in/cristian-lorenzo-pavon-333680261/"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill=""
                                                viewBox="0 0 24 24"

                                            >
                                                <path
                                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                                                />
                                            </svg>
                                        </a>

                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg" fill="none">
                                            <g fill="#000000">
                                                <path
                                                    d="M10.768 4.112A2.114 2.114 0 018.65 6.226a2.114 2.114 0 01-2.116-2.112C6.535 2.946 7.482 2 8.65 2s2.117.946 2.117 2.112zM13.21 6.225c.808 0 1.464-.655 1.464-1.462 0-.808-.655-1.463-1.465-1.463a1.464 1.464 0 100 2.925zM14.381 6.875c.342 0 .619.276.619.617v3.288a2.272 2.272 0 01-2.274 2.27h-.01c-.346 0-.673-.077-.966-.214A3.673 3.673 0 018.488 15a3.669 3.669 0 01-3.581-3.75h1.475V6.875h8z"/>
                                                <path fillRule="evenodd"
                                                      d="M7.566 4.925h-5.97A.596.596 0 001 5.521v5.958c0 .33.267.596.597.596h5.969c.33 0 .597-.267.597-.596V5.521a.596.596 0 00-.597-.596zM4.959 7.193h1.193v-.63H3.011v.63h1.188v3.243h.76V7.193z"
                                                      clipRule="evenodd"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </motion.div>

    )
}
