"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll(".fade-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div className="fade-in">
          <div className="section-label mb-4">// about me</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e8f4ff] mb-6 leading-tight">
            Turning Data Into
            <span className="block text-[#00d4ff]">Decisions</span>
          </h2>
          <div className="space-y-4 text-[#4a6080] leading-relaxed">
            <p>
              I&apos;m a Computer Science &amp; Data Analytics student at{" "}
              <span className="text-[#c8d8e8]">IIT Patna</span>, deeply invested in the intersection of
              machine learning and real-world problem-solving. My work spans classification models,
              regression systems, NLP pipelines, and interactive ML applications.
            </p>
            <p>
              I don&apos;t just build models — I deploy them. Whether it&apos;s a Streamlit dashboard
              shipped to end users or a Naive Bayes classifier hitting 92% accuracy, I care about
              the full pipeline from raw data to measurable outcome.
            </p>
            <p>
              Outside of ML, I&apos;m a consistent competitive programmer with 500+ LeetCode problems
              solved and an active contributor to IIT Patna&apos;s technical community as Sub-Coordinator
              of CodeRed.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Python", "Machine Learning", "NLP", "Scikit-learn", "Streamlit", "C++"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: stat card grid */}
        <div className="fade-in grid grid-cols-2 gap-4" style={{ transitionDelay: "0.2s" }}>
          {[
            {
              icon: "🎓",
              title: "IIT Patna",
              sub: "B.Sc. CS & Data Analytics",
              detail: "CPI: 7.90 · SPI: 9.25",
              color: "#00d4ff",
            },
            {
              icon: "⚡",
              title: "500+ Problems",
              sub: "LeetCode",
              detail: "Rating: 1500+",
              color: "#10b981",
            },
            {
              icon: "🤖",
              title: "ML Models",
              sub: "Deployed & in Production",
              detail: "3 live projects",
              color: "#7c3aed",
            },
            {
              icon: "🏆",
              title: "B.A.S.E 7.0",
              sub: "Certificate of Achievement",
              detail: "IIT BHU Business Club",
              color: "#f59e0b",
            },
          ].map(({ icon, title, sub, detail, color }) => (
            <div
              key={title}
              className="card-hover bg-[#0e1620] border border-[#1a2535] rounded-xl p-5 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
              <div className="text-2xl mb-3">{icon}</div>
              <div className="font-mono text-sm font-bold" style={{ color }}>
                {title}
              </div>
              <div className="text-[#c8d8e8] text-xs mt-1">{sub}</div>
              <div className="font-mono text-xs text-[#4a6080] mt-1">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
