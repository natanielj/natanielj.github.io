import {
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Avatar,
  Chip,
  Popover,
} from "@material-tailwind/react";
import React from "react";
import apnLogo from "../assets/img/logos/apnLogo.png";
import rotaryLogo from "../assets/img/logos/rotary_ev.png";

export default function Experience() {
  return (
    <div className="mx-auto max-w-screen-md mb-2">
      <br></br>
      <Typography variant="h2"> Experience </Typography>
      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-0 animate-pulse">
                <a href="https://www.apachenews.ausd.net/" target="blank">
                  <Avatar
                    size="sm"
                    src={apnLogo}
                    alt="logo of Apache News"
                    withBorder
                  />
                </a>
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Student News Reporter and Web Developer - Apache News
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gray"> Fall 2021 - Summer 2022 </Typography>
              <div className="flex gap-2 ">
                <Chip variant="gradient" color="cyan" value="Graphic Design" />
                <Chip
                  variant="gradient"
                  value="Media Production"
                  color="blue"
                />
                <Chip
                  variant="gradient"
                  color="blue-gray"
                  value="Video Editing"
                />
                <Chip
                  variant="gradient"
                  color="indigo"
                  value="Web Development"
                />
              </div>
              <Typography color="gary" className="font-normal text-gray-600">
                I worked as a student news reporter and web developer for Apache
                News, a student news organization for Arcadia High School. Check
                out their website through the logo above!
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-0">
                <Avatar size="sm" src={rotaryLogo} alt="user 2" withBorder />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Web Developer - Rotary Club of Greater Eastvale
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-0">
                <Avatar
                  size="sm"
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="user 3"
                  withBorder
                />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
