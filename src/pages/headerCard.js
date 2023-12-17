import { Typography, Carousel } from "@material-tailwind/react";
import { MediaBar } from "../Components/mediaBar";

//import { PageSpeedDial } from "../Components/SpeedDial.js";
// import { EducationSection } from "../Sections/edu";

function HeaderCard() {
  return (
    <div className="mx-auto max-w-screen-md ">
      <div className="mx-auto max-w-screen-md pt-5">
        <Carousel>
          <img src="https://media.licdn.com/dms/image/D5622AQHUQBLY6Raljw/feedshare-shrink_800/0/1686889902414?e=1703721600&v=beta&t=rNMFxgGqbcq5QhjYlgUK1pLQaq4ZtRZap2yzPVZaqwU" />
        </Carousel>
        <MediaBar />
        <Typography variant="h2" color="blue-gray" className="mb-2">
          About Me
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-4">
          Current Student at UCSC | Freelance Web Developer
        </Typography>
        <Typography color="gray" className="font-normal">
          I am a highly skilled and passionate professional dedicated to
          creating exceptional websites that bring visions to life. With a solid
          background in web development and a keen eye for design, I strive to
          deliver aesthetically pleasing and user-friendly websites that
          effectively meet my clients' objectives
        </Typography>
      </div>
    </div>
  );
}

export default HeaderCard;
