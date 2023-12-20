import { Switch, Typography } from "@material-tailwind/react";

// future update: get state of dark mode and update on site
export default function DarkModeSwitch() {
  return (
    <div className="flex justify-start">
      <Typography color="gray" className="font-normal text-gray-600 pr-2">
        Dark Mode
      </Typography>
      <Switch
        id="darkModeSwitch"
        color="blue"
        defaultChecked={false}
        onChange={() => {
          document.documentElement.classList.toggle("dark");
        }}
      ></Switch>
    </div>
  );
}

/*  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
*/
