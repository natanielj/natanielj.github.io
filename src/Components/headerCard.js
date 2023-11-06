import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import { PageSpeedDial } from "./SpeedDial.js";

function HeaderCard() {
  return (
    <div className="mx-auto max-w-screen-md py-12">
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          About Me
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-4">
          Student at UCSC | Freelance Web Designer
        </Typography>
        <Typography color="gray" className="font-normal">
          Hello there! I am Nataniel Jayaseelan, a dedicated student pursuing my
          education at the esteemed University of California, Santa Cruz (UCSC),
          where I am pursing Computer Engineering. Alongside my academic
          journey, I am passionate about the digital world and the creative
          possibilities it offers. I have a keen interest in web design and
          development, and I have honed my skills as a freelance web designer. I
          believe in the power of intuitive and visually appealing websites that
          not only capture attention but also deliver seamless user experiences.
          With a strong foundation in both design principles and coding
          languages, I bring creative ideas to life in the digital sphere. My
          time at UCSC has equipped me with a comprehensive understanding of
          [mention any specific skills or knowledge you have gained through your
          coursework]. Combining this academic knowledge with my practical
          experience as a freelance web designer, I am proficient in creating
          responsive and aesthetically pleasing websites tailored to meet the
          unique needs of clients. I thrive on challenges and approach every
          project with enthusiasm and dedication. My goal is to not only meet
          but exceed the expectations of my clients, ensuring their online
          presence is impactful and engaging. I am always exploring new
          techniques and staying updated with the latest trends in the
          ever-evolving world of web design. Thank you for visiting my website.
          If you have a project in mind or simply want to connect, feel free to
          reach out. I am always excited to collaborate and create exceptional
          digital experiences. Let's transform ideas into visually stunning
          realities!
        </Typography>
      </div>
    </div>
  );
}

export default HeaderCard;
