# RIBA — Landing Page

Sitio multi-página (modelo híbrido) para **RIBA**, empresa de comercio exterior en el corredor China ⇄ México (importación/exportación, maquinaria industrial, aduanas, DDP puerta a puerta).

| Ruta | Contenido |
|---|---|
| `/` | Home resumen ejecutivo: hero + mapa, servicios, 4 máquinas destacadas, ruta, navieras, cotizador |
| `/importacion` | Detalle del servicio: auditoría en Shenzhen, FCL/LCL, padrón, despacho aduanal |
| `/exportacion` | Detalle del servicio: normativas chinas, Feria de Cantón, logística de salida |
| `/maquinaria` | Catálogo completo (15 equipos) con filtros por categoría y fichas técnicas |
| `/cotizar` | Página dedicada al formulario RFQ + contacto directo + FAQ |

Dirección de arte: **"Corporate Editorial & Naval Trust"** — editorial claro con bandas navy `#0B2D4A`, acento ámbar `#F59E0B` y ritmo que alterna secciones blancas/claras con franjas navy. Diseñado para transmitir solidez institucional a decisores +45.

## Stack

- **[Astro](https://astro.build)** (SSG) + TypeScript estricto
- **Tailwind CSS v4** vía `@tailwindcss/vite` — config CSS-first en `src/styles/global.css` (`@theme`), sin `tailwind.config`
- Tipografías: Playfair Display, Inter y JetBrains Mono (Google Fonts)

## Estructura

```
├── public/                  # Assets estáticos (favicon, imágenes)
│   └── images/
│       ├── machinery/       # Fotos del catálogo (colocar .webp aquí)
│       ├── services/        # Fotos de servicios (importacion/exportacion/maquinaria)
│       └── hero-port.webp   # Foto del hero (fallback navy si falta)
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, Services, Catalog, RouteBand, WhyUs,
│   │   │                    #   Process, RfqForm, Carriers, Faq
│   │   └── ui/              # Icon, FloatingButtons, CreditModal
│   ├── data/content.ts      # Todos los datos del sitio (interfaces TS)
│   ├── layouts/Layout.astro # HTML base, fuentes, meta tags
│   ├── pages/               # index + importacion + exportacion + maquinaria + cotizar
│   └── styles/global.css    # Tailwind + @theme + clases custom
├── astro.config.mjs
├── skills-lock.json         # Lockfile del instalador de skills
└── .devin/skills/           # Agent skills (mattpocock/skills)
```

> Ver [Estructura.md](Estructura.md) para la arquitectura detallada: tokens, convenciones, flujo de datos y mapa de componentes.

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
| Métricas del sitio | `stats` (⚠️ placeholders por confirmar) |
| Fotos de hero/servicios | `heroImage` / `serviceImages` (`public/images/`, fallback navy si faltan) |
| Tipos de cambio FX | `fxRates` (hardcodeados, indicativos) |
| Garantías, pasos, navieras | `whyItems`, `steps`, `carriers` |
| FAQ | `faqs` |
| WhatsApp / teléfono / WeChat | `whatsappUrl`, `phone`, `wechatId` |
| Colores y fuentes | Bloque `@theme` en `src/styles/global.css` |

## Pendientes (placeholders)

- [ ] **WhatsApp**: `whatsappUrl` en `content.ts` es `#` (falta número real)
- [ ] **RFQ**: el form ya tiene `action="https://api.web3forms.com/submit"`; falta pegar el `access_key` (input hidden en `RfqForm.astro`) para activar el envío real
- [ ] Imágenes del catálogo en `public/images/machinery/*.webp` (hoy caen al placeholder de engranaje vía `onerror`)
- [ ] Foto del hero en `public/images/hero-port.webp` y servicios en `public/images/services/*.webp` (hoy: fallback degradado navy)
- [ ] Métricas reales: `stats` en `content.ts` tiene placeholders (+120 clientes, +10 años)
- [ ] Datos de contacto reales (teléfono y RFC son ficticios)
- [ ] FX: conectar a una API si se requiere dato real

## Agent skills

Este repo tiene instaladas las skills de [mattpocock/skills](https://github.com/mattpocock/skills) en `.devin/skills/` (`/grill-me`, `/tdd`, `/diagnosing-bugs`, `/to-spec`, etc.).

```bash
# Actualizar skills a la última versión
npx skills@latest update
```

---

© 2026 RIBA · Desarrollo por [RogersX](https://github.com/)
