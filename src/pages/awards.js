import { Typography, Carousel } from "@material-tailwind/react";

//local photo imports
import methodist from "../assets/img/methodist.jpg";
import SLC from "../assets/img/SLC23.jpg";
import Nataniel from "../assets/img/nataniel.png";
import BestStudent from "../assets/img/bestStu.jpg";
import ISLC22 from "../assets/img/islc22.jpg";

export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-screen-md mb-2">
      <h2 className="text-4xl mb-2 dark:text-white">Awards</h2>

      <Carousel className="rounded-xl  h-96">
        <Slides
          img={SLC}
          alt="My team after receiving our awards at the FBLA State Leadership Conference 2023"
          title="State Champion in Website Design"
          desc="FBLA State Leadership Conference 2023"
        />
        <Slides
          img={methodist}
          alt="My photo used for the Student Volunteer of the Quarter award"
          title="Student Volunteer of the Quarter"
          desc="Methodist Hospital of Southern California"
        />
        <Slides
          img={BestStudent}
          alt="Me and the principal of ERHS after I received the Most Exemplary Student of ERHS"
          title="Most Exemplary Student of ERHS"
          desc="Recognized By: California State Senate, County of Riverside,
                United States Congress, California Legislature Assembly,
                Recognition of Outstanding Achievement by Temescal Palms Lodge
                #314, the City of Eastvale, the CNUSD Board of Education and
                staff"
        />
        <Slides
          img={ISLC22}
          alt="Me after receiving our awards at the FBLA Inland Section Leadership Conference 2022"
          title="Second Place in Computer Applications"
          desc="FBLA Inland Section Leadership Conference 2022"
        />
        <Slides
          img={Nataniel}
          alt="My professional photo"
          title="Honor Roll"
          desc="AHS - Fall 2019 - Winter 2021, ERHS - Spring 2022 -
                Spring 2023"
        />
      </Carousel>
    </div>
  );
}

//Function to render each slide
function Slides(props) {
  return (
    <div className="relative h-full w-full">
      <img
        src={props.img}
        alt={props.alt}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <h4 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
            {props.title}
          </h4>
          <Typography
            variant="small"
            color="white"
            className="mb-12 opacity-80"
          >
            {props.desc}
          </Typography>
        </div>
      </div>
    </div>
  );
}
