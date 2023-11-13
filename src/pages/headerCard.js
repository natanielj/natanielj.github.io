import { Card, Typography } from "@material-tailwind/react";
import { MediaBar } from "../Components/mediaBar";

//import { PageSpeedDial } from "../Components/SpeedDial.js";
// import { EducationSection } from "../Sections/edu";

function HeaderCard() {
  return (
    <div className="mx-auto max-w-screen-md">
      <div className="mx-auto max-w-screen-md pt-5">
        <Card className="overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
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
