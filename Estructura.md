# Estructura del Proyecto

Documentación de la arquitectura de la landing **RIBA** (Astro 7 + Tailwind CSS v4 + TypeScript).

Dirección de arte: **Estilo 1 "Corporate Editorial & Naval Trust"** — editorial claro con bandas navy `#0B2D4A`, acento ámbar `#F59E0B`, tipografía Playfair Display. Ritmo alternado: navy (header, hero, ruta, footer) / claro (servicios, catálogo, proceso, FAQ).

```
RIBA-Importaciones/
│
├── public/                          # Assets estáticos (se copian tal cual a dist/)
│   ├── favicon.svg                  # Monograma "R" (ámbar sobre navy)
│   └── images/
│       ├── machinery/               # Vacío (.gitkeep) — colocar .webp del catálogo aquí
│       ├── services/                # Fotos de servicios (importacion/exportacion/maquinaria .webp)
│       ├── hero-port.webp           # ⚠️ Pendiente: foto del hero (con fallback navy si falta)
│       └── wechat-qr.png            # ⚠️ Pendiente: QR real de WeChat (no existe aún)
│
├── src/
│   ├── pages/                       # Modelo híbrido: home resumen + páginas de profundidad
│   │   ├── index.astro              # Home: Hero, Services, Catalog(4), RouteBand, Carriers, RFQ
│   │   ├── importacion.astro        # Servicio Importación: paso a paso + WhyUs + Process
│   │   ├── exportacion.astro        # Servicio Exportación: normativas, ferias, logística
│   │   ├── maquinaria.astro         # Catálogo completo: filtros por categoría + fichas
│   │   └── cotizar.astro            # RFQ dedicado + contacto directo + FAQ
│   │
│   ├── layouts/
│   │   └── Layout.astro             # <html> base: SEO/OG, fuentes, favicon + modales y botones flotantes globales
│   │
│   ├── styles/
│   │   └── global.css               # @import "tailwindcss" + @theme (tokens) + clases custom
│   │
│   ├── data/
│   │   └── content.ts               # ÚNICA fuente de datos del sitio (type-safe)
│   │
│   └── components/
│       ├── layout/                  # Chrome del sitio
│       │   ├── Header.astro         # Topbar (no sticky, solo ES) + nav sticky + menú móvil ☰/✕
│       │   └── Footer.astro         # Datos fiscales, oficinas, contacto, crédito RogersX
│       │
│       ├── sections/                # Secciones compartidas entre páginas
│       │   ├── Hero.astro           # Foto full-bleed (fallback), headline, CTAs + mapa SVG animado a la der.
│       │   ├── Services.astro       # 3 tarjetas (Import/Export/Maquinaria) + fila de métricas
│       │   ├── Catalog.astro        # Cards de maquinaria (props: limit + fullHref) con fallback
│       │   ├── RouteBand.astro      # Franja navy: copy de la ruta + widget FX (el mapa vive en Hero)
│       │   ├── WhyUs.astro          # 4 garantías numeradas con íconos
│       │   ├── Process.astro        # Timeline de 4 fases (línea conectora responsive)
│       │   ├── RfqForm.astro        # Cotizador de 3 pasos (chips + form + validación)
│       │   ├── Carriers.astro       # Wordmarks SVG de navieras en grises
│       │   └── Faq.astro            # Acordeón de preguntas frecuentes
│       │
│       └── ui/                      # Elementos reutilizables / overlays
│           ├── Icon.astro           # Mapa de íconos SVG (check, shield, clip, file, truck, gear, whatsapp, ship, plane)
│           ├── FloatingButtons.astro# Botones flotantes WeChat + WhatsApp (fixed bottom-right)
│           ├── CreditModal.astro    # Modal "Sitio por RogersX"
│           └── WechatModal.astro    # Modal con <img src="/images/wechat-qr.png">
│
├── astro.config.mjs                 # Astro + plugin @tailwindcss/vite
├── package.json                     # Scripts: dev / build / preview
├── package-lock.json                # Versiones exactas de dependencias
├── tsconfig.json                    # Extiende astro/tsconfigs/strict
├── .gitignore                       # node_modules, dist, .astro, etc.
├── README.md                        # Overview + guía de personalización
├── Estructura.md                    # Este archivo
├── skills-lock.json                 # Lockfile de las agent skills instaladas
│
├── .devin/skills/                   # 38 agent skills (mattpocock/skills) — ver README
│
├── .astro/                          # Tipos generados por Astro (generado, ignorado en git)
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
| `whatsappUrl` | `string` | Header, FloatingButtons, /cotizar — ⚠️ `'#'` con TODO |
| `wechatId`, `phone` | `string` | Footer, WechatModal, /cotizar |
| `machines` | `Machine[]` (15, con `category` + `specs`) | Catalog (home, `limit=4`) / maquinaria.astro (completo + filtros) |
| `machineCategories` | filtros | /maquinaria (chips) |
| `importSteps`, `exportPoints` | `DetailStep[]` | /importacion, /exportacion |
| `machineryServices` | `string[]` | Services (tarjeta Maquinaria) |
| `importServices`, `exportServices` | `string[]` | Services / exportacion |
| `stats` | `Stat[]` | Services (fila de métricas — placeholders por confirmar) |
| `serviceImages`, `heroImage` | rutas `/images/...` | Services / Hero (fallback navy si el archivo no existe) |
| `fxRates` | `FxRate[]` | RouteBand (widget FX indicativo) |
| `whyItems` | `WhyItem[]` | WhyUs |
| `steps` | `Step[]` | Process |
| `carriers` | `Carrier[]` | Carriers (`svg` interno vía `set:html`) |
| `faqs` | `FaqItem[]` | Faq |
| `rfqOptions` | `as const` | RfqForm (chips de los 3 pasos) |

## Interactividad (JS cliente)

| Interacción | Script vive en |
|---|---|
| Menú móvil (toggle ☰/✕ + `aria-expanded` + cierre con `Escape`) | `Header.astro` |
| Acordeón FAQ | `Faq.astro` |
| RFQ: chips on/off, pasos 1→3, validación, sync a inputs hidden | `RfqForm.astro` |
| Filtros de catálogo por categoría | `maquinaria.astro` |
| Modales: abrir, cerrar con ✕ / click-outside / `Escape` | `Layout.astro` (global) |
| Animación ruta marítima | SVG nativo (`animateMotion`), sin JS |

## Convenciones

- **Tailwind v4**: sin `tailwind.config.*`. Los tokens van en `@theme` dentro de `global.css` (`--color-ink` navy `#0B2D4A`, `--color-deep` `#0A2438`, `--color-card` blanco, `--color-brand` ámbar `#F59E0B`, `--color-brand-dark`, `--color-mist` `#F1F5F9`, `--color-line` `#E2E8F0`, `--font-serif` Playfair Display).
- **Tema claro editorial**: el `body` es blanco y las secciones alternan fondo blanco / `bg-mist` con bandas navy (`bg-ink`/`bg-deep`). `.h` y `.kick` **no fijan color**: se declara por contexto (`text-ink` en claro, `text-white`/`text-amber-400` en navy).
- **Important modifier**: sintaxis v4 — al **final** de la clase (`p-0!`, `py-2!`, `hover:transform-none!`).
- **Clases custom** (no Tailwind): `.btn`, `.cta` (ámbar, texto navy), `.ghost` (sobre navy), `.ghostl` (sobre claro), `.chip`, `.inp`, `.hide`, `.h`, `.kick`, `.box` (tarjeta blanca con sombra sutil), `.dash`, `.mono`, `.ic` — definidas en `global.css`.
- **Scripts en `.astro`**: son módulos bundled por Astro; se ejecutan una vez por página.
- **`set:html`**: usado en `Icon.astro` y `Carriers.astro` para inyectar markup SVG interno.
- **Fallbacks de imagen**: `Catalog.astro`, `Services.astro` y `Hero.astro` usan `onerror="this.remove()"` para ocultar `<img>` si el archivo no existe y mostrar el placeholder navy.
- **Sticky solo en el nav**: el topbar (ubicaciones) hace scroll; el nav permanece fijo. Los anclas (`section[id]`, `article[id]`) compensan con `scroll-margin-top: 5rem`.
- **Táctil**: `@media (hover: none)` desactiva el lift de `.box` para evitar hover fantasma en móviles. Chips de contenido largo se acortan bajo `sm` (ej. chip de voltaje en `Catalog`).

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
