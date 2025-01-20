import { CarouselDemo } from "@/components/Carousel";
import Footer from "@/sections/Footer";
import { Tools } from "@/sections/Tools";

const MyTools = () => {
  return (
    <section className="pt-20">
      <Tools />
      <h2 className="heading text-4xl text-start pb-20">
        Other <span className="text-purple">Certifications</span>
      </h2>
      <CarouselDemo />
      <div className="mt-10">
        <Footer />
      </div>
    </section>
  );
};

export default MyTools;
