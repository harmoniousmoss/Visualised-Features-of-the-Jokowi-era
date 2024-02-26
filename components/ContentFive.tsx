import React, { useEffect } from "react";

export default function ContentFive() {
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
        <div className="chart-box">
          <div className="w-full md:w-4/12 px-4">
            <p className="chart-content">
              The second term focused on the challenges facing businesses and
              the enactment of the Job Creation Law was a major milestone.
            </p>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <iframe
              title="Technical barriers have driven up non-tariff measures"
              aria-label="Interactive line chart"
              id="datawrapper-chart-55tR9"
              src="https://datawrapper.dwcdn.net/55tR9/3/"
              scrolling="no"
              frameBorder="0"
              style={{
                width: "100%",
                minWidth: "100%",
                border: "none",
                height: "460px",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
