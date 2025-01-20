import { certificateBeggTs, certificateReactTs, certificateTsErrors } from "@/assets";
import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Beginner TypeScript",
      button: "Explore",
      src: certificateBeggTs,
    },
    {
      title: "React + Ts",
      button: "Explore",
      src: certificateReactTs,
    },
    {
      title: "TypeScript Errors",
      button: "Explore",
      src: certificateTsErrors,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} />
    </div>
  );
}
