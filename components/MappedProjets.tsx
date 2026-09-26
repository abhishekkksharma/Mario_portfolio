"use client";

import React, { useState } from "react";
import Project from "./ProjectTab";
import { Triangle } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";

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
  const playClickSound = useClickSound();

  const prevProject = () => {
    if (!projects || projects.length === 0) return;

    playClickSound();

    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    if (!projects || projects.length === 0) return;

    playClickSound();

    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="flex h-full items-center justify-center font-mono text-pink-400">
        No projects available
      </div>
    );
  }

  const activeProject = projects[currentIndex];

  return (
    <div
      className="
        pt-4
        relative
        flex
        w-full
        flex-col
        overflow-hidden
        px-3
        sm:px-5
        md:px-8
        lg:px-12
      "
    >
      {/* Project */}
      <div className="min-h-0 flex-1 overflow-hidden">
        <Project
          key={activeProject.name}
          name={activeProject.name}
          content={activeProject.content}
          link={activeProject.link}
          githubLink={activeProject.githubLink}
          images={activeProject.images}
          tech={activeProject.tech}
        />
      </div>

      {/* Project Navigation */}
      <div
        className="
          flex
          h-16
          shrink-0
          items-center
          justify-between
          px-8
          sm:h-20
          sm:px-12
          md:px-16
          lg:px-20
        "
      >
        {/* Previous */}
        <button
          type="button"
          onClick={prevProject}
          aria-label="Previous project"
          className="
            cursor-pointer
            rounded-full
            p-2
            transition-transform
            duration-200
            hover:scale-110
          "
        >
          <Triangle
            className="
              h-8
              w-8
              rotate-90
              scale-y-[-1]
              fill-pink-300
              text-pink-900
              transition-colors
              duration-200
              hover:fill-pink-600
              hover:text-pink-600
              sm:h-10
              sm:w-10
            "
          />
        </button>

        {/* Project Indicator */}
        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                playClickSound();
                setCurrentIndex(index);
              }}
              aria-label={`Go to project ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-200
                ${
                  index === currentIndex
                    ? "w-7 bg-pink-600"
                    : "w-2 bg-pink-300 hover:bg-pink-400"
                }
              `}
            />
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={nextProject}
          aria-label="Next project"
          className="
            cursor-pointer
            rounded-full
            p-2
            transition-transform
            duration-200
            hover:scale-110
          "
        >
          <Triangle
            className="
              h-8
              w-8
              rotate-90
              fill-pink-300
              text-pink-900
              transition-colors
              duration-200
              hover:fill-pink-600
              hover:text-pink-600
              sm:h-10
              sm:w-10
            "
          />
        </button>
      </div>
    </div>
  );
}

export default MappedProjects;