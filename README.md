# sakshi-portfolio

> Personal portfolio website for **Sakshi Kumari** — AI/ML Engineering student at IIT Patna.

A production-ready, dark-themed portfolio with animated particle background, typewriter hero, scroll-triggered reveals, and animated skill progress bars. Built to make a strong first impression with hiring managers at top tech companies within the first 5–10 seconds.

---

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (custom design system)
- **Vanilla JS** animations (IntersectionObserver, Canvas API)
- **JetBrains Mono** · **Playfair Display** · **DM Sans**

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Animated particles, typewriter role switcher, key metrics |
| **About** | Bio + stat cards (GPA, LeetCode, projects, achievements) |
| **Projects** | 3 featured ML projects with metrics, stack, and GitHub links |
| **Experience** | Internship at GUVI HCL IITP + education card |
| **Skills** | Animated progress bars across 3 skill groups |
| **Contact** | Email, LinkedIn, GitHub links |

---

## Local Setup

### Prerequisites

- Node.js 18+
- npm 8+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/272006Sakshi/sakshi-portfolio.git
cd sakshi-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
sakshi-portfolio/
├── app/
│   ├── globals.css          # Global styles, animations, CSS variables
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main page assembling all sections
├── components/
│   ├── Navbar.js            # Fixed nav with scroll effect + mobile menu
│   ├── Hero.js              # Particle canvas + typewriter + metrics
│   ├── About.js             # Bio + stat grid cards
│   ├── Projects.js          # Featured ML projects
│   ├── Experience.js        # Internship + education
│   ├── Skills.js            # Animated skill bars + concepts
│   ├── Contact.js           # Contact links
│   └── Footer.js            # Footer
├── public/                  # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Customization

All content lives directly in the component files — no CMS or env variables needed.

- **Colors**: Edit CSS variables in `app/globals.css`
- **Content**: Edit data arrays at the top of each component
- **Fonts**: Update `@import` in `globals.css` and `fontFamily` in `tailwind.config.js`

---

## No environment variables required. Runs fully offline after `npm install`.
