"use client";

import React, { useState } from "react";
import Image from "next/image";
import MessageIMG from "@/assets/message.png";
import EmailIMG from "@/assets/email.png";
import LinkedInIMG from "@/assets/linkedin.svg";
import GithubIMG from "@/assets/github (1).svg";

function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("loading");
    setResult("Sending your message...");

    const formData = new FormData(form);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "Your-API-token";

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Yay! Message sent successfully");
        form.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResult("Network error, please try again!");
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-5 font-pixel sm:px-6 sm:py-6 md:px-8">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3 border-b-2 border-pink-200 pb-3 sm:mb-5">
        <Image
          className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
          src={MessageIMG}
          alt="message"
        />

        <h2 className="text-2xl font-bold tracking-wide text-pink-950 sm:text-3xl">
          Contact
        </h2>
      </div>

      {/* Social Links */}
      <div className="mb-4 flex flex-wrap gap-2 sm:mb-5 sm:gap-2.5">
        <a
          href="mailto:shr5ya@gmail.com"
          className="flex min-w-0 items-center gap-1.5 rounded-xl border-2 border-pink-900 bg-pink-100 px-2.5 py-1.5 text-[11px] font-semibold text-pink-950 shadow-[3px_3px_0px_#831843] transition-all hover:-translate-y-0.5 hover:bg-pink-200 sm:gap-2 sm:px-3 sm:text-xs"
        >
          <Image
            className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
            src={EmailIMG}
            alt="email"
          />

          <span className="truncate">shr5ya@gmail.com</span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/s8reya"
          className="flex items-center gap-1.5 rounded-xl border-2 border-pink-900 bg-pink-100 px-2.5 py-1.5 text-[11px] font-semibold text-pink-950 shadow-[3px_3px_0px_#831843] transition-all hover:-translate-y-0.5 hover:bg-pink-200 sm:gap-2 sm:px-3 sm:text-xs"
        >
          <Image
            className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
            src={LinkedInIMG}
            alt="LinkedIn"
          />

          <span>LinkedIn</span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shr5ya"
          className="flex items-center gap-1.5 rounded-xl border-2 border-pink-900 bg-pink-100 px-2.5 py-1.5 text-[11px] font-semibold text-pink-950 shadow-[3px_3px_0px_#831843] transition-all hover:-translate-y-0.5 hover:bg-pink-200 sm:gap-2 sm:px-3 sm:text-xs"
        >
          <Image
            className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
            src={GithubIMG}
            alt="GitHub"
          />

          <span>GitHub</span>
        </a>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 rounded-2xl border-[3px] border-black bg-pink-50/70 p-4 shadow-[4px_4px_0px_#111] sm:gap-3.5 sm:p-5 sm:shadow-[6px_6px_0px_#111] md:p-6"
      >
        {/* Name */}
        <div>
          <label className="mb-1 block text-xs font-bold text-pink-950 sm:mb-1.5 sm:text-sm">
            Your Name <span className="text-pink-600">*</span>
          </label>

          <input
            required
            name="name"
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border-2 border-black bg-white px-3 py-2 font-sans text-xs text-pink-950 shadow-[2px_2px_0px_#111] outline-none placeholder:text-pink-300 focus:ring-2 focus:ring-pink-400 sm:rounded-xl sm:border-[2.5px] sm:px-4 sm:py-2.5 sm:text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-xs font-bold text-pink-950 sm:mb-1.5 sm:text-sm">
            Email Address <span className="text-pink-600">*</span>
          </label>

          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border-2 border-black bg-white px-3 py-2 font-sans text-xs text-pink-950 shadow-[2px_2px_0px_#111] outline-none placeholder:text-pink-300 focus:ring-2 focus:ring-pink-400 sm:rounded-xl sm:border-[2.5px] sm:px-4 sm:py-2.5 sm:text-sm"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-xs font-bold text-pink-950 sm:mb-1.5 sm:text-sm">
            Message <span className="text-pink-600">*</span>
          </label>

          <textarea
            required
            name="message"
            rows={4}
            placeholder="Write your note here..."
            className="w-full resize-none rounded-lg border-2 border-black bg-white px-3 py-2 font-sans text-xs text-pink-950 shadow-[2px_2px_0px_#111] outline-none placeholder:text-pink-300 focus:ring-2 focus:ring-pink-400 sm:rounded-xl sm:border-[2.5px] sm:px-4 sm:py-2.5 sm:text-sm"
          />
        </div>

        {/* Status */}
        {status !== "idle" && (
          <div
            className={`rounded-lg border-2 px-3 py-2 text-[11px] font-semibold sm:rounded-xl sm:py-2.5 sm:text-xs ${
              status === "success"
                ? "border-green-800 bg-green-100 text-green-900"
                : status === "error"
                ? "border-red-800 bg-red-100 text-red-900"
                : "animate-pulse border-pink-800 bg-pink-100 text-pink-900"
            }`}
          >
            {result}
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-0.5 w-full self-start rounded-lg border-[3px] border-black bg-[#f472b6] px-5 py-2.5 text-xs font-bold text-pink-950 shadow-[3px_3px_0px_#111] transition-all hover:-translate-y-0.5 hover:bg-[#e95dcc] hover:shadow-[4px_4px_0px_#111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#111] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:rounded-xl sm:px-6 sm:py-2.5 sm:text-sm sm:shadow-[4px_4px_0px_#111]"
        >
          {status === "loading" ? "Sending..." : "Send Message →"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
