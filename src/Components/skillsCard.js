import React from "react";
import { Card, Typography, Progress, Carousel } from "@material-tailwind/react";

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
            <Typography variant="body1" color="blue-gray">
              HTML
            </Typography>
            <Progress color="lightBlue" value="90" className="mb-2" />
            <Typography variant="body1" color="blue-gray">
              CSS (Bootstrap, Tailwind)
            </Typography>
            <Progress color="lightBlue" value="80" className="mb-2" />
            <Typography variant="body1" color="blue-gray">
              React
            </Typography>
            <Progress color="lightBlue" value="70" className="mb-2" />
            <Typography variant="body1" color="blue-gray">
              Wordpress & CMS
            </Typography>
            <Progress color="lightBlue" value="50" className="mb-2" />
          </div>
        </Card>
        <Card className="">
          <div className="p-10 justify-between">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Programming Languages
            </Typography>
            <Typography variant="body1" color="blue-gray">
              Javascript
            </Typography>
            <Progress color="lightBlue" value="90" className="mb-2" />
            <Typography variant="body1" color="blue-gray">
              C#
            </Typography>
            <Progress color="lightBlue" value="80" className="mb-2" />
            <Typography variant="body1" color="blue-gray">
              Python
            </Typography>
            <Progress color="lightBlue" value="70" className="mb-2" />
            <Typography variant="body1" color="blue-gray">
              Java
            </Typography>
            <Progress color="lightBlue" value="50" className="mb-2" />
            <Typography variant="body1" color="blue-gray">
              PHP
            </Typography>
            <Progress color="lightBlue" value="25" className="mb-2" />
          </div>
        </Card>
      </div>
    </div>
  );
}
