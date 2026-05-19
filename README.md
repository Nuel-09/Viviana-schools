# Viviana Private Nursery, Primary & Secondary Schools — Landing Page

Modern, responsive, SEO-optimized school website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Features

- Fully responsive layout (mobile, tablet, desktop)
- **School Portal** dropdown (Admin Portal + Student Portal links)
- SEO: metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`
- Contact form with **Axios** (demo mode or your API endpoint)
- Accessible navigation with skip link and semantic HTML

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your public website URL (SEO & sitemap) |
| `NEXT_PUBLIC_ADMIN_PORTAL_URL` | [Admin Portal](https://www.eduffice.com/index.php/admin_login) login |
| `NEXT_PUBLIC_STUDENT_PORTAL_URL` | [Student Portal](https://students.eduffice.com/index.php/login) login |
| `NEXT_PUBLIC_CONTACT_API_URL` | Optional POST endpoint for the contact form |

Update contact details, social links, and copy in `src/lib/site.ts`.

## School logo

The official crest is at `public/images/logo.jpg` (sourced from `src/viviana school logo.jpeg`).

It appears in the **header**, **footer**, browser tab, and SEO metadata. To replace it, overwrite `public/images/logo.jpg`.

## Production build

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com), Netlify, or any Node.js host.

## Customisation

- Replace the map placeholder in `src/components/Contact.tsx` with a Google Maps iframe
- Add school photos to `public/` and use `next/image` in Hero or Facilities
- Portal URLs are preconfigured for Eduffice; override in `.env.local` if they change
