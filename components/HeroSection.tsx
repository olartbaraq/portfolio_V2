import React from 'react'
import Image from 'next/image'
import Logo from "@/public/logo.jpg"
import Developer from "@/public/image_17.jpg"
import { Github } from 'lucide-react';
import Link from 'next/link';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVTEXT } from '@/texts/navbartext';

const HeroSection = () => {
    return (
        <section className='hidden lg:block shape-container'>
            <div className="rectangle left-shape max-h-max lg:w-[600px] xl:w-full">
                <div className='w-full px-20 py-20 flex flex-col lg:space-y-10 xl:space-y-24 items-start'>
                    <div className="flex items-start">
                        <Image src={Logo} alt="my-logo" height={70} width={70}/>
                    </div>

                    <div className='flex flex-col space-y-5 items-start'>
                        <p className='text-3xl'>Hi,<span className='text-xl'> I'm</span></p>
                        <h3 className='text-6xl'>Mubaraq Akanbi</h3>
                        <p className='text-gray-400 text-sm'>Full-Stack Developer</p>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <div className='h-20 w-20 border flex items-center justify-center rounded-full bg-slate-700'>
                            <Link href="https://www.github.com/olartbaraq" target='_blank'>
                                <Github className={cn("h-10 w-10 transition-all text-muted-foreground")}/>
                            </Link>
                        </div>
                        <div className='h-20 w-20 border flex items-center justify-center rounded-full bg-slate-700'>
                            <Link href="https://www.twitter.com/muba_sekiro" target='_blank'>
                                <Twitter className={cn("h-10 w-10 transition-all text-muted-foreground")}/>
                            </Link>
                        </div>
                        <div className='h-20 w-20 border rounded-full flex items-center justify-center bg-slate-700'>
                            <Link href="https://www.linkedin.com/in/mubaraq-akanbi-68604bb0/" target='_blank'>
                                <Linkedin className={cn("h-10 w-10 transition-all text-muted-foreground")}/>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="rectangle right-shape ">
                <div className='lg:-w-[600px] xl:w-full px-20 py-20 flex flex-col space-y-20 items-end'>
                    <div className="flex items-center lg:space-x-5 xl:space-x-10">
                        {NAVTEXT.map(links => (
                            <ul  key={links.id}>
                                <Link className="text-slate-50 lg:text-lg xl:text-2xl hover:p-3 hover:border hover:rounded-3xl hover:bg-slate-50 hover:text-black" href={links.href}>{links.title}</Link>
                            </ul>
                        ))}
                    </div>

                    <div className='flex items-center justify-center'>
                            <Image src={Developer} alt='my_image' width={500} height={500}/>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection