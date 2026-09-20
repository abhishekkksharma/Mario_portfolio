"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Maximize2, Minimize2 } from "lucide-react";

interface BrowserLayoutProps {
  children: React.ReactNode;
  tabName: string;
  theme?: "pink" | "yellow";
  link?: string;
}

function SingleTabBrowser({
  children,
  tabName,
  theme = "pink",
  link
}: BrowserLayoutProps) {
  const [origin, setOrigin] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  const themes = {
    pink: {
      header: "bg-[#d936b8]",
      toolbar: "bg-[#ed5dcc]",
      activeTab: "bg-[#ed5dcc]",
      inactiveTab: "bg-[#d936b8]",
      button: "bg-[#e95dcc]",
      hoverButton: "hover:bg-[#f178d7]",
      hoverTab: "hover:bg-[#e95dcc]",
      hoverNav: "hover:bg-pink-300",
      traffic: [
        "bg-[#e95dcc]",
        "bg-[#f178d7]",
        "bg-[#f5a0e4]",
      ],
    },

    yellow: {
      header: "bg-[#e5b800]",
      toolbar: "bg-[#f4d03f]",
      activeTab: "bg-[#f4d03f]",
      inactiveTab: "bg-[#e5b800]",
      button: "bg-[#f1c40f]",
      hoverButton: "hover:bg-[#f7dc6f]",
      hoverTab: "hover:bg-[#f1c40f]",
      hoverNav: "hover:bg-yellow-300",
      traffic: [
        "bg-[#f1c40f]",
        "bg-[#f7dc6f]",
        "bg-[#f9e79f]",
      ],
    },
  };

  const currentTheme = themes[theme];

  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden p-2 py-10 sm:p-4 lg:py-0">
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
          className={`
            relative flex h-11 shrink-0 items-center
            border-b-[3px] border-black
            px-2
            ${currentTheme.header}
            sm:h-14 sm:px-5
          `}
        >
          {/* Traffic Lights */}
          <div
            className="
              z-10 mr-2 flex shrink-0 gap-1.5
              sm:mr-6 sm:gap-3
            "
          >
            {currentTheme.traffic.map((color, index) => (
              <span
                key={index}
                className={`
                  h-3 w-3 rounded-full border-2 border-black
                  sm:h-4 sm:w-4 sm:border-[3px]
                  ${color}
                `}
              />
            ))}
          </div>

          {/* Single Tab */}
          <div
            className={`
              flex h-full min-w-0 flex-1
              items-end
            `}
          >
            <div
              className={`
                flex h-8 shrink-0 items-center justify-center
                rounded-t-lg border-2 border-b-0 border-black
                px-4
                font-pixel text-[10px] font-semibold
                ${currentTheme.activeTab}

                sm:h-10
                sm:w-32
                sm:rounded-t-xl
                sm:border-[3px]
                sm:border-b-0
                sm:px-2
                sm:text-base
              `}
            >
              {tabName}
            </div>
          </div>

          {/* Browser Buttons */}
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            {/* Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className={`
                rounded border-2 border-black
                text-xs font-bold
                transition-colors
                ${currentTheme.button}
                ${currentTheme.hoverButton}
              `}
              aria-label={
                isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
              }
            >
              {isFullscreen ? (
                <Minimize2 className="h-6 w-6 p-0.5 text-black" />
              ) : (
                <Maximize2 className="h-6 w-6 p-0.5 text-black" />
              )}
            </button>

            {/* Close */}
            <div className="z-10 shrink-0">
              <Link
                href={`${link? link: "/"}`}
                className={`
                  flex h-7 w-7 items-center justify-center
                  rounded-full border-2 border-black
                  text-xs font-bold
                  transition-colors
                  ${currentTheme.button}
                  ${currentTheme.hoverButton}

                  sm:h-8 sm:w-8
                  sm:border-[3px]
                  sm:text-base
                `}
              >
                X
              </Link>
            </div>
          </div>
        </div>

        {/* Browser Toolbar */}
        <div
          className={`
            flex h-12 shrink-0 items-center gap-1.5
            border-b-[3px] border-black
            px-2
            ${currentTheme.toolbar}

            sm:h-14 sm:gap-2 sm:px-4
          `}
        >
          {/* Navigation */}
          <div className="flex shrink-0 items-center justify-center text-lg font-bold sm:text-2xl">
            <button
              type="button"
              onClick={() => window.history.back()}
              className={`
                flex h-7 w-7 items-center justify-center
                rounded-full
                ${currentTheme.hoverNav}
                sm:h-8 sm:w-8
              `}
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => window.history.forward()}
              className={`
                hidden h-7 w-7 items-center justify-center
                rounded-full
                ${currentTheme.hoverNav}
                sm:flex sm:h-8 sm:w-8
              `}
            >
              →
            </button>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className={`
                flex h-7 w-7 items-center justify-center
                rounded-full
                ${currentTheme.hoverNav}
                sm:h-8 sm:w-8
              `}
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
            className={`
              h-7 w-7 shrink-0
              rounded-full border-2 border-black
              ${currentTheme.button}

              sm:h-8 sm:w-8 sm:border-[3px]
            `}
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

export default SingleTabBrowser;