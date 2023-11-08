import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProductCard(subtitle, title, st1, st2, st3, st4, st5) {
  return (
    <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          {title}
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <Typography className="font-normal">{st1}</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className="font-normal">{st2}</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className="font-normal">{st3}</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className="font-normal">{st4}</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className="font-normal">{st5}</Typography>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
