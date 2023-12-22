import React from "react";
import HeaderCard from "./headerCard";

import { Footer } from "./footer";
import { EducationSection } from "./edu";
import NameCard from "../Components/nameCard";
import SkillsCard from "../Components/skillsCard";
import AwardsPage from "./awards";
import Experience from "./exp";
import ContactForm from "./contact";
//import DarkModeSwitch from "../Components/darkMode";

export function HomePage() {
  return (
    <div section="top" className="bg-white dark:bg-midnight">
      <div className="sticky mx-auto max-w-screen-md pt-5">
        <NameCard />
      </div>

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
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
