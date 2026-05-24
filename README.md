# Farid Salomon — Personal Portfolio

Professional personal portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The site presents Farid Salomon's backend-focused profile, featured projects, technology stack, freelance services, and contact form in both English and Spanish.

## Overview

This portfolio is designed to communicate a backend-first developer profile with strong emphasis on the Java ecosystem, Spring Boot, APIs, databases, and thoughtful frontend integration with React and TypeScript.

Live domain planned/configured for:

```txt
https://faridsalomon.com
```

## Features

- Bilingual experience: English and Spanish routes.
- Responsive layout for desktop and mobile.
- Light and dark theme support.
- Backend-focused personal positioning.
- Featured project cards with visual previews.
- Technology stack grouped by backend, frontend, and tooling.
- Contact form integration using Web3Forms.
- SEO and Open Graph metadata.
- Custom brand assets for light/dark header and footer variants.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 15, React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS, PostCSS, Autoprefixer |
| Icons | React Icons |
| Forms | Web3Forms |
| Package manager | pnpm |
| Quality | ESLint, production build verification |

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the local development server:

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

## Available Scripts

```bash
pnpm dev      # Start local development server
pnpm build    # Create production build
pnpm start    # Run production server locally
pnpm lint     # Run linting
pnpm audit    # Check dependency vulnerabilities
```

## Project Structure

```txt
app/
  page.tsx          # English route
  es/page.tsx       # Spanish route
  layout.tsx        # Metadata, fonts, root layout
  globals.css       # Global styles and animations

components/
  portfolio-page.tsx # Main portfolio UI and bilingual content

public/
  profile.jpg
  logoBlanco.png
  logoOscuro.png
  footerBlanco.png
  footerOscuro.png
  og-image.svg
```

## Featured Projects

- **Ospaat** — healthcare/social coverage platform.
- **El Tano Frutos Secos** — ecommerce project available at `frutoseltano.com.ar`.
- **Farid Salomon Portfolio** — this website, available at `faridsalomon.com`.

## Deployment Notes

The project is ready to be deployed from GitHub using a Next.js-compatible platform such as Vercel.

Recommended deployment settings:

| Setting | Value |
| --- | --- |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Output | Next.js default |

After deployment, verify:

- light/dark theme behavior;
- English and Spanish routes;
- contact form submission;
- Open Graph preview;
- custom domain configuration.

## Security and Dependency Management

This project uses `pnpm` for deterministic dependency management through `pnpm-lock.yaml`.

Dependency security was reviewed with:

```bash
pnpm audit
```

At the latest verification, the audit reported no known vulnerabilities.
