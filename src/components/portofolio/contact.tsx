"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create mailto link
    const mailtoLink = `mailto:ardiannn98@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-4 md:px-6 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-64 h-64 bg-purple-glow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 px-0 md:px-4">
        {/* Top Section - 3 columns */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left - Title & Email */}
          <div className="md:col-span-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary leading-tight mb-4">
              Feel Free to{" "}
              <span className="text-gold italic">Contact</span> me
            </h2>
            <a 
              href="mailto:ardiannn98@gmail.com" 
              className="text-text-muted text-sm hover:text-gold transition-colors duration-300"
            >
              ardiannn98@gmail.com
            </a>
          </div>

          {/* Middle - Description paragraphs */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-text-muted text-xs md:text-sm leading-relaxed">
              I'm always excited to connect with fellow developers, potential collaborators, 
              and anyone interested in technology. Whether you have a project idea, want to 
              discuss opportunities, or just want to say hello, I'd love to hear from you.
            </p>
            <p className="text-text-muted text-xs md:text-sm leading-relaxed">
              Currently open to freelance projects, full-time opportunities, and interesting 
              collaborations. Let's create something amazing together and bring your ideas to life.
            </p>
          </div>

          {/* Right - Contact Form */}
          <div className="md:col-span-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b border-purple-deep/50 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b border-purple-deep/50 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder="Email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-transparent border-b border-purple-deep/50 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gold text-dark-bg rounded-md hover:bg-gold/90 transition-all duration-300 font-medium text-sm mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section - 2 columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left - Quote */}
          <div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary leading-tight mb-6">
              "Turning ideas into reality through code and creativity"
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="text-text-muted text-xs">software developer</span>
              <div className="w-16 md:w-24 h-[2px] bg-gold"></div>
            </div>
          </div>

          {/* Right - Social Links */}
          <div>
            <p className="text-text-secondary text-sm mb-4">
              Connected <span className="text-text-muted">"with"</span> me
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/ardian487_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ardian-%E2%80%8E-b5659b2a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Ardiannnnnn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:ardiannn98@gmail.com"
                className="text-text-secondary hover:text-gold transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            <p className="text-text-muted text-xs leading-relaxed">
              Feel free to reach out through any of these platforms. 
              I'm most active on LinkedIn and GitHub, and I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
