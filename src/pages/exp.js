import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import React from "react";
import apnLogo from "../assets/img/logos/apnLogo.png";
import rotaryLogo from "../assets/img/logos/rotary_ev.png";
import VMMLogo from "../assets/img/logos/VMMLogo.png";
// import UCSC from "../assets/img/logos/ucscAdmissions.jpg";

export default function Experience() {
  return (
    <div className="mx-auto max-w-screen-md mb-2">
      <br></br>
      <h2 className="text-4xl mb-2 dark:text-white">Experience</h2>
      <div className="w-[32rem]">
        <Timeline>
          <Timelines
            website="https://www.apachenews.ausd.net/"
            img={apnLogo}
            alt="logo of Apache News"
            title="Student News Reporter and Web Developer - Apache News"
            range="Fall 2021 - Summer 2022"
            c1="Media Production"
            c2="Graphic Design"
            c3="Video Editing"
            c4="Web Development"
            sub="I worked as a student news reporter and web developer for Apache
                News, a student news organization for Arcadia High School. Check
                out their website through the logo above!"
          />

          <Timelines
            website="https://www.rotary-ev.org/"
            img={rotaryLogo}
            alt="logo of Rotary Club of Greater Eastvale"
            title="Web Developer - Rotary Club of Greater Eastvale"
            range="Summer 2022 - Spring 2023"
            c1="Project Management"
            c2="Graphic Design"
            c3="Wix CMS"
            c4="Web Development"
            sub="Working as a web developer for the Rotary Club of Greater Eastvale, I gained a ton of professional experience in the field of web development. Working with the Wix content management system while being able to program custom elements enabled me to deliver quality elements. Check out their website I built through the logo!"
          />
          <Timelines
            website="https://vmmhealthcare.org/"
            img={VMMLogo}
            alt="logo of Rotary Club of Greater Eastvale"
            title="Director of Computer Science - Virtual Medical Missions"
            range="Winter 2023 - Present"
            c1="Project Management"
            c2="Leadership"
            c3="Programming"
            c4="Web Development"
            sub="As the Director of Computer Science for Virtual Medical Missions, I am responsible for leading a team of developers to create a website that will be used to connect patients from third world countries with doctors. I am also responsible for creating the website and managing the team. Check out their website through the logo!"
          />
        </Timeline>
      </div>
    </div>
  );
}

function Timelines(props) {
  return (
    <TimelineItem>
      <TimelineHeader>
        <TimelineIcon className="p-0 animate-pulse">
          <a href={props.website} target="blank">
            <Avatar size="sm" src={props.img} alt={props.alt} withBorder />
          </a>
        </TimelineIcon>

        <h3 className="text-xl dark:text-white">{props.title}</h3>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        <p className="dark:text-white">{props.range}</p>

        <div className="flex gap-2 ">
          <Chip variant="gradient" value={props.c1} color="blue" />
          <Chip variant="gradient" color="cyan" value={props.c2} />
          <Chip variant="gradient" color="blue-gray" value={props.c3} />
          <Chip variant="gradient" color="indigo" value={props.c4} />
        </div>
        <p className="font-normal text-gray-600 dark:text-white">{props.sub}</p>
      </TimelineBody>
      <TimelineConnector />
    </TimelineItem>
  );
}
