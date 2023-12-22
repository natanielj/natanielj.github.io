import { Carousel } from "@material-tailwind/react";
import { MediaBar } from "../Components/mediaBar";

//import { PageSpeedDial } from "../Components/SpeedDial.js";
// import { EducationSection } from "../Sections/edu";

export default function HeaderCard() {
  return (
    <div className="mx-auto max-w-screen-md ">
      <div className="mx-auto max-w-screen-md pt-5">
        <Slider />
        <MediaBar />
        <h2 className="text-4xl mb-2 dark:text-white">About Me</h2>
        <h5 className="text-xl mb-2 dark:text-white">
          Current Student at UCSC | Freelance Web Developer
        </h5>
        <p className="dark:text-white">
          I am a highly skilled and passionate professional dedicated to
          creating exceptional websites that bring visions to life. With a solid
          background in web development and a keen eye for design, I strive to
          deliver aesthetically pleasing and user-friendly websites that
          effectively meet my clients' objectives
        </p>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div>
      <Carousel>
        <img
          src="https://media.licdn.com/dms/image/D5622AQHUQBLY6Raljw/feedshare-shrink_800/0/1686889902414?e=1703721600&v=beta&t=rNMFxgGqbcq5QhjYlgUK1pLQaq4ZtRZap2yzPVZaqwU"
          alt="me receiving award of recognition from CNUSD"
        />
      </Carousel>
    </div>
  );
}
