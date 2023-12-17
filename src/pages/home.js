import React from "react";
import HeaderCard from "./headerCard";

import { Footer } from "./footer";
import { MenuNav } from "../Components/menubar";
import { EducationSection } from "./edu";
import NameCard from "../Components/nameCard";
import SkillsCard from "../Components/skillsCard";

export function HomePage() {
  return (
    <div className="bg-inherit">
      <div className="mx-auto max-w-screen-md pt-7">
        <MenuNav className=" w-max" />
      </div>
      <div className="sticky mx-auto max-w-screen-md pt-5">
        <NameCard />
      </div>
      <div>
        <section id="about">
          <HeaderCard />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="skills">
          <SkillsCard />
        </section>
      </div>
      <div className="items-center"></div>

      <Footer />
    </div>
  );
}
