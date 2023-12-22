import React from "react";
import { Chip } from "@material-tailwind/react";
import DarkModeButton from "../Components/darkModeSwitch";

export default function NameCard() {
  return (
    <div className="mx-auto max-w-screen-md pt-5 pb-7 items-center">
      <div className=" align-center">
        <DarkModeButton />
        <h1 className="font-sans text-5xl pt-3 pl-2 dark:text-white">
          Hi, I'm Nataniel!
        </h1>
      </div>
      <Chips />
    </div>
  );
}

function Chips() {
  return (
    <div className="flex gap-2 pt-5">
      <Chip variant="gradient" color="amber" value="Student" />
      <Chip variant="gradient" color="cyan" value="Programmer" />
      <Chip variant="gradient" value="Leader" color="blue" />
      <Chip variant="gradient" color="blue-gray" value="Freelancer" />
      <Chip variant="gradient" color="indigo" value="Web Developer" />
    </div>
  );
}
