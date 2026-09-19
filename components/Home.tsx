import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-40 px-6">
      <div className="flex flex-col items-center text-center font-pixel text-white">
        <p className="text-2xl md:text-3xl text-pink-200 mb-">
          Welcome to Shreya's
        </p>

        <h1
          className="
            text-6xl md:text-8xl font-semibold leading-none
            text-white
            [-webkit-text-stroke:2px_#f472b6]
            drop-shadow-[4px_4px_0px_#831843]
          "
        >
          Portfolio
        </h1>

        <p className="mt-5 text-sm md:text-base font-pixel text-pink-100 tracking-wide">
          Testing today for a better future
        </p>
      </div>

      <Link
        href={'/info'}
        className="
          mt-10
          font-pixel text-xl md:text-2xl font-semibold
          text-pink-950
          bg-pink-400
          px-8 py-2
          border-2 border-pink-950
          shadow-[5px_5px_0px_#831843]
          transition-all duration-150
          hover:bg-pink-300
          hover:-translate-y-1
          hover:shadow-[6px_6px_0px_#831843]
          active:translate-x-[4px]
          active:translate-y-[4px]
          active:shadow-[1px_1px_0px_#831843]
        "
      >
        Start
      </Link>
    </div>
  )
}

export default HomePage