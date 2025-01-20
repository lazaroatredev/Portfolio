import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Approach from "@/sections/Approach";
import ToolsSection from "@/sections/ToolsSection";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import RecentProjects from "@/sections/RecentProjects";
import Skills from "@/sections/Skills";

const Home = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <ToolsSection />
      <Skills />
      <Approach />
      <Footer />
    </>
  );
};

export default Home;
