"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Portofolio",
    href: "#projects",
    hasDropdown: true,
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];

// Chevron Down Icon Component
const ChevronDown = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    width="12" 
    height="12" 
    viewBox="0 0 12 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M2.5 4.5L6 8L9.5 4.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [currentLang, setCurrentLang] = useState<"EN" | "IND">("EN");
  const navbarRef = useRef<HTMLDivElement>(null);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Detect active section
      const sections = ['#home', '#about', '#projects', '#contact'];
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      ref={navbarRef} 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-bg/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => {e.preventDefault(); handleClick('#home');}}
          className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer group"
        >
          {/* Logo Icon - Modern gradient */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold via-gold-light to-gold flex items-center justify-center shadow-lg shadow-gold/20">
            <span className="text-dark-bg font-bold text-xl">A</span>
          </div>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-text-primary group-hover:text-gold transition-colors duration-200">
            Ardian
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-text-secondary rounded-lg md:hidden hover:bg-purple-deep/50 focus:outline-none focus:ring-2 focus:ring-purple-glow/50 transition-colors"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M1 1l15 12M1 13L16 1" : "M1 1h15M1 7h15M1 13h15"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 bg-dark-surface/95 backdrop-blur-xl border border-purple-deep/30 rounded-2xl md:flex-row md:items-center md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:backdrop-blur-none">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {e.preventDefault(); handleClick(link.href);}}
                  className={clsx(
                    "flex items-center gap-1 py-2.5 px-4 rounded-xl md:rounded-lg md:px-3 md:py-2 transition-all duration-200 cursor-pointer text-sm font-medium",
                    activeSection === link.href
                      ? "bg-purple-glow/30 text-text-primary md:bg-transparent md:text-text-primary"
                      : "text-text-secondary hover:text-text-primary hover:bg-purple-deep/40 md:hover:bg-purple-deep/30"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 opacity-70" />}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center mt-4 md:mt-0 md:ml-6 px-4 md:px-0">
            <div className="flex items-center text-sm bg-purple-deep/30 md:bg-transparent rounded-lg px-3 py-1.5 md:p-0">
              <button 
                onClick={() => setCurrentLang("EN")}
                className={clsx(
                  "transition-all duration-200 px-1",
                  currentLang === "EN" 
                    ? "text-text-primary font-semibold" 
                    : "text-text-muted hover:text-text-secondary"
                )}
              >
                EN
              </button>
              <span className="text-purple-glow mx-2 font-light">|</span>
              <button 
                onClick={() => setCurrentLang("IND")}
                className={clsx(
                  "transition-all duration-200 px-1",
                  currentLang === "IND" 
                    ? "text-text-primary font-semibold" 
                    : "text-text-muted hover:text-text-secondary"
                )}
              >
                IND
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}