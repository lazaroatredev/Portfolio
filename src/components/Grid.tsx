import { Element } from "react-scroll";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <Element name="about">
      <BentoGrid>
        {gridItems.map(
          ({id,title,className,description,img,imgClassName,spareImg,titleClassName}) => (
            <BentoGridItem
              id={id}
              className={className}
              key={id}
              title={title}
              description={description}
              img={img as string}
              imgClassName={imgClassName}
              spareImg={spareImg as string}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </Element>
  );
};

export default Grid;
