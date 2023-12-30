import { cn } from '@/lib/utils';
import { PenTool } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Code2 } from 'lucide-react';


const About = () => {
  return (
    <div className="w-full py-20 bg-gray-200 flex flex-col space-y-16 items-center">
        <div className="border-4 w-max p-5 border-black flex items-center justify-center rounded-sm">
            <h2 id="about_me" className="text-lg md:text-3xl font-bold">ABOUT ME</h2>
        </div>

        <div className='text-center w-full px-10'>  
            <p className="text-md lg:text-2xl w-full leading-loose">Dedicated and results-driven Software Engineer with over 4 years of expertise in designing and implementing innovative technical solutions. Proficient in a wide array of programming languages and technologies, including Python, JavaScript, Golang, and Docker. Committed to delivering outstanding contributions in scalable application development and continuously enhancing skills to meet the demands of cutting-edge projects.</p>
        </div>

        <div className="flex items-center space-x-5">
            <hr className="h-10 w-1 border-2 rounded-md border-black"/>
            <h4>EXPLORE</h4>
            <hr className="h-10 w-1 border-2 rounded-md border-black"/>
        </div>

        <div className="flex items-center space-x-3">
            <hr className="h-1 w-10 border-2 rounded-md border-black"/>
            <h4 className="font-bold text-md">\\v//</h4>
            <hr className="h-1 w-10 border-2 rounded-md border-black"/>
        </div>
        
        <div className="flex flex-col space-y-16 items-center w-full px-10">
            <div className="flex flex-col md:flex md:flex-row items-center w-full space-y-12 md:space-x-28">
                <div className="relative text-center items-center flex-col w-full md:w-1/2 lg:w-full space-y-2">
                    <PenTool className={cn('absolute left-36 lg:left-56 -top-5 w-20 h-20 text-slate-900 mix-blend-overlay')}/>
                    <h3 className="text-lg md:text-2xl font-bold">DESIGN</h3>
                    <p className="lg:w-full text-md lg:text-2xl leading-loose ">Meticulous in crafting user-centric and visually appealing designs, I bring a keen eye for detail to create intuitive and seamless user experiences.</p>
                </div>

                <div className="relative text-center items-center flex-col w-full md:w-1/2 lg:w-full space-y-2">
                    <Settings className={cn('absolute left-44 -top-5 w-20 h-20 text-slate-900 mix-blend-overlay')}/>
                    <h3 className="text-lg md:text-2xl font-bold">MAINTENANCE</h3>
                    <p className="lg:w-full text-md lg:text-2xl leading-loose ">Adept at ensuring the long-term health and reliability of applications, I excel in implementing robust maintenance strategies.</p>
                </div>
            </div>

            <div className="relative text-center items-center self-center flex-col w-full md:w-1/2 lg:w-full space-y-2">
                <Code2 className={cn('absolute left-44 lg:left-96 -top-8 lg:-top-5 w-20 h-20 text-slate-900 mix-blend-overlay')}/>
                <h3 className="text-lg md:text-2xl font-bold">DEVELOPMENT</h3>
                <p className="lg:w-full text-md lg:text-2xl leading-loose ">I leverage my extensive expertise in languages like Python, Golang, and JavaScript to engineer scalable and high-performance applications</p>
            </div>

        </div>

        <div className="flex items-center space-x-3">
            <hr className="h-1 w-10 border-2 rounded-md border-black"/>
            <h4 className="font-bold text-md">\\v//</h4>
            <hr className="h-1 w-10 border-2 rounded-md border-black"/>
        </div>
    </div>
  )
}

export default About