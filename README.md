# Daniela & Nelson Wedding Website

A beautiful, minimal wedding website built with Next.js, Tailwind CSS, and TypeScript.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the wedding site.

## Project Structure

- `app/constants.ts` - Wedding data and configuration
- `app/components/` - Reusable React components
- `app/layout.tsx` - Root layout with fonts and metadata
- `app/page.tsx` - Main page assembling all sections

## Customization

Edit `app/constants.ts` to update wedding details, dates, locations, and content. All text is in Spanish as requested.

## Fonts

- Sans-serif: Inter (web alternative to Helvetica Neue)
- Serif: Felix Titling (for elegant headlines)
- Script: Dancing Script (for romantic accents)

## Colors

Based on the provided palette: #E8E3DD (background), #AF9983, #65232D, etc.

## Deployment

This is a Next.js app ready for production. Use Vercel for the simplest deploy.

### 1. Verify locally

```bash
npm install
npm run build
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to confirm the site works.

### 2. Deploy with Vercel

If you do not already have Vercel installed:

```bash
npm install -g vercel
```

Then deploy:

```bash
vercel login
vercel
```

When prompted:
- choose your Vercel account or team
- select `Create a new project` if needed
- use the default root directory
- set the build command to `npm run build` if asked
- leave output directory blank (Vercel auto-detects Next.js)

For a production deployment:

```bash
vercel --prod
```

### 3. Deploy from GitHub (recommended)

1. Push this project to a GitHub repository.
2. In Vercel, click `New Project`.
3. Connect the GitHub repo.
4. Confirm the root is the repository root.
5. Set the build command to `npm run build`.
6. Deploy.

### 4. If you want a public review URL

Use the Vercel production URL from the `vercel --prod` output, or any preview URL created by Vercel after connecting the repo.

## Next Steps

- Replace placeholder text in `constants.ts` with actual wedding details
- Add images if desired (update components accordingly)
- Integrate RSVP form with Formspree or backend service
- Customize styling as needed
