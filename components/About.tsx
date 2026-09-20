"use client";

import Image from "next/image";
import React from "react";
import DesktopBG from "@/assets/desktopbg2.jpeg";
import Shreya from "@/assets/shreya.png";

function About() {
  const skills = {
    Programming: ["Java", "C++"],
    Testing: ["JUnit", "Selenium"],
    Tools: ["Git", "GitHub", "VS Code"],
  };

  return (
    <div className="min-h-full w-full overflow-x-hidden bg-white">
      {/* Banner */}
      <div className="relative">
        <div className="relative h-40 w-full overflow-hidden sm:h-48 md:h-56">
          <Image
            src={DesktopBG}
            alt="Shreya workspace"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
        </div>

        {/* Profile */}
        <div
  className="
    relative
    -mt-[22px]
    flex flex-col items-center
    px-5
    sm:absolute sm:left-6 sm:-bottom-[82px]
    sm:mt-0 sm:flex-row sm:items-center
    md:left-10
  "
>
          <div
            className="
              h-28 w-28 shrink-0
              rounded-full bg-white p-1
              sm:h-32 sm:w-32
              md:h-36 md:w-36
            "
          >
            <Image
              src={Shreya}
              alt="Shreya"
              width={144}
              height={144}
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>

          <div
            className="
              mt-3 text-center
              sm:mt-0 sm:pl-3 sm:text-left
            "
          >
            <p
              className="
                font-pixel text-2xl text-black
                sm:pt-14 sm:text-3xl
                md:text-4xl
              "
            >
              Shreya Yadav
            </p>

            <p className="font-pixel text-sm sm:text-base ">
              Software Development Eng. in Test
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div
        className="
          flex flex-col gap-6
          px-5 pb-8 pt-8
          sm:px-8 sm:pt-24
          md:px-10
          lg:px-15 lg:pt-28
        "
      >
        {/* About */}
        <section>
          <h1 className="font-pixel text-2xl text-pink-400 sm:text-3xl">
            About
          </h1>

          <p
            className="
              mt-3
              text-left text-base leading-relaxed text-gray-700
              font-pixel
              sm:mt-4 sm:text-lg sm:text-justify
            "
          >
            Software Testing Engineer who enjoys breaking things before users
            do. Experienced in manual testing, test case design, bug tracking,
            and SDLC/STLC, with a growing focus on automation and SDET
            practices. Currently building skills in Java, Selenium, API
            testing, and SQL to turn repetitive testing into smart, reliable
            automation. Curious by nature, detail-oriented, and always looking
            for better ways to build and test software.
          </p>
        </section>

        {/* Skills */}
        {/* <section>
          <p className="font-pixel text-xl text-pink-400 sm:text-2xl">
            Skills
          </p>

          <hr className="my-2 border-zinc-300" />

          <div className="flex flex-col gap-1.5">
            {Object.entries(skills).map(([category, items]) => (
              <p
                key={category}
                className="font-pixel text-sm sm:text-base"
              >
                <span className="font-semibold">{category}:</span>{" "}
                <span className="font-normal">{items.join(", ")}</span>
              </p>
            ))}
          </div>
        </section> */}

        {/* Education */}
        <section>
          <p className="font-pixel text-xl text-pink-400 sm:text-2xl">
            Education
          </p>

          <hr className="my-2 border-zinc-300" />

          <div>
            <div className="flex flex-col gap-1 font-pixel sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold sm:text-base">
              Chitkara University{" "}
              <span className="font-normal italic text-xs text-zinc-500 sm:text-sm">
                Rajpura, Punjab
              </span>
            </p>

            <p className="text-sm font-semibold sm:text-base">
              2022-2026
            </p>
          </div>
          <div className="font-pixel py-1">
            <p>Bachelor's of Engineering - CSE</p>
          </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <p className="font-pixel text-xl text-pink-400 sm:text-2xl">
            Experience
          </p>

          <hr className="my-2 border-zinc-300" />

          <div className="px-0 sm:px-2">
            <div className="flex flex-col gap-1 font-pixel sm:flex-row sm:items-center sm:justify-between">
              <p className="text-base font-semibold sm:text-lg">
                Vertex Infosoft
              </p>

              <p className="text-xs text-zinc-600 sm:text-sm">
                Full-time — Onsite
              </p>
            </div>

            <div className="flex justify-between mt-1 font-pixel text-sm italic sm:text-base">
              <p className="">
              Software Tester
            </p>
            <p className="text-xs text-zinc-600 sm:text-sm">May 2026 - Present</p>
            </div>

            <p className="py-2 font-pixel text-sm leading-relaxed text-gray-700 sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo
              assumenda praesentium nihil voluptatum repellat, enim sequi neque
              ut eius obcaecati quibusdam consequuntur a quod vero! Veritatis
              possimus reiciendis sunt?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
