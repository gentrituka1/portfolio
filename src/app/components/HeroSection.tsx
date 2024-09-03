"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Gentrit",
                1000,
                "a Full-Stack Developer",
                1000,
                "a Mobile Developer",
                1000,
                "a Web Developer",
                1000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            commodi, optio sint facere eos quasi. Aliquid natus commodi, ducimus
            dicta voluptatum ipsum consectetur odit atque repellat modi, dolore
            libero illum?
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:via-yellow-500 hover:to-orange-400  text-white border border-white font-semibold">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:via-yellow-500 hover:to-orange-400  text-white border border-white font-semibold mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/animated-user-icon.gif"
              width={500}
              height={500}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
