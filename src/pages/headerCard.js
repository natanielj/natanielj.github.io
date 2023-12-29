import { Carousel } from "@material-tailwind/react";
import { MediaBar } from "../Components/mediaBar";
import CNUSDAwards from "../assets/img/cnusdAward.jpg";
import methodist from "../assets/img/methodist.jpg";
import SLC from "../assets/img/SLC23.jpg";
import Nataniel from "../assets/img/nataniel.png";
import BestStudent from "../assets/img/bestStu.jpg";
import ISLC22 from "../assets/img/islc22.jpg";

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
          src={CNUSDAwards}
          alt="me receiving award of recognition from CNUSD"
        />
        <img src={methodist} alt="Student Volunteer of the Quarter award" />
        <img
          img={SLC}
          alt="My team after receiving our awards at the FBLA State Leadership Conference 2023"
        />
        <img
          img={BestStudent}
          alt="Me and the principal of ERHS after I received the Most Exemplary Student of ERHS"
        />
        <img
          img={ISLC22}
          alt="Me after receiving our awards at the FBLA Inland Section Leadership Conference 2022"
        />
        <img img={Nataniel} alt="About me" />
      </Carousel>
    </div>
  );
}
