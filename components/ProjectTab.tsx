"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Link2 } from "lucide-react";
import GithubSVG from "@/assets/github (1).svg";

export interface ProjectProps {
  name: string;
  content: string;
  link: string;
  githubLink: string;
  tech?: readonly string[] | string[];
  images: (StaticImageData | string)[];
}

function ProjectTab({
  name,
  content,
  link,
  githubLink,
  tech = [],
  images,
}: ProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images.length === 0) return;

    setCurrentImageIndex(
      (prev) => (prev + 1) % images.length
    );
  };

  const prevImage = () => {
    if (images.length === 0) return;

    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full overflow-hidden font-pixel">
      <div className="w-full px-2">

        {/* Image */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-pink-200 bg-pink-50/60 p-1 shadow-inner">
          <div className="rounded-xl bg-white p-1">

            <div className="relative mx-auto flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl bg-pink-50/80 p-1 sm:aspect-auto sm:h-[clamp(220px,38vh,430px)] sm:p-2">
              {link ? (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full items-center justify-center"
                >
                  {images.length > 0 ? (
                    <Image
                      src={images[currentImageIndex]}
                      className="h-auto max-h-full w-full rounded-lg object-contain shadow-sm sm:h-auto sm:w-auto sm:max-h-full sm:max-w-full"
                      alt={`${name.toLowerCase()}-project-image`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-pink-50 font-mono text-pink-400">
                      No Images
                    </div>
                  )}
                </Link>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  {images.length > 0 ? (
                    <Image
                      src={images[currentImageIndex]}
                      className="h-auto max-h-full w-full rounded-lg object-contain shadow-sm sm:h-auto sm:w-auto sm:max-h-full sm:max-w-full"
                      alt={`${name.toLowerCase()}-project-image`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-pink-50 font-mono text-pink-400">
                      No Images
                    </div>
                  )}
                </div>
              )}

              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  {/* Previous Image */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="
                      absolute
                      left-3
                      top-1/2
                      z-10
                      -translate-y-1/2
                      rounded-full
                      border
                      border-pink-300
                      bg-white/90
                      p-2
                      text-pink-900
                      shadow-md
                      backdrop-blur-sm
                      transition-all
                      duration-200
                      hover:bg-pink-100
                    "
                    aria-label="Previous image"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Next Image */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="
                      absolute
                      right-3
                      top-1/2
                      z-10
                      -translate-y-1/2
                      rounded-full
                      border
                      border-pink-300
                      bg-white/90
                      p-2
                      text-pink-900
                      shadow-md
                      backdrop-blur-sm
                      transition-all
                      duration-200
                      hover:bg-pink-100
                    "
                    aria-label="Next image"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Image Dots */}
                  <div
                    className="
                      absolute
                      bottom-3
                      left-1/2
                      z-10
                      flex
                      -translate-x-1/2
                      gap-2
                    "
                  >
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`
                          h-2
                          rounded-full
                          transition-all
                          duration-200
                          ${
                            index === currentImageIndex
                              ? "w-7 bg-pink-600"
                              : "w-2 bg-pink-300 hover:bg-pink-400"
                          }
                        `}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mx-auto mt-2 w-full max-w-5xl px-2 sm:px-4">

          {/* Name + Links */}
          <div className="flex items-center justify-between gap-4">

            <p className="min-w-0 truncate text-xl font-bold tracking-widest text-pink-950 sm:text-2xl">
              {name}
            </p>

            <div className="flex shrink-0 items-center gap-4 sm:gap-6">

              {/* Website */}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} website`}
                >
                  <Link2
                    className="
                      h-5
                      w-5
                      text-pink-800
                      transition-colors
                      hover:text-pink-500
                      sm:h-6
                      sm:w-6
                    "
                  />
                </Link>
              )}

              {/* GitHub */}
              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} GitHub`}
                >
                  <Image
                    src={GithubSVG}
                    className="
                      h-5
                      w-5
                      rounded-full
                      hover:bg-pink-100
                      sm:h-6
                      sm:w-6
                    "
                    alt="github"
                  />
                </Link>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          {tech.length > 0 && (
            <div className="mb-2 mt-2 flex flex-wrap gap-2">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="
                    select-none
                    rounded-md
                    border
                    border-pink-200
                    bg-pink-100
                    px-2.5
                    py-0.5
                    font-mono
                    text-xs
                    tracking-wider
                    text-pink-900
                    transition-all
                    duration-200
                    hover:border-pink-300
                    hover:bg-pink-200
                    hover:text-pink-950
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          {/* <p
            className="
              mt-1
              line-clamp-2
              font-mono
              text-sm
              leading-relaxed
              text-pink-950/75
            "
          >
            {content}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectTab;