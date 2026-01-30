"use client";

import { useEffect, useRef, useState } from "react";
import projectsData from "../../data/portofolio.json";

interface Project {
  title: string;
  description: string;
  github_link: string;
  technologies: string[];
}

// Icon components for each project type
const ProjectIcons = {
  web: (
    <svg className="w-10 h-10 md:w-12 md:h-12 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  mobile: (
    <svg className="w-10 h-10 md:w-12 md:h-12 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </svg>
  ),
  code: (
    <svg className="w-10 h-10 md:w-12 md:h-12 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  design: (
    <svg className="w-10 h-10 md:w-12 md:h-12 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  ),
};

export default function Project() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = projectsData;

  // Get icon based on project index or type
  const getProjectIcon = (index: number) => {
    const icons = [ProjectIcons.web, ProjectIcons.mobile, ProjectIcons.code, ProjectIcons.design];
    return icons[index % icons.length];
  };

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-4 md:px-6 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-20 w-64 h-64 bg-purple-glow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 px-0 md:px-4">
        {/* Section Title */}
        <div className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-text-primary leading-tight">
            <span className="text-gold italic">Projects</span> & Portfolio
          </h2>
        </div>

        {/* Projects Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-5 md:p-6 rounded-2xl bg-dark-card/50 border border-purple-deep/30 hover:border-purple-glow/50 hover:bg-dark-card transition-all duration-500 cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {getProjectIcon(index)}
              </div>

              {/* Title */}
              <h3 className="text-text-primary text-sm md:text-base font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-xs md:text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies Tags - Optional small badges */}
              <div className="flex flex-wrap gap-1 mt-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-1.5 py-0.5 bg-purple-deep/30 text-purple-light text-[8px] md:text-[10px] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
