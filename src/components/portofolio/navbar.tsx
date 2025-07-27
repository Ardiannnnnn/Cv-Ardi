"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
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
      className={`text-Brown fixed top-0 w-full z-50 border-Orange border-b-2 border-Green transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a 
          href="#home"
          onClick={(e) => {e.preventDefault(); handleClick('#home');}}
          className="flex items-center space-x-1 rtl:space-x-reverse cursor-pointer"
        >
          <span className="self-center text-2xl whitespace-nowrap text-Orange">
            Ardian
          </span>
        </a>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-Orange rounded-lg md:hidden hover:bg-gray-100/20 focus:outline-none focus:ring-2 focus:ring-Orange/50"
          aria-controls="navbar-default"
          aria-expanded="false"
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
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 bg-black/30 backdrop-blur-sm border border-Orange/20 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:backdrop-blur-none">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {e.preventDefault(); handleClick(link.href);}}
                  className={clsx(
                    "block py-2 px-3 rounded-sm md:p-0 transition-colors cursor-pointer",
                    activeSection === link.href
                      ? "bg-Orange text-white md:bg-transparent md:text-Orange"
                      : "text-Brown hover:text-Orange hover:bg-Orange/20 md:hover:bg-transparent"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}