import { useState } from "react";
import HeadBanner from "./components/HeadBanner";
import ExperienceShowcase from "./components/ExperienceShowcase";
import {
  constructionImg,
  consultingImg,
  interiorImg,
  propertyImg,
} from "./assets/images";
import Services from "./components/Services";

function App() {
  return (
    <div className=" bg-black p-7">
      <HeadBanner />
      <ExperienceShowcase />
      <Services
        backgroundImage={constructionImg}
        title="CONSTRUCTION"
        description="We build enduring, high-quality structures with precision, craftsmanship, and a commitment to excellence."
        parentClassName="-mt-5"
        curveClassName="rounded-t-[8rem]"
      />
      <Services
        backgroundImage={consultingImg}
        title="CONSULTING"
        description="Our consulting services provide expert guidance at every project stage, ensuring efficient planning, smart solutions, and successful outcomes."
        parentClassName="mt-0"
        curveClassName="rounded-t-[8rem]"
      />
      <Services
        backgroundImage={interiorImg}
        title="INTERIOR DESIGN"
        description="We create inspiring, functional interiors tailored to reflect your style and optimize every space with elegance and purpose."
        parentClassName="mt-0"
        curveClassName="rounded-t-[8rem]"
      />
      <Services
        backgroundImage={propertyImg}
        title="PROPERTY MANAGEMENT"
        description="Our property management services ensure your assets are well-maintained, efficiently managed, and consistently add value, giving you peace of mind."
        parentClassName="mt-0"
        curveClassName="rounded-[8rem]"
      />
    </div>
  );
}

export default App;
