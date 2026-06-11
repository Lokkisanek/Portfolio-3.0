# Portfolio 3.0

Osobní portfolio [Matyáše Odehnala](https://matyas.online) — statický web připravený pro nginx.

## Stav

Základní skelet layoutu (inspirace: [tajmirul.site](https://www.tajmirul.site/)) — placeholdery, žádný build krok.

## Lokální náhled

Otevři `index.html` v prohlížeči, nebo:

```bash
npx serve .
```

## Nasazení na CasaOS (nginx:alpine)

Zkopíruj celý obsah repa do webrootu nginxu (typicky `/usr/share/nginx/html`):

- `index.html`
- `css/`
- `js/`

Žádný Node.js ani build není potřeba.
