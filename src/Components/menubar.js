import { Breadcrumbs } from "@material-tailwind/react";

export function MenuNav() {
  return (
    <div>
      <Breadcrumbs separator="|">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#awards">Awards</a>
        <a href="#experience">Experience</a>
        <a href="">Contact</a>
      </Breadcrumbs>
      <div></div>
    </div>
  );
}
