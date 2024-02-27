import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full z-10">
      <div className="bg-slate-900 flex justify-between px-6 lg:px-20 py-3 flex-col lg:flex-row text-center w-full z-50">
        <div>
          <p className="text-white text-sm mb-1 lg:mb-0">
            © Copyright 2023 Prospera. All Rights Reserved
          </p>
        </div>
        <div>
          <p className="text-white text-sm">
            Made with 💗 with
            <Link href="https://prosperadev.net" className="underline ml-1">
              Open Source
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
