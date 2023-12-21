import { Typography } from "@material-tailwind/react";
import { MenuNav } from "../Components/menubar";

export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between p-5">
      <Typography
        color="blue-gray"
        className="font-normal pl-20 dark:text-white"
      >
        &copy; Nataniel Jayaseelan
      </Typography>
      <div className="pr-20">
        <MenuNav />
      </div>
    </footer>
  );
}
