"use client"

import Image from "next/image";
import React from "react";
import DesktopBG from "@/assets/desktopbg.jpeg";
import Shreya from "@/assets/shreya.png";

function About() {
    
    const skills = {
        Programming: ["Java", "C++"],
        Testing: ["JUnit", "Selenium"],
        Tools: ["Git", "GitHub", "VS Code"]
    };
    return (
        <div className="bg-white min-h-full">
            {/* Banner */}
            <div className="relative">
                <div className="relative w-full h-56 overflow-hidden">
                    <Image
                        src={DesktopBG}
                        alt="Shreya workspace"
                        fill
                        priority
                        className="object-cover object-center opacity-90"
                    />
                </div>

                {/* Profile Image */}
                <div className="absolute flex flex-row items-center left-10 -bottom-20">
                    <div className="w-36 h-36 rounded-full bg-white p-1">
                        <Image
                            src={Shreya}
                            alt="Shreya"
                            width={144}
                            height={144}
                            className="w-full h-full object-cover object-top rounded-full"
                        />
                    </div>
                    <div className="">
                        <p className="text-black font-pixel text-4xl pt-12 px-2">Shreya Yadav</p>
                        <p className="px-2 font-pixel">Software Development Eng. in Test</p>
                    </div>
                </div>
            </div>

            {/* About Content */}
            <div className="px-15 pt-28 pb-10 flex flex-col gap-6">
                <div>
                    <h1 className="font-pixel text-3xl text-pink-400">
                        About
                    </h1>

                    <p className="mt-4 text-gray-700 text-lg text-justify leading-relaxed font-pixel">
                        Software Testing Engineer who enjoys breaking things before users do. Experienced in manual testing, test case design, bug tracking, and SDLC/STLC, with a growing focus on automation and SDET practices. Currently building skills in Java, Selenium, API testing, and SQL to turn repetitive testing into smart, reliable automation. Curious by nature, detail-oriented, and always looking for better ways to build and test software.
                    </p>
                </div>
                <div className="">
                    <p className="font-pixel text-2xl text-pink-400">Skills</p>
                    <hr className="py-2 text-zinc-500" />
                    {Object.entries(skills).map(([category, items]) => (
                        <p key={category} className="font-semibold font-pixel">
                            {category}:{" "}
                            <span className="font-normal">
                                {items.join(", ")}
                            </span>
                        </p>
                    ))}
                </div>

                <div >
                    <p className="font-pixel text-2xl text-pink-400">Education</p>
                    <hr className="py-2 text-zinc-500" />
                    <div className="justify-between flex flex-row">
                        <p className="font-semibold font-pixel">Chitkara University <span className="font-normal italic text-sm">Rajpura, Punjab</span></p>
                        <p className="font-pixel font-semibold">2022-2026</p>
                    </div>
                </div>

                <div className="">
                    <p className="font-pixel text-2xl text-pink-400">Experience</p>
                    <hr className="py-2 text-zinc-500" />
                    <div className="px-2">
                        <div className="flex justify-between font-pixel ">
                        <p className="font-semibold text-lg">Vertex Infosoft</p>
                        <p>Full-time — Onsite</p>
                    </div>
                    <p className="italic ">Software Tester</p>
                    <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo assumenda praesentium nihil voluptatum repellat, enim sequi neque ut eius obcaecati quibusdam consequuntur a quod vero! Veritatis possimus reiciendis sunt?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;