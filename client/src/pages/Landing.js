import React from "react";
import home from "../assets/home.jpg";

function Landing() {
  return (
    <section className="relative" id="Home">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-20 lg:ml-20">
        <div className="flex flex-1 flex-col items-center lg:items-start lg:ml-30">
          <h2 className="text-3xl text-blue-500 md:text-4xl lg:text-4xl text-center lg:text-left mb-6">
            Hospital Patient Records
          </h2>
          <p className="text-gray-500 text-xl">
            Access and manage patient information
          </p>
          <div className="flex justify-center flex-wrap mt-5 gap-6">
            <button className="btn border-2 hover:bg-white hover:text-blue-500   hover:border-blue-500 hover:border-2 uppercase">
              <a href="/record">Click me</a>
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 lg:ml-10">
          <img
            src={home}
            className="w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full lg:ml-auto"
            alt="record"
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
