import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  Bars3BottomLeftIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export function PageSpeedDial() {
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  return (
    <div class="fixed bottom-4 right-4">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <Bars3BottomLeftIcon className="h-5 w-5 transition-transform group-hover:rotate-180" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <a href="#top">
            <SpeedDialAction className="relative">
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Home</Typography>
            </SpeedDialAction>
          </a>
          <a href="#about">
            <SpeedDialAction className="relative">
              <HomeIcon className="h-5 w-5" />
              <Typography {...labelProps}>About</Typography>
            </SpeedDialAction>
          </a>
          <a href="#education">
            <SpeedDialAction className="relative" href="#education">
              <CogIcon className="h-5 w-5" />
              <Typography {...labelProps}>Education</Typography>
            </SpeedDialAction>
          </a>
          <a href="#skills">
            <SpeedDialAction className="relative">
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Skills</Typography>
            </SpeedDialAction>
          </a>
          <a href="#awards">
            <SpeedDialAction className="relative">
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Awards</Typography>
            </SpeedDialAction>
          </a>
          <a href="#experience">
            <SpeedDialAction className="relative">
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Experience</Typography>
            </SpeedDialAction>
          </a>
          <a href="#contact">
            <SpeedDialAction className="relative">
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Contact</Typography>
            </SpeedDialAction>
          </a>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
