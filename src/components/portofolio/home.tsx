"use client";

import Image from "next/image";
import ardi from "../../../public/image/foto2.png";
import { useEffect, useState } from "react";
import projectsData from "../../data/portofolio.json";

// Icon Components
const LocationIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 3;
  const maxSlide = Math.max(0, projectsData.length - projectsPerSlide); // Max position untuk shift satu-satu

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 pt-16 md:pt-20"
    >
      {/* Purple Glow Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-radial from-purple-glow/60 via-purple-deep/40 to-transparent blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Hero Section - Name Split Layout */}
        <div className="relative flex flex-col items-center justify-center min-h-[85vh] md:min-h-[80vh]">
          
          {/* Role Label */}
          <div className={`absolute top-6 sm:top-10 md:top-4 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <span className="text-text-secondary text-[10px] md:text-sm tracking-widest uppercase">
              Software Engineer
            </span>
          </div>

          {/* Name Behind Photo - Stroke Only - Using Bebas Neue */}
          <h1 
            className={`absolute top-12 sm:top-16 md:top-14 left-1/2 -translate-x-1/2 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] z-0 transition-all duration-1000 delay-200 leading-none select-none font-[family-name:var(--font-bebas)] tracking-wider ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              WebkitTextStroke: '1px rgba(156, 163, 175, 0.4)',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ARDIAN
          </h1>
          {/* Contact Info - Right Side */}
          <div className={`absolute top-0 md:top-4 right-0 hidden md:flex flex-col items-end gap-1.5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center gap-2 text-text-secondary text-xs md:text-sm">
              <span>Aceh, Indonesia</span>
              <LocationIcon />
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-xs md:text-sm">
              <span>ardian@gmail.com</span>
              <EmailIcon />
            </div>
          </div>

          {/* Main Name + Photo Layout */}
          <div className=" relative flex items-center justify-center w-full -mt-8 sm:-mt-4 md:mt-0">

            {/* Photo Container with Glow */}
            <div className={`relative z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              {/* Purple Glow Behind Photo */}
              <div className="absolute inset-0 -z-10 scale-110 md:scale-125 md:-top-10">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-purple-mid/50 via-purple-glow/60 to-transparent blur-[40px] md:blur-[80px]"></div>
              </div>
              
              {/* Photo */}
              <div className="relative">
                <Image 
                  src={ardi} 
                  alt="Ardian Profile" 
                  width={450} 
                  height={580}
                  className="object-contain object-bottom h-[240px] sm:h-[280px] md:h-[400px] lg:h-[480px] xl:h-[540px] w-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-4 md:bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 px-0 md:px-4">
            
            {/* About Me - Left */}
            <div className={`max-w-[280px] md:max-w-xs transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-text-primary font-semibold text-base md:text-lg mb-2 md:mb-3">About Me</h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                Hi, I'm <span className="text-gold font-medium">Ardian</span>. A passionate 
                Software Engineer who loves building things for the web.
              </p>
              <button 
                onClick={() => handleScrollTo('#about')}
                className="flex items-center gap-2 text-gold text-xs md:text-sm mt-3 md:mt-4 hover:text-gold-light transition-colors group"
              >
                <ArrowDownIcon />
                <span className="group-hover:underline">More Information</span>
              </button>
            </div>

            {/* Last Project - Right */}
            <div className={`hidden md:block transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-text-primary font-semibold text-lg mb-3 text-right">Last Project</h3>
              <div className="flex items-center gap-2">
                {/* Left Arrow - Only show if not first slide */}
                <button
                  onClick={() => setCurrentSlide(prev => prev - 1)}
                  className={`w-7 h-7 rounded-full bg-dark-card border border-purple-deep/30 flex items-center justify-center hover:bg-purple-deep/50 hover:border-purple-glow/50 transition-all ${
                    currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden w-[312px]">
                  <div 
                    className="flex gap-3 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 108}px)` }}
                  >
                    {/* Project Thumbnails from data */}
                    {projectsData.map((project, index) => (
                      <a 
                        key={index}
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-24 h-32 flex-shrink-0 rounded-xl bg-dark-card border border-purple-deep/30 overflow-hidden hover:border-purple-glow hover:shadow-lg hover:shadow-purple-glow/30 transition-all cursor-pointer group"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-purple-deep/50 to-dark-surface flex flex-col items-center justify-center p-1.5">
                          {/* Project Image */}
                          <div className="w-full h-24 bg-dark-bg rounded-lg border border-purple-glow/30 overflow-hidden mb-1">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-b from-purple-glow/20 to-purple-deep/30 flex items-center justify-center">
                                <span className="text-[8px] text-text-muted text-center px-1 group-hover:text-text-secondary transition-colors">
                                  {project.title.split(' ')[0]}
                                </span>
                              </div>
                            )}
                          </div>
                          {/* Project Title */}
                          <span className="text-[8px] text-purple-light bg-purple-deep/50 px-1.5 py-0.5 rounded-full truncate max-w-full">
                            {project.title}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Arrow - Only show if not last slide */}
                <button
                  onClick={() => setCurrentSlide(prev => prev + 1)}
                  className={`w-7 h-7 rounded-full bg-dark-card border border-purple-deep/30 flex items-center justify-center hover:bg-purple-deep/50 hover:border-purple-glow/50 transition-all ${
                    currentSlide >= maxSlide ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Pagination Dots */}
              <div className="flex justify-end gap-2 mt-3">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-6 h-1.5 bg-text-primary' 
                        : 'w-1.5 h-1.5 bg-text-muted hover:bg-text-secondary'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Contact Info */}
          <div className={`md:hidden absolute bottom-[-40px] left-0 right-0 flex justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-1.5 text-text-secondary text-[10px]">
              <LocationIcon />
              <span>Surabaya, Indonesia</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary text-[10px]">
              <EmailIcon />
              <span>ardian@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}