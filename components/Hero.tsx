import React from "react";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";

export default function Hero() {
  return (
    <div>
      <nav className="bg-slate-900 flex justify-between items-center">
        <div className="lg:px-24 py-2 pl-6">
          <Image
            src="/logo_prospera.png"
            alt="Prospera Logo"
            width={128}
            height={64}
          />
        </div>
        <div className="lg:px-24 lg:py-2 pr-6">
          <button className="flex items-center bg-white rounded-full px-3 py-2">
            <AiOutlineHome className="h-5 w-5 text-slate-900" />
            <span className="ml-2 text-slate-900 text-sm">Home</span>
          </button>
        </div>
      </nav>
      <div className="relative" style={{ height: "calc(100vh - 64px)" }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jokowi_campaign.jpeg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* Overlay with bg-slate-900 */}
        <div className="absolute inset-0 bg-slate-900 bg-opacity-90 z-10"></div>
        {/* Content */}
        <div className="relative z-20 flex justify-center items-center h-full">
          <div className="flex flex-col md:flex-row justify-between items-center w-full h-full">
            {/* Text content */}
            <div className="text-white text-left mb-4 md:mb-0 md:w-1/2 p-6 lg:px-24">
              <div className="text-4xl xl:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary lg:text-5xl">
                Visualised: Features of the Jokowi era
              </div>

              <p className="text-base xl:text-lg mb-4 ">
                How will history reflect on President Joko Widodo’s
                administration? This month we look at some features of the two
                distinct terms of the Jokowi era: the infrastructure focus of
                the first term and the second term characterised by business
                environment reform and the pandemic.
              </p>
              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white animate-bounce" // Changed arrow color to white
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span className="ml-2 text-white text-sm hover:underline">
                  Explore
                </span>{" "}
                {/* Changed text to "Explore" */}
              </button>
            </div>
            {/* Image aligned to the bottom right */}
            <div className="relative md:w-1/2 h-full">
              <div className="absolute bottom-0 right-0 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
                {" "}
                {/* Adjusted for 2xl screens */}
                <Image
                  src="/jokowi_pensive_red-removebg.png"
                  alt="Jokowi"
                  width={700} // These dimensions suggest the natural size but will be constrained by the container.
                  height={1000}
                  objectFit="contain" // Maintains aspect ratio.
                  className="object-bottom" // Aligns the bottom of the image with the bottom of its container.
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
