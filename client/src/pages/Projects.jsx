import React from "react";
import CallToAction from "../components/CallToAction";
import { Button } from "flowbite-react";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Build fun and engaging projects while learning HTML, CSS, and
        JavaScript!
      </p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row p-3 border border-lime-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
          <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">Want to know more about my Projects ?</h2>
            <p className="text-gray-500 my-2">Checkout my github profile</p>
            <Button
              gradientDuoTone="tealToLime"
              className="rounded-tl-xl rounded-bl-none"
            >
              <a
                href="https://github.com/kirankk1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </Button>
          </div>
          <div className="p-7 flex-1">
            <img src="https://miro.medium.com/v2/resize:fit:1100/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg" />
          </div>
        </div>
        <CallToAction />
      </div>
    </div>
  );
}
