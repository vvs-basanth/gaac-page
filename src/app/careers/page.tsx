import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Work with us.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      Explore remote-friendly, flexible opportunities and join our mission to make work life simpler, more pleasant and more productive.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gradient-to-r hover:from-[#8e9eab] hover:to-[#ebf4f5] hover:text-black transition-colors duration-100 delay-100">
            <a 
            href="#"
            >Apply Here</a>
        </button>
      </div>
      
    </BackgroundLines>
  );
}

export default BackgroundLinesDemo;