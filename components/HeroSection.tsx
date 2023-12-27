"use client";


import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "@/public/logo.jpg"
import Developer from "@/public/image_17.jpg"
import { Github } from 'lucide-react';
import Link from 'next/link';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVTEXT } from '@/texts/navbartext';





const HeroSection = () => {

    const [navbarOpen, setNavBar] = useState<boolean>(true);


    return (
        <>
            {/* dektop navbar and hero section */}

            <section className='hidden md:block shape-container'>
                <div className="rectangle left-shape max-h-max md:w-[600px] xl:w-full">
                    <div className='w-full px-20 py-20 flex flex-col md:space-y-20 xl:space-y-24 items-start'>
                        <div className="flex items-start">
                            <Image src={Logo} alt="my-logo" height={70} width={70}/>
                        </div>

                        <div className='flex flex-col space-y-5 items-start'>
                            <p className='text-3xl'>Hi,<span className='text-xl'> I'm</span></p>
                            <h3 className='md:text-3xl lg:text-4xl'>Mubaraq Akanbi</h3>
                            <p className='text-gray-400 text-sm'>Full-Stack Developer</p>
                        </div>

                        <div className='flex space-x-5 items-center'>
                            <div className='md:h-10 md:w-10 lg:h-20 lg:w-20 border flex items-center justify-center rounded-full bg-slate-700'>
                                <Link href="https://www.github.com/olartbaraq" target='_blank'>
                                    <Github className={cn("md:h-5 md:w-5 lg:h-10 lg:w-10 transition-all text-white")}/>
                                </Link>
                            </div>
                            <div className='md:h-10 md:w-10 lg:h-20 lg:w-20 border flex items-center justify-center rounded-full bg-slate-700'>
                                <Link href="https://www.twitter.com/muba_sekiro" target='_blank'>
                                    <Twitter className={cn("md:h-5 md:w-5 lg:h-10 lg:w-10 transition-all text-white")}/>
                                </Link>
                            </div>
                            <div className='md:h-10 md:w-10 lg:h-20 lg:w-20 border rounded-full flex items-center justify-center bg-slate-700'>
                                <Link href="https://www.linkedin.com/in/mubaraq-akanbi-68604bb0/" target='_blank'>
                                    <Linkedin className={cn("md:h-5 md:w-5 lg:h-10 lg:w-10 transition-all text-white")}/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="rectangle right-shape ">
                    <div className='md:-w-[600px] xl:w-full px-20 py-20 flex flex-col space-y-20 items-end'>
                        <div className="flex items-center md:space-x-2 lg:space-x-5 xl:space-x-10">
                            {NAVTEXT.map(links => (
                                <ul  key={links.id}>
                                    <Link className="text-slate-50 md:text-md lg:text-lg xl:text-2xl hover:p-3 hover:border hover:rounded-3xl hover:bg-slate-50 hover:text-black" href={links.href}>{links.title}</Link>
                                </ul>
                            ))}
                        </div>

                        <div className='flex items-center self-auto justify-center'>
                            <Image src={Developer} alt='my_image' width={500} height={500} />
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </section>

            {/* mobile navbar and background image */}
            
            <div className='w-full md:hidden relative'>
                <Image src='/Background.jpg' alt='dev_image' height={300} width={300} className='w-full max-h-max flex self-auto'/>
                <section className='absolute top-0 w-full block lg:hidden bg-slate-700 mix-blend-overlay'>
                    <div className='sticky w-full flex py-5 px-5 justify-center items-center'>

                        <div className='flex items-start flex-grow invert'>
                            <Image src='/logo.jpg' alt='site_logo' height={50} width={50} />
                        </div>

                        <div className='flex items-start'>
                            <button 
                                className='border rounded-lg outline-none focus:border-black'
                                onClick={() => setNavBar(prev => !prev)}
                            >
                                {
                                    navbarOpen ? (
                                        <X className={cn("h-10 w-10 invert transition-all text-muted-foreground")}/>
                                        ) : (
                                        <Menu className={cn("h-10 invert w-10 transition-all text-muted-foreground")}/>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                
                {
                navbarOpen ? (
                    <div className='w-full'>
                        <div className={cn('w-full py-10 flex flex-col space-y-5 items-center border-t-2 border-slate-50')}>
                            {NAVTEXT.map(links => (
                                    <ul  key={links.id}>
                                        <Link 
                                            className="text-slate-50 hover:py-3 px-10 hover:border hover:rounded-3xl hover:bg-slate-50 hover:text-black" 
                                            href={links.href}
                                            onClick={() => setNavBar(prev => !prev)}
                                            >
                                                {links.title}
                                            </Link>
                                    </ul>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

                
                </section>

                <div className='absolute top-96 flex flex-col w-full items-center space-y-6'>
                    <p className='text-3xl text-slate-50 '>Hi,<span className='text-xl text-slate-50'> I'm</span></p>
                    <h3 className='text-4xl text-slate-50'>Mubaraq Akanbi</h3>
                    <p className='text-slate-50 text-xl'>Full-Stack Developer</p>

                    <div className='flex space-x-5 items-center'>
                        <div className='h-20 w-20 border flex items-center justify-center rounded-full bg-slate-700'>
                            <Link href="https://www.github.com/olartbaraq" target='_blank'>
                                <Github className={cn("h-10 w-10 transition-all text-white")}/>
                            </Link>
                        </div>
                        <div className='h-20 w-20 border flex items-center justify-center rounded-full bg-slate-700'>
                            <Link href="https://www.twitter.com/muba_sekiro" target='_blank'>
                                <Twitter className={cn("h-10 w-10 transition-all text-white")}/>
                            </Link>
                        </div>
                        <div className='h-20 w-20 border rounded-full flex items-center justify-center bg-slate-700'>
                            <Link href="https://www.linkedin.com/in/mubaraq-akanbi-68604bb0/" target='_blank'>
                                <Linkedin className={cn("h-10 w-10 transition-all text-white")}/>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default HeroSection