import { bg } from "@/assets";
import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { Element } from "react-scroll";

const RecentProjects = () => {
  return (
    <Element className="pt-10 md:pt-20" name="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent project</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="sm:h-[35rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                        <img src={bg} alt="bg-img"/>
                    </div>
                    <img 
                        src={img} 
                        alt={title}
                        width={500}
                        className="z-10 absolute bottom-0"
                    />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                    {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                        {iconLists.map((icon,index)=>(
                            <div 
                                key={icon}
                                className='border border-white/[0.21] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'    
                                style={{
                                    transform : `translateX(-${5 * index *2}px)`
                                }}
                            >
                                <img src={icon} alt={icon} className="p-2" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="flex lg:text-sm text-purple">Check Live Site</p>
                        <FaLocationArrow className="ms-3" color="#CBACF9"/>
                    </div>
                </div>

            </PinContainer>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default RecentProjects;
