import BrowserLayout from "@/components/BrowserLayout";
import Projects from "@/components/Projects";
import About from "@/components/About";
import React from "react";
import SingleTabBrowser from "@/components/SingleTabBrowser";

export default function ProjectsPage() {
  return (
    <div className="flex flex-row md:px-10 px-0 ">
      <div className="w-1/3 hidden md:flex">
        <SingleTabBrowser tabName="About" theme="pink">
          <About />
        </SingleTabBrowser>
      </div>

      <div className="w-full md:w-2/3 ">
        <SingleTabBrowser tabName="Projects" theme="yellow">
          <Projects />
        </SingleTabBrowser>
      </div>
    </div>
  );
}
