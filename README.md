# RK Solution — Official Agency Website

> **Your Ideas, Our Code**  
> Professional, conversion-optimized website for **RK Solution**, specializing in modern business websites, native Android applications (Kotlin & Jetpack Compose), responsive frontend development, and custom software systems.

---

## 🚀 Key Features

- **Conversion-Optimized Architecture**: Designed specifically to convert paid Instagram traffic into qualified WhatsApp and email enquiries.
- **Top Bar Contract**: Clean 3-zone header with zero clutter, responsive mobile navigation, and primary action routing.
- **Zero-Pill Typography & Anti-Slop Visuals**: Professional dark navy aesthetic (`#070B14`, `#0B1222`), electric blue/cyan accents, and high-fidelity device mockups.
- **Real Portfolio Showcase**:
  - **Notes App** (Android: Kotlin, Jetpack Compose, Room, Retrofit, MVVM) with direct link to GitHub: [https://github.com/Ahmadgit123/NotesApp](https://github.com/Ahmadgit123/NotesApp)
  - **Weather App** (Android: Kotlin, Jetpack Compose, Retrofit, MVVM, Material 3)
  - **AI-Powered Resume Screening System** (Python, FastAPI, TF-IDF, Cosine Similarity)
  - **AI-Based Multi-Horizon Stock Price Prediction System** (Python, Flask, TensorFlow/Keras LSTM, Chart.js)
- **Interactive Project Cost Estimator**: Transparent, customizable price calculator generating pre-filled WhatsApp quotes.
- **Validated Lead Generation**: Full Name, Email, WhatsApp Number, Service, Budget Range, Project Description, and preferred channel.
- **Dynamic WhatsApp Routing**: Instant pre-filled messages dynamically populated with project names or service choices.
- **Ad & Pixel Ready**: Prepared hooks for Meta Pixel (Facebook/Instagram Ads) and Google Analytics 4 (GA4).
- **SEO & Social Sharing Ready**: Rich metadata, OpenGraph tags, Twitter cards, JSON-LD Schema.org (`ProfessionalService`), `robots.txt`, and `sitemap.xml`.

---

## 📁 Project Structure

```text
├── public/
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # Complete XML sitemap for SEO indexing
├── src/
│   ├── assets/
│   │   └── images/             # Studio device mockups and workspace photography
│   ├── components/
│   │   ├── home/               # Hero, Services, Estimator, Process, FAQ, CTA
│   │   ├── layout/             # Navbar, Footer, FloatingWhatsApp, ConfigWarningBanner
│   │   └── ui/                 # ProjectCard, EnquiryForm
│   ├── config/
│   │   └── siteConfig.ts       # Central editable configuration (Brand, Founder, Pricing, Projects)
│   ├── pages/
│   │   ├── HomePage.tsx        # Conversion-focused landing experience
│   │   ├── ServicesPage.tsx    # In-depth breakdown of all 4 service categories
│   │   ├── ProjectsPage.tsx    # Filterable portfolio gallery
│   │   ├── ProjectDetailsPage.tsx # Deep-dive case studies with architectural blueprints
│   │   ├── AboutPage.tsx       # Developer-led brand story & philosophy
│   │   ├── PricingPage.tsx     # Indicative packages & interactive calculator
│   │   ├── ContactPage.tsx     # Multichannel contact & validated enquiry form
│   │   ├── PrivacyPage.tsx     # Privacy Policy compliance
│   │   ├── TermsPage.tsx       # Terms of Service
│   │   └── NotFoundPage.tsx    # Custom 404 page
│   ├── utils/
│   │   ├── analytics.ts        # Meta Pixel & GA4 event trackers
│   │   └── whatsapp.ts         # WhatsApp deep link & dynamic message builder
│   ├── App.tsx                 # Client router & top-level layout
│   ├── index.css               # Tailwind CSS v4 styling & theme
│   └── main.tsx                # React 19 root
├── .env.example                # Environment variable template
├── metadata.json               # AI Studio project metadata
├── package.json
└── vite.config.ts
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Edit `.env` and set your actual phone number and email:
```env
VITE_WHATSAPP_NUMBER="919876543210"
VITE_CONTACT_EMAIL="ahmadziya7756@gmail.com"
VITE_INSTAGRAM_URL="https://instagram.com/yourhandle"
```

### 3. Run Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Testing

To compile and verify the production bundle:
```bash
npm run build
npm run preview
```

---

## 🌐 Deployment Instructions

### Option A: Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. In the **Environment Variables** panel, add:
   - `VITE_WHATSAPP_NUMBER`: your real number (digits only, e.g. `919876543210`)
   - `VITE_CONTACT_EMAIL`: your email
   - `VITE_INSTAGRAM_URL`: your Instagram profile URL
5. Click **Deploy**. Vercel will build and provision an SSL-secured URL automatically.

### Option B: Cloudflare Pages
1. Go to Cloudflare Dashboard -> **Workers & Pages** -> **Create application** -> **Pages**.
2. Connect your Git repository.
3. Build configuration:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add environment variables under Settings -> Environment Variables.

### Option C: Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Ensure single-page application redirects are handled by creating `public/_redirects`:
   ```text
   /*    /index.html   200
   ```

---

## 🔒 Custom Domain & HTTPS Setup (`rksolution.in`)

1. Purchase your domain from any registrar (Namecheap, GoDaddy, Cloudflare Registrar, etc.).
2. In your hosting platform (e.g. Vercel or Cloudflare Pages), go to **Domains** -> **Add Domain** -> Enter `rksolution.in`.
3. Add the provided DNS records to your registrar:
   - **Type**: `A`, **Name**: `@`, **Value**: `<Hosting IP>`
   - **Type**: `CNAME`, **Name**: `www`, **Value**: `<Hosting CNAME>`
4. Automatic HTTPS/TLS certificates will be generated within 5–15 minutes.

---

## 🎯 Pre-Launch Instagram Ads Checklist

Complete these steps before spending ad budget:

1. [ ] **Update WhatsApp Number**: Set `VITE_WHATSAPP_NUMBER` to your active phone number in digits (e.g. `919876543210`). The top banner will disappear once configured.
2. [ ] **Test WhatsApp Deep Links**: Click on each WhatsApp button (Hero, Floating button, Estimator, Project details) on mobile and desktop to confirm the chat opens with your pre-filled message.
3. [ ] **Configure Meta Pixel**: Set `VITE_META_PIXEL_ID="YOUR_PIXEL_ID"` in your environment variables.
4. [ ] **Set Ad Destination URL**: Point your Instagram ads to `https://rksolution.in/?utm_source=instagram&utm_medium=paid&utm_campaign=launch`.
5. [ ] **Connect Email/Form Webhook**: Optional: If you prefer automated email notifications for web form submissions, provide a Web3Forms or Formspree access key in `VITE_FORM_ENDPOINT`.
6. [ ] **Social Media Links**: Verify Instagram bio links to your live domain.

---

## 📄 License & Credits

Built with precision by **RK Solution**.  
*Your Ideas, Our Code.*
