import { SKILLS_LEARNING, SKILLS_USING } from "@/texts/skillstext"
import Image from "next/image"





const Skills = () => {
  return (
    <div className="w-full py-20 bg-gray-200 flex flex-col space-y-16 items-center">
      <div className="border-4 w-max py-5 px-16 border-black flex items-center justify-center rounded-sm">
        <h2 id="skills" className="text-lg md:text-3xl font-bold">SKILLS</h2>
      </div>

      <div className="w-full md:w-1/2 flex flex-col space-y-16 items-center">
        <div className="flex items-start w-4/5 md:w-full flex-col space-y-5">
          <h3 className="text-lg md:text-2xl font-bold">USING NOW:</h3>
          <div className="w-full grid grid-cols-4 gap-8 md:gap-16 place-self-center">
            {
              SKILLS_USING.map((skill) =>(
                <ul key={skill.id}>
                  <div className="flex flex-col space-y-5 items-center">
                    <Image src={skill.picture} alt="skills_using" height={50} width={50}/>
                    <h4 className="text-xs md:text-lg">{skill.name}</h4>
                  </div>
                </ul>
              ))
            }
          </div>
        </div>

        <div className="flex items-start w-4/5 md:w-full flex-col space-y-5">
          <h3 className="text-lg md:text-2xl font-bold">LEARNING:</h3>
          <div className="w-full grid grid-cols-4 gap-8 md:gap-16 place-self-center">
            {
              SKILLS_LEARNING.map((skill) =>(
                <ul key={skill.id}>
                  <div className="flex flex-col space-y-5 items-center">
                    <Image src={skill.picture} alt="skills_using" height={50} width={50}/>
                    <h4 className="text-xs md:text-lg">{skill.name}</h4>
                  </div>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills