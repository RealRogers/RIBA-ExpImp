# Formulario RFQ (`RfqForm.astro`)

Documentación del cotizador de 3 pasos — su estructura, estado en JS y estado real de envío.

## Dónde se usa

El componente `src/components/sections/RfqForm.astro` se renderiza en dos páginas:

- `/` (home) — sección con `id="cotizar"`
- `/cotizar` — página dedicada

Son instancias independientes por página, así que los IDs internos no colisionan.

## Estructura DOM

| Elemento | Rol |
|---|---|
| `#rfq` | `<form>` con `action="https://api.web3forms.com/submit"`, `method="POST"`, `novalidate` |
| `[data-s="0"\|"1"\|"2"]` | Los 3 pasos; solo uno visible a la vez (clase `hide`) |
| `[data-k="op"\|"carga"\|"inc"]` | Grupos de chips `.chip` (`type="button"`, con `aria-pressed` que refleja la selección) |
| `input[name=access_key]` | Hidden, **vacío** — falta la key de Web3Forms |
| `input[name=operacion\|tipo_carga\|incoterm]` | Hidden que reciben la selección de chips |
| `#stepLbl` | Etiqueta "Paso N de 3" |
| `#err` | Errores de validación (`role="alert"` + `aria-live="polite"`) |
| `#back` / `#next` | Navegación (`type="button"`) |
| `#send` | **Sin `type`** → es `submit` implícito; es lo que dispara `onsubmit`. Si se le pone `type="button"` en una refactorización, el form dejará de "enviar" |
| `#ok` | Pantalla de éxito (reemplaza al form; `role="status"`) |

## Los 3 pasos

Las opciones vienen de `rfqOptions` en `src/data/content.ts`:

| Paso | Campo | Opciones |
|---|---|---|
| 1 — Tipo de operación | `op` | Importación, Exportación |
| 2 — Tipo de carga + Incoterm | `carga`, `inc` | Maquinaria / Materia Prima o Productos / Carga General · FOB / EXW / CIF / DDP / No lo sé |
| 3 — Datos de contacto | inputs `required` + `aria-label` | `nombre` (`autocomplete="name"`), `empresa` (`organization`), `correo` (`type="email"`), `tel` (`type="tel"`, filtrado a dígitos + `+` inicial) |

## Modelo de estado y flujo

El script (inline en `RfqForm.astro`, sin dependencias) mantiene:

- `step` (0–2): paso actual.
- `v`: objeto con la selección de cada grupo de chips (`v.op`, `v.carga`, `v.inc`).
- `H`: mapa de `data-k` → nombre del input hidden (`op`→`operacion`, `carga`→`tipo_carga`, `inc`→`incoterm`).

Flujo:

```
chip click ──► .on + aria-pressed + v[k] + input hidden (sync por mapa H)
#next      ──► valida paso actual ──► step++ ──► show()
#back      ──► step-- ──► show()
#send      ──► onsubmit: preventDefault → valida contacto → #ok (sin POST real)
```

1. **Click en chip**: quita `.on` a sus hermanos, activa `.on` en él, sincroniza `aria-pressed` (true/false), guarda el texto en `v[...]` y lo escribe en el input hidden correspondiente (para que viaje en el POST). Una vez elegido un chip **no se puede deseleccionar**, solo cambiar a otro del mismo grupo.
2. **`show()`**: alterna `hide` en los 3 pasos, actualiza `#stepLbl`, muestra `#back` solo desde el paso 2, `#next` en pasos 1–2 y `#send` solo en el paso 3; limpia `#err`.
3. **`#next`**: valida el paso actual y avanza.
4. **`#back`**: retrocede un paso (se oculta en el paso 1, así que nunca baja de 0).
5. **Submit (`#send`)**: ver "Estado real del envío".

## Payload que viajaría al activarse

Cuando se habilite el POST, el `FormData` incluirá:

| Campo | Origen | Ejemplo |
|---|---|---|
| `access_key` | hidden (vacío) | `""` |
| `operacion` | hidden ← chip `data-k="op"` | `"Importación"` |
| `tipo_carga` | hidden ← chip `data-k="carga"` | `"Maquinaria"` |
| `incoterm` | hidden ← chip `data-k="inc"` | `"DDP"` |
| `nombre`, `empresa`, `correo`, `tel` | inputs del paso 3 | — |

## Validación

| Momento | Regla | Mensaje |
|---|---|---|
| Paso 1 → 2 | `v.op` seleccionado | "Por favor, seleccione una opción." |
| Paso 2 → 3 | `v.carga` y `v.inc` seleccionados | "Por favor, seleccione tipo de carga e incoterm." |
| Submit | `nombre` ≥ 2 chars | "El nombre es requerido." |
| Submit | `empresa` ≥ 2 chars | "La empresa es requerida." |
| Submit | `correo` con formato `x@y.z` | "Por favor, ingrese un correo válido." |
| Submit | `tel` ≥ 10 dígitos (solo números) | "Teléfono: mínimo 10 dígitos." |

El form lleva `novalidate`, así que **toda** la validación es manual en JS. Los `required` no disparan validación nativa (el `novalidate` la suprime) pero sí lo anuncian a lectores de pantalla y habilitan `checkValidity()`/`:invalid`.

## Estado real del envío (importante)

**Hoy el formulario NO envía nada.** En `onsubmit`:

1. `e.preventDefault()` cancela el POST nativo.
2. Se validan los campos.
3. Si pasa, se oculta `#rfq` y se muestra `#ok` ("¡Solicitud enviada!").

Es decir: la pantalla de éxito aparece **sin que se haya hecho ningún request**. Además `access_key` está vacío, así que aunque se quitara el `preventDefault`, Web3Forms rechazaría el POST. Es un stub visual completo.

## Para activar el envío real (pendiente)

1. Crear cuenta en [web3forms.com](https://web3forms.com) y pegar la key en `input[name=access_key]` (`RfqForm.astro`, línea con el TODO).
2. Elegir un modo de envío:
   - **Submit nativo**: quitar `e.preventDefault()`; Web3Forms redirige a su página de gracias (o a la URL en un campo hidden `redirect`).
   - **AJAX (recomendado, conserva la UX actual)**: en `onsubmit`, tras validar, hacer `fetch(form.action, { method: 'POST', body: new FormData(form) })`; mostrar `#ok` solo si la respuesta es `success`, y un error en `#err` si falla.
3. Opcional: campos hidden extra de Web3Forms (`subject`, `from_name`, `botcheck` anti-spam).

## Limitaciones conocidas

- Los chips, una vez elegidos, **no se pueden deseleccionar** — solo cambiar de opción dentro del grupo. Patrón "radio" implementado como botones con `aria-pressed`; si se quisiera semántica de radio nativa habría que cambiarlos a `role="radio"` + `aria-checked` o a `<input type="radio">` reales.
- Los inputs usan `aria-label` (no hay `<label>` visible por diseño).
- `tel` filtra el input en vivo: solo dígitos y `+` inicial (`maxlength="17"` cubre E.164). `type="tel"` solo da el teclado numérico en móvil — en desktop no bloquea texto por sí mismo.
- El `id="cotizar"` de la sección es un ancla residual: el nav ya enlaza a la página `/cotizar`, no al ancla. Sirve para deep-links tipo `/#cotizar`.
- El header/footer del `.box` usa `hover:transform-none!` para evitar el lift de `.box` en el formulario.

## Archivos relacionados

- `src/components/sections/RfqForm.astro` — markup + script.
- `src/data/content.ts` → `rfqOptions` — opciones de los chips.
- `src/styles/global.css` → `.chip`, `.chip.on`, `.inp`, `.btn`, `.hide` — estilos.
