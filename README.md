# Winter Crochet Patterns — Free PDF Patterns & Blog

A modern, fast, responsive digital brand website offering free printable PDF crochet patterns and comprehensive companion blog tutorials.

Built with **React (Vite)** + **Tailwind CSS** + **React Router** + **react-helmet-async**.

---

## 🧶 Key Features

- **8-Section Home Page**:
  1. Hero with SVG branding & primary/secondary CTAs
  2. Quick Value Props (Printable PDFs, Beginner Steps, Cozy Wearables)
  3. Featured Free Patterns (Easy and Cute Baby Beanie, Cardigan with Granny Squares, Illuin Earwarmer, Fingerless Gloves)
  4. How It Works (3 clear steps)
  5. Seasonal Collections tag strip with direct filter routing
  6. Email / Lead Magnet capture banner with instant PDF download
  7. Testimonials with star rating cards
  8. Interactive FAQ Accordion (5+ in-depth crafter FAQs)
- **Store-Style Pattern Catalog (`/free-patterns`)**:
  - Filter by Category (Baby Hat, Cardigan, Headband, Gloves), Difficulty, and Time
  - Instant text search across titles and descriptions
  - Top & bottom display AdSlots
- **Pattern Detail Pages (`/patterns/:slug`)**:
  - High-res photo preview with specifications
  - Sizing & dimension breakdowns (inclusive child through 4XL)
  - Materials checklist & stitch abbreviation keys
  - One-click PDF download (Google Drive direct-download link)
  - Link to companion step-by-step tutorial & "You May Also Like" related patterns
  - In-content AdSlot
- **Blog & Tutorials (`/blog` and `/blog/:slug`)**:
  - Step-by-step walkthroughs with stitch guides and pro tips
  - Clickable Table of Contents
  - Desktop sidebar AdSlot & in-content mobile AdSlots
  - Download pattern CTA box
- **Brand & Legal Compliance Pages**:
  - `/about` Studio philosophy, sizing mission, and craft market commercial sales policy
  - `/privacy-policy` Standard ad network disclosures, cookie policies, and data handling
  - `/terms` Personal use digital license and permission to sell finished physical creations
  - `404` Page with friendly sheep illustration and navigation links

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### 3. Build for Production

```bash
npm run build
```

---

## 📁 Where to Put PDFs & Assets

- **Pattern PDFs (Google Drive)**: each pattern stores its exact Drive link as `pdfUrl` in `/src/data/patterns.ts`.
  - `/src/utils/downloads.ts` converts `https://drive.google.com/file/d/<ID>/view?...` into `https://drive.google.com/uc?export=download&id=<ID>` for the download buttons.
  - **Compliance switch**: set `USE_DRIVE_PDF_DOWNLOADS = false` in `/src/utils/downloads.ts` and add the original designer page URL as `sourceUrl` on each pattern — the buttons will then open the designer page instead of the Drive PDF.
- **Local PDFs**: the lead-magnet bundle lives at `/public/pdfs/winter-crochet-starter-pack.pdf`.

- **Pattern & Blog Images**: hosted on Cloudinary and set per pattern (`imageUrl` in `/src/data/patterns.ts`) and per post (`coverImage` in `/src/data/posts.ts`). Local fallback copies live in `/public/images/` and `/src/assets/images/`.

---

## 🏷️ Where to Change Brand Text & Data

- **Patterns Data**: Edit `/src/data/patterns.ts` to modify titles, descriptions, yarn weights, hook sizes, gauge, dimensions, or add new patterns.
- **Blog Posts & FAQs**: Edit `/src/data/posts.ts` to modify blog articles, step-by-step instructions, finishing tips, or FAQ questions and answers.
- **Brand Colors & Typography**: Edit `/src/index.css` under the `@theme` directive:
  - Blush: `#F8D7E5`
  - Rose Ink: `#7A3E55`
  - Cream: `#FFF7EF`
  - Lavender: `#E9E2FF`
  - Mint: `#DFF7EF`
  - Display Font: `Fredoka`
  - Sans Font: `Inter`

---

## 💰 Where Ad Code Goes Later (Monetization)

The site includes dedicated `<AdSlot id="..." format="horizontal|rectangle|in-content" />` components positioned in high-viewability, ad-network-friendly slots (header leaderboard, between home sections, above/below pattern grid, mid-article, and sidebar).

To integrate a real ad network (e.g., Google AdSense, Mediavine, Raptive, Ezoic):
1. Open `/src/components/AdSlot.tsx`.
2. Replace the placeholder markup with your ad script or `window.adsbygoogle` push code.
3. Pass your ad unit ID to the `id` prop.
4. Add your ad network script tag to `<head>` in `/index.html`.
