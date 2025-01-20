import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="py-10 md:py-20">
      <h1 className="heading pb-20">
        My <span className="text-purple">Skills</span>
      </h1>
      <div className="flex gap-8 sm:gap-8 lg:gap-24 flex-wrap items-center justify-center">
        {skills.map((item)=>(
            <div className="w-[2.5rem] h-[2.5rem] sm:size-16 lg:size-20">
                <img src={item.img} alt={item.name} className="w-full h-full"/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
