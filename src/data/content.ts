// Datos de contenido del sitio. Edita aquí textos, catálogo y enlaces.

// TODO: reemplazar por la URL real cuando exista número, ej.
// `https://wa.me/5215512345678?text=${encodeURIComponent('Hola, quiero cotizar una importación')}`
export const whatsappUrl = '#';
export const wechatId = 'riba_cn';
export const phone = '+52 55 0000 0000';

export type MachineCategory = 'plasticos' | 'metalmecanica' | 'empaque';

export const machineCategories: { id: MachineCategory | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'plasticos', label: 'Plásticos' },
  { id: 'metalmecanica', label: 'Metalmecánica' },
  { id: 'empaque', label: 'Empaque' },
];

export interface Machine {
  name: string;
  category: MachineCategory;
  voltage: string;
  transit: string;
  /** Ficha técnica resumida. */
  specs: string[];
  /** Path bajo /public. Si el archivo no existe, la card muestra el placeholder. */
  image: string;
}

export const machines: Machine[] = [
  // Plásticos
  { name: 'Inyectoras de Plástico', category: 'plasticos', voltage: '220V / 440V', transit: '35–45 días', specs: ['Fuerza de cierre 90–3,000 t', 'Tornillo 25–120 mm', 'Hidráulicas o servoeléctricas'], image: '/images/machinery/inyectoras-plastico.webp' },
  { name: 'Sopladoras PET', category: 'plasticos', voltage: '220V / 440V', transit: '35–45 días', specs: ['1–8 cavidades', 'Botellas 250 ml – 20 L', 'Semi o automáticas'], image: '/images/machinery/sopladoras-pet.webp' },
  { name: 'Granuladores de Reciclaje', category: 'plasticos', voltage: '440V', transit: '40–50 días', specs: ['300–2,000 kg/h', 'Cuchillas SKD-11', 'Para PE, PP, PET'], image: '/images/machinery/granuladores-reciclaje.webp' },
  { name: 'Extrusoras de Filme', category: 'plasticos', voltage: '440V', transit: '40–55 días', specs: ['Mono o multicapa', 'Ancho 600–3,000 mm', 'Hasta 250 kg/h'], image: '/images/machinery/extrusoras-filme.webp' },
  { name: 'Termoformadoras', category: 'plasticos', voltage: '220V / 440V', transit: '35–45 días', specs: ['Área útil hasta 800×600 mm', 'Con troquel y apilador', 'PS, PET, PVC'], image: '/images/machinery/termoformadoras.webp' },
  // Metalmecánica
  { name: 'Cortadoras Láser CNC', category: 'metalmecanica', voltage: '220V / 440V', transit: '30–40 días', specs: ['Fibra 1–12 kW', 'Mesa 3015 / 6020', 'Corta acero, inox, aluminio'], image: '/images/machinery/cortadoras-laser-cnc.webp' },
  { name: 'Plegadoras Hidráulicas CNC', category: 'metalmecanica', voltage: '440V', transit: '35–45 días', specs: ['63–600 t', 'Hasta 6 m de largo', 'Control DA53T/DA66T'], image: '/images/machinery/plegadoras-hidraulicas.webp' },
  { name: 'Tornos CNC', category: 'metalmecanica', voltage: '220V / 440V', transit: '35–45 días', specs: ['Ø giro 360–800 mm', 'Torreta 8–12 posiciones', 'Control Fanuc/GSK'], image: '/images/machinery/tornos-cnc.webp' },
  { name: 'Fresadoras CNC', category: 'metalmecanica', voltage: '220V / 440V', transit: '35–45 días', specs: ['Mesa hasta 1,200 mm', 'Husillo 8,000–24,000 rpm', '3 y 4 ejes'], image: '/images/machinery/fresadoras-cnc.webp' },
  { name: 'Soldadoras Robotizadas', category: 'metalmecanica', voltage: '440V', transit: '40–55 días', specs: ['Robot 6 ejes', 'MIG/TIG/Láser', 'Posicionador incluido'], image: '/images/machinery/soldadoras-robotizadas.webp' },
  // Empaque
  { name: 'Líneas de Envasado', category: 'empaque', voltage: '220V', transit: '40–50 días', specs: ['Vertical o flowpack', '30–200 sobres/min', 'Doypack y almohada'], image: '/images/machinery/lineas-envasado.webp' },
  { name: 'Llenadoras de Líquidos', category: 'empaque', voltage: '220V', transit: '40–50 días', specs: ['2–12 boquillas', '50 ml – 5 L', 'Viscosos y espumosos'], image: '/images/machinery/llenadoras-liquidos.webp' },
  { name: 'Etiquetadoras Automáticas', category: 'empaque', voltage: '220V', transit: '35–45 días', specs: ['Envolvente / frontal', 'Hasta 200 env/min', 'Sensor transparente'], image: '/images/machinery/etiquetadoras.webp' },
  { name: 'Empacadoras al Vacío', category: 'empaque', voltage: '220V', transit: '35–45 días', specs: ['Cámara simple/doble', 'Barra 400–800 mm', 'Bomba 20–100 m³/h'], image: '/images/machinery/empacadoras-vacio.webp' },
  { name: 'Termoencogedoras de Túnel', category: 'empaque', voltage: '220V', transit: '35–45 días', specs: ['Hasta 25 pzas/min', 'Film PVC/POF', 'Temperatura digital'], image: '/images/machinery/termoencogedoras.webp' },
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

export const machineryServices: string[] = [
  'Inyectoras, Láser CNC y Envasado',
  'Adaptadas a voltaje 220V/440V - 60Hz',
  'Cumplimiento estricto de normativas (NOM)',
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
  { icon: 'truck', title: 'Modalidad Puerta a Puerta DDP', desc: 'Todo resuelto hasta su bodega.' },
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
  { q: '¿Necesita padrón de importadores propio?', a: 'Si importa a su nombre, sí. Si aún no lo tiene, le asesoramos para tramitarlo u operar bajo nuestro esquema.' },
  { q: '¿Cómo garantizan que la maquinaria funcione en México?', a: 'Validamos voltaje (220V/440V), 60Hz, cumplimiento de NOMs y probamos el equipo en fábrica antes del embarque.' },
  { q: '¿Cuánto tarda un contenedor marítimo de China a México?', a: 'Entre 30 y 45 días de tránsito puerto a puerto, más despacho aduanal y entrega.' },
  { q: '¿Emiten factura fiscal mexicana (CFDI)?', a: 'Sí, emitimos CFDI por todos nuestros servicios.' },
];

export const rfqOptions = {
  op: ['Importación', 'Exportación'],
  carga: ['Maquinaria', 'Materia Prima o Productos', 'Carga General'],
  inc: ['FOB', 'EXW', 'CIF', 'DDP', 'No lo sé'],
} as const;

// ── Páginas de profundidad ────────────────────────────────────────────────────

export interface DetailStep {
  title: string;
  desc: string;
}

export const importSteps: DetailStep[] = [
  { title: 'Sourcing y auditoría en fábrica', desc: 'Verificamos al proveedor in situ en Shenzhen, Guangzhou o Yiwu: existencia legal, capacidad real y licencias de exportación.' },
  { title: 'Negociación y muestras', desc: 'Negociamos precio, incoterm y condiciones de pago. Coordinamos el envío de muestras para su validación en México.' },
  { title: 'Producción e inspección', desc: 'Supervisión durante la fabricación con inspección de calidad pre-embarque: reporte fotográfico y video antes de liberar el pago final.' },
  { title: 'Flete FCL / LCL', desc: 'Contenedor completo (FCL) o carga consolidada (LCL) desde nuestras bodegas en Shenzhen, Ningbo y Yiwu hacia Manzanillo o Lázaro Cárdenas.' },
  { title: 'Padrón de importadores y aduana', desc: 'Le asesoramos para tramitar su padrón, o importamos bajo nuestro esquema. Clasificación arancelaria, NOMs y pago de impuestos ante el SAT.' },
  { title: 'Entrega puerta a puerta', desc: 'Modalidad DDP: desde la fábrica en China hasta su bodega en México, sin sorpresas arancelarias.' },
];

export const exportPoints: DetailStep[] = [
  { title: 'Normativas fitosanitarias y sanitarias chinas', desc: 'Gestión de certificados fito-zoosanitarios, registros de establecimiento y requisitos de la aduana china (GACC) para alimentos, agave, aguacate y más.' },
  { title: 'Feria de Cantón y ferias comerciales', desc: 'Enlace comercial en Canton Fair, China International Import Expo y ferias especializadas para posicionar su producto ante compradores asiáticos.' },
  { title: 'Logística de salida', desc: 'Empaque de exportación certificado, etiquetado bilingüe, flete marítimo/aéreo y documentación (BL, certificado de origen, packing list).' },
  { title: 'Destino y canales de venta', desc: 'Asesoría sobre mercados receptores en China: plataformas (JD, Tmall), distribuidores locales y apertura de clientes recurrentes.' },
];
