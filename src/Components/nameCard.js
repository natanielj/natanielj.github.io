import React from "react";
import { Typography, Chip } from "@material-tailwind/react";
export default function NameCard() {
  return (
    <div className="mx-auto max-w-screen-md pt-5 pb-7">
      <Typography variant="h1">Hi, I'm Nataniel! </Typography>
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
