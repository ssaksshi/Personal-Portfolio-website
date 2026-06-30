"use client";
import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    role: "Data Science Intern",
    company: "GUVI HCL IITP Incubation Cell",
    partner: "in collaboration with HCL",
    period: "Jun 2025 – Sep 2025",
    type: "Hybrid · Internship",
    color: "#00d4ff",
    bullets: [
      {
        metric: "30%",
        text: "Improved faculty analytical insights by building a Student Performance Dashboard that visualizes academic trends across cohorts, enabling data-driven curriculum decisions.",
      },
      {
        metric: "~80%",
        text: "Achieved ~80% accuracy on Titanic Survival Prediction using a tuned ML classification pipeline, demonstrating end-to-end predictive analytics from EDA to evaluation.",
      },
      {
        metric: "Live",
        text: "Designed and deployed a scalable House Price Prediction model as an interactive real-time application, applying regression techniques and feature engineering on structured property data.",
      },
    ],
  },
];

const EDUCATION = {
  school: "Indian Institute of Technology, Patna",
  degree: "B.Sc. Computer Science & Data Analytics",
  period: "Aug 2023 – Jul 2027",
  location: "Bihta, Bihar",
  cpi: "7.90",
  spi: "9.25",
};

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 max-w-6xl mx-auto px-6" ref={ref}>
      <div className="fade-in mb-16">
        <div className="section-label mb-4">// experience &amp; education</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e8f4ff]">
          Where I&apos;ve Built
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Experience (2/3 width) */}
        <div className="md:col-span-2 space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.role}
              className="fade-in card-hover bg-[#0e1620] border border-[#1a2535] rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="relative p-8">
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${exp.color}66, transparent)` }}
                />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#e8f4ff]">{exp.role}</h3>
                    <div className="font-mono text-sm mt-1" style={{ color: exp.color }}>
                      {exp.company}
                    </div>
                    <div className="font-mono text-xs text-[#4a6080] mt-0.5">{exp.partner}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xs text-[#c8d8e8]">{exp.period}</div>
                    <div className="font-mono text-xs text-[#4a6080] mt-1">{exp.type}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.bullets.map(({ metric, text }) => (
                    <div key={metric} className="flex gap-4">
                      <div
                        className="flex-shrink-0 font-mono text-sm font-bold w-14 text-right pt-0.5"
                        style={{ color: exp.color }}
                      >
                        {metric}
                      </div>
                      <div className="text-[#4a6080] text-sm leading-relaxed">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education card (1/3 width) */}
        <div className="fade-in" style={{ transitionDelay: "0.2s" }}>
          <div className="card-hover bg-[#0e1620] border border-[#1a2535] rounded-2xl overflow-hidden h-full">
            <div className="relative p-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/60 to-transparent" />

              <div className="font-mono text-xs text-[#7c3aed] mb-4 tracking-wider">EDUCATION</div>

              <div className="mb-4">
                <div className="font-mono text-xs text-[#4a6080] mb-2">
                  {EDUCATION.period}
                </div>
                <h3 className="font-display text-xl font-bold text-[#e8f4ff] leading-tight">
                  {EDUCATION.school}
                </h3>
                <p className="text-[#4a6080] text-sm mt-2">{EDUCATION.degree}</p>
                <p className="font-mono text-xs text-[#4a6080] mt-1">{EDUCATION.location}</p>
              </div>

              <div className="border-t border-[#1a2535] pt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="font-mono text-2xl font-bold text-[#7c3aed]">{EDUCATION.cpi}</div>
                  <div className="font-mono text-xs text-[#4a6080]">Cumulative GPA</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-2xl font-bold text-[#00d4ff]">{EDUCATION.spi}</div>
                  <div className="font-mono text-xs text-[#4a6080]">Semester GPA</div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="font-mono text-xs text-[#4a6080] tracking-wider mb-3">ACHIEVEMENTS</div>
                {[
                  "Sub-Coordinator, CodeRed — IIT Patna's Student Technical Council",
                  "500+ LeetCode problems · Rating 1500+",
                  "Certificate of Achievement, B.A.S.E 7.0 — IIT BHU",
                ].map((a) => (
                  <div key={a} className="flex gap-2 text-xs text-[#4a6080]">
                    <span className="text-[#10b981] flex-shrink-0 mt-0.5">▸</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
