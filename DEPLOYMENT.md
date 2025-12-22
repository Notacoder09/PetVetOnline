# Deployment Guide - PetHelpLine Website

## ✅ Checklist of Changes

- ✅ Created Vite + React + TypeScript project structure
- ✅ Moved `PetVetBridgePage.tsx` to `src/pages/PetVetBridgePage.tsx` (removed Next.js "use client" directive)
- ✅ Created `App.tsx` with React Router for routing
- ✅ Added compliance pages: Privacy (`/privacy`), Terms (`/terms`), Disclaimer (`/disclaimer`)
- ✅ Created `Footer.tsx` component with links to compliance pages
- ✅ Configured Tailwind CSS for Vite
- ✅ Updated `package.json` with Vite dependencies
- ✅ Created `index.html` entry point
- ✅ Added `_redirects` file for SPA routing on Cloudflare Pages
- ✅ Created comprehensive README.md with instructions

## 📁 Final Project Structure

```
AffiliateMarketingWeb/
├── .gitignore
├── DEPLOYMENT.md (this file)
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── _redirects          # SPA routing for Cloudflare Pages
└── src/
    ├── vite-env.d.ts
    ├── index.css           # Tailwind CSS imports
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main app with routing
    ├── components/
    │   └── Footer.tsx      # Footer with compliance links
    └── pages/
        ├── PetVetBridgePage.tsx  # Main landing page
        ├── PrivacyPage.tsx       # Privacy Policy
        ├── TermsPage.tsx         # Terms of Service
        └── DisclaimerPage.tsx   # Medical & Affiliate Disclaimer
```

## 🚀 Exact Terminal Commands

### Step 1: Install Dependencies

```bash
cd /Users/xavier/versee/app/AffiliateMarketingWeb
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to verify everything works.

### Step 3: Build for Production

```bash
npm run build
```

This creates the `/dist` folder with optimized production files.

### Step 4: Preview Production Build (Optional)

```bash
npm run preview
```

### Step 5: Deploy to Cloudflare Pages

#### Option A: Via GitHub (Recommended)

1. **Initialize Git and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Vite React TypeScript setup"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. **In Cloudflare Dashboard:**
   - Go to https://dash.cloudflare.com/
   - Click **Pages** → **Create a project**
   - Connect your GitHub account
   - Select your repository
   - Configure build settings (see below)

#### Option B: Direct Upload

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `/dist` folder via Cloudflare Pages dashboard

## ⚙️ Cloudflare Pages Settings

When setting up your Cloudflare Pages project, use these **exact settings**:

| Setting | Value |
|---------|-------|
| **Framework preset** | Vite |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave as default) |
| **Node version** | `20` (or latest LTS) |

### Environment Variables

No environment variables needed. Leave this section empty.

## 🔧 Common Issues & Fixes

### Issue 1: Build Fails with "Cannot find module"

**Error:** `Error: Cannot find module 'react'` or similar

**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue 2: Blank Page After Deployment

**Symptoms:** Site loads but shows blank white page

**Possible Causes & Fixes:**

1. **Check browser console** for JavaScript errors
2. **Verify build output:**
   ```bash
   npm run build
   ls -la dist/
   ```
   Should see `index.html` and `assets/` folder

3. **Check Cloudflare Pages build logs:**
   - Go to Cloudflare Dashboard → Pages → Your Project → Deployments
   - Click on the latest deployment
   - Check "Build Logs" for errors

4. **Verify output directory setting:**
   - Must be exactly `dist` (not `build` or `out`)

### Issue 3: Routes Return 404 (e.g., `/privacy` shows 404)

**Symptoms:** Main page works, but `/privacy`, `/terms`, `/disclaimer` return 404

**Fix:** The `public/_redirects` file should handle this. If it doesn't:

1. **Verify `_redirects` file exists:**
   ```bash
   cat public/_redirects
   ```
   Should show: `/*    /index.html   200`

2. **If missing, create it:**
   ```bash
   echo "/*    /index.html   200" > public/_redirects
   ```

3. **Rebuild and redeploy:**
   ```bash
   npm run build
   ```

4. **Alternative: Configure in Cloudflare Dashboard:**
   - Go to Pages → Your Project → Settings → Functions
   - Add redirect rule: `/*` → `/index.html` with status `200`

### Issue 4: Tailwind Styles Not Working

**Symptoms:** Page loads but looks unstyled

**Fix:**
1. Verify `tailwind.config.ts` includes:
   ```ts
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```

2. Verify `src/index.css` has:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Restart dev server:
   ```bash
   npm run dev
   ```

### Issue 5: TypeScript Errors During Build

**Error:** Type errors preventing build

**Fix:**
```bash
# Check for type errors
npx tsc --noEmit

# If errors found, fix them or adjust tsconfig.json
# Common fix: add "skipLibCheck": true to tsconfig.json
```

### Issue 6: Images Not Loading

**Symptoms:** Images from Unsplash/Pexels don't load

**Note:** The component uses external image URLs. These should work, but if blocked:
- Check browser console for CORS errors
- Images are loaded from `images.unsplash.com` and `images.pexels.com`
- No local images are required

## 📊 Verification Checklist

After deployment, verify:

- [ ] Main page (`/`) loads correctly
- [ ] Footer links work (`/privacy`, `/terms`, `/disclaimer`)
- [ ] All buttons and CTAs work
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools
- [ ] Build completes successfully in Cloudflare Pages
- [ ] Site is accessible via Cloudflare Pages URL

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

## 📝 Notes

- The old Next.js files in `/app` directory can be removed (they're not used)
- All routing is handled by React Router
- The affiliate URL is hardcoded in `PetVetBridgePage.tsx`
- No backend or API required - fully static site
- Images are loaded from external CDNs (Unsplash, Pexels)

---

**Ready to deploy!** Follow the commands above and you'll have a live website on Cloudflare Pages.

