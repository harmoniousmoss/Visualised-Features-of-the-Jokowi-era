// components/BackToTopButton.tsx

import React, { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 p-3 bg-primary text-white rounded-full hover:bg-secondary transition duration-300 ease-in-out flex items-center justify-center"
          style={{ width: "40px", height: "40px" }} // Make it a circle
          aria-label="Go to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
