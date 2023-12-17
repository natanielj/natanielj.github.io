import React from "react";
import { Typography, Chip, Avatar } from "@material-tailwind/react";

export default function NameCard() {
  return (
    <div className="mx-auto max-w-screen-md pt-5 pb-7">
      <div className="">
        <Avatar
          size="xl"
          src="https://media.licdn.com/dms/image/D5603AQHWqLZ9G4rjZw/profile-displayphoto-shrink_100_100/0/1695765871186?e=1708560000&v=beta&t=zA1o0LMVqsbBaznG0aWfKTr2JXkaqS86PvEOBZ1Ujx8"
          alt="avatar"
          withBorder={true}
          color="blue"
          className="p-0.5"
        />
      </div>
      <div>
        <Typography variant="h1">Hi, I'm Nataniel! </Typography>
        <Chips />
      </div>
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
