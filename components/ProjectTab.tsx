"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SquareArrowUpRight, Link2 } from "lucide-react";
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
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-row justify-between rounded-md bg-transparent p-4 font-pixel">
      <div className="w-full overflow-hidden rounded-md bg-transparent p-2">
        <div className="rounded-2xl border border-pink-200 bg-pink-50/60 p-1 shadow-inner">
          <div className="rounded-xl bg-white p-1">
            {/* Single image with arrows */}
            <div className="relative overflow-hidden rounded-xl">
              {link ? (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <SquareArrowUpRight className="absolute right-2 top-2 z-10 m-2 h-6 w-6 text-pink-950 transition-colors hover:text-pink-600" /> */}

                  {images && images.length > 0 ? (
                    <Image
                      src={images[currentImageIndex]}
                      className="aspect-video w-full rounded-xl bg-pink-50 object-cover"
                      alt={`${name.toLowerCase()}-project-image`}
                    />
                  ) : (
                    <div className="flex h-[30vh] w-full items-center justify-center bg-pink-50 font-mono text-pink-400">
                      No Images
                    </div>
                  )}
                </Link>
              ) : (
                <>
                  {images && images.length > 0 ? (
                    <Image
                      src={images[currentImageIndex]}
                      className="aspect-video w-full rounded-xl bg-pink-50 object-cover"
                      alt={`${name.toLowerCase()}-project-image`}
                    />
                  ) : (
                    <div className="flex h-[30vh] w-full items-center justify-center bg-pink-50 font-mono text-pink-400">
                      No Images
                    </div>
                  )}
                </>
              )}

              {/* Navigation Arrows */}
              {images && images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="
                      absolute left-2 top-1/2 z-10
                      -translate-y-1/2
                      rounded-full
                      border border-pink-300
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

                  <button
                    onClick={nextImage}
                    className="
                      absolute right-2 top-1/2 z-10
                      -translate-y-1/2
                      rounded-full
                      border border-pink-300
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

                  {/* Dot indicators */}
                  <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "w-6 bg-pink-600"
                            : "w-2 bg-pink-300 hover:bg-pink-400"
                        }`}
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
        <div className="mt-3 min-w-0 flex-1 px-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold tracking-widest text-pink-950">
              {name}
            </p>

            <div className="flex gap-6 px-4">
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 className="h-6 w-6 text-pink-800 transition-colors hover:text-pink-500" />
                </Link>
              )}

              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={GithubSVG}
                    className="h-6 w-6 rounded-full hover:bg-pink-100"
                    alt="github"
                  />
                </Link>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          {tech && tech.length > 0 && (
            <div className="mb-3 mt-2 flex flex-wrap gap-2">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-md
                    border border-pink-200
                    bg-pink-100
                    px-2.5 py-0.5
                    font-mono
                    text-xs
                    tracking-wider
                    text-pink-900
                    transition-all
                    duration-200
                    hover:border-pink-300
                    hover:bg-pink-200
                    hover:text-pink-950
                    select-none
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="mt-1 font-mono text-sm leading-relaxed text-pink-950/75">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTab;