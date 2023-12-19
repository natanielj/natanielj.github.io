import { Typography, Carousel, Button } from "@material-tailwind/react";
import methodist from "../assets/img/methodist.jpg";
import SLC from "../assets/img/SLC23.jpg";
import Nataniel from "../assets/img/nataniel.png";
import BestStudent from "../assets/img/bestStu.jpg";
import ISLC22 from "../assets/img/islc22.jpg";
export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-screen-md mb-2">
      <Typography variant="h2">Awards</Typography>
      <Carousel className="rounded-xl  h-96">
        <div className="relative h-full w-full">
          <img src={SLC} alt="image 1" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                State Champion in Website Design
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                FBLA State Leadership Conference 2023
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={methodist}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Student Volunteer of the Quarter
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Methodist Hospital of Southern California
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src={BestStudent}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Most Exemplary Student of ERHS
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="mb-12 opacity-80"
              >
                Recognized By: California State Senate, County of Riverside,
                United States Congress, California Legislature Assembly,
                Recognition of Outstanding Achievement by Temescal Palms Lodge
                #314, the City of Eastvale, the CNUSD Board of Education and
                staff
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={ISLC22}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Second Place in Computer Applications
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                FBLA Inland Section Leadership Conference 2022
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Nataniel}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Honor Roll
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                AHS - Fall 2019 - Winter 2021, <br></br> ERHS - Spring 2022 -
                Spring 2023
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
