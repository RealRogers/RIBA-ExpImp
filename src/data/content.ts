// Datos de contenido del sitio. Edita aquí textos, catálogo y enlaces.

// TODO: reemplazar por la URL real cuando exista número, ej.
// `https://wa.me/5215512345678?text=${encodeURIComponent('Hola, quiero cotizar una importación')}`
export const whatsappUrl = '#';
export const wechatId = 'riba_cn';
export const phone = '+52 55 0000 0000';

export interface Machine {
  name: string;
  voltage: string;
  transit: string;
  /** Path bajo /public. Si el archivo no existe, la card muestra el placeholder. */
  image: string;
}

export const machines: Machine[] = [
  { name: 'Inyectoras de Plástico', voltage: '220V / 440V', transit: '35–45 días', image: '/images/machinery/inyectoras-plastico.webp' },
  { name: 'Líneas de Envasado', voltage: '220V', transit: '40–50 días', image: '/images/machinery/lineas-envasado.webp' },
  { name: 'Cortadoras Láser CNC', voltage: '220V / 440V', transit: '30–40 días', image: '/images/machinery/cortadoras-laser-cnc.webp' },
  { name: 'Maquinaria Agrícola', voltage: '440V', transit: '40–55 días', image: '/images/machinery/maquinaria-agricola.webp' },
];

export const importServices: string[] = [
  'Sourcing de proveedores verificados',
  'Auditoría e inspección en fábrica',
  'Flete marítimo/aéreo FCL/LCL',
  'Liberación aduanal mexicana',
];

export const exportServices: string[] = [
  'Cumplimiento de normativas chinas',
  'Certificación de empaque',
  'Enlace comercial en ferias asiáticas',
  'Flete de exportación',
];

// Placeholders a confirmar con datos reales de la empresa.
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '+500', label: 'contenedores manejados' },
  { value: '+120', label: 'clientes industriales' },
  { value: '+10', label: 'años de experiencia' },
];

// Fotos de secciones. Si el archivo no existe en /public, la tarjeta muestra el fallback navy.
export const heroImage = '/images/hero-port.webp';

export interface ServiceCard {
  image: string;
  alt: string;
}

export const serviceImages: Record<'import' | 'export' | 'machinery', ServiceCard> = {
  import: { image: '/images/services/importacion.webp', alt: 'Buque portacontenedores en puerto de origen' },
  export: { image: '/images/services/exportacion.webp', alt: 'Carga aérea y marítima de exportación' },
  machinery: { image: '/images/services/maquinaria.webp', alt: 'Maquinaria industrial en planta' },
};

export interface FxRate {
  pair: string;
  rate: string;
  change: string;
  up: boolean;
}

// Valores indicativos hardcodeados; sustituir por una API de FX si se requiere dato real.
export const fxRates: FxRate[] = [
  { pair: 'USD/MXN', rate: '17.42', change: '▼0.21%', up: false },
  { pair: 'USD/CNY', rate: '7.18', change: '▲0.08%', up: true },
  { pair: 'CNY/MXN', rate: '2.43', change: '▲0.15%', up: true },
];

export type WhyIcon = 'shield' | 'clip' | 'file' | 'truck';

export interface WhyItem {
  icon: WhyIcon;
  title: string;
  desc: string;
}

export const whyItems: WhyItem[] = [
  { icon: 'shield', title: 'Auditoría Legal de Proveedores en China', desc: 'Verificamos existencia legal y licencias. Evita fraudes.' },
  { icon: 'clip', title: 'Control de Calidad Pre-Embarque', desc: 'Reporte fotográfico y video antes de pagar el saldo.' },
  { icon: 'file', title: 'Gestión Aduanal Especializada', desc: 'Cumplimiento de NOMs e impuestos SAT.' },
  { icon: 'truck', title: 'Modalidad Puerta a Puerta DDP', desc: 'Todo resuelto hasta tu bodega.' },
];

export interface Step {
  title: string;
  desc: string;
}

export const steps: Step[] = [
  { title: 'Solicitud y Viabilidad', desc: 'Producto, fracción arancelaria y costos.' },
  { title: 'Negociación y Muestra', desc: 'Precio negociado y muestra validada.' },
  { title: 'Producción e Inspección', desc: 'Supervisión de fabricación y calidad.' },
  { title: 'Embarque y Despacho Aduanal', desc: 'Flete, aduana y entrega.' },
];

export interface Carrier {
  name: string;
  /** Wordmark SVG interno en escala de grises; sustituir por el logo oficial. */
  svg: string;
}

export const carriers: Carrier[] = [
  { name: 'MAERSK', svg: '<text x="60" y="26" text-anchor="middle" font-family="Arial" font-weight="700" font-size="17" letter-spacing="2">MAERSK</text><path d="M60 3l3 4h-6z"/>' },
  { name: 'COSCO', svg: '<text x="60" y="27" text-anchor="middle" font-family="Georgia" font-weight="700" font-size="20" letter-spacing="3">COSCO</text>' },
  { name: 'EVERGREEN', svg: '<text x="60" y="25" text-anchor="middle" font-family="Arial" font-weight="700" font-size="13" letter-spacing="1">EVERGREEN</text><rect x="18" y="29" width="84" height="2"/>' },
  { name: 'HAPAG-LLOYD', svg: '<text x="60" y="26" text-anchor="middle" font-family="Arial" font-weight="700" font-size="12">Hapag-Lloyd</text>' },
  { name: 'MSC', svg: '<text x="60" y="27" text-anchor="middle" font-family="Arial" font-weight="900" font-size="22" font-style="italic">MSC</text>' },
  { name: 'ONE', svg: '<text x="60" y="27" text-anchor="middle" font-family="Arial" font-weight="900" font-size="22" letter-spacing="3">ONE</text>' },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  { q: '¿Necesito padrón de importadores propio?', a: 'Si importas a tu nombre, sí. Si aún no lo tienes, te asesoramos para tramitarlo u operar bajo nuestro esquema.' },
  { q: '¿Cómo garantizan que la maquinaria funcione en México?', a: 'Validamos voltaje (220V/440V), 60Hz, cumplimiento de NOMs y probamos el equipo en fábrica antes del embarque.' },
  { q: '¿Cuánto tarda un contenedor marítimo de China a México?', a: 'Entre 30 y 45 días de tránsito puerto a puerto, más despacho aduanal y entrega.' },
  { q: '¿Emiten factura fiscal mexicana (CFDI)?', a: 'Sí, emitimos CFDI por todos nuestros servicios.' },
];

export const rfqOptions = {
  op: ['Importación', 'Exportación'],
  carga: ['Maquinaria', 'Materia Prima o Productos', 'Carga General'],
  inc: ['FOB', 'EXW', 'CIF', 'DDP', 'No lo sé'],
} as const;
