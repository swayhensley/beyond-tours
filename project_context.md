# Beyond Tours - Project Context

## Overview
This is a modern web application for "Beyond Tours", a Kenya-based travel agency offering authentic safaris, coastal escapes, and urban adventures. The application is built to be fast, responsive, and visually engaging.

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **Frontend Library:** React 19.2.3
- **Styling:** Tailwind CSS v4, supplemented with standard CSS files (`globals.css`, `style.css`)
- **Components:** Radix UI (`@radix-ui/react-slot`), Lucide React (for icons)
- **Utility Libraries:** `clsx`, `tailwind-merge`, `class-variance-authority`
- **Language:** TypeScript

## Architecture & Directory Structure
The application follows the standard Next.js App Router structure under the `src/` directory.

### Key Directories
- `src/app/`: Contains the routing logic and page layouts.
  - `page.tsx`: The landing page (Home) containing Hero, AboutUs, Destinations, etc.
  - `layout.tsx`: The global layout wrapping all pages (includes Navbar, Footer, and AnimationProvider).
  - `globals.css` & `style.css`: Core stylesheets.
- `src/components/`: Reusable UI components organized by feature.
  - `home/`: Components specific to the landing page (`Hero.tsx`, `AboutUs.tsx`, `DestinationsSection.tsx`, `FeaturedPackages.tsx`, `WhyChooseUs.tsx`, `Testimonials.tsx`, `FAQ.tsx`).
  - `layout/`: Shared layout components (`Navbar.tsx`, `Footer.tsx`).
  - `ui/`: Core UI elements like `Button.tsx`.
  - `providers/`: Context providers (`AnimationProvider.tsx`).
- `src/hooks/`: Custom React hooks (e.g., `useReveal.ts` for scroll animations).
- `public/`: Static assets like images and fonts.

## Global Styles & Critical CSS Rules
The application relies heavily on two stylesheets located in `src/app/`:

1. **`globals.css`**: Defines CSS variables for colors (e.g., `--brand-primary: #e67e22`), Tailwind base directives, and custom animation classes like `.reveal`.
2. **`style.css`**: Contains legacy or supplementary styles. 
   - **⚠️ Important Quirks:** `style.css` has a global reset rule `* { padding: 5px; }`. This applies padding to *all* elements by default. 
   - **Overrides:** To allow fullscreen sections (like the Hero image) to reach the edge of the screen, we've added `!important` zero-padding overrides (`!p-0 !m-0`) directly on `html`, `body`, `main`, the homepage wrapper, and the `Hero` section to bypass this rule without breaking it for smaller UI elements like forms or buttons.

## Key Design Tokens
- **Primary Color:** Safari Orange (`#e67e22`)
- **Secondary Color:** Jungle Green (`#2d4a22`)
- **Dark Mode / Text:** Dark (`#1a1a1a`), Foreground (`#2d2d2d`)
- **Typography:** Playfair Display (Serif headings), Montserrat (Sans-serif body)

## Available Scripts
- `npm run dev` - Starts the development server at `http://localhost:3000`.
- `npm run build` - Builds the application for production.
- `npm run start` - Starts the production server.
- `npm run lint` - Runs ESLint.

## Development Guidelines for AI Agents
1. **Styling Edits:** Prefer modifying Tailwind classes on elements. Be very careful modifying `style.css`'s base rules (like the `*` selector) as it will have site-wide consequences. If an element needs full width/height, explicitly remove its margins and paddings using `!p-0 !m-0` Tailwind classes.
2. **Component Creation:** Place new page sections inside `src/components/home/` or create new directories in `src/components/` as needed. Ensure they are responsive using Tailwind breakpoints (`sm:`, `md:`, `lg:`).
3. **Animations:** Use the `.reveal` classes combined with the `AnimationProvider` to ensure smooth scroll-into-view animations for new content.
