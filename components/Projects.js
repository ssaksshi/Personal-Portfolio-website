"use client";
import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    id: "01",
    featured: true,
    title: "Smart Club Classifier & Recommender",
    tagline: "Personalized event discovery powered by NLP classification",
    description:
      "An interactive Streamlit application that classifies college events (Tech, Cultural, Sports, Academic) and recommends relevant opportunities to students using a Naive Bayes pipeline. Drove a 20% lift in student event engagement through personalized, context-aware suggestions.",
    metrics: [
      { value: "20%", label: "Engagement Lift" },
      { value: "5+", label: "Event Categories" },
    ],
    stack: ["Python", "Streamlit", "Scikit-learn", "Naive Bayes", "Pandas"],
    color: "#00d4ff",
    github: "https://github.com/272006Sakshi",
    period: "Apr–May 2025",
  },
  {
    id: "02",
    featured: true,
    title: "Email Spam Detection Engine",
    tagline: "92% accuracy Multinomial Naive Bayes classifier",
    description:
      "A text classification system built to distinguish spam from legitimate email with high precision. Implemented end-to-end: raw text ingestion → preprocessing (tokenization, stopword removal) → TF-IDF feature extraction → Multinomial Naive Bayes training and evaluation.",
    metrics: [
      { value: "92%", label: "Classification Accuracy" },
      { value: "~5K", label: "Training Samples" },
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "NLP", "TF-IDF"],
    color: "#10b981",
    github: "https://github.com/272006Sakshi",
    period: "Nov 2024",
  },
  {
    id: "03",
    featured: true,
    title: "Flight Ticket Price Predictor",
    tagline: "Random Forest regression with feature-engineered flight data",
    description:
      "Engineered a robust price prediction model for flight tickets using Random Forest. Performed extensive feature engineering on temporal, categorical, and route-based attributes. Evaluated using MAE, MSE, and RMSE to ensure production-grade reliability.",
    metrics: [
      { value: "RF", label: "Algorithm" },
      { value: "MAE/RMSE", label: "Evaluation Metrics" },
    ],
    stack: ["Python", "Pandas", "NumPy", "Random Forest", "Scikit-learn"],
    color: "#7c3aed",
    github: "https://github.com/272006Sakshi",
    period: "Sept 2025",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-28 bg-[#0a0f17]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <div className="section-label mb-4">// featured work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e8f4ff]">
            Projects That Ship
          </h2>
          <p className="text-[#4a6080] mt-4 max-w-xl mx-auto text-sm">
            Each project is deployed, evaluated, and built to solve a specific real-world problem.
          </p>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="fade-in card-hover bg-[#0e1620] border border-[#1a2535] rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="relative p-8 md:p-10">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.color}66, transparent)` }}
                />

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Project number */}
                  <div
                    className="font-mono text-5xl font-black leading-none flex-shrink-0"
                    style={{ color: `${project.color}18` }}
                  >
                    {project.id}
                  </div>

                  {/* Main content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs" style={{ color: project.color }}>
                        {project.period}
                      </span>
                      {project.featured && (
                        <span className="font-mono text-xs px-2 py-0.5 rounded-sm border"
                          style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}10` }}>
                          FEATURED
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[#e8f4ff] mb-1">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm mb-4" style={{ color: project.color }}>
                      {project.tagline}
                    </p>
                    <p className="text-[#4a6080] text-sm leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.metrics.map(({ value, label }) => (
                        <div key={label} className="text-center">
                          <div className="font-mono text-2xl font-bold" style={{ color: project.color }}>
                            {value}
                          </div>
                          <div className="font-mono text-xs text-[#4a6080]">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 font-mono text-xs border border-[#1a2535] px-4 py-2 rounded hover:border-[#00d4ff]/40 hover:text-[#00d4ff] text-[#4a6080] transition-all self-start"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
