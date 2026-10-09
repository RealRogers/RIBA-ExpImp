# SinoMex Logística — Landing Page

Sitio de una sola página para **SinoMex Logística**, empresa de comercio exterior en el corredor China ⇄ México (importación/exportación, maquinaria industrial, aduanas, DDP puerta a puerta).

## Stack

- **[Astro](https://astro.build)** (SSG) + TypeScript estricto
- **Tailwind CSS v4** vía `@tailwindcss/vite` — config CSS-first en `src/styles/global.css` (`@theme`), sin `tailwind.config`
- Tipografías: Fraunces, Inter y JetBrains Mono (Google Fonts)

## Estructura

```
├── public/                  # Assets estáticos (favicon, imágenes)
│   └── images/machinery/    # Fotos del catálogo (colocar .webp aquí)
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, HeroMap, Services, Catalog, WhyUs,
│   │   │                    #   Process, RfqForm, Carriers, Faq
│   │   └── ui/              # Icon, FloatingButtons, CreditModal, WechatModal
│   ├── data/content.ts      # Todos los datos del sitio (interfaces TS)
│   ├── layouts/Layout.astro # HTML base, fuentes, meta tags
│   ├── pages/index.astro    # Ensamblaje de la página
│   └── styles/global.css    # Tailwind + @theme + clases custom
├── astro.config.mjs
├── skills-lock.json         # Lockfile del instalador de skills
└── .devin/skills/           # Agent skills (mattpocock/skills)
```

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Personalización rápida

Todo el contenido vive en **`src/data/content.ts`** (type-safe):

| Quiero cambiar... | Edita |
|---|---|
| Catálogo de maquinaria | `machines` (imágenes van en `public/images/machinery/`) |
| Servicios import/export | `importServices` / `exportServices` |
| Tipos de cambio FX | `fxRates` (hardcodeados, indicativos) |
| Garantías, pasos, navieras | `whyItems`, `steps`, `carriers` |
| FAQ | `faqs` |
| WhatsApp / teléfono / WeChat | `whatsappUrl`, `phone`, `wechatId` |
| Colores y fuentes | Bloque `@theme` en `src/styles/global.css` |

## Pendientes (placeholders)

- [ ] **WhatsApp**: `whatsappUrl` en `content.ts` es `#` (falta número real)
- [ ] **RFQ**: el form ya tiene `action="https://api.web3forms.com/submit"`; falta pegar el `access_key` (input hidden en `RfqForm.astro`) para activar el envío real
- [ ] **QR de WeChat**: colocar imagen real en `public/images/wechat-qr.png`
- [ ] Imágenes del catálogo en `public/images/machinery/*.webp` (hoy caen al placeholder de engranaje vía `onerror`)
- [ ] Selector de idioma ES/EN/中文 es decorativo
- [ ] Datos de contacto reales (teléfono y RFC son ficticios)
- [ ] FX: conectar a una API si se requiere dato real

## Agent skills

Este repo tiene instaladas las skills de [mattpocock/skills](https://github.com/mattpocock/skills) en `.devin/skills/` (`/grill-me`, `/tdd`, `/diagnosing-bugs`, `/to-spec`, etc.).

```bash
# Actualizar skills a la última versión
npx skills@latest update
```

---

© 2026 SinoMex Logística · Desarrollo por [RogersX](https://github.com/)
