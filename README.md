# PetHelpLine - Affiliate Marketing Website

A production-ready landing page website built with Vite + React + TypeScript, designed for deployment on Cloudflare Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `/dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Project Structure

```
AffiliateMarketingWeb/
├── src/
│   ├── components/
│   │   └── Footer.tsx          # Footer component with compliance links
│   ├── pages/
│   │   ├── PetVetBridgePage.tsx # Main landing page
│   │   ├── PrivacyPage.tsx     # Privacy Policy page
│   │   ├── TermsPage.tsx       # Terms of Service page
│   │   └── DisclaimerPage.tsx # Medical & Affiliate Disclaimer
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles with Tailwind
├── public/                     # Static assets
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🌐 Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Connect your GitHub repository
   - Configure build settings (see below)

### Option 2: Direct Upload

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `/dist` folder to Cloudflare Pages via the dashboard

### Cloudflare Pages Build Settings

When setting up your Cloudflare Pages project, use these settings:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave as default)
- **Node version:** `20` (or latest LTS)

### Environment Variables

No environment variables are required for this project. All configuration is handled in the code.

## 📋 Build Configuration Details

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 20 (or latest LTS)

## 🔧 Technology Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## 📄 Compliance Pages

The website includes three compliance pages accessible via footer links:

- **Privacy Policy** (`/privacy`) - Data collection and usage policies
- **Terms of Service** (`/terms`) - Terms and conditions
- **Disclaimer** (`/disclaimer`) - Medical and affiliate disclaimers

## 🐛 Troubleshooting

### Build Fails

**Issue:** Build command fails with TypeScript errors

**Solution:**
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run build
```

**Issue:** Tailwind classes not working

**Solution:**
- Ensure `tailwind.config.ts` includes all source files
- Check that `index.css` imports Tailwind directives
- Restart the dev server

### Blank Page After Deployment

**Issue:** Site shows blank page on Cloudflare Pages

**Solution:**
1. Check browser console for errors
2. Verify build output directory is set to `dist`
3. Ensure `index.html` is in the root of the `dist` folder
4. Check that React Router is configured correctly (all routes should work)

**For React Router SPA routing:**
Cloudflare Pages should automatically handle SPA routing. If routes like `/privacy` return 404:
- Add a `_redirects` file in `/public` with: `/* /index.html 200`
- Or configure Cloudflare Pages redirects in the dashboard

### Routing Issues

**Issue:** Direct navigation to `/privacy`, `/terms`, or `/disclaimer` returns 404

**Solution:**
Create a `public/_redirects` file:
```
/*    /index.html   200
```

Or configure in Cloudflare Pages dashboard:
- Go to Pages → Your Project → Settings → Functions
- Add a redirect rule: `/*` → `/index.html` with status `200`

## 📝 Development Notes

- The main landing page component is in `src/pages/PetVetBridgePage.tsx`
- All styling uses Tailwind CSS utility classes
- Images are loaded from external URLs (Unsplash, Pexels)
- The affiliate link is configured in `PetVetBridgePage.tsx` as `AFFILIATE_URL`

## 🔒 Security Notes

- No sensitive data is stored or transmitted
- All external links open in the same window (affiliate tracking)
- No authentication or user accounts required

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Cloudflare Pages documentation
3. Check browser console for specific errors

---

**Built with ❤️ for Cloudflare Pages**

