import { Breadcrumbs } from "@material-tailwind/react";

export function MenuNav() {
  return (
    <div>
      <Breadcrumbs separator="-">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="">Projects</a>
        <a href="">Awards</a>
        <a href="">Projects</a>
      </Breadcrumbs>
      <div></div>
    </div>
  );
}
