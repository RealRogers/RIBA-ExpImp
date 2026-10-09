# SinoMex Logística — Landing Page

Sitio estático de una sola página para **SinoMex Logística**, empresa de comercio exterior en el corredor China ⇄ México (importación/exportación, maquinaria industrial, aduanas, DDP puerta a puerta).

Sin build, sin dependencias npm: solo HTML + CSS + JS.

## Stack

- **Tailwind CSS** vía [Play CDN](https://cdn.tailwindcss.com) con config propia en `tailwind.config.js`
- **CSS custom** en `styles.css` (botones, chips, cards, animación de ruta)
- **JavaScript vanilla** en `script.js` — todo el contenido dinámico se genera desde arrays (catálogo, FAQ, navieras, pasos)
- Tipografías: Fraunces, Inter y JetBrains Mono (Google Fonts)

## Estructura

```
├── index.html           # Markup de toda la página
├── styles.css           # Estilos propios (.btn, .cta, .box, .chip, .kick, etc.)
├── tailwind.config.js   # Colores (ink, deep, card, brand) y fuentes — carga tras el CDN
├── script.js            # Lógica: catálogo, cotizador RFQ, FAQ, modales, QR
├── skills-lock.json     # Lockfile del instalador de skills
└── .devin/skills/       # Agent skills (mattpocock/skills)
```

## Ver el sitio

Abrir `index.html` directamente en el navegador, o servir la carpeta:

```bash
npx serve .
```

## Personalización rápida

| Quiero cambiar... | Dónde |
|---|---|
| Colores / fuentes | `tailwind.config.js` |
| Catálogo de maquinaria | Array `M` en `script.js` (el 4º elemento es la URL de imagen, hoy `null` = placeholder) |
| Preguntas frecuentes | Array `F` en `script.js` |
| Logos de navieras | Objeto `L` en `script.js` (wordmarks SVG en grises) |
| Pasos del proceso | `insertAdjacentHTML` de `#steps` en `script.js` |

## Pendientes (placeholders)

- [ ] Botones de **WhatsApp** y **aviso de privacidad** apuntan a `#`
- [ ] El **cotizador RFQ** valida pero no envía a ningún backend — solo muestra la confirmación
- [ ] El **QR de WeChat** es decorativo (generado proceduralmente, no escaneable)
- [ ] Selector de idioma **ES/EN/中文** no tiene funcionalidad
- [ ] Imágenes del catálogo de maquinaria (URLs en el array `M`)
- [ ] Datos de contacto reales (teléfono `+52 55 0000 0000` y RFC son ficticios)
- [ ] Tipos de cambio FX hardcodeados (no hay API)

## Agent skills

Este repo tiene instaladas las skills de [mattpocock/skills](https://github.com/mattpocock/skills) en `.devin/skills/` (`/grill-me`, `/tdd`, `/diagnosing-bugs`, `/to-spec`, etc.).

```bash
# Actualizar skills a la última versión
npx skills@latest update
```

---

© 2026 SinoMex Logística · Desarrollo por [RogersX](https://github.com/)
