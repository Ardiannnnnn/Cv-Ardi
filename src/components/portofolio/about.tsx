"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-16 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-Brown rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-Green rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-DarkBrown rounded-full blur-xl"></div>
      </div>

      {/* Content Container */}
      <div
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-Brown text-lg md:text-xl font-medium mb-2 tracking-wide uppercase">
            Get to know me
          </h2>
          <h1 className="text-White text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A few words{" "}
            <span className="text-Brown relative">
              about me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-Brown/30 rounded-full"></div>
            </span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center ">
          {/* Text Content */}
          <div className="md:text-left text-center space-y-6">
            <p className="text-White/90 text-base md:text-lg leading-relaxed">
              Halo! Saya{" "}
              <span className="text-Brown font-semibold">Ardian</span>, seorang
              fresh graduate berusia 22 tahun dari Program Studi Informatika,
              Universitas Syiah Kuala.
            </p>

            <p className="text-White/80 text-base md:text-lg leading-relaxed">
              Sejak masa kuliah, saya sangat tertarik dengan dunia teknologi dan
              terus mengembangkan kemampuan saya di bidang IT, khususnya dalam
              berbagai bahasa pemrograman dan sistem teknologi informasi.
            </p>

            {/* Skills Tags */}
            <div className="flex justify-center md:justify-start flex-wrap gap-2 mt-6">
              {[
                "Frontend Development",
                "React.js",
                "TypeScript",
                "UI/UX Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-Brown/20 text-Brown text-sm rounded-full border border-Brown/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats or Visual Element */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-Brown/10 backdrop-blur-sm border border-Brown/20 rounded-lg p-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-Brown">
                  22
                </h3>
                <p className="text-White/70 text-sm">Years Old</p>
              </div>
              <div className="bg-Brown/10 backdrop-blur-sm border border-Brown/20 rounded-lg p-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-Brown">
                  S.Kom
                </h3>
                <p className="text-White/70 text-sm">Degree</p>
              </div>
              <div className="bg-Brown/10 backdrop-blur-sm border border-Brown/20 rounded-lg p-4 text-center col-span-2">
                <h3 className="text-lg md:text-xl font-bold text-Brown">
                  Universitas Syiah Kuala
                </h3>
                <p className="text-White/70 text-sm">Informatika</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button className="w-full md:w-auto px-8 py-3 bg-Brown text-White rounded-lg hover:bg-DarkBrown transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Dipindahkan keluar dari content container */}
      <div className="absolute bottom-0 mb-2 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-Brown/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-Brown rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}