# Hafizh's Portfolio 🚀

> Modern, interactive portfolio built with React 19, Vite, Tailwind CSS, and Framer Motion. Features multi-page routing, 6 color themes with dark/light mode, live GitHub data integration, a contact form that forwards to Discord, animated particle background, and a QRIS donation page.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.x-0056FF?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![License](https://img.shields.io/badge/License-MIT-007BFF)](LICENSE)

## 🌟 Features

- **Multi-Page Routing** - Separate pages for Home, Skills, Projects, About, Contact, and Donate (React Router 7)
- **Theme System** - 6 switchable color themes (Modern, Vintage, Neon, Ocean, Forest, Sunset) with dark/light mode, persisted in `localStorage`
- **Live GitHub Data** - Fetches profile, pinned & recent repositories dynamically from the GitHub API
- **Contact Form** - Sends messages directly to your Discord server via webhook
- **QRIS Donation** - Buy-me-a-coffee style donation page using the BuatQris API with real payment status checking
- **Particle Background** - Interactive `tsparticles` engine with mouse interaction
- **Glassmorphism UI** - Modern frosted glass effect on cards and navigation
- **Snappy Animations** - Instant hover effects (`duration-100`) for maximum responsiveness
- **Responsive Design** - Mobile-first layout with an off-canvas mobile menu

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Framework    | React 19 + Vite 8              |
| Routing      | React Router 7                 |
| Styling      | Tailwind CSS 4 (native)        |
| Animations   | Framer Motion 12.x             |
| Particles    | `@tsparticles/react` + `tsparticles` |
| Icons        | Lucide React                   |
| Data         | GitHub REST API + gh-pinned-repos |
| Payments     | BuatQris API (QRIS)            |
| Chat         | Discord Webhooks               |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/hapis1703/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create env file (see Configuration below)
cp .env.example .env

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## ⚙️ Configuration

Create a `.env` file in the project root with the following variables:

```dotenv
VITE_DISCORD_WEBHOOK="your_discord_webhook_url"
VITE_BUATQRIS_ACCOUNT_ID="your_buatqris_account_id"
VITE_BUATQRIS_SECRET_TOKEN="your_buatqris_secret_token"
```

> **⚠️ Security note:** `VITE_`-prefixed variables are inlined into the client bundle at build time and are visible to anyone viewing the page source. The Discord webhook and BuatQris secret token are sent directly from the browser. For production, consider proxying these calls through a small backend / serverless function so secrets are never exposed to the client.

## 📁 Project Structure

```
src/
├── App.jsx                 # Main app: router, theme state, particle background
├── main.jsx                # Entry point
├── themes.js               # 6 color themes (dark + light) + getThemeColors()
├── pages/                  # Route pages
│   ├── HomePage.jsx       # Hero with GitHub avatar & bio
│   ├── SkillsPage.jsx     # Tech stack display
│   ├── ProjectsPage.jsx   # Pinned + recent GitHub repos
│   ├── AboutPage.jsx      # Personal info
│   ├── ContactPage.jsx    # Contact form → Discord webhook
│   └── DonatePage.jsx     # QRIS donation + payment status modal
├── components/             # Reusable UI components
│   ├── Navbar.jsx         # Sticky nav, theme palette, dark/light toggle
│   ├── Hero.jsx           # Hero section with GitHub avatar
│   ├── Skills.jsx         # Skills section
│   ├── Projects.jsx       # Projects section
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact section
│   ├── AnimatedBackground.jsx  # Animated background
│   └── ParticleBackground.jsx  # Animated particle system
└── utils/
    └── api.js             # All API/webhook calls (GitHub, Discord, BuatQris)
```

## 🎨 Design System

### Theme System

Six themes are available, each with a dedicated dark and light palette:

| Theme    | Dark BG      | Primary       | Gradient               |
|----------|--------------|---------------|------------------------|
| Modern   | `slate-950`  | cyan `400/600`| cyan → purple          |
| Vintage  | `amber-950`  | amber `400/700`| amber → orange        |
| Neon     | `black`      | fuchsia `500/600`| fuchsia → lime      |
| Ocean    | `blue-950`   | blue `400/600`| blue → teal            |
| Forest   | `emerald-950`| emerald `400/600`| emerald → green    |
| Sunset   | `rose-950`   | rose `400/600`| rose → pink            |

- Theme + dark/light preference are stored in `localStorage`
- Switch themes from the palette button in the navbar
- See `src/themes.js` to add or edit themes

## 🔌 API Endpoints Used

- **GitHub Profile:** `https://api.github.com/users/hapis1703`
- **Pinned Repos:** `https://gh-pinned-repos.egoist.dev/?username=hapis1703`
- **Recent Repos:** `https://api.github.com/users/hapis1703/repos?sort=updated&per_page=6`
- **Discord Webhook:** `POST` to your configured `VITE_DISCORD_WEBHOOK` with a JSON content payload
- **BuatQris API:** `POST https://api.buatqris.site` with `action=api_create_qris` / `action=api_check_status`

All third-party calls live in `src/utils/api.js`:
- `fetchGitHubProfile()`
- `fetchPinnedRepos()`
- `fetchRecentRepos()`
- `sendDiscordMessage(name, email, message)`
- `createQRIS(amount)`
- `checkQRISStatus(transactionId)`

## 📱 Pages

| Route     | Description                                    |
|-----------|------------------------------------------------|
| `/`       | Hero with GitHub avatar, bio & CTA buttons     |
| `/skills` | Tech stack & skills showcase                   |
| `/projects` | Pinned + recent repositories from GitHub     |
| `/about`  | About the developer                            |
| `/contact`| Contact form (sends to Discord) + social links |
| `/donate` | QRIS donation with live payment status check   |

## 🎨 Customization

### Change GitHub Username

Edit `src/utils/api.js`:

```javascript
const GITHUB_USERNAME = 'your-username';
```

### Add or Modify Themes

Edit `src/themes.js` and follow the existing theme structure:

```javascript
export const themes = {
  yourTheme: {
    name: 'Your Theme',
    dark: { bg: 'bg-...', primary: '...', ... },
    light: { bg: 'bg-...', primary: '...', ... },
  },
};
```

## 🚀 Performance

- **Bundle Size:** Optimized with Vite code splitting
- **Lazy Loading:** Route-level code splitting via page components
- **Instant Interactions:** All hover/click animations use `duration-100`

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Credits

- [React](https://react.dev) / [Vite](https://vite.dev) - Framework & build tool
- [React Router](https://reactrouter.com) - Routing
- [Framer Motion](https://www.framer.com/motion) - Animation library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [tsparticles](https://particles.js.org/) - Particle background engine
- [Lucide React](https://lucide.dev/) - Icon library
- [BuatQris](https://buatqris.site) - QRIS payment API

---

**Built with ❤️ by [Hafizh](https://github.com/hapis1703)**