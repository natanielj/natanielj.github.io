import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function EducationSection() {
  return (
    <div className="mx-auto max-w-screen-md pt-5 pb-7">
      <div class="fixed bottom-4 right-4">
        <a href="#top">
          <IconButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </IconButton>
        </a>
      </div>
      <Typography variant="h2" className="py-5">
        Education
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Arcadia High School (AHS)
            </Typography>
            <Typography variant="small" color="gray">
              August 2019 - December 2021
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              <b>GPA:</b> 3.73<br></br>
            </Typography>
            <br></br>
            <Timeline>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost"></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      AHS VEX Robotics - Vice President
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Winter 2019 - Winter 2021
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="red"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      Methodist Hospital of Souther California - Volunteer
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Winter 2019 - Winter 2021
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="red"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      Holy Angeles Catholic Church - Altar Server
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Fall 2019 - Winter 2021
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="green"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      Apache News - Web Developer, Student Reporter
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Fall 2020 - Summer 2022
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              <b>Other Activities:</b> Arcadia High School - JV Swimming
              <br></br>
              <br></br>
              <b>Awards:</b> Methodist Hospital of Southern California -
              Volunteer of the Quarter, Honor Roll - Fall 2019 - Fall 2021
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Eleanor Roosvelt High School (ERHS)
            </Typography>
            <Typography variant="small" color="gray">
              January 2022 - June 2023
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              <b>GPA:</b> 3.83<br></br>
            </Typography>
            <br></br>
            <Timeline>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost"></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      Eastvale Innovators - Founder, President
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Winter 2022 - Spring 2023
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="red"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      Rotary Club of Greater Eastvale - Web Developer
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Summer 2023 - Spring 2023
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="red"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      State Champion - Website Design
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      FBLA's State Leadership Conference: April 2023
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="green"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      Virtual Medical Missions - Chief of Computer Science
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Spring 2023 - Present
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              <br></br>
              <b>Other Activities:</b> ERHS Theater Tech - Workshop Manager,
              ERHS - Drone Technician, ERHS FBLA - Community Service Director,
              ERHS Choir - Vice President of Baritone Choir, Co-Vice President
              of ERHS Choir Club, CNUSD Parent Center - Math Tutor, Kumon - Math
              Tutor, ERHS - JV Lacrosse Goalie
              <br></br>
              <br></br>
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              University of California, Santa Cruz (UCSC)
            </Typography>
            <Typography variant="small" color="gray">
              September 2023 - Present
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              <b>College Scholars Program, Crown College</b>
              <br></br>
              <b>Major:</b> Computer Engineering <br></br>
              <b>GPA:</b> 3.0<br></br>
              <Typography variant="small" color="white" aria-disabled>
                <b>Activities:</b> Slug Gaming Community - Production Manager,
                SlugBotics - Marketing, UCSC CITRIS - Drone Pilot Trainee
                <br></br>
              </Typography>
            </Typography>
            <Timeline>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon className="p-3" variant="ghost"></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      Slug Gaming Community - Production Manager
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Summer 2023 - Present
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="red"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      UCSC CITRIS - Drone Pilot Trainee
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Winter 2024 - Spring 2024
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineConnector className="!w-[78px]" />
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="red"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      UCSC Admissions - Web Developer
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Winter 2024 - Spring 2024
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="h-28">
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color="green"
                  ></TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" color="blue-gray">
                      To Be Continued...
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Present
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
