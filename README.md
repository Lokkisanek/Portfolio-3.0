# Portfolio 3.0

Osobní portfolio [Matyáše Odehnala](https://matyas.online) — full-stack vývoj, chytré domácnosti, FPV a hardware.

## Vývoj

```bash
npm install
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000).

## Data

- `src/data/profile.ts` — profil, kontakty, sociální sítě
- `src/data/portfolio.ts` — služby, projekty, reference, meta

### Média

Obrázky a videa vložte do `public/` podle cest v `portfolio.ts`, např.:

- `public/images/projects/`
- `public/images/portfolio/`
- `public/images/drone/`
- `public/images/hardware/`
- `public/videos/drone/`
- `public/assets/3d/`

Chybějící soubory zobrazí placeholder s popisem (alt text).

## SEO

- Metadata, Open Graph a Twitter karty (`src/lib/seo/`)
- JSON-LD: Person, WebSite, ProfessionalService, FAQ, recenze, Service
- `sitemap.xml` a `robots.txt` (automaticky z Next.js)
- Dedikované stránky služeb: `/sluzby`, `/sluzby/web-development`, …
- Sekce FAQ na homepage i u každé služby

Po nasazení na [matyas.online](https://matyas.online) přidejte web do [Google Search Console](https://search.google.com/search-console) a odešlete sitemap: `https://matyas.online/sitemap.xml`.

## Nasazení

Projekt je připravený pro [Vercel](https://vercel.com) nebo jakýkoli Node.js hosting s podporou Next.js.

```bash
npm run build
npm start
```
