import BorderMagicBtn from "@/components/ui/borderMagic-btn";
import { GridBackgroundDemo } from "@/components/ui/gridBg";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa6";
import {Link as LinkScroll} from "react-scroll"

const Hero = () => {
  return (
    <section>
    <div className="py-10 md:py-20 pt-36">
      <div className="relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackgroundDemo />
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            lazaroatredev's Portfolio 
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={"Transforming Concepts into Seamless User Experiences"}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, i'm Lázaro, a React Developer based in Cuba
          </p>
          <LinkScroll 
            to="projects"
            spy
          >
            <BorderMagicBtn
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </LinkScroll>
        </div>
      </div>
    </div>
    </section>

  );
};

export default Hero;
