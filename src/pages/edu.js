import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import { PageSpeedDial } from "../Components/SpeedDial";

export function EducationSection() {
  return (
    <div className="mx-auto max-w-screen-md pt-5 pb-7">
      <PageSpeedDial />
      <h2 className="text-4xl mb-2 dark:text-white">Education</h2>

      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <h6 className="dark:text-white">Arcadia High School (AHS)</h6>
            <p className="text-sm dark:text-white">
              August 2019 - December 2021
            </p>
          </TimelineHeader>
          <Timelines
            gpa="3.73"
            exp1="AHS VEX Robotics - Vice President" // Experience 1
            rag1="Fall 2019 - Winter 2021" // Relevant Activities 1
            exp2="Methodist Hospital of Souther California - Volunteer" // Experience 2
            rag2="Winter 2019 - Winter 2021" // Relevant Activities 2
            exp3="Holy Angeles Catholic Church - Altar Server" // Experience 3
            rag3="Fall 2019 - Winter 2021" // Relevant Activities 3
            exp4="Apache News - Web Developer, Student Reporter" // Experience 4
            rag4="Fall 2020 - Summer 2022" // Relevant Activities 4
            ota="AHS - Honor Roll, Arcadia High School - JV Swimming" // Other Activities
            awa="Methodist Hospital of Southern California - Volunteer of the Quarter, Honor Roll - Fall 2019 - Fall 2021" // Awards
          />
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <h6 className="dark:text-white">
              Eleanor Roosvelt High School (ERHS)
            </h6>
            <p className="text-sm dark:text-white">January 2022 - June 2023</p>
          </TimelineHeader>
          <Timelines
            gpa="3.83"
            exp1="Eastvale Innovators - Founder, President" // Experience 1
            rag1="Winter 2022 - Spring 2023" // Relevant Activities 1
            exp2="Rotary Club of Greater Eastvale - Web Developer" // Experience 2
            rag2="Summer 2023 - Spring 2023" // Relevant Activities 2
            exp3="ERHS FBLA - Community Service Director" // Experience 3
            rag3="Fall 2022 - Spring 2023" // Relevant Activities 3
            exp4="Virtual Medical Missions - Chief of Computer Science" // Experience 4
            rag4="Spring 2023 - Present" // Relevant Activities 4
            ota="ERHS Theater Tech - Workshop Manager, ERHS - Drone Technician, ERHS FBLA - Community Service Director, ERHS Choir - Vice President of Baritone Choir, Co-Vice President of ERHS Choir Club, CNUSD Parent Center - Math Tutor, Kumon - Math Tutor, ERHS - JV Lacrosse Goalie" // Other Activities
          />
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <h6 className="dark:text-white">
              University of California, Santa Cruz (UCSC)
            </h6>
            <p className="text-sm dark:text-white">September 2023 - Present</p>
          </TimelineHeader>
          <TimelineBody className="dark:text-white">
            <p>
              <b>Crown College Scholars Program</b> <br></br>
              Computer Engineering
            </p>
          </TimelineBody>
          <Timelines
            gpa="3.0"
            exp1="Slug Gaming Community - Production Manager" // Experience 1
            rag1="Summer 2023 - Present" // Relevant Activities 1
            exp2="UCSC CITRIS - Drone Pilot Trainee" // Experience 2
            rag2="Winter 2024 - Spring 2024" // Relevant Activities 2
            exp3="UCSC Admissions - Web Developer" // Experience 3
            rag3="Winter 2024 - Spring 2024" // Relevant Activities 3
            exp4="To Be Continued..." // Experience 4
            rag4="Present" // Relevant Activities 4
            ota="Slugbotics" // Other Activities
          />
        </TimelineItem>
      </Timeline>
    </div>
  );
}

function Timelines(props) {
  return (
    <TimelineBody className="pb-8">
      <p className="dark:text-white">
        <b>GPA:</b> {props.gpa}
        <br></br>
      </p>
      <br></br>
      <Timeline>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon
              className="p-3"
              variant="ghost"
              color="yellow"
            ></TimelineIcon>
            <div className="flex flex-col gap-1">
              <h5>{props.exp1}</h5>
              <h7 className="text-sm ">{props.rag1}</h7>
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
              <h5 variant="h6" color="blue-gray">
                {props.exp2}
              </h5>
              <h7 className="text-sm">{props.rag2}</h7>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon
              className="p-3"
              variant="ghost"
              color="blue"
            ></TimelineIcon>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <h5 variant="h6" color="blue-gray">
                  {props.exp3}
                </h5>
                <h7 className="text-sm">{props.rag3}</h7>
              </div>
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
              <h5 variant="h6" color="blue-gray">
                {props.exp4}
              </h5>
              <h7 className="text-sm">{props.rag4}</h7>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
      <p className="font-normal text-gray-600 dark:text-white">
        <b>Other Activities:</b> {props.ota}
        <br></br>
      </p>
    </TimelineBody>
  );
}
