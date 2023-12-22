import { Card, Input, Button, Tooltip } from "@material-tailwind/react";
export default function ContactForm() {
  return (
    <div className="mx-auto max-w-screen-md pt-5 pb-7 w-full">
      <Card color="transparent" shadow={false}>
        <h2 className="text-4xl mb-2 dark:text-white">Contact Me</h2>
        <h5 className="text-md dark:text-white">
          Feel free to reach out to me with any questions or if you'd like to
          work with me
        </h5>
        <form
          className="mt-2  max-w-screen-lg sm:w-96 dark:text-white"
          action="https://docs.google.com/forms/d/e/1FAIpQLSfcWT_69pqvviq633gRgnQvrANiOkkN4SqtXcggB1EchOvJeA/formResponse"
        >
          <div className="mb-1 flex flex-col gap-3 dark:text-blue-gray-200">
            <label>Your Name</label>
            <Input
              size="lg"
              name="entry.550678669"
              placeholder="Name here"
              className=" !border-t-blue-gray-200 focus:!border-blue-gray-200 dark:text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <label>Your Email</label>
            <Input
              size="lg"
              name="entry.1130130174"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-blue-gray-200 dark:text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <label>Questions/Comments</label>
            <Input
              size="lg"
              name="entry.1356672490"
              placeholder="Questions/Comments here"
              className=" !border-t-blue-gray-200 focus:!border-blue-gray-200 dark:text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Tooltip
            placement="bottom"
            trigger="hover"
            content="You will be redirected to the form submission page"
          >
            <Button
              type="submit"
              className="mt-6 text-white dark:bg-white dark:text-black"
              fullWidth
            >
              Submit Form
            </Button>
          </Tooltip>
          <div className="inline-flex items-center mt-5 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-2 dark:text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <h4 className="">Powered by Google Forms</h4>
          </div>
        </form>
      </Card>
    </div>
  );
}
