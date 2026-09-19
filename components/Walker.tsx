import React from "react";
import Image from "next/image";
import WalkerGif from "@/assets/walker.gif";

function Walker() {
  return (
    <div className="fixed inset-x-0 bottom-26 h-25 overflow-hidden pointer-events-none">
      <Image
        src={WalkerGif}
        alt="walker"
        className="absolute h-28 w-auto animate-walker"
      />
    </div>
  );
}

export default Walker;