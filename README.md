# Portfolio 3.0

Personal portfolio of [Matyas Odehnal](https://odehnal.matyas.online).

Based on [Tajmirul/portfolio-2.0](https://github.com/Tajmirul/portfolio-2.0) — design & animations by [Tajmirul Islam](https://www.tajmirul.site/).

## Is it static? (nginx / CasaOS)

**Ano — po buildu.** Projekt je Next.js, ale s `output: 'export'` vznikne složka **`out/`** s čistým HTML/CSS/JS. Tu zkopíruješ do nginx — **na serveru nepotřebuješ Node.js**.

Build musíš spustit na PC (nebo v CI), kde máš Node.js. `pnpm` není nutný — stačí **npm**.

## Lokální vývoj

1. Nainstaluj [Node.js LTS](https://nodejs.org/) (ověř: `node -v` a `npm -v`).
2. V rootu projektu:

PowerShell často blokuje `npm` (execution policy). Použij **`npm.cmd`** nebo **CMD**:

```bash
npm.cmd install
npm.cmd run dev
```

Nebo v PowerShellu jednorázově: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Build pro nginx (CasaOS)

```bash
npm install
npm run build
```

Vznikne složka **`out/`**. Její obsah zkopíruj do webrootu nginxu, např.:

```
/usr/share/nginx/html/
```

### Příklad nginx konfigurace

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ $uri/index.html =404;
    }
}
```

Volitelný náhled buildu lokálně:

```bash
npm run preview
```

## Obsah webu

Uprav `lib/data.ts` — kontakt, sociální sítě, stack, projekty, zkušenosti.

## Deploy na Vercel (alternativa)

Místo nginx můžeš nasadit na Vercel — tam Node na serveru řeší platforma (`npm run build` bez ručního kopírování `out/`).
