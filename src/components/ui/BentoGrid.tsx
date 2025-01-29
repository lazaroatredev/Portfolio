import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GlobeDemo";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import { useState } from "react";
import BorderMagicBtn from "./borderMagic-btn";
import { FaLocationArrow } from "react-icons/fa6";
import { nextSvg } from "@/assets";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false)
  const handlecopy = ()=> {
    navigator.clipboard.writeText('lazaroatredev@gmail.com')
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%", 
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              alt={img}
              src={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className={`font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ${id===3 && 'pr-48'}`}>
            {description}
          </div>
          <div className={`font-sans font-bold text-lg lg:text-3xl max-w-[96] z-10 ${id===3 && ''}`}>
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex absolute -right-6 size-56 md:right-4 md:size-40 lg:-right-6 lg:size-56 xl:size-80">
              <img src={nextSvg} alt="Next.Js" className="w-full h-full  rounded-full"/>
            </div>
          )}
          {id===6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}/>                
              </div>
                <BorderMagicBtn 
                  title={ copied ? 'Email copied' : 'Copy my email'}
                  icon={<FaLocationArrow/>}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handlecopy}
                />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
