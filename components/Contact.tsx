import React from "react";
import Image from "next/image";
import MessageIMG from "@/assets/message.png";
import EmailIMG from "@/assets/email.png";
import LinkedInIMG from "@/assets/linkedin.svg";
import GithubIMG from "@/assets/github (1).svg";

function Contact() {
  return (
    <div className="p-6 px-15 ">
      <div className="flex gap-4 flex-row items-center">
        <Image className="w-12 " src={MessageIMG} alt="message" />
        <p className="text-2xl font-semibold font-pixel">Contact</p>
      </div>

      <div className="flex flex-row gap-6 py-4">
        <div className="flex flex-row items-center gap-2">
          <Image className="w-8 h-8" src={EmailIMG} alt="email" />{" "}
          <p className="underline">shr5ya@gmail.com</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image className="w-8 h-8" src={LinkedInIMG} alt="email" />{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.linkedin.com/in/s8reya"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image className="w-8 h-8" src={GithubIMG} alt="email" />{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/shr5ya"
          >
            Github
          </a>
        </div>
      </div>

      <div className="flex gap-4 font-pixel flex-col">
        <div>
          <p>Your name</p>
          <input
            className="border-2 rounded border-zinc-400/60"
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            className="border-2 rounded border-zinc-400/60"
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <p>Message</p>
          <input
            className="border-2 rounded border-zinc-400/60"
            type="text"
            placeholder="Message"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
