import { Breadcrumbs } from "@material-tailwind/react";

export function MenuNav() {
  return (
    <div className="dark:text-white bg-white">
      <Breadcrumbs separator="|">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#awards">Awards</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </Breadcrumbs>
    </div>
  );
}
