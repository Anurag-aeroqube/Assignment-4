
 
 
import React from "react";
import { LayoutSection } from "../Villastypes/Type1";

interface AboutSectionProps {
  layout: LayoutSection[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ layout }) => {
  return (
    <section className="w-full mt-[60px]">
      {layout.map((item, index) => (
        <div key={index}>
          <h1 className="font-mulish font-bold lg:text-left  text-center text-[20px] text-[#373f41] mb-[25px]">
            {item.title}
          </h1>
          <p className="font-mulish text-left text-[#737b7d] text-[18px] mb-[50px]">
            {item.data}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
