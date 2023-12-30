"use client"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { PORTFOLIO_DATA } from "@/texts/portfoliotext"


const PortfolioSection = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true})
    )

    const [isHovered, setIsHovered] = useState<boolean>(false);

    
    return (
        <div className="w-full py-20 bg-gray-200 flex flex-col space-y-16 items-center">
            <div className="border-4 w-max py-5 px-16 border-black flex items-center justify-center rounded-sm">
                <h2 id="projects" className="text-lg md:text-3xl font-bold">PROJECTS</h2>
            </div>
            <div className="flex items-center w-5/6">
                <div className="hidden md:block">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-fit"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{align: "start"}}
                    >
                        <CarouselContent>
                            {
                                PORTFOLIO_DATA.map(eachPage => (
                                    <CarouselItem key={eachPage.id}>
                                        <div className="w-full flex flex-col space-y-0 items-center">
                                            <div className="w-5/6 h-20 py-5 px-5 flex items-center justify-center bg-zinc-600">
                                                <h4 className="text-4xl text-slate-100">{eachPage.title}</h4>
                                            </div>
                                            
                                            <Card>
                                                <CardContent>
                                                    <div className="w-full grid grid-cols-3 gap-0 place-self-center">
                                                        {
                                                            eachPage.eachProjects.map(project => (
                                                                <div key={project.id} className="relative w-full">
                                                                    <Image src={project.image} alt="project_image" height={500} width={500}/>
                                                                    {/* {isHovered ? ( */}
                                                                        <div className="bg-zinc-600 mix-blend-hard-light border rounded-full h-5/6 w-5/6 flex items-center justify-center absolute top-5 py-16 md:left-5 xl:left-10 "
                                                                            // onMouseEnter={() => setIsHovered(true)}
                                                                            // onMouseLeave={() => setIsHovered(false)}
                                                                        >
                                                                            <div className="h-full flex flex-col space-y-8 justify-center items-center w-full">
                                                                                <h2 className="md:text-sm xl:text-4xl text-slate-50 font-bold">{project.name}</h2>
                                                                                <p className="md:text-xs xl:text-2xl text-slate-50 w-3/4 leading-loose text-center">{project.desctiption}</p>
                                                                                <div className="flex w-full space-x-5 justify-center items-center">
                                                                                    <Link href={project.githubLink}>
                                                                                        <p className="text-slate-50 md:text-xs xl:text-xl hover:py-3 px-5 hover:border hover:rounded-3xl hover:bg-slate-50 hover:text-black">Github</p>
                                                                                    </Link>
                                                                                    <Link className="text-slate-50 md:text-xs xl:text-xl hover:py-3 px-5 hover:border hover:rounded-3xl hover:bg-slate-50 hover:text-black" href={project.liveHref}>
                                                                                        Demo
                                                                                    </Link>
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    {/* ) : (
                                                                        <div className=""></div>
                                                                    )} */}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection