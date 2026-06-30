import "./globals.css";

export const metadata = {
  title: "Sakshi Kumari — AI/ML Engineer",
  description:
    "Portfolio of Sakshi Kumari, AI/ML Engineering student at IIT Patna. Specializing in machine learning, NLP, and data science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
