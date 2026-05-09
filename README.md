# 💍 Gomathi Bridal Studio — Official Website

A production-grade, premium beauty and bridal studio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- 🎨 **Luxury editorial design** — Royal Emerald, Champagne Gold & Soft Cream palette
- 📱 **Mobile-first responsive** — Looks stunning on all devices
- ⚡ **SEO optimized** — Metadata API, sitemap, JSON-LD structured data
- 📧 **Appointment booking form** — Sends email via Resend API
- 💬 **WhatsApp floating button** — Direct chat link
- 🖼️ **Optimized gallery** — Lazy-loaded, hover effects
- 🗺️ **Google Maps embed** — Location section on contact page
- 🎬 **Scroll animations** — Elegant fade-up effects

---

## 📂 Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, Stats, About, Services, Packages, Gallery, Testimonials, CTA |
| `/about` | About — Story, Values, Team |
| `/services` | Services — All services with pricing |
| `/packages` | Packages — Silver / Gold / Platinum with comparison table |
| `/gallery` | Gallery — Full masonry photo grid |
| `/testimonials` | Testimonials — All bride reviews |
| `/contact` | Contact — Booking form, Map, Info |

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:
- `RESEND_API_KEY` — Get from [resend.com](https://resend.com) (free tier: 3,000 emails/month)
- `NEXT_PUBLIC_SITE_URL` — Your production URL

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Customization

### Update Brand Information
Edit `lib/data.ts`:
- `BRAND` — Phone, email, address, social links
- `SERVICES` — Service names, descriptions, pricing
- `PACKAGES` — Package contents and pricing
- `TESTIMONIALS` — Client reviews
- `GALLERY_IMAGES` — Replace with Cloudinary URLs

### Update Colors
Edit `tailwind.config.ts` — colors section:
```js
emerald: '#043927',  // Primary brand color
gold: '#D4AF37',     // Accent color
cream: '#F5F5DC',    // Background
```

### Replace Images
1. Upload bridal photos to [Cloudinary](https://cloudinary.com) (free tier)
2. Update image URLs in `lib/data.ts`
3. Update hero image in `components/sections/HeroSection.tsx`

---

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain
3. Copy your API key to `.env.local`
4. Update the `from` email in `app/api/contact/route.ts`

---

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard or:
vercel env add RESEND_API_KEY
```

Or push to GitHub and connect via [vercel.com](https://vercel.com) for automatic deployments.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Radix UI primitives |
| Icons | Lucide React |
| Email | Resend API |
| Images | next/image + Cloudinary |
| Hosting | Vercel |
| Fonts | Cormorant Garamond + Jost (Google Fonts) |

---

## 📞 Support

For technical questions, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Vercel Docs](https://vercel.com/docs)
