# StudyRight — Premium Web Platform

A conversion-focused, brand-harmonized single-page web platform for **StudyRight** (*Study Right Global Web Ltd.*), in strategic collaboration with **Toluwalase Multi Blitz** (*Toluwalase Tricycle Multibliz Limited*).

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons** + **React Icons**.

> **Note on SEO:** Full search engine optimization (including meta description tags, OpenGraph preview cards, Schema.org LocalBusiness structured data, XML sitemap, and robots.txt) will be added after the custom production domain is connected.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Running
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 1. How to Edit Client Content (`src/content.js`)

All client-facing copy, contact details, service offerings, packages, and settings live in **one single file**: [`src/content.js`](file:///c:/StudyRight/src/content.js). Components read from this file and never hardcode text or numbers.

### Key fields to update in `src/content.js`:
- **Phone Numbers**: Edit `phones: ["07068474849", "09047220470", "08141828270"]`
- **WhatsApp Direct Line**: Edit `whatsappNumber: "2347068474849"` (in international format without `+`)
- **Email Address**: Edit `email: "Olaqrightstudy26@gmail.com"`
- **Physical Address**: Fill `address: ""` (renders automatically once filled)
- **Social Media Links**: Fill `socials: { instagram: "", facebook: "", ... }` (renders automatically once filled)
- **Official Accreditations / Licences**: Add items to `licences: []` (CAC, NAHCON, NCAA, etc.)
- **Company Statistics**: Fill `stats: [ { label: "Years of experience", value: "..." }, ... ]`
- **Hajj & Umrah Packages**: Add seasonal packages into `packages: []`. When empty, the system displays a graceful announcement card.
- **Client Testimonials**: Add client reviews to `testimonials: []` (only renders when populated)
- **Frequently Asked Questions**: Add items to `faqs: []` (only renders when populated)

---

## 🎨 2. How to Swap Brand Logos

Both brand assets are stored in the `public/` directory:
1. **StudyRight Logo (Main Brand)**:
   - File path: [`public/studyright-logo.png`](file:///c:/StudyRight/public/studyright-logo.png)
   - Used across: Sticky Header, Footer, Favicon.
   - To replace: Replace `public/studyright-logo.png` with a high-resolution PNG or SVG logo.
2. **Toluwalase Multi Blitz Logo (Partner Brand)**:
   - File path: [`public/toluwalase-logo.png`](file:///c:/StudyRight/public/toluwalase-logo.png)
   - Used across: Partner strip ("In collaboration with") and small in the footer.
   - To replace: Replace `public/toluwalase-logo.png` with your partner banner or logo image.

*Note:* Both logos are housed inside clean white cards/pills so they render with crisp margins and clear space on both light and dark backgrounds.

---

## ⚡ 3. How to Deploy to Vercel

The application is pre-configured for zero-configuration deployment to **Vercel**:

### Option A: Via Vercel CLI (Fastest)
```bash
# Install Vercel CLI globally (if not installed)
npm i -g vercel

# Deploy directly from workspace
vercel
```

### Option B: Via Git (GitHub / GitLab / Bitbucket)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial StudyRight website build"
   ```
2. Push repository to GitHub.
3. Go to [vercel.com/new](https://vercel.com/new), select your repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 📋 4. Client Handover Checklist ("TODO client" Fields)

The following items in [`src/content.js`](file:///c:/StudyRight/src/content.js) are prepared with placeholders and marked for client completion:

| Item | Field in `content.js` | Current Status | Expected Format |
|---|---|---|---|
| **Office Address** | `address` | Empty `""` | e.g. "Suite 12, Commercial Plaza, Lagos, Nigeria" |
| **Social Media** | `socials.instagram` | Empty `""` | Full URL (e.g. `https://instagram.com/studyright`) |
| **Social Media** | `socials.facebook` | Empty `""` | Full URL (e.g. `https://facebook.com/studyright`) |
| **Social Media** | `socials.tiktok` | Empty `""` | Full URL (e.g. `https://tiktok.com/@studyright`) |
| **Social Media** | `socials.youtube` | Empty `""` | Full URL |
| **Accreditations** | `licences` | Empty array `[]` | e.g. `["CAC Registration (RC 123456)", "NAHCON Approved"]` |
| **Experience Stat** | `stats[0].value` | Empty `""` | e.g. `"10+"` years |
| **Clients Served** | `stats[1].value` | Empty `""` | e.g. `"2,500+"` students & pilgrims |
| **Pilgrimage Packages** | `packages` | Empty array `[]` | Object with `name`, `duration`, `dates`, `price`, `hotels`, `airline` |
| **Client Reviews** | `testimonials` | Empty array `[]` | Object with `quote`, `author`, `service` |
| **Client FAQs** | `faqs` | Empty array `[]` | Object with `question`, `answer` |

*All components are engineered to hide empty fields gracefully without breaking layouts or displaying empty blocks.*
