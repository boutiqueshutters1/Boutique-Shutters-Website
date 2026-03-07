# Boutique Shutters — Website

The official website for **Boutique Shutters**, a custom window treatment company serving Metro Atlanta communities including Sugar Hill, Suwanee, Johns Creek, Duluth, Lawrenceville, and Alpharetta.

Built with [Astro](https://astro.build/) for fast, SEO-optimized static site delivery.

---

## 🪟 About the Project

Boutique Shutters specializes in premium plantation shutters, designer shades, and motorized window treatments with professional installation. This website serves as the primary lead generation and brand presence platform, designed to compete in a highly local market against established players like Budget Blinds.

Key business goals driving this codebase:
- Dominate local Atlanta-area search rankings for high-intent window treatment keywords
- Drive inbound consultation requests through high-converting landing pages
- Support a growing service area across multiple Metro Atlanta communities

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build/) | Static site framework |
| Google Analytics | Site-wide traffic and conversion tracking |
| Google Search Console | SEO performance monitoring |

---

## 📁 Project Structure

```
/
├── public/              # Static assets (images, fonts, favicons)
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/
│   │   └── BaseLayout.astro   # Global layout with GA tracking injected
│   ├── pages/           # Route-based page files (.astro)
│   └── styles/          # Global and component-level styles
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/boutique-shutters-website.git
cd boutique-shutters-website

# Install dependencies
npm install
```

### Development

```bash
# Start local dev server at localhost:4321
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📍 Service Areas

Pages and SEO content are structured around the following Metro Atlanta communities:

- Sugar Hill
- Suwanee
- Johns Creek
- Duluth
- Lawrenceville
- Alpharetta

Each service area has dedicated location pages targeting local search intent.

---

## 📈 SEO Notes

- Google Analytics tracking is implemented globally via the `BaseLayout` component
- Target keywords focus on high-volume, low-competition local terms (e.g., *plantation shutters Suwanee*, *motorized shades Johns Creek*)
- Meta titles and descriptions are capped at **150 characters** per page
- Location-specific pages are the primary SEO growth lever — do not consolidate or remove them

> ⚠️ **Ranking context:** Several target keywords currently sit around page 5+ in Google. SEO improvements should prioritize on-page optimization, internal linking, and location page content depth before any structural changes.

---

## 🔍 Featured Services

The site covers three core service categories, each with dedicated page content:

1. **Window Shutters** — Custom plantation shutters, the flagship product
2. **Window Shades** — Designer shades for every room and light condition
3. **Motorized Shades** — Smart home-compatible motorized window treatments

---

## 🤝 Contributing

1. Branch off `main` using the naming convention `feature/your-feature-name`
2. Keep location page structure consistent — each service area should mirror the same content schema
3. Do not modify the GA tracking code in `BaseLayout.astro` without flagging it first
4. Run `npm run build` and verify there are no errors before opening a PR

---

## 📬 Contact

For project questions, reach out to the Boutique Shutters team directly or open an issue in this repository.
