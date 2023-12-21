import React from "react";
import HeaderCard from "./headerCard";

import { Footer } from "./footer";
import { EducationSection } from "./edu";
import NameCard from "../Components/nameCard";
import SkillsCard from "../Components/skillsCard";
import AwardsPage from "./awards";
import Experience from "./exp";
import DarkModeSwitch from "../Components/darkMode";

export function HomePage() {
  return (
    <div section="top" className="bg-white dark:bg-midnight">
      <div className="sticky mx-auto max-w-screen-md pt-5">
        <NameCard />
      </div>
      <DarkModeSwitch />
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
        <section id="awards">
          <AwardsPage />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact"></section>
      </div>
      <div className="items-center"></div>
      <Footer />
    </div>
  );
}
