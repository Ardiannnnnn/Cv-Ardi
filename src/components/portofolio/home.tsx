"use client";

import Image from "next/image";
import ardi from "../../../public/image/ardi.png";
import { useEffect, useState } from "react";

function Typewriter({ text, speed = 150 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const fullText = text;
      
      if (isDeleting) {
        setDisplayed(fullText.substring(0, displayed.length - 1));
      } else {
        setDisplayed(fullText.substring(0, displayed.length + 1));
      }

      let typeSpeed = speed;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && displayed === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayed === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, text, speed, loopNum]);

  return (
    <span className="inline-block min-w-[60px] md:min-w-[120px]">
      {displayed}
    </span>
  );
}

export default function Home() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 items-center h-screen px-4 md:px-0 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-Brown rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-DarkBrown rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-Green rounded-full blur-2xl"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-4 h-4 bg-Brown transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-DarkBrown transform rotate-45 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-Green rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-Brown rounded-full opacity-25"></div>
      </div>

      <div className="flex-shrink-0 relative z-10">
        {/* Container dengan shadow dan border untuk foto */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-Brown/40 to-DarkBrown/30 rounded-full blur-md transform scale-110"></div>
          <div className="relative rounded-full p-2 shadow-2xl">
            <Image 
              src={ardi} 
              alt="Ardian Profile" 
              width={250} 
              height={250}
              className="rounded-full object-cover object-top h-[250px]"
            />
          </div>
        </div>
      </div>
      
      <section className="flex-shrink-0 text-center md:text-left relative z-10">
         <h1 className="text-White text-2xl md:text-4xl font-bold">
          Hi! I'm{" "}
          <span className="text-Brown">
            <Typewriter text="Ardian" speed={150} />
          </span>
          ,<br className="md:hidden" /> a software engineer.
        </h1>
        <p className="text-White/80 text-xl md:text-4xl mt-2">Welcome to my page.</p>
        
        {/* Social buttons atau CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button 
            onClick={() => handleScrollTo('#projects')}
            className="px-6 py-3 bg-Brown text-White rounded-lg hover:bg-DarkBrown transition-colors"
          >
            View My Work
          </button>
          <button 
            onClick={() => handleScrollTo('#contact')}
            className="px-6 py-3 border-2 border-Brown text-Brown rounded-lg hover:bg-Brown hover:text-White transition-colors"
          >
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}