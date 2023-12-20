import React from "react";
import { Card, Typography, Progress } from "@material-tailwind/react";

export default function SkillsCard() {
  return (
    <div className="mx-auto max-w-screen-md mb-2">
      <Typography variant="h2" color="blue-gray" className="mb-2">
        Skills
      </Typography>
      <div className="col-span-4  grid grid-cols-2 gap-4 ">
        <Card className="">
          <div className="p-10 justify-between">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Web Development
            </Typography>
            <Progressor title="HTML" value="90" />
            <Progressor title="CSS (Bootstrap, Tailwind)" value="80" />
            <Progressor title="React.js" value="70" />
            <Progressor title="Wordpress & CMS" value="50" />
          </div>
        </Card>
        <Card className="">
          <div className="p-10 justify-between">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Programming Languages
            </Typography>
            <Progressor title="Javascript" value="90" />
            <Progressor title="C#" value="80" />
            <Progressor title="Python" value="70" />
            <Progressor title="Java" value="50" />
            <Progressor title="PHP" value="25" />
          </div>
        </Card>
      </div>
      <br></br>
      <div>
        <Card className="">
          <div className="p-10 justify-between">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Visual Design
            </Typography>
            <Progressor title="Adobe Photoshop" value="90" />
            <Progressor title="UI/UX" value="80" />
            <Progressor title="Adobe Premiere Pro" value="70" />
            <Progressor title="Adobe Illustrator" value="50" />
          </div>
        </Card>
      </div>
      <br></br>
    </div>
  );
}

//for each skill, calls the title and progress bar
function Progressor(props) {
  return (
    <div>
      <Typography variant="body1" color="blue-gray">
        {props.title}
      </Typography>
      <Progress color="lightBlue" value={props.value} className="mb-2" />
    </div>
  );
}
