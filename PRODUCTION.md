# MASCO Energy production preview

Nine art directions are available at `/main`. Content and photography are sourced from the supplied 2026 company profile.

## Build and run

```powershell
npm ci
npm run lint
npm run build
npm run verify:production
npm run start:local
```

Open http://localhost:3001/main. The Windows launcher starts Next.js as a hidden background process, writes `server-production.log` and `server-production-error.log`, and checks Next.js startup readiness before reporting success. It survives closing the invoking terminal, but must be started again after restarting Windows. It never stops another process using the port.

For other environments, use `npm start` after building. Each build uses a fresh output folder to avoid Windows build-directory locks. Only a successful build updates `.production-build`, which the server and verification script read. Development uses a separate folder. Do not override `NEXT_DIST_DIR` differently between build and start.

## Asset treatment

- The official profile logo is displayed intact on navy to preserve its white lettering.
- Client and business marks retain their proportions and use white contrast panels.
- Project photographs are reserved for the relevant project cards. Where the PDF supplies the same image for two projects, the secondary entry uses a typography-led card instead of repeating that photograph.
- Service and delivery-principle cards use typography and icons instead of recycled photography.
- No external image host is required.

## Editorial sign-off

The supplied PDF contains an internal validation note for the +4.5B portfolio figure and for Lumeron's detailed capabilities. These require client confirmation before public publication. No currency was inferred for the figure.
