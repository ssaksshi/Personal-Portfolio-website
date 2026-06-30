"use client";
import { useEffect, useRef } from "react";

const SKILL_GROUPS = [
  {
    label: "Languages & Tools",
    color: "#00d4ff",
    skills: [
      { name: "Python", level: 92 },
      { name: "C++", level: 78 },
      { name: "SQL", level: 72 },
      { name: "Git / GitHub", level: 82 },
    ],
  },
  {
    label: "ML / Data Science",
    color: "#7c3aed",
    skills: [
      { name: "Scikit-learn", level: 88 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "NLP & Text Processing", level: 78 },
    ],
  },
  {
    label: "Deployment & Infra",
    color: "#10b981",
    skills: [
      { name: "Streamlit", level: 82 },
      { name: "Jupyter / Colab", level: 90 },
      { name: "Matplotlib / Viz", level: 80 },
      { name: "AI Tools & Prompt Eng.", level: 85 },
    ],
  },
];

const CORE_CONCEPTS = [
  "Data Structures & Algorithms",
  "Probability & Statistics",
  "Linear Algebra",
  "Object-Oriented Programming",
  "Feature Engineering",
  "Model Evaluation & Tuning",
  "Text Classification",
  "Regression Analysis",
  "Exploratory Data Analysis",
  "Predictive Modeling",
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            // Animate progress bars
            e.target.querySelectorAll(".progress-fill").forEach((bar) => {
              bar.classList.add("animate");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 bg-[#0a0f17]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in mb-16">
          <div className="section-label mb-4">// technical skills</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e8f4ff]">
            My Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.label}
              className="fade-in card-hover bg-[#0e1620] border border-[#1a2535] rounded-2xl p-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.color}80, transparent)` }}
                />
              </div>

              <div className="font-mono text-xs tracking-widest mb-6" style={{ color: group.color }}>
                {group.label.toUpperCase()}
              </div>

              <div className="space-y-5">
                {group.skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[#c8d8e8] text-sm">{name}</span>
                      <span className="font-mono text-xs" style={{ color: group.color }}>
                        {level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          "--target-width": `${level}%`,
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}aa)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core concepts */}
        <div className="fade-in" style={{ transitionDelay: "0.3s" }}>
          <div className="font-mono text-xs text-[#4a6080] tracking-widest mb-4">CORE KNOWLEDGE AREAS</div>
          <div className="flex flex-wrap gap-2">
            {CORE_CONCEPTS.map((concept) => (
              <span key={concept} className="tag tag-purple">{concept}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
