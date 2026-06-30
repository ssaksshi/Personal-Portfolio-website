"use client";
import { useEffect, useRef, useState } from "react";

const TYPEWRITER_STRINGS = [
  "Machine Learning Engineer",
  "Data Scientist",
  "NLP Practitioner",
  "Problem Solver",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = TYPEWRITER_STRINGS[stringIndex];
    const delay = deleting ? 40 : charIndex === current.length ? 1800 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setStringIndex((s) => (s + 1) % TYPEWRITER_STRINGS.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, stringIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Orbs */}
      <div
        className="hero-orb w-96 h-96 opacity-10"
        style={{
          background: "radial-gradient(circle, #00d4ff, transparent 70%)",
          top: "10%",
          right: "5%",
        }}
      />
      <div
        className="hero-orb w-72 h-72 opacity-8"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          bottom: "15%",
          left: "8%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="section-label mb-6 opacity-0 animate-[fadeUp_0.6s_0.1s_ease_forwards]">
          IIT Patna · CS &amp; Data Analytics
        </div>

        <h1
          className="font-display text-6xl md:text-8xl font-black text-[#e8f4ff] mb-4 leading-none opacity-0 animate-[fadeUp_0.6s_0.3s_ease_forwards]"
        >
          Sakshi
          <span className="block shimmer-text">Kumari</span>
        </h1>

        <div className="font-mono text-lg md:text-xl text-[#4a6080] mb-8 h-8 opacity-0 animate-[fadeUp_0.6s_0.5s_ease_forwards]">
          <span className="text-[#00d4ff]">&gt;</span>{" "}
          <span className="text-[#c8d8e8]">{displayText}</span>
          <span className="cursor-blink text-[#00d4ff]">_</span>
        </div>

        <p className="text-[#4a6080] text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-[fadeUp_0.6s_0.7s_ease_forwards]">
          Building intelligent systems that turn messy data into measurable impact.
          From predictive models to NLP pipelines — I ship ML that works in the real world.
        </p>

        {/* Metric Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-[fadeUp_0.6s_0.9s_ease_forwards]">
          {[
            { value: "500+", label: "LeetCode Solved" },
            { value: "1500+", label: "LeetCode Rating" },
            { value: "9.25", label: "Semester GPA" },
            { value: "92%", label: "Best Model Acc." },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="metric-card bg-[#0e1620] border border-[#1a2535] rounded-lg px-5 py-3 text-center"
            >
              <div className="font-mono text-xl font-bold text-[#00d4ff]">{value}</div>
              <div className="font-mono text-xs text-[#4a6080] mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeUp_0.6s_1.1s_ease_forwards]">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#00d4ff] text-[#080d12] font-mono text-sm font-bold rounded hover:bg-[#00d4ff]/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all"
          >
            View My Work
          </a>
          <a
            href="mailto:sakshimtp461@gmail.com"
            className="px-8 py-3 border border-[#1a2535] text-[#c8d8e8] font-mono text-sm rounded hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="font-mono text-xs text-[#4a6080] tracking-widest">SCROLL</div>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4ff] to-transparent" />
      </div>
    </section>
  );
}
