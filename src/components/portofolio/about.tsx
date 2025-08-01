"use client";

import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.3 }
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
    const link = document.createElement('a');
    link.href = '/cv/cv-ardi.pdf';
    link.download = 'cv-ardi.pdf';
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="md:text-left text-center space-y-6">
              <p className="text-White/90 text-base md:text-lg leading-relaxed">
                Hello, my name is{" "}
                <span className="text-Brown font-semibold">Ardian</span>, a
                fresh graduate from the Computer Science program at
                Syiah Kuala University.
              </p>

              <p className="text-White/80 text-base md:text-lg leading-relaxed">
                Since my university years, I have had a strong passion for technology and have continuously developed my skills in IT, particularly in programming languages and information systems.
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
                  <h3 className="text-2xl md:text-3xl font-bold text-Brown">22</h3>
                  <p className="text-White/70 text-sm">Years Old</p>
                </div>
                <div className="bg-Brown/10 backdrop-blur-sm border border-Brown/20 rounded-lg p-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-Brown">S.Kom</h3>
                  <p className="text-White/70 text-sm">Degree</p>
                </div>
                <div className="bg-Brown/10 backdrop-blur-sm border border-Brown/20 rounded-lg p-4 text-center col-span-2">
                  <h3 className="text-lg md:text-xl font-bold text-Brown">
                    Universitas Syiah Kuala
                  </h3>
                  <p className="text-White/70 text-sm">Informatika</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handlePreviewCV}
                  className="flex-1 px-6 py-3 bg-Brown text-White rounded-lg hover:bg-DarkBrown transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Preview CV
                </button>
                <button 
                  onClick={handleDownloadCV}
                  className="flex-1 px-6 py-3 border-2 border-Brown text-Brown rounded-lg hover:bg-Brown hover:text-White transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 mb-2 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-Brown/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-Brown rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPDFPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[90vh] bg-White rounded-xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-DarkGreen border-b">
              <h3 className="text-White text-xl font-semibold">CV Preview - Ardian</h3>
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadCV}
                  className="px-4 py-2 bg-Brown text-White rounded-lg hover:bg-DarkBrown transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
                <button
                  onClick={closePDFPreview}
                  className="p-2 text-White hover:bg-Brown/20 rounded-lg transition-colors"
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
                src="/cv/cv-ardi.pdf#toolbar=1&navpanes=0&scrollbar=1"
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