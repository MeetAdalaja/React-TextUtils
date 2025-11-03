# React TextUtils — Fast Text Utilities for the Browser

A lightweight, **React-based** text toolbox for quick edits and analysis — convert case,
trim/normalize whitespace, copy to clipboard, and see **word/character counts** with an
estimated **reading time**. Built for speed and accessibility.

[![Last commit](https://img.shields.io/github/last-commit/MeetAdalaja/React-TextUtils)](https://github.com/MeetAdalaja/React-TextUtils/commits/main)
[![Repo size](https://img.shields.io/github/repo-size/MeetAdalaja/React-TextUtils)](https://github.com/MeetAdalaja/React-TextUtils)
[![Open issues](https://img.shields.io/github/issues/MeetAdalaja/React-TextUtils)](https://github.com/MeetAdalaja/React-TextUtils/issues)
![Built with](https://img.shields.io/badge/built%20with-React-61DAFB)

---

## ✨ Features

- 🔠 **Case tools:** UPPERCASE, lowercase, **Title Case**, **Sentence case**
- 🧹 **Whitespace tools:** trim ends, remove extra spaces, collapse newlines
- ✂️ **Editing:** clear text, copy to clipboard, select all
- 📊 **Stats:** word & character counts, average reading time
- 🎨 **Theme:** light/dark toggle (optional) with accessible contrast
- ⌨️ **Keyboard-friendly:** focus states and shortcuts for common actions
- 🚫 **No tracking:** runs entirely in the browser

> If your repo includes only a subset of these tools, keep what you use and remove the rest of this list.

---

## 🖥️ Live Demo

> _Add your deployment URL here (e.g., Vercel/Netlify/GitHub Pages) once deployed._

---

## 🗂️ Project Structure (typical)

```text
React-TextUtils/
├─ public/                   # static assets
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx         # theme + navigation
│  │  ├─ TextForm.jsx       # textarea + action buttons
│  │  └─ Footer.jsx
│  ├─ App.jsx               # routes/layout
│  ├─ index.css
│  └─ main.jsx / index.js   # React entry
├─ package.json
└─ README.md
```

> Your file names may differ (e.g., `App.js`, `index.js`). Adjust imports accordingly.

---

## ⚙️ Local Development

### 1) Clone & install
```bash
git clone https://github.com/MeetAdalaja/React-TextUtils.git
cd React-TextUtils
npm install   # or: yarn
```

### 2) Run the dev server
Depending on your setup:
```bash
# Vite projects:
npm run dev

# Create React App projects:
npm start
```

### 3) Build for production
```bash
npm run build
# Vite preview (optional)
npm run preview
```

> If unsure whether this is Vite or CRA, check `package.json` scripts.  
> Vite typically has `dev`, `build`, `preview`. CRA uses `start`, `build`, `test`, `eject`.

---

## 🔧 Configuration

- **Base title/brand:** edit `Navbar.jsx` (or the header component)
- **Theme toggle:** ensure a body class or CSS variables flip on toggle
- **Reading-time calc:** tweak words-per-minute (WPM) constant to your preference
- **Clipboard API:** uses `navigator.clipboard.writeText` (requires secure context in some browsers)

---

## 🧪 Testing (optional)

Add tests with your preferred stack:
```bash
# if using Vitest or Jest (example)
npm run test
```

---

## ☁️ Deployment

**Vercel/Netlify (recommended)**
1. Import your GitHub repo
2. Build command: `npm run build`
3. Output dir:
   - Vite → `dist`
   - CRA → `build`
4. Set **Node** version if needed (Project Settings → Node)

**GitHub Pages (Vite)**
```json
// vite.config.js
export default { base: "/React-TextUtils/" }
```
Then:
```bash
npm run build
# deploy /dist to gh-pages (use your preferred gh-pages tool)
```

---

## 🧭 Roadmap

- [ ] Add **WPM selector** and per-locale word counting
- [ ] Add **find & replace** and **deduplicate lines**
- [ ] Add **PWA** support for offline use
- [ ] Keyboard shortcuts for all actions
- [ ] Unit tests for helpers

---

## 🐞 Troubleshooting

- **Clipboard errors:** run over HTTPS or `localhost`; user interaction may be required
- **Word count seems off:** normalize whitespace and split on `\s+`; consider locale rules
- **Build fails:** delete `node_modules` and lockfile; `npm ci` or `npm install` again

---

## 📄 License

Add a `LICENSE` file (e.g., MIT) if you want to open‑source this project.  
Without a license, the default is “all rights reserved.”

---

## 🙏 Credits

Built with **React**. Starter layout inspired by common TextUtils demos and refined for accessibility.
