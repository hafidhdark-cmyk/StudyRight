# StudyRight — Official Web Platform

A conversion-focused, brand-harmonized single-page web platform for **StudyRight** (*Study Right Global Web Limited*), in strategic collaboration with **Toluwalase Multi Blitz** (*Toluwalase Tricycle Multibliz Limited*).

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons** + **React Icons**.

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

## 📝 1. Content Management (`src/content.js`)

All client-facing copy, contact information, service offerings, packages, and settings live in **one single file**: [`src/content.js`](file:///c:/StudyRight/src/content.js). Components read from this file and never hardcode text or numbers.

### Key fields in `src/content.js`:
- **Legal Name**: `legalName: "Study Right Global Web Limited"`
- **Licences**: `licences: [{ label: "CAC Registered", number: "RC 9315987" }]`
- **Phone Numbers**: `phones: ["07068474849", "09047220470", "08141828270", "08038231013"]`
- **WhatsApp Direct Line**: `whatsappNumber: "2347068474849"` (in international format without `+`)
- **Email Address**: `email: "Olaqrightstudy26@gmail.com"`
- **Physical Address**: `address: "10/11 Tagoe Street, Oke-Ilewo, Abeokuta, Ogun State"`
- **Partner Entity**: `partner: { name: "Toluwalase Multi Blitz", legalName: "Toluwalase Tricycle Multibliz Limited", regNumber: "9553810", ... }`

---

## 📋 2. Client Handover Checklist ("TODO client" Fields)

The following items in [`src/content.js`](file:///c:/StudyRight/src/content.js) remain for ongoing client customization:

| Item | Field in `content.js` | Status | Notes |
|---|---|---|---|
| **Partner Registration** | `partner.regNumber` | `"9553810"` | Confirm against the partner logo (RC 9553810) |
| **Social Media** | `socials.instagram` | Empty `""` | Add official Instagram URL when ready |
| **Social Media** | `socials.facebook` | Empty `""` | Add official Facebook URL when ready |
| **Social Media** | `socials.tiktok` | Empty `""` | Add official TikTok URL when ready |
| **Social Media** | `socials.youtube` | Empty `""` | Add official YouTube URL when ready |
| **Pilgrimage Packages** | `packages` | Empty array `[]` | Displays graceful announcement card until populated |
| **Client Reviews** | `testimonials` | Empty array `[]` | Hidden until verified reviews are provided |
| **Client FAQs** | `faqs` | Empty array `[]` | Hidden until common Q&As are provided |

*Note: The physical address, all four phone lines, and Study Right Global Web Limited legal/CAC registration (RC 9315987) are fully integrated and active on the live site.*
