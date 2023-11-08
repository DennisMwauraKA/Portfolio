import React, { useState } from "react";

function Contact() {
  const formUrl = "https://getform.io/f/effda00e-5255-4898-bb22-3c521c76d14e";

  return (
    <div
      name={5}
      className="w-full h-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg px-4 justify-center mx-auto w-full h-full">
        <div>
          <h1 className="text-white inline border-gray-500   font-bold border-b-2 text-4xl">
            Contact
          </h1>
          <p className="text-gray-500 text-xl  mt-5">
            Let's connect for your upcoming projects
          </p>
        </div>
        <div>
          <form
            action={formUrl}
            method="POST"
            className="flex-col flex items-start"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="mt-4 p-2 w-3/4 md:w-1/2 outline-none rounded-sm"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="my-4 p-2 w-3/4 md:w-1/2 outline-none rounded-sm"
              required
            />

            <textarea
              placeholder="Type your message here"
              name="message"
              rows={7}
              cols={40}
              className="outline-none p-2 md:w-1/2 w-3/4 rounded-sm"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r w-40 px-1 py-1 my-4 items-center  rounded-md from-blue-600 to-blue-500 text-white text-xl capitalize "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
