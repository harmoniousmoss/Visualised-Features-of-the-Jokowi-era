import React, { useEffect } from "react";
import AOS from "aos";

export default function ContentThree() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 700, // values from 0 to 3000, with step 50ms
    });
  }, []);

  useEffect(() => {
    const handleResizeMessage = (event: MessageEvent) => {
      if (
        typeof event.data === "object" &&
        Object.hasOwnProperty.call(event.data, "datawrapper-height")
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

    return () => {
      window.removeEventListener("message", handleResizeMessage);
    };
  }, []);

  return (
    <div className="bg-slate-50">
      <div className="pt-20 px-6 lg:px-24">
        <div className="chart-box" data-aos="fade-up">
          <div className="w-full md:w-4/12 px-4">
            <p className="chart-content">
              Fuel price adjustments were unable to be sustained and proved an
              ongoing issue through both Jokowi terms.
            </p>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <iframe
              title="The disappearance and reemergence of fuel price interventions"
              aria-label="Stacked Columns"
              id="datawrapper-chart-ri8Zd"
              src="https://datawrapper.dwcdn.net/ri8Zd/5/"
              scrolling="no"
              frameBorder="0" // Corrected attribute name
              style={{
                width: "100%",
                minWidth: "100%",
                border: "none",
                height: "400px",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
