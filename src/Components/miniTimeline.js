import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export default function miniTimeline() {
  return (
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
          <b>Activities:</b> , , Holy Angeles Catholic Church - Altar Server,
          Arcadia High School - JV Swimming, Apache News - Web Developer,
          Student Reporter
          <br></br>
          <b>Awards:</b> Methodist Hospital of Southern California - Volunteer
          of the Quarter, Honor Roll - Fall 2019 - Fall 2021
        </Typography>
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
                  Winter 2019 - Spring 2021
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
      </TimelineBody>
    </TimelineItem>
  );
}
