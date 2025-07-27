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
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 items-center h-screen px-4 md:px-0"
    >
      <div className="flex-shrink-0">
        <Image src={ardi} alt="Description of image" width={250} height={250} />
      </div>
      <section className="flex-shrink-0 text-center md:text-left">
         <h1 className="text-DarkBrown text-2xl md:text-4xl">
          Hi! I'm{" "}
          <Typewriter text="Ardian" speed={150} />
          ,<br className="md:hidden" /> a frontend developer.
        </h1>
        <p className="text-Brown text-xl md:text-4xl mt-2">Welcome to my page.</p>
      </section>
    </div>
  );
}