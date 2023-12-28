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
import React from "react"
import { PORTFOLIO_DATA } from "@/texts/portfoliotext"


const PortfolioSection = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true})
    )

    
    return (
        <div className="w-full py-20 bg-gray-200 flex flex-col space-y-16 items-center">
            <div className="border-4 w-max py-5 px-16 border-black flex items-center justify-center rounded-sm">
                <h2 id="portfolio" className="text-lg md:text-3xl font-bold">PORTFOLIO</h2>
            </div>
            <div className="flex items-center w-full">
                <div className="hidden md:block">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-fit bg-gray-900"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{align: "start"}}
                    >
                        <CarouselContent>
                            {
                                PORTFOLIO_DATA.map(eachPage => (
                                    <CarouselItem key={eachPage.id}>
                                        <div className="w-full flex flex-col space-y-10 items-center">
                                            <h4 className="text-2xl">{eachPage.title}</h4>
                                            <Card>
                                                <CardContent>
                                                    <div className="w-full grid grid-cols-3 gap-0 place-self-center">
                                                        {
                                                            eachPage.eachProjects.map(project => (
                                                                <div key={project.id} className="relative w-full">
                                                                    <Image src={project.image} alt="project_image" height={500} width={500}/>
                                                                    <div className="flex items-center mix-blend-multiply">
                                                                        <div className=" h-full absolute top-7 flex flex-col space-y-10 items-center w-full">
                                                                            <h2 className="text-lg text-black font-bold">{project.name}</h2>
                                                                            <p className="text-md text-black">{project.desctiption}</p>
                                                                            <div className="flex w-full space-x-14 items-center">
                                                                                <Link href={project.githubLink}>
                                                                                    <p className="text-black">Github</p>
                                                                                </Link>
                                                                                <Link className="text-black" href={project.liveHref}>
                                                                                    Demo
                                                                                </Link>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
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