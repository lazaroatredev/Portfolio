import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { tools } from "@/data";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"

const ToolsSection = () => {
  return (
    <div className="pt-10 md:pt-20" id="tools">
      <h1 className="heading mb-10 md:mb-20">
        My <span className="text-purple">Tools</span>
      </h1>
      <div className="flex flex-col items-center justify-center max-lg:mt-10">
        <InfiniteMovingCards
          items={tools}
          direction="left"
          speed="normal"
        />
      </div>
      <div className="flex items-center justify-end">
        <LinkScroll
          to="about"
          offset={-800}
          spy
        >
          <Link to="/tools" className="text-purple text-sm mr-8 pt-4">See more...</Link>
        </LinkScroll>
      </div>
    </div>
  );
};

export default ToolsSection;
