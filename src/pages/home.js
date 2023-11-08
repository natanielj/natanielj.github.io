import React from "react";
import HeaderCard from "./headerCard";

import { Footer } from "./footer";
import { MenuNav } from "../Components/menubar";
import { EducationSection } from "./edu";

export function HomePage() {
  return (
    <div>
      <div className="sticky mx-auto max-w-screen-md pt-7">
        <MenuNav className="absolute" />
      </div>
      <div>
        <HeaderCard />
        <EducationSection />
      </div>
      <div className="items-center"></div>

      <Footer />
    </div>
  );
}
