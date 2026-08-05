# Hafizh's Portfolio 🚀

> Modern, interactive single-page portfolio built with React, Tailwind CSS, and Framer Motion. Features live GitHub data integration, dark/light mode, and animated background particles.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.x-0056FF?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-007BFF)](LICENSE)

## 🌟 Features

- **Live GitHub Data** - Fetches profile & repositories dynamically from GitHub API
- **Particle Background** - Interactive `tsparticles` engine with mouse interaction
- **Glassmorphism UI** - Modern frosted glass effect on cards and navigation
- **Instant Animations** - Snappy hover effects (`duration-100`) for maximum responsiveness
- **Dark/Light Mode** - Persistent theme preference with smooth transitions
- **Responsive Design** - Mobile-first layout with optimal viewing on all devices
- **Zero-Config** - Works out of the box with no additional setup required

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Framework    | React 19 + Vite 8              |
| Styling      | Tailwind CSS 4 (native)        |
| Animations   | Framer Motion 12.x             |
| Particles    | `@tsparticles/react` + `tsparticles` |
| Icons        | Lucide React                   |
| Data         | GitHub REST API + gh-pinned-repos |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/hapis1703/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── components/             # Reusable UI components
│   ├── Navbar.jsx         # Sticky navigation with theme toggle
│   ├── Hero.jsx           # Dynamic hero section with GitHub avatar
│   ├── Skills.jsx         # Tech stack display with stagger animations
│   ├── Projects.jsx       # GitHub repositories showcase (pinned + recent)
│   ├── About.jsx          # Personal info and hobbies
│   ├── Contact.jsx        # Contact form with social links
│   └── ParticleBackground.jsx  # Animated particle system
└── utils/
    └── api.js             # GitHub API integration utilities
```

## 🎨 Design System

### Color Palette (Dark Mode)
- **Background:** `zinc-950` / `slate-950`
- **Primary Accent:** `cyan-400` / `cyan-500`
- **Secondary Accent:** `purple-400` / `purple-500`
- **Cards:** `zinc-900/30` with backdrop-blur

### Color Palette (Light Mode)
- **Background:** `slate-50` (off-white)
- **Primary Accent:** `cyan-600`
- **Secondary Accent:** `purple-600`
- **Cards:** `white/60` with backdrop-blur

## 🔌 GitHub API Endpoints Used

- **Profile:** `https://api.github.com/users/hapis1703`
- **Pinned Repos:** `https://gh-pinned-repos.egoist.dev/?username=hapis1703`
- **Recent Repos:** `https://api.github.com/users/hapis1703/repos?sort=updated&per_page=6`

## 🎯 Key Components

### Particle Background
- Interactive particle system with 60+ floating orbs
- Links form between particles when hovered
- Click to spawn additional particles
- Works in both light and dark modes

### Glassmorphism Cards
- All content cards use `backdrop-blur-md` with semi-transparent backgrounds
- Hover effects include scale and y-axis lift
- Border colors shift on hover to indicate interactivity

### Animations
- **Entry:** `framer-motion` `whileInView` with stagger delays
- **Hover:** `duration: 0.1` for instant response
- **No delays** on any interactive elements

## 📱 Responsive Breakpoints

| Device     | Max Width | Layout         |
|------------|-----------|----------------|
| Mobile     | 768px     | Single column  |
| Tablet     | 1024px    | 2-column grid  |
| Desktop    | 1280px+   | Optimal viewing |

## 🎨 Customization

### Change Theme Colors

Edit `src/components/ParticleBackground.jsx`:

```javascript
color: {
  value: theme === 'dark' ? '#22d3ee' : '#0891b2',  // Cyan
},
links: {
  color: theme === 'dark' ? '#c084fc' : '#7c3aed',  // Purple
}
```

### Update GitHub Username

Edit `src/utils/api.js`:

```javascript
const GITHUB_USERNAME = 'your-username';
```

## 🚀 Performance

- **Bundle Size:** ~480 KB (optimized with Vite)
- **First Contentful Paint:** < 1.5s
- **Total Blocking Time:** < 100ms
- **LCP:** Optimized with lazy loading and code splitting

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Credits

- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [tsparticles](https://particles.js.org/) - Particle background engine
- [Lucide React](https://lucide.dev/) - Icon library

---

**Built with ❤️ by [Hafizh](https://github.com/hapis1703)**
