"use client";

import React, { useState } from "react";
import Project from "./ProjectTab";
import { Triangle } from "lucide-react";

interface ProjectData {
  name: string;
  content: string;
  link: string;
  githubLink: string;
  tech: string[];
  images: any[];
}

interface ProjectsI {
  projects: ProjectData[];
}

function MappedProjects({ projects }: ProjectsI) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    if (!projects || projects.length === 0) return;

    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    if (!projects || projects.length === 0) return;

    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="flex items-center justify-center font-mono text-pink-400">
        No projects available
      </div>
    );
  }

  const activeProject = projects[currentIndex];

  return (
    <div className="flex w-full flex-col justify-center gap-3 px-2 sm:gap-4 sm:px-4 md:px-8 lg:px-20">
      <Project
        key={activeProject.name}
        name={activeProject.name}
        content={activeProject.content}
        link={activeProject.link}
        githubLink={activeProject.githubLink}
        images={activeProject.images}
        tech={activeProject.tech}
      />

      <div className="flex items-center justify-between gap-8 px-4 sm:gap-12 sm:px-8 md:gap-16 md:px-22">
        {/* Previous Project */}
        <button
          type="button"
          onClick={prevProject}
          aria-label="Previous project"
          className="
            cursor-pointer
            rounded-full
            p-1
            transition-all
            duration-200
          "
        >
          <Triangle
            className="
              h-8 w-8
              rotate-90
              scale-y-[-1]
              fill-pink-300
              text-pink-900
              transition-colors
              duration-200
              hover:fill-pink-600
              hover:text-pink-600
              sm:h-10 sm:w-10
            "
          />
        </button>

        {/* Next Project */}
        <button
          type="button"
          onClick={nextProject}
          aria-label="Next project"
          className="
            cursor-pointer
            rounded-full
            p-1
            transition-all
            duration-200
          "
        >
          <Triangle
            className="
              h-8 w-8
              rotate-90
              fill-pink-300
              text-pink-900
              transition-colors
              duration-200
              hover:fill-pink-600
              hover:text-pink-600
              sm:h-10 sm:w-10
            "
          />
        </button>
      </div>
    </div>
  );
}

export default MappedProjects;