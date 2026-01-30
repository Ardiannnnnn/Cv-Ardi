"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import experiencesData from "../../data/experiences.json";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExp, setSelectedExp] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-4 md:px-6 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-glow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 px-0 md:px-4">
        {/* Header Section - Match grid layout below */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Title - Same width as experience list */}
            <div className="lg:col-span-4">
              <h2 className="text-xl md:text-3xl lg:text-2xl font-bold text-text-primary leading-tight">
                <span className="text-gold italic">Work</span> & Experience
              </h2>
            </div>
            
            {/* Description - Same width as showcase */}
            <div className="lg:col-span-8 flex flex-col md:flex-row gap-4 md:gap-6">
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed flex-1">
                Throughout my academic journey and early career, I have gained valuable 
                experience in software development, working on various projects that 
                have shaped my skills.
              </p>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed flex-1">
                From university projects to internships, each experience has contributed 
                to my growth as a developer, teaching me the importance of clean code 
                and user-centered design.
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left - Experience List */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-1">
              {experiencesData.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExp(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 border ${
                    selectedExp === index
                      ? 'bg-dark-card border-purple-glow/50'
                      : 'bg-transparent border-transparent hover:bg-dark-card/50 hover:border-purple-deep/30'
                  }`}
                >
                  <h4 className={`font-semibold text-xs md:text-sm transition-colors ${
                    selectedExp === index ? 'text-gold' : 'text-text-primary'
                  }`}>
                    {exp.company}
                  </h4>
                  <p className="text-text-muted text-[10px] md:text-xs mt-1">
                    {exp.period}
                  </p>
                  <p className="text-text-secondary text-[10px] md:text-xs mt-0.5">
                    {exp.role}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Showcase */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Showcase Header */}
            <div className="mb-4">
              <h3 className="text-text-primary text-xs md:text-sm font-semibold">
                Showcase <span className="text-gold">{experiencesData[selectedExp].company}</span>
              </h3>
            </div>

            {/* Showcase Grid - 1 Large + 2 Small */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {/* Large Image */}
              <div className="group relative aspect-video md:aspect-[4/5] rounded-xl overflow-hidden bg-dark-card border border-purple-deep/30 hover:border-purple-glow/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/30 to-dark-surface flex items-center justify-center">
                  {experiencesData[selectedExp].showcase[0]?.image ? (
                    <Image
                      src={experiencesData[selectedExp].showcase[0].image}
                      alt={experiencesData[selectedExp].showcase[0].title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-purple-glow/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-text-muted text-[10px]">{experiencesData[selectedExp].showcase[0]?.title}</span>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-text-primary text-xs font-medium">{experiencesData[selectedExp].showcase[0]?.title}</span>
                </div>
              </div>

              {/* Right Column - 2 Small Images Stacked */}
              <div className="flex flex-col gap-3 md:gap-4">
                {experiencesData[selectedExp].showcase.slice(1, 3).map((project) => (
                  <div
                    key={project.id}
                    className="group relative flex-1 min-h-[120px] rounded-xl overflow-hidden bg-dark-card border border-purple-deep/30 hover:border-purple-glow/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/30 to-dark-surface flex items-center justify-center">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-glow/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-text-muted text-[10px]">{project.title}</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-text-primary text-xs font-medium">{project.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
