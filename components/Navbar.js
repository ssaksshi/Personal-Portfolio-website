"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Projects", "Experience", "Skills", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080d12]/90 backdrop-blur-md border-b border-[#1a2535]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-sm text-[#00d4ff] tracking-widest hover:opacity-80 transition-opacity">
          SK<span className="text-[#7c3aed]">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs text-[#4a6080] hover:text-[#c8d8e8] transition-colors tracking-wide uppercase"
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:sakshimtp461@gmail.com"
            className="font-mono text-xs px-4 py-2 border border-[#00d4ff]/40 text-[#00d4ff] rounded hover:bg-[#00d4ff]/10 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#c8d8e8] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-px bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-px bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e1620] border-b border-[#1a2535] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs text-[#4a6080] hover:text-[#c8d8e8] transition-colors tracking-wide uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
