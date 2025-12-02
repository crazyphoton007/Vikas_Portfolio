import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { links } from "../data";

const navLinkClasses =
  "text-sm transition-colors duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:bg-clip-text hover:text-transparent";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/60 border-b border-zinc-800">
      <div className="container-xxl flex items-center justify-between h-16">
        <a href="#home" className="font-semibold tracking-wide">
          Vikas Shukla
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className={navLinkClasses}>
            About
          </a>
          <a href="#experience" className={navLinkClasses}>
            Experience
          </a>
          <a href="#projects" className={navLinkClasses}>
            Projects
          </a>
          <a href="#skills" className={navLinkClasses}>
            Skills
          </a>
          <a href="#education" className={navLinkClasses}>
            Education
          </a>
          <a href="#contact" className={navLinkClasses}>
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="btn transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black"
            href={`mailto:${links.email}`}
          >
            <Mail size={18} /> Email
          </a>
          <a
            className="btn transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            className="btn transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black"
            href={links.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
