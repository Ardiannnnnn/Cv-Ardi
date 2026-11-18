"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import projects from "@/data/portofolio.json";
import experiences from "@/data/experiences.json";
import styles from "./PortfolioV2.module.css";

export default function PortfolioV2() {
  const { locale, setLocale, personal, t } = useLanguage();
  const id = locale === "id";
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("about");
  const sections = [
    { key: "about", label: id ? "Tentang" : "About" },
    { key: "experience", label: id ? "Pengalaman" : "Experience" },
    { key: "projects", label: id ? "Proyek" : "Projects" },
    { key: "contact", label: id ? "Kontak" : "Contact" },
  ];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch { /* Persistence is optional. */ }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-10% 0px -55% 0px", threshold: 0 });
    document.querySelectorAll("[data-portfolio-section]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Persistence is optional. */ }
  }

  return (
    <div className={styles.portfolio} data-theme={theme}>
      <a className={styles.skip} href="#content">{id ? "Langsung ke konten" : "Skip to content"}</a>
      <div className={styles.shell}>
        <header className={styles.sidebar}>
          <div className={styles.topline}>
            <a className={styles.wordmark} href="#about" aria-label="Ardian">a<span>.</span></a>
            <div className={styles.settings}>
              <button onClick={() => setLocale(id ? "en" : "id")} aria-label={id ? "Switch to English" : "Ganti ke bahasa Indonesia"}>{id ? "ID" : "EN"}</button>
              <span aria-hidden="true" className={styles.divider} />
              <button onClick={toggleTheme} aria-label={id ? "Ganti tema warna" : "Switch color theme"} aria-pressed={theme === "light"}>{theme === "dark" ? (id ? "Terang" : "Light") : (id ? "Gelap" : "Dark")}</button>
            </div>
          </div>
          <div className={styles.identity}>
            <p className={styles.eyebrow}>{personal.location}</p>
            <h1>{personal.name}<span>.</span></h1>
            <p className={styles.role}>Software Engineer</p>
            <p className={styles.intro}>{id ? "Membangun aplikasi web dan mobile, dari ide hingga antarmuka yang bisa digunakan." : "Building web and mobile applications, from the first idea to the interface you use."}</p>
          </div>
          <nav className={styles.navigation} aria-label={id ? "Navigasi utama" : "Main navigation"}>
            {sections.map((section, index) => <a key={section.key} href={`#${section.key}`} aria-current={active === section.key ? "location" : undefined}><span className={styles.navNumber}>0{index + 1}</span><span className={styles.navLine} aria-hidden="true" /><span>{section.label}</span></a>)}
          </nav>
          <div className={styles.profileBottom}>
            <div className={styles.portrait}>
              <Image src="/image/foto2.png" alt={t("home.profileAlt")} width={72} height={88} priority />
              <div><span>{id ? "Di balik kode" : "Behind the code"}</span><p>{id ? "Ardian, dari Aceh." : "Ardian, from Aceh."}</p></div>
            </div>
            <div className={styles.socials}>
              <a href={personal.social.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={personal.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${personal.email}`}>Email</a>
            </div>
          </div>
        </header>
        <main id="content" className={styles.content}>
          <section id="about" data-portfolio-section className={styles.section}>
            <h2 className={styles.sectionHeading}><span>01</span>{id ? "Tentang saya" : "A little about me"}</h2>
            <p className={styles.lead}>{id ? "Saya suka mengubah kebutuhan sehari-hari menjadi software yang berguna." : "I like turning everyday needs into useful software."}</p>
            <p>{id ? "Saya Ardian, lulusan Informatika Universitas Syiah Kuala dan software engineer yang berbasis di Aceh, Indonesia. Saya mengembangkan aplikasi web dan mobile, dengan perhatian pada struktur kode dan pengalaman pengguna." : "I'm Ardian, an Informatics graduate from Universitas Syiah Kuala and a software engineer based in Aceh, Indonesia. I develop web and mobile applications with attention to code structure and the user experience."}</p>
            <p>{id ? "Proyek saya mencakup pemesanan tiket feri, pemesanan ruang rapat, deteksi salah eja, dan game mobile untuk tunarungu. Saya bekerja dengan React, Next.js, TypeScript, serta Laravel." : "My projects range from ferry ticketing and meeting-room booking to typo detection and a mobile game for people with hearing impairments. I work with React, Next.js, TypeScript, and Laravel."}</p>
            <div className={styles.skills} aria-label={id ? "Teknologi" : "Technologies"}>{personal.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <a className={styles.resume} href={personal.cv.path} target="_blank" rel="noreferrer">{id ? "Baca resume saya" : "Read my résumé"}<span aria-hidden="true">↗</span></a>
          </section>
          <section id="experience" data-portfolio-section className={styles.section}>
            <h2 className={styles.sectionHeading}><span>02</span>{id ? "Perjalanan saya" : "Where I've been"}</h2>
            <div className={styles.experiences}>{experiences.map((experience) => <article key={experience.company} className={styles.experience}><p className={styles.period}>{experience.period}</p><div><h3>{experience.role[locale]}</h3><p className={styles.company}>{experience.company}</p></div></article>)}</div>
          </section>
          <section id="projects" data-portfolio-section className={styles.section}>
            <h2 className={styles.sectionHeading}><span>03</span>{id ? "Pilihan proyek" : "Selected projects"}</h2>
            <p className={styles.sectionIntro}>{id ? "Beberapa hal yang saya bangun, sendiri maupun bersama tim." : "A few things I've built, independently and with teams."}</p>
            <div className={styles.projects}>{projects.map((project, index) => <article key={project.title} className={styles.project}>
              <div className={styles.projectIndex} aria-hidden="true">0{index + 1}<span /></div>
              <div><h3><a href={project.github_link} target="_blank" rel="noreferrer">{project.title}<span aria-hidden="true">↗</span><span className={styles.srOnly}>{id ? ", buka repositori" : ", open repository"}</span></a></h3><p>{project.description[locale]}</p><ul className={styles.tags} aria-label={id ? "Teknologi proyek" : "Project technologies"}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
            </article>)}</div>
            <a className={styles.textLink} href={personal.social.github} target="_blank" rel="noreferrer">{id ? "Lihat repositori lainnya di GitHub" : "More repositories on GitHub"} <span aria-hidden="true">↗</span></a>
          </section>
          <section id="contact" data-portfolio-section className={`${styles.section} ${styles.contact}`}>
            <h2 className={styles.sectionHeading}><span>04</span>{id ? "Mulai percakapan" : "Start a conversation"}</h2>
            <p className={styles.contactTitle}>{id ? "Ada yang ingin kamu bangun?" : "Have something in mind?"}</p>
            <p>{id ? "Untuk membahas proyek, kolaborasi, atau sekadar bertukar ide tentang software, kirimkan email kepada saya." : "For a project, a collaboration, or a conversation about building software, send me an email."}</p>
            <a className={styles.email} href={`mailto:${personal.email}`}>{personal.email}<span aria-hidden="true">↗</span></a>
          </section>
          <footer className={styles.footer}><span>{personal.name} / {personal.location}</span><a href="#about">{id ? "Kembali ke atas" : "Back to top"} ↑</a></footer>
        </main>
      </div>
    </div>
  );
}
