export default function Footer() {
  return (
    <footer className="border-t border-[#1a2535] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#4a6080]">
          <span className="text-[#00d4ff]">SK</span>
          <span className="text-[#7c3aed]">.</span>
          {"  "}Sakshi Kumari · IIT Patna
        </div>
        <div className="font-mono text-xs text-[#4a6080]">
          Built with Next.js &amp; Tailwind CSS
        </div>
        <div className="font-mono text-xs text-[#4a6080]">
          © {new Date().getFullYear()} · All rights reserved
        </div>
      </div>
    </footer>
  );
}
