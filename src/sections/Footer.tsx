import { footerGrid } from "@/assets";
import BorderMagicBtn from "@/components/ui/borderMagic-btn";
import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { PiReadCvLogoFill  } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full py-10 md:py-24" id="contact">
      <div className="w-full absolute left-0 -bottom-44 min-h-96">
        <img src={footerGrid} alt="grid" className="w-full h-full opacity-50" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how i can help you achieve
          your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a href="mailto:lazaroatredev@gmail.com">
            <BorderMagicBtn
              title="Let's get in touch"
              icon={<FaLocationArrow size={20}/>}
              position="right"
            />
          </a>
          <a target="_blank" href="https://drive.google.com/file/d/1HfM1YbIruFdGrmnoMF5znxntjzAZZuW_/view?usp=drive_link">
            <BorderMagicBtn
              title="CV Download"
              icon={<PiReadCvLogoFill size={20}  />}
              position="right"
            />
          </a>
        </div>  
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-4 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Lazaro
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.url}>
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
