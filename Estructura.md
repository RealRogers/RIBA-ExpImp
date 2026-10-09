# Estructura del Proyecto

Documentación de la arquitectura de la landing **SinoMex Logística** (Astro 7 + Tailwind CSS v4 + TypeScript).

```
RIBA-Importaciones/
│
├── public/                          # Assets estáticos (se copian tal cual a dist/)
│   ├── favicon.svg                  # Ícono "SM" (naranja sobre navy)
│   └── images/
│       ├── machinery/               # Fotos del catálogo — colocar .webp aquí
│       └── wechat-qr.png            # ⚠️ Pendiente: QR real de WeChat
│
├── src/
│   ├── pages/
│   │   └── index.astro              # Única página. Ensambla secciones + script de modales
│   │
│   ├── layouts/
│   │   └── Layout.astro             # <html> base: meta SEO, OG tags, Google Fonts, favicon
│   │
│   ├── styles/
│   │   └── global.css               # @import "tailwindcss" + @theme (tokens) + clases custom
│   │
│   ├── data/
│   │   └── content.ts               # ÚNICA fuente de datos del sitio (type-safe)
│   │
│   └── components/
│       ├── layout/                  # Chrome del sitio
│       │   ├── Header.astro         # Barra superior + nav sticky + menú móvil hamburguesa
│       │   └── Footer.astro         # Datos fiscales, oficinas, contacto, crédito RogersX
│       │
│       ├── sections/                # Secciones de la landing (en orden de aparición)
│       │   ├── Hero.astro           # Headline, CTAs, badges de confianza
│       │   ├── HeroMap.astro        # SVG animado ruta Ningbo→Manzanillo (animateMotion)
│       │   ├── Services.astro       # Grid: Importación / Exportación / +500 / widget FX
│       │   ├── Catalog.astro        # Cards de maquinaria (4) con fallback de engranaje
│       │   ├── WhyUs.astro          # 4 garantías numeradas con íconos
│       │   ├── Process.astro        # Timeline de 4 fases (línea conectora responsive)
│       │   ├── RfqForm.astro        # Cotizador de 3 pasos (chips + form + validación)
│       │   ├── Carriers.astro       # Wordmarks SVG de navieras en grises
│       │   └── Faq.astro            # Acordeón de preguntas frecuentes
│       │
│       └── ui/                      # Elementos reutilizables / overlays
│           ├── Icon.astro           # Mapa de íconos SVG (check, shield, clip, file, truck, gear, whatsapp)
│           ├── FloatingButtons.astro# Botones flotantes WeChat + WhatsApp (fixed bottom-right)
│           ├── CreditModal.astro    # Modal "Sitio por RogersX"
│           └── WechatModal.astro    # Modal con <img src="/images/wechat-qr.png">
│
├── astro.config.mjs                 # Astro + plugin @tailwindcss/vite
├── package.json                     # Scripts: dev / build / preview
├── tsconfig.json                    # Extiende astro/tsconfigs/strict
├── .gitignore                       # node_modules, dist, .astro, etc.
├── README.md                        # Overview + guía de personalización
├── Estructura.md                    # Este archivo
├── skills-lock.json                 # Lockfile de las agent skills instaladas
│
├── .devin/skills/                   # 38 agent skills (mattpocock/skills) — ver README
│
├── dist/                            # Build de producción (generado, ignorado en git)
└── node_modules/                    # Dependencias (ignorado en git)
```

## Flujo de datos

```
src/data/content.ts  ──►  componentes .astro  ──►  HTML estático en dist/
   (TypeScript)          (render build-time)        (sin JS de renderizado)
```

Todo el contenido se renderiza **en build-time**. El JavaScript en el cliente solo existe para interacciones.

## `src/data/content.ts`

| Export | Tipo | Usado por |
|---|---|---|
| `whatsappUrl` | `string` | Header, Footer (móvil), FloatingButtons — ⚠️ `'#'` con TODO |
| `wechatId`, `phone` | `string` | Footer, WechatModal |
| `machines` | `Machine[]` | Catalog |
| `importServices`, `exportServices` | `string[]` | Services |
| `fxRates` | `FxRate[]` | Services (widget FX indicativo) |
| `whyItems` | `WhyItem[]` | WhyUs |
| `steps` | `Step[]` | Process |
| `carriers` | `Carrier[]` | Carriers (`svg` interno vía `set:html`) |
| `faqs` | `FaqItem[]` | Faq |
| `rfqOptions` | `as const` | RfqForm (chips de los 3 pasos) |

## Interactividad (JS cliente)

| Interacción | Script vive en |
|---|---|
| Menú móvil (toggle + `aria-expanded`) | `Header.astro` |
| Acordeón FAQ | `Faq.astro` |
| RFQ: chips on/off, pasos 1→3, validación, sync a inputs hidden | `RfqForm.astro` |
| Modales: abrir, cerrar con ✕ / click-outside / `Escape` | `index.astro` |
| Animación ruta marítima | SVG nativo (`animateMotion`), sin JS |

## Convenciones

- **Tailwind v4**: sin `tailwind.config.*`. Los tokens van en `@theme` dentro de `global.css` (`--color-ink`, `--color-deep`, `--color-card`, `--color-brand`, `--color-brand-dark`, `--font-serif`).
- **Important modifier**: sintaxis v4 — al **final** de la clase (`p-0!`, `py-2!`, `hover:transform-none!`).
- **Clases custom** (no Tailwind): `.btn`, `.cta`, `.ghost`, `.chip`, `.inp`, `.hide`, `.h`, `.kick`, `.box`, `.dash`, `.mono`, `.ic` — definidas en `global.css`.
- **Scripts en `.astro`**: son módulos bundled por Astro; se ejecutan una vez por página.
- **`set:html`**: usado en `Icon.astro` y `Carriers.astro` para inyectar markup SVG interno.
- **Fallbacks de imagen**: `Catalog.astro` usa `onerror="this.remove()"` para ocultar `<img>` si el `.webp` no existe y mostrar el placeholder de engranaje.

## Integraciones preparadas (pendientes)

- **RFQ → Web3Forms**: `RfqForm.astro` ya tiene `action`, `method="POST"`, `access_key` (hidden, vacío) y campos hidden `operacion`/`tipo_carga`/`incoterm`. Solo falta la key.
- **WhatsApp**: cambiar `whatsappUrl` en `content.ts` a `https://wa.me/<num>?text=<msg>`.
- **QR WeChat**: colocar `public/images/wechat-qr.png`.

## Dependencias

| Paquete | Uso |
|---|---|
| `astro` ^7.3 | Framework SSG |
| `tailwindcss` ^4.3 | Motor de utilidades |
| `@tailwindcss/vite` ^4.3 | Plugin Vite que conecta Tailwind con Astro |
