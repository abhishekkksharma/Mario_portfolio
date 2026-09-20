"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Maximize2, Minimize2 } from "lucide-react"

interface BrowserLayoutProps {
  children: React.ReactNode;
}

function BrowserLayout({ children }: BrowserLayoutProps) {
  const [origin, setOrigin] = useState("");
  const path = usePathname();

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

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
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden p-2 sm:p-4 lg:py-0 py-10">
      <div
        className="
          relative
          flex h-full w-full max-h-full flex-col
          overflow-hidden
          rounded-2xl border-[3px] border-black
          bg-white
          shadow-[4px_4px_0px_#111]
          sm:h-170
          sm:max-h-[85vh]
          sm:max-w-5xl
          sm:rounded-[22px]
          sm:shadow-[8px_8px_0px_#111]
        "
      >
        {/* Browser Header */}
        <div
          className="
            relative flex h-11 shrink-0 items-center
            border-b-[3px] border-black
            bg-[#d936b8]
            px-2
            sm:h-14 sm:px-5
          "
        >
          {/* Traffic Lights */}
          <div
            className="
              z-10 mr-2 flex shrink-0 gap-1.5
              sm:mr-6 sm:gap-3
            "
          >
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#e95dcc] sm:h-4 sm:w-4 sm:border-[3px]" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#f178d7] sm:h-4 sm:w-4 sm:border-[3px]" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#f5a0e4] sm:h-4 sm:w-4 sm:border-[3px]" />
          </div>

          {/* Tabs */}
          <div
            className="
              flex h-full min-w-0 flex-1
              items-end gap-1
              overflow-x-auto
              no-scrollbar
            "
          >
            {Object.entries(tabss).map(([tabName, tabData]) => {
              const isActive = path === tabData.link;

              return (
                <Link
                  key={tabName}
                  href={tabData.link}
                  className={`
                    flex h-8 shrink-0 items-center justify-center
                    rounded-t-lg border-2 border-b-0 border-black
                    px-3
                    font-pixel text-[10px] font-semibold
                    transition-colors
                    hover:bg-[#e95dcc]

                    sm:h-10
                    sm:w-32
                    sm:rounded-t-xl
                    sm:border-[3px]
                    sm:border-b-0
                    sm:px-2
                    sm:text-base

                    ${isActive ? "bg-[#ed5dcc] text-zinc-100" : "bg-[#d936b8]"}
                  `}
                >
                  {tabName}
                </Link>
              );
            })}
          </div>

          {/*  Buttons */}
          <div className="flex flex-row gap-4 items-center">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="
                rounded border-2 border-black
                bg-[#e95dcc]
                text-xs font-bold
                transition-colors
                hover:bg-[#f178d7]
              "
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-6 h-6 p-0.5 text-black" />
              ) : (
                <Maximize2 className="w-6 h-6 p-0.5 text-black" />
              )}
            </button>

            <div className="z-10 ml-2 shrink-0 sm:ml-auto">
              <Link
                href="/"
                className="
            flex h-7 w-7 items-center justify-center
            rounded-full border-2 border-black
            bg-[#e95dcc]
            text-xs font-bold
            transition-colors
            hover:bg-[#f178d7]
            sm:h-8 sm:w-8
            sm:border-[3px]
            sm:text-base
          "
              >
                X
              </Link>
            </div>
          </div>
        </div>

        {/* Browser Toolbar */}
        <div
          className="
            flex h-12 shrink-0 items-center gap-1.5
            border-b-[3px] border-black
            bg-[#ed5dcc]
            px-2

            sm:h-14 sm:gap-2 sm:px-4
          "
        >
          {/* Navigation */}
          <div className="flex shrink-0 items-center justify-center text-lg font-bold sm:text-2xl">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full
                hover:bg-pink-300
                sm:h-8 sm:w-8
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => window.history.forward()}
              className="
                hidden h-7 w-7 items-center justify-center
                rounded-full
                hover:bg-pink-300
                sm:flex sm:h-8 sm:w-8
              "
            >
              →
            </button>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full
                hover:bg-pink-300
                sm:h-8 sm:w-8
              "
            >
              ↻
            </button>
          </div>

          {/* Address Bar */}
          <div
            className="
              flex h-8 min-w-0 flex-1 items-center
              rounded-full border-2 border-black
              bg-white px-2

              sm:h-10 sm:border-[3px] sm:px-3
            "
          >
            {/* Search Icon */}
            <div
              className="
                relative h-4 w-4 shrink-0
                rounded-full border-2 border-black

                sm:h-5 sm:w-5 sm:border-[3px]
              "
            >
              <span
                className="
                  absolute -bottom-0.5 -right-1
                  h-0.5 w-1.5
                  rotate-45 bg-black

                  sm:h-0.75 sm:w-2
                "
              />
            </div>

            <span
              className="
                ml-2 min-w-0 truncate
                font-pixel text-[9px] text-gray-500

                sm:ml-3 sm:text-xs
              "
            >
              {origin}
              {path}
            </span>
          </div>

          {/* Browser Button */}
          <div
            className="
              h-7 w-7 shrink-0
              rounded-full border-2 border-black
              bg-[#e95dcc]

              sm:h-8 sm:w-8 sm:border-[3px]
            "
          />
        </div>

        {/* Page Content */}
        <main
          className="
            min-h-0 flex-1
            overflow-y-auto overflow-x-hidden
            bg-white
            no-scrollbar
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default BrowserLayout;
