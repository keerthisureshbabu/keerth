# Convert the portfolio to a static React + Vite SPA

## Goal
Preserve the current premium dark-blue portfolio exactly while removing the TanStack Start, server-rendering, and Lovable-only asset runtime so the site can deploy from `dist/` to GitHub Pages at `/keerth/`.

## Changes
- Keep the existing single-page portfolio, content, sections, styling, animations, links, and responsive layouts unchanged.
- Use `src/main.tsx` as the only browser entry and render the portfolio directly.
- Bundle `src/assets/keerthana.jpeg` through Vite and remove the unused Lovable asset pointer.
- Remove TanStack Start/router/server files, related dependencies, references, and obsolete server-error helpers after confirming nothing still imports them.
- Configure Vite with the `/keerth/` base path, React, Tailwind processing, and the existing `@` source alias.
- Keep standard static scripts: `vite`, `vite build`, and `vite preview`.
- Preserve and complete the portfolio SEO, Open Graph, favicon, and font metadata in the static `index.html`.
- Keep the GitHub Pages workflow publishing `./dist` after a successful Vite build.

## Validation
- Build the production site and confirm `dist/index.html`, bundled CSS, JavaScript, portrait, and favicon are present.
- Check generated output for TanStack, Nitro, `.output`, Lovable-only asset URLs, and incorrect root-relative asset references.
- Serve the production build under `/keerth/` and verify the portrait, styling, fonts, animations, section navigation, project links, mobile menu, and desktop/mobile layouts without console errors or horizontal overflow.

## Technical details
- No React Router will be added because navigation is section-based.
- The GitHub Pages production URL remains `https://keerthisureshbabu.github.io/keerth/`.
- Deployment itself is not part of this change; the existing workflow will deploy when the updated repository is pushed to `main` and GitHub Pages is enabled for Actions.
