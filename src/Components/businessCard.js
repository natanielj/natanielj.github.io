import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/img/logos/nj-logo.png";
import { MediaBar } from "./mediaBar";
import ContactForm from "../pages/contact";

export default function BusinessCard() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <IconButton
        color="dark"
        ripple="light"
        variant="text"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 dark:text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
      </IconButton>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          <div className="mx-auto max-w-screen-md text-center">
            <img
              src={logo}
              alt="nj-logo"
              className="w-48 mx-auto max-w-screen-md text-center"
            />
            <div className="items-center text-center">
              <h2 className="items-center text-2xl text">
                Nataniel Jayaseelan
              </h2>
              <h5 className="font-normal items-center text-lg">
                Web Developer
              </h5>
            </div>
            <MediaBar />
          </div>
        </DialogHeader>
        <DialogFooter>
          <div className="mx-auto max-w-screen-md px-5">
            <p className="float-left">nataniel.jayaseelan@gmail.com</p>
            <p className="float-right"></p>
          </div>
          <br></br>
        </DialogFooter>
      </Dialog>
    </>
  );
}
