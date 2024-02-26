import React, { useEffect } from "react";
import AOS from "aos";

export default function ContentOne() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 700, // values from 0 to 3000, with step 50ms
    });
  }, []);

  useEffect(() => {
    // Define the event parameter type as MessageEvent
    const handleResizeMessage = (event: MessageEvent) => {
      if (
        typeof event.data === "object" &&
        event.data.hasOwnProperty("datawrapper-height")
      ) {
        const iframes = document.querySelectorAll("iframe");
        for (let key in event.data["datawrapper-height"]) {
          for (let i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow === event.source) {
              iframes[i].style.height =
                event.data["datawrapper-height"][key] + "px";
            }
          }
        }
      }
    };

    window.addEventListener("message", handleResizeMessage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleResizeMessage);
    };
  }, []);

  return (
    <div className="bg-slate-50">
      <div className="py-10 px-6 lg:px-24">
        {/* Background Wrapper */}
        <div className="chart-box" data-aos="fade-up">
          {/* Left Column */}
          <div className="w-full md:w-4/12 px-4">
            <p className="chart-content">
              In the first term, fiscal space was created through the adoption
              of fuel prices that reflected market levels which helped finance
              infrastructure spending greater than during the final term of
              Jokowi&apos; predecessor.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-8/12 px-4">
            <iframe
              title="The infrastructure focus of the Jokowi administration"
              aria-label="Column Chart"
              id="datawrapper-chart-KCW6u"
              src="https://datawrapper.dwcdn.net/KCW6u/3/"
              scrolling="no"
              frameBorder="0"
              style={{
                width: "100%",
                minWidth: "100%",
                border: "none",
                height: "400px",
              }}
              data-external="1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
