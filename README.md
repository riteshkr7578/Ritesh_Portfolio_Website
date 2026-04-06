# 🚀 Ritesh's Portfolio

A modern, fully responsive personal portfolio website built with **React 18 + Vite**. Showcasing projects, technical skills, resume, and ways to get in touch.

🌐 **Live Demo**: [https://ritesh-dev-portfolio.vercel.app/](https://ritesh-dev-portfolio.vercel.app/)

---

## ✨ Features

- **⚡ Lightning Fast** - Built with Vite for instant dev server and optimized production builds
- **🎨 Dark/Light Theme** - Toggle between themes with persistent localStorage
- **📖 Multi-Page Layout** - Home, About, Projects, Resume, Contact, and Experience sections
- **📱 Fully Responsive** - Mobile-first design with Bootstrap 5 and custom CSS
- **🎭 Smooth Animations** - Parallax effects, typewriter effect, particle background, and transitions
- **📨 Contact Form** - EmailJS integration for direct messaging
- **📄 Resume Download** - PDF display and download capability
- **📊 GitHub Integration** - Embedded GitHub calendar and project showcase
- **🔍 SEO Optimized** - Meta tags and structured markup

---

## 🛠 Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite 5.0** - Build tool and dev server (migrated from Create React App)
- **React Router v6** - Client-side routing
- **React Bootstrap** - UI component library
- **CSS3** - Custom styling and animations

### Libraries & Tools
- **@emailjs/browser** - Email service integration
- **@react-pdf/renderer** - PDF generation
- **react-parallax-tilt** - 3D tilt effects
- **react-tsparticles** - Animated particle background
- **typewriter-effect** - Typing animation
- **react-icons** - Icon library
- **axios** - HTTP requests
- **react-toastify** - Toast notifications
- **react-github-calendar** - GitHub contribution calendar

### Deployment
- **Vercel** - Hosting and continuous deployment

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn**
- **Git**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

*Note: `--legacy-peer-deps` is needed due to peer dependency conflicts with @react-pdf/renderer*

### 3. Environment Setup

No environment variables required for local development.

---

## 📖 Available Scripts

### Development Server
```bash
npm run dev
```
Starts Vite dev server in development mode with Hot Module Replacement (HMR).\
Open [http://localhost:5173](http://localhost:5173) in your browser (port may vary if 5173 is in use).

### Production Build
```bash
npm run build
```
Builds the app for production to the `dist/` folder.\
- Output is optimized for best performance
- Build is minified and filenames include hashes

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deploying.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Home/              # Home page & intro section
│   ├── About/             # About me, tech stack, tools
│   ├── Projects/          # Project showcase & cards
│   ├── Resume/            # Resume display & download
│   ├── Contact.jsx        # Contact form with EmailJS
│   ├── Navbar.jsx         # Navigation & theme toggle
│   ├── Footer.jsx         # Footer section
│   ├── Experience.jsx     # Work experience
│   ├── Particle.jsx       # Animated background
│   ├── Pre.jsx            # Preloader component
│   └── ScrollToTop.jsx    # Auto-scroll on route change
├── Assets/                # Images, icons, projects
├── App.jsx                # Main app component & routing
├── ThemeContext.jsx       # Dark/Light theme context
├── main.jsx               # React entry point
├── index.css              # Global styles
├── style.css              # Custom animations & utilities
└── App.css                # App-specific styles

public/
├── index.html             # HTML template
├── favicon.webp           # Favicon
├── manifest.json          # PWA manifest
└── robots.txt             # SEO robots file

dist/                       # Production build output (generated)
vite.config.js            # Vite configuration
package.json              # Project metadata & dependencies
README.md                 # This file
```

---

## ⚙️ Configuration

### Vite Config (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Theme Customization

Edit `src/ThemeContext.jsx` to change theme logic or modify `src/style.css` for colors:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... more variables */
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Vite and builds your project
4. Your site is live!

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

---

## 🔄 Migration Notes

This portfolio was recently migrated from **Create React App to Vite** for:
- ⚡ Faster development server startup
- 🚀 Improved build performance
- 📦 Better module resolution
- 🔄 True ES modules support

**Changes made:**
- Renamed `.js` component files to `.jsx` for JSX syntax
- Added `index.html` to project root (Vite requirement)
- Updated build scripts in `package.json`
- Installed `@vitejs/plugin-react` for Fast Refresh support

---

## 📧 Contact & Social

- **Email**: routchpriy@gmail.com (via portfolio contact form)
- **GitHub**: [GitHub Profile](https://github.com)
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com)

---

## 📄 License

This project is open source and available under the MIT License.

---

## ✍️ Author

**Ritesh** - Full Stack MERN Developer

*Self-developed personal website to showcase projects and skills.*

---

## 🙏 Acknowledgments

- React.js documentation
- Vite documentation
- Bootstrap for styling utilities
- All open-source libraries used in this project

