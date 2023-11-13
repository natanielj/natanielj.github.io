import React from "react";
import HeaderCard from "./headerCard";

import { Footer } from "./footer";
import { MenuNav } from "../Components/menubar";
import { EducationSection } from "./edu";
import NameCard from "../Components/nameCard";

export function HomePage() {
  return (
    <div className="darkMode">
      <div className="sticky mx-auto max-w-screen-md pt-7 dark:bg-slate-800">
        <MenuNav className="absolute w-max" />
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
      </div>
      <div className="items-center"></div>

      <Footer />
    </div>
  );
}
