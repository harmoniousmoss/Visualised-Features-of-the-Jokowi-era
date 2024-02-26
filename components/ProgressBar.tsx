// components/ProgressBar.tsx
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollFromTop = window.pageYOffset;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress = (scrollFromTop / windowHeight) * 100;

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-[53px] left-0 z-40 w-full">
      <div
        className="bg-primary"
        style={{ height: "7px", width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
