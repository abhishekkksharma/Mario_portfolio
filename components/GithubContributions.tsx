"use client";

import dynamic from "next/dynamic";

function GithubContributions() {
  const GitHubCalendar = dynamic(
    () =>
      import("react-github-calendar").then((mod) => mod.GitHubCalendar),
    {
      ssr: false,
      loading: () => (
        <div className="h-32 w-full animate-pulse rounded-lg bg-pink-50" />
      ),
    }
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-15 font-pixel">
      <p className="flex justify-center items-center my-4 among-font text-3xl">
        My Github contributions
      </p>

        <div className="w-full max-w-6xl mx-auto overflow-x-auto">
        <div className="min-w-175 flex justify-center relative">
          <GitHubCalendar
            username="shr5ya"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            colorScheme="light"
            theme={{
              light: [
                "#fdf2f8",
                "#fbcfe8",
                "#f9a8d4",
                "#ec4899",
                "#be185d",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default GithubContributions;