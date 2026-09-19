"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface BrowserLayoutProps {
  children: React.ReactNode;
}

function BrowserLayout({ children }: BrowserLayoutProps) {
  const [origin, setOrigin] = useState("");
  const path = usePathname();

  const tabss = {
    About: {
      link: "/info",
    },
    Projects: {
      link: "/projects",
    },
    Skills: {
      link: "/skills",
    },
    Contact: {
      link: "/contact",
    },
  };

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center p-4">
      <div
        className="
          relative
          w-full max-w-5xl
          h-[680px] max-h-[85vh]
          flex flex-col
          overflow-hidden
          rounded-[22px]
          border-[3px] border-black
          bg-white
          shadow-[8px_8px_0px_#111]
        "
      >
        {/* Browser Header */}
        <div className="relative h-14 shrink-0 bg-[#d936b8] border-b-[3px] border-black flex items-center px-5">
          {/* Traffic Lights */}
          <div className="flex gap-3 z-10 shrink-0 mr-6">
            <span className="w-4 h-4 rounded-full border-[3px] border-black bg-[#e95dcc]" />
            <span className="w-4 h-4 rounded-full border-[3px] border-black bg-[#f178d7]" />
            <span className="w-4 h-4 rounded-full border-[3px] border-black bg-[#f5a0e4]" />
          </div>

          {/* Left Tabs */}
          <div className="flex items-end h-full gap-1">
            {Object.entries(tabss).map(([tabName, tabData]) => {
              const isActive = path === tabData.link;
              return (
                <Link
                  key={tabName}
                  href={tabData.link}
                  className={`
                    w-32
                    h-10
                    ${isActive ? "bg-[#ed5dcc]" : "bg-[#d936b8]"}
                    border-[3px] border-black
                    border-b-0
                    rounded-t-xl
                    flex items-center justify-center
                    px-2
                    font-pixel
                    font-semibold
                    cursor-pointer
                    hover:bg-[#e95dcc]
                    transition-colors
                  `}
                >
                  <p>{tabName}</p>
                </Link>
              );
            })}
          </div>

          {/* Window Button */}
          <div className="ml-auto z-10 shrink-0">
            <Link
              href="/"
              className="w-8 h-8 rounded-full border-[3px] border-black bg-[#e95dcc] flex items-center justify-center font-bold hover:bg-[#f178d7] transition-colors"
            >
              X
            </Link>
          </div>
        </div>

        {/* Browser Toolbar */}
        <div className="h-14 shrink-0 bg-[#ed5dcc] border-b-[3px] border-black flex items-center gap-2 px-4">
          {/* Navigation */}
          <div className="flex items-center justify-center text-2xl font-bold">
            <p className="w-7 h-7 flex items-center justify-center hover:bg-pink-300 rounded-full">
              ←
            </p>
            <p className="w-7 h-7 flex items-center justify-center hover:bg-pink-300 rounded-full">
              →
            </p>
            <p className="w-7 h-7 flex items-center justify-center hover:bg-pink-300 rounded-full">
              ↻
            </p>
          </div>

          {/* Address Bar */}
          <div className="flex-1 h-10 bg-white border-[3px] border-black rounded-full flex items-center px-3">
            <div className="w-5 h-5 rounded-full border-[3px] border-black relative shrink-0">
              <span className="absolute w-2 h-[3px] bg-black rotate-45 right-[-5px] bottom-[-2px]" />
            </div>

            <span className="ml-3 font-pixel text-xs text-gray-500">
              {origin}
              {path}
            </span>
          </div>

          {/* Browser Button */}
          <div className="w-8 h-8 rounded-full border-[3px] border-black bg-[#e95dcc]" />
        </div>

        {/* Page Content */}
        <main className="flex-1 min-h-0 overflow-y-auto no-scrollbar bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}

export default BrowserLayout;
