import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function EducationSection() {
  return (
    <div className="mx-auto max-w-screen-md pt-5 pb-7">
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
              <b>Activities:</b> AHS VEX Robotics - Vice President, Methodist
              Hospital of Souther California - Volunteer, Holy Angeles Catholic
              Church - Altar Server, Arcadia High School - JV Swimming, Apache
              News - Web Developer, Student Reporter
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
              <b>Activities:</b> ERHS Theater Tech - Workshop Manager, ERHS -
              Drone Technician, ERHS FBLA - Community Service Director, ERHS
              Choir - Vice President of Baritone Choir, Co-Vice President of
              ERHS Choir Club, Eastvale Innovators - Founder, President, First
              Innovator, ERHS Rotary Interact - Associate, Virtual Medical
              Missions (VMM) - Chief of Computer Science Operations, Rotary Club
              of Greater Eastvale - Web Developer, CNUSD Parent Center - Math
              Tutor, Kumon - Math Tutor, ERHS - JV Lacrosse Goalie<br></br>
              <b>Awards:</b> Most Exemplary Student of Eleanor Roosevelt High
              School, Award of Recognition by California State Senate, Award of
              Recognition by County of Riverside, Special Congressional
              Recognition by the United States Congress, Award of Recognition by
              California Legislature Assembly, Recognition of Outstanding
              Achievement by Temescal Palms Lodge #314, Award of Recognition by
              the City of Eastvale, Award of Recognition by the CNUSD Board of
              Education and staff, First Place/State Champion in Website Design
              Competition at FBLA’s State Leadership Conference (SLC), Won
              Second Place in Computer Applications at FBLA Inland Section
              Leadership Conference
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
              <b>Activities:</b> Slug Gaming Community - Production Manager,
              SlugBotics - Marketing
              <br></br>
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
