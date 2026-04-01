# Omkar Yadav — Portfolio

Personal portfolio website built with **React + Vite**.

## Project Structure

```
omkar-portfolio/
├── public/
│   ├── favicon.svg        ← OY browser tab icon
│   └── avatar.png         ← ADD YOUR AVATAR IMAGE HERE
├── src/
│   ├── components/
│   │   ├── data.js        ← ✏️ Edit ALL your content here
│   │   └── Portfolio.jsx  ← Main component
│   ├── App.jsx
│   ├── index.css          ← Global styles & animations
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → opens at http://localhost:5173

# Build for production
npm run build
```

## Adding Your Avatar

1. Save your avatar image as `avatar.png`
2. Place it inside the `public/` folder
3. It will automatically appear in the hero section

## Customising Content

Open `src/components/data.js` and edit:
- `PERSONAL` — name, email, phone, location, social links, bio
- `EDUCATION` — degrees and institutions
- `PROJECTS` — add/edit projects and update `link` with live URLs
- `SKILLS` — skill names and percentages

## Deployment (Netlify)

```bash
# Build
npm run build

# Push to GitHub then connect repo on netlify.com
# Build command: npm run build
# Publish directory: dist
```
