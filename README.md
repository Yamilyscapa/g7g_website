# GZG Seguros - Website

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## 🏢 About

GZG Seguros is a leading insurance agency website based in Puebla, Mexico, with over 57 years of experience in the insurance industry. This website serves as the digital presence for the agency, providing information about their services and allowing potential clients to request quotes via WhatsApp.

## 🌟 Features

- **Modern Design**: Clean, responsive design built with Astro
- **SEO Optimized**: Comprehensive SEO setup with structured data for local business
- **WhatsApp Integration**: Direct quote requests through WhatsApp
- **Service Portfolio**: Showcase of various insurance services
- **Partner Network**: Display of insurance company partnerships
- **Mobile Responsive**: Fully responsive design for all devices
- **Fast Performance**: Static site generation with Astro for optimal performance

## 🛡️ Services Offered

- **Vehicle Insurance** (Seguros Vehiculares)
- **Medical Expenses Insurance** (Gastos médicos)
- **Life Insurance** (Seguro de Vida)
- **Fleet Insurance** (Seguros para flotillas)
- **School Accident Insurance** (Accidentes escolares)
- **University Studies Insurance** (Estudios universitarios)
- **Retirement Plans** (Jubilación)
- **Merchandise Insurance** (Mercancías)

## 🚀 Technology Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: SCSS (Sass) for enhanced CSS capabilities
- **Language**: TypeScript for type safety
- **Build Tool**: Vite (bundled with Astro)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd g7g
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🛠️ Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI commands
npm run astro
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.astro
│   ├── Navbar.astro
│   ├── ServiceCard.astro
│   └── Welcome.astro
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Route pages
│   └── index.astro
├── styles/             # Global styles
│   ├── _variables.scss
│   └── global.scss
└── assets/             # Static assets
    ├── astro.svg
    └── background.svg
```

## 🎨 Styling

The project uses SCSS for enhanced CSS capabilities:

- **Variables**: Defined in `src/styles/_variables.scss`
- **Global Styles**: Located in `src/styles/global.scss`
- **Component Styles**: Scoped styles within individual `.astro` files

## 🔧 Configuration

### Astro Configuration
The `astro.config.mjs` file contains the basic Astro configuration with Sass support.

### SEO Configuration
The website includes comprehensive SEO setup with:
- Meta tags for search engines
- Open Graph tags for social media
- Structured data for local business
- Canonical URLs
- Mobile optimization

## 🌐 Deployment

The website is built as a static site and can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting service

### Recommended Hosting Platforms
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## 📱 Contact Integration

The website includes WhatsApp integration for direct customer communication:
- **WhatsApp Number**: +52 222 834 0689
- **CTA Button**: "Cotiza via WhatsApp" in the hero section

## 🏢 Business Information

- **Name**: GZG Seguros
- **Experience**: 57+ years in the insurance industry
- **Location**: Puebla, Mexico
- **Specialization**: Personal and business insurance solutions

## 🤝 Insurance Partners

The website showcases partnerships with major insurance companies including:
- Afirme, Ana, HDI, Insignia Life
- BX+, HIR, Bupa, Qualitas
- GP Mutual, Potosí, Zurich, Primero Seguros
- MAPFRE, Allianz, Banorte, GMX
- And many more...

## 📄 License

This project is proprietary and belongs to GZG Seguros.

## 🐛 Issues and Support

For technical issues or questions about the website, please contact the development team.

---

**Built with ❤️ using Astro** 