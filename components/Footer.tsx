import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-900">
      <div className="flex justify-between px-6 lg:px-20 py-3 flex-col lg:flex-row text-center">
        <div>
          <p className="text-white text-sm mb-1 lg:mb-0">
            © Copyright 2023 Prospera. All Rights Reserved
          </p>
        </div>
        <div>
          <p className="text-white text-sm">
            Made with 💗 with
            <Link href="https://prosperadev.net">
              <span className="underline ml-1">Open Source</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
