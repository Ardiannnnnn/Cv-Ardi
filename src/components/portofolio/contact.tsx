"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      { threshold: 0.3 }
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
    const { name, email, subject, message } = formData;

    // Create mailto link
    const mailtoLink = `mailto:ardiannn98@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-16 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-Brown rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-32 h-32 bg-Green rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-DarkBrown rounded-full blur-xl"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-4 h-4 bg-Brown transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-60 left-20 w-6 h-6 bg-DarkBrown transform rotate-45 opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-Green rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-Brown rounded-full opacity-25"></div>
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
            Get In Touch
          </h2>
          <h1 className="text-White text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's{" "}
            <span className="text-Brown relative">
              Work Together
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-Brown/30 rounded-full"></div>
            </span>
          </h1>
          <p className="text-White/70 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            If you have an exciting project or are interested in collaborating, don’t hesitate to contact me!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-White text-xl md:text-2xl font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-Brown/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-Brown"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-White/90 font-medium">Email</p>
                    <p className="text-Brown">ardiannn98@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-Brown/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-Brown"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-White/90 font-medium">Location</p>
                    <p className="text-Brown">Banda Aceh, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-Brown/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-Brown"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-White/90 font-medium">Response Time</p>
                    <p className="text-Brown">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-White text-lg font-semibold mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ardian487_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-Brown/20 rounded-lg flex items-center justify-center hover:bg-Brown hover:text-White transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ardian-%E2%80%8E-b5659b2a4/"
                  className="w-10 h-10 bg-Brown/20 rounded-lg flex items-center justify-center hover:bg-Brown hover:text-White transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Ardiannnnnn"
                  className="w-10 h-10 bg-Brown/20 rounded-lg flex items-center justify-center hover:bg-Brown hover:text-White transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-Brown/5 backdrop-blur-sm border border-Brown/20 rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-White/90 text-sm font-medium mb-2 text-start">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-Brown/10 border border-Brown/30 rounded-lg text-White placeholder-White/50 focus:outline-none focus:ring-2 focus:ring-Brown/50 focus:border-Brown"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-White/90 text-sm font-medium mb-2 text-start">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-Brown/10 border border-Brown/30 rounded-lg text-White placeholder-White/50 focus:outline-none focus:ring-2 focus:ring-Brown/50 focus:border-Brown"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-White/90 text-sm font-medium mb-2 text-start">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-Brown/10 border border-Brown/30 rounded-lg text-White placeholder-White/50 focus:outline-none focus:ring-2 focus:ring-Brown/50 focus:border-Brown"
                  placeholder="Topic"
                />
              </div>

              <div>
                <label className="block text-White/90 text-sm font-medium mb-2 text-start">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-Brown/10 border border-Brown/30 rounded-lg text-White placeholder-White/50 focus:outline-none focus:ring-2 focus:ring-Brown/50 focus:border-Brown resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-Brown text-White rounded-lg hover:bg-DarkBrown transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
