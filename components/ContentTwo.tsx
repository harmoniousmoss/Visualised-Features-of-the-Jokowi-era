import React, { useEffect } from "react";
import AOS from "aos";

export default function ContentTwo() {
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
      <div className="py-10 px-6 lg:px-24">
        <div className="chart-box" data-aos="fade-up">
          <div className="w-full md:w-4/12 px-4">
            <p className="chart-content">
              Businesses are still impeded by mounting non-tariff barriers to
              trade and investment, placing Indonesia at a major disadvantage.
            </p>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <iframe
              title="Infrastructure investment had a stable, albeit subdued, effect on GDP"
              aria-label="Interactive line chart"
              id="datawrapper-chart-fWm5s"
              src="https://datawrapper.dwcdn.net/fWm5s/8/"
              scrolling="no"
              frameBorder="0"
              style={{
                width: "100%",
                minWidth: "100%",
                border: "none",
                height: "529px",
              }}
              data-external="1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
