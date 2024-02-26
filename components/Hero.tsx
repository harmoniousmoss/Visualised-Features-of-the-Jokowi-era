import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 700, // values from 0 to 3000, with step 50ms
    });
  }, []);
  return (
    <div>
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
            <div
              className="text-white text-left mb-4 md:mb-0 md:w-1/2 p-6 lg:px-24"
              data-aos="fade-right"
            >
              <div className="text-4xl xl:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary lg:text-5xl pt-20 lg:pt-0">
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
            <div className="relative md:w-1/2 h-full" data-aos="fade-left">
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
