"use client";

import { useEffect, useRef, useState } from "react";

// 3D Floating Code Element Component
const Floating3DElement = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[400px] perspective-1000">
      {/* Main 3D Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Floating Laptop/Code Window */}
        <div className="relative w-[280px] md:w-[340px] h-[200px] md:h-[240px] animate-float">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-glow/40 to-gold/20 blur-3xl rounded-3xl"></div>
          
          {/* Code Window */}
          <div className="relative w-full h-full bg-dark-surface/90 backdrop-blur-xl rounded-2xl border border-purple-glow/30 overflow-hidden shadow-2xl transform rotate-y-[-5deg] rotate-x-[5deg]">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-card/80 border-b border-purple-deep/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-3 text-text-muted text-xs">portfolio.tsx</span>
            </div>
            
            {/* Code Content */}
            <div className="p-4 font-mono text-xs md:text-sm space-y-1 overflow-hidden">
              <div className="flex">
                <span className="text-text-muted w-6">1</span>
                <span className="text-purple-light">const</span>
                <span className="text-text-primary ml-2">developer</span>
                <span className="text-text-muted ml-2">=</span>
                <span className="text-gold ml-2">{"{"}</span>
              </div>
              <div className="flex">
                <span className="text-text-muted w-6">2</span>
                <span className="text-text-secondary ml-4">name:</span>
                <span className="text-green-400 ml-2">"Ardian"</span>
                <span className="text-text-muted">,</span>
              </div>
              <div className="flex">
                <span className="text-text-muted w-6">3</span>
                <span className="text-text-secondary ml-4">role:</span>
                <span className="text-green-400 ml-2">"Software Engineer"</span>
                <span className="text-text-muted">,</span>
              </div>
              <div className="flex">
                <span className="text-text-muted w-6">4</span>
                <span className="text-text-secondary ml-4">skills:</span>
                <span className="text-gold ml-2">[</span>
                <span className="text-green-400">"React"</span>
                <span className="text-text-muted">,</span>
                <span className="text-green-400 ml-1">"Next.js"</span>
                <span className="text-gold">]</span>
                <span className="text-text-muted">,</span>
              </div>
              <div className="flex">
                <span className="text-text-muted w-6">5</span>
                <span className="text-text-secondary ml-4">passion:</span>
                <span className="text-purple-light ml-2">true</span>
                <span className="text-text-muted">,</span>
              </div>
              <div className="flex">
                <span className="text-text-muted w-6">6</span>
                <span className="text-gold">{"}"}</span>
                <span className="text-text-muted">;</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-text-muted w-6">7</span>
                <span className="w-2 h-4 bg-purple-glow/80 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements Around */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 animate-float-slow">
          <div className="w-full h-full bg-gradient-to-br from-purple-glow to-purple-deep rounded-xl flex items-center justify-center shadow-lg shadow-purple-glow/30 transform rotate-12">
            <span className="text-white text-lg md:text-2xl font-bold">{"</>"}</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 w-10 h-10 md:w-14 md:h-14 animate-float-reverse">
          <div className="w-full h-full bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center shadow-lg shadow-gold/30 transform -rotate-12">
            <span className="text-dark-bg text-sm md:text-xl font-bold">JS</span>
          </div>
        </div>

        <div className="absolute top-12 right-4 md:top-16 md:right-8 w-10 h-10 md:w-12 md:h-12 animate-float-slow">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <span className="text-white text-xs md:text-sm font-bold">TS</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-8 md:bottom-8 md:right-16 w-8 h-8 md:w-10 md:h-10 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30 transform rotate-45">
            <span className="text-white text-xs font-bold transform -rotate-45">N</span>
          </div>
        </div>

        {/* Orbit Ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-purple-glow/20 rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showPDFPreview, setShowPDFPreview] = useState(false);

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

  // Fungsi untuk preview CV
  const handlePreviewCV = () => {
    setShowPDFPreview(true);
  };

  // Fungsi untuk download CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Ardian_resume.pdf";
    link.download = "Ardian_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fungsi untuk menutup modal
  const closePDFPreview = () => {
    setShowPDFPreview(false);
  };

  return (
    <>
      <div
        id="about"
        ref={sectionRef}
        className="min-h-screen flex flex-col justify-center px-4 md:px-6 py-20 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-glow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10 px-0 md:px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Title */}
              <div className="mb-2">
                <h2 className="text-xl md:text-3xl lg:text-2xl font-bold text-text-primary leading-tight">
                  <span className="text-gold">Fresh</span> Graduate
                  <br />
                </h2>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div>
                  <h4 className="text-text-primary font-semibold text-xs md:text-sm">Computer Science</h4>
                  <p className="text-text-muted text-[10px] md:text-xs">Syiah Kuala University</p>
                </div>
                <div>
                  <h4 className="text-text-primary font-semibold text-xs md:text-sm">Software Engineer</h4>
                  <p className="text-text-muted text-[10px] md:text-xs">Full Stack Developer</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 mb-6">
                <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                  Hello, my name is <span className="text-gold font-semibold">Ardian</span>, a fresh graduate 
                  from the Computer Science program at Syiah Kuala University. Since my university years, 
                  I have had a strong passion for technology.
                </p>
                <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                  I continuously develop my skills in IT, particularly in programming languages and 
                  information systems. Passionate about creating elegant solutions and beautiful user experiences.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {["React.js", "Next.JS", "TypeScript", "Laravel", "PHP", "MySQL", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-purple-deep/30 text-purple-light text-[10px] md:text-xs rounded-full border border-purple-glow/30 hover:bg-purple-deep/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handlePreviewCV}
                  className="px-4 py-2 bg-gold text-dark-bg text-xs md:text-sm font-medium rounded-lg hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Preview CV
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="px-4 py-2 border border-purple-glow/50 text-text-primary text-xs md:text-sm rounded-lg hover:bg-purple-deep/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </button>
              </div>
            </div>

            {/* Right Content - 3D Element */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Floating3DElement />
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPDFPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[90vh] bg-dark-surface rounded-xl shadow-2xl overflow-hidden border border-purple-glow/30">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-dark-card border-b border-purple-deep/30">
              <h3 className="text-text-primary text-xl font-semibold">CV Preview - Ardian</h3>
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadCV}
                  className="px-4 py-2 bg-gold text-dark-bg rounded-lg hover:bg-gold-light transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
                <button
                  onClick={closePDFPreview}
                  className="p-2 text-text-secondary hover:bg-purple-deep/30 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[calc(100%-4rem)]">
              <iframe
                src="/cv/Ardian_resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                className="w-full h-full"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
