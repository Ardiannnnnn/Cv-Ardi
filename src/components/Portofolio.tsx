"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "./portofolio/navbar";
import Home from "./portofolio/home";
import About from "./portofolio/about";
import Experience from "./portofolio/experience";
import Project from "./portofolio/project";
import Contact from "./portofolio/contact";

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="bg-dark-bg min-h-screen">
        <Navbar />
        <div className="flex flex-col justify-center">
          <Home />
          <About />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </LanguageProvider>
  );
}
