/**
 * ÚNICA FUENTE DE VERDAD de la presentación.
 *
 * Estructura: presentación → grupos (radios del hub) → slides.
 * Cada slide tiene un `type` que el <Stage> mapea a un componente.
 * Los contenidos visuales (fotos/videos) usan `placeholders` numerados
 * que se reemplazarán más adelante.
 *
 * El orden de `groups` (y de `slides` dentro de cada grupo) define la
 * secuencia global 1 → N que recorren las flechas ← →.
 *
 * Esta página deriva del proyecto "Mejores Prácticas Monterrey" y conserva
 * únicamente la sección Regreso a Casa, con dos slides de datos añadidas
 * después del video.
 */

export const META = {
  title: "Regreso a Casa",
  subtitle: "EXATEC Monterrey",
  logo: "/brand/logo-rac-blanco.png",
};

export const GROUPS = [
  {
    id: "regreso",
    name: "Regreso a Casa",
    short: "RAC",
    // posición orbital en el hub (se afina en Checkpoint 2)
    hub: { angle: -90 },
    slides: [
      {
        id: "rac-portada",
        type: "cover",
        title: "Regreso a Casa",
        kicker: "EXATEC · Monterrey",
      },
      {
        id: "rac-video-viejitos",
        type: "video",
        title: "Video · Regreso a Casa",
        placeholders: [{ n: 1, kind: "video", note: "Video RAC (egresados)", src: "/media/ractec.mp4" }],
      },
      {
        id: "rac-asistentes",
        type: "asistentes",
        title: "Asistentes Egresados a RAC",
        kicker: "Regreso a Casa · Evolución anual",
        // El dato hero es el pico 2025 (egresados + acompañantes); las barras
        // comparan asistencia de egresados año contra año.
        hero: {
          value: 1914,
          label: "Asistentes 2025",
          sub: "1,455 egresados · 1,914 con acompañantes",
        },
        years: [
          { year: "2022", value: 1637 },
          { year: "2023", value: 1294 },
          { year: "2024", value: 1626 },
          { year: "2025", value: 1455, note: "1,914 con acompañantes" },
        ],
      },
      {
        id: "rac-eventos-2025",
        type: "desglose",
        title: "Regresos a Casa 2025",
        kicker: "Asistencia por evento",
        // Total = suma de los eventos = 1,914 asistentes con invitados.
        total: 1914,
        totalLabel: "Asistentes con Invitados",
        unit: "2025",
        // ordenado de mayor a menor: el acento (fila 0) resalta el dominante
        breakdown: [
          { name: "25 & 30 Aniversarios", amount: 550 },
          { name: "35 & 40 Aniversarios", amount: 549 },
          { name: "45 y Más Aniversarios", amount: 308 },
          { name: "5, 10, 15 & 20 Aniversarios", amount: 272 },
          { name: "PrepaTec EGS", amount: 99 },
          { name: "Regreso a Casa Basketball", amount: 70 },
          { name: "PrepaTec Valle Alto", amount: 66 },
        ],
      },
      {
        id: "rac-tours",
        type: "tours",
        title: "Tours",
        kicker: "Regreso a Casa",
        sections: [
          {
            heading: "Identidad",
            body: "Se renovó la identidad visual de los tours para alinearla con la imagen del evento y conectar mejor con los recuerdos de los egresados.",
            keywords: ["identidad visual", "recuerdos de los egresados"],
          },
          {
            heading: "Nueva logística",
            body: "Se rediseñó la logística mediante rutas optimizadas, horarios estratégicos para la fotografía en el mural y la asignación de embajadores afines a la carrera de los egresados.",
            keywords: ["rutas optimizadas", "embajadores afines"],
          },
        ],
        placeholders: [
          {
            n: 1,
            kind: "image",
            note: "Tour — identidad",
            src: "/media/RAC3540-09.webp",
            alt: "Tour de identidad · Regreso a Casa",
          },
          {
            n: 2,
            kind: "image",
            note: "Tour — logística",
            src: "/media/logistica_tour.webp",
            alt: "Nueva logística de tours · Regreso a Casa",
          },
        ],
      },
      {
        id: "rac-identidad",
        type: "identidad",
        title: "Identidad del Evento",
        kicker: "Regreso a Casa",
        sections: [
          {
            heading: "Vestimenta",
            sub: "Un código visual único",
            body: "Se diseñaron elementos de ambientación y decoración que transformaron los espacios en algo más memorable e inmersivo.",
          },
          {
            heading: "Photo Opportunities",
            sub: "Momentos para compartir",
            body: "Se incorporaron espacios fotográficos estratégicos para generar recuerdos memorables y fomentar la interacción de los egresados.",
          },
          {
            heading: "Estolas",
            sub: "Símbolo de pertenencia",
            body: "A partir del 40 aniversario se les entregan estolas conmemorativas como símbolo de orgullo y reconocimiento. Cada aniversario tiene un color asignado.",
          },
        ],
        placeholders: [
          {
            n: 1,
            kind: "image",
            note: "Vestimenta",
            src: "/media/vestimenta_rac.webp",
            alt: "Vestimenta oficial · Regreso a Casa",
          },
          {
            n: 2,
            kind: "image",
            note: "Photo opportunity",
            src: "/media/photo_ops.webp",
            alt: "Photo ops · Regreso a Casa",
          },
          {
            n: 3,
            kind: "image",
            note: "Diseño de estolas",
            src: "/media/estola_diseno.webp",
            alt: "Diseño de estolas conmemorativas",
          },
        ],
      },
      {
        id: "rac-registro",
        type: "registro",
        title: "Sistema de Registro y Logística",
        kicker: "Regreso a Casa",
        // se presenta como un flujo de 3 pasos
        sections: [
          {
            heading: "Registro",
            step: "01",
            body: "Se implementó un stand de registro alineado con la identidad del evento para el escaneo de códigos QR, permitiendo identificar rápidamente a cada egresado. Además, se estableció una distribución estratégica de filas para agilizar el acceso al evento.",
          },
          {
            heading: "Acomodo de mesas",
            step: "02",
            body: "Se implementó una selección anticipada de mesas para facilitar el reencuentro entre generaciones. El día del evento hay un acompañamiento a la mesa para una llegada más ágil.",
          },
          {
            heading: "Gafetes",
            step: "03",
            body: "Se personalizaron los gafetes por aniversario con identificación por color, nombre del egresado, asignación de mesa y tour, además de un código QR por la parte de atrás con acceso a información relevante del evento.",
          },
        ],
        placeholders: [
          {
            n: 1,
            kind: "image",
            note: "Registro",
            src: "/media/registro.webp",
            alt: "Módulos de registro · Regreso a Casa",
          },
          {
            n: 2,
            kind: "image",
            note: "Acomodo de mesas",
            src: "/media/mesas.webp",
            alt: "Acomodo de mesas · cena de gala",
          },
          {
            n: 3,
            kind: "image",
            note: "Gafetes",
            src: "/media/gafetes.webp",
            alt: "Gafetes y listones · Regreso a Casa",
          },
        ],
      },
      {
        id: "rac-gafetes",
        type: "gafetes",
        title: "Gafetes",
        kicker: "Registro · Regreso a Casa",
        // emparejados por color: frente (nombre + rol) y reverso (QR)
        badges: [
          { label: "55 Aniversario", front: "/media/gafete-azul-frente.webp", back: "/media/gafete-azul-reverso.webp" },
          { label: "Líder de Generación", front: "/media/gafete-teal-frente.webp", back: "/media/gafete-teal-reverso.webp" },
          { label: "Staff", front: "/media/gafete-rosa-frente.webp", back: "/media/gafete-rosa-reverso.webp" },
          { label: "Acompañante", front: "/media/gafete-gris-frente.webp", back: "/media/gafete-gris-reverso.webp" },
        ],
      },
      {
        id: "rac-gafetes-qr",
        type: "embed",
        title: "Del gafete a tu celular",
        kicker: "Gafetes · Regreso a Casa",
        lead: "El QR al reverso del gafete abre la experiencia digital del evento.",
        body: "Una página con todos los enlaces clave en la mano del asistente.",
        urlLabel: "raclinks.pages.dev",
        url: "https://raclinks.pages.dev/",
        qr: "/media/qr_links.png",
      },
      {
        id: "rac-nps",
        type: "nps",
        title: "NPS · Regreso a Casa",
        kicker: "Satisfacción de la comunidad",
        // Comparativo año vs año: el promedio saltó de 44.7 a 64.8 (+20.1 pts).
        // Cada año se mide por segmento de generación (RAC).
        years: [
          {
            year: "2024",
            average: 44.7,
            segments: [
              { label: "RAC 5–15", value: 42 },
              { label: "RAC 20–35", value: 63 },
              { label: "RAC 40+", value: 29 },
            ],
          },
          {
            year: "2025",
            average: 64.8,
            segments: [
              { label: "RAC 5–15", value: 43 },
              { label: "RAC 20", value: 70 },
              { label: "RAC 25–30", value: 82 },
              { label: "RAC 35–40", value: 64 },
            ],
          },
        ],
        comments: [
          "Me encantó el reencuentro con mis compañeros y el tour por las nuevas instalaciones. Orgullosa de ser EXATEC.",
          "Me encantó cada detalle, desde la recepción, mensajes, cena de gala, desayuno, recorridos… pero especialmente la evolución del Tec en estos 40 años.",
          "Me gustó todo, especialmente que hayan mejorado la logística de la cena, con mesas asignadas. También que los mensajes fueran en el Luis Elizondo, breves, con apoyo audiovisual y muy poderosos. Me siento orgullosa del Tec y de mi generación.",
          "Impresionado con cómo ha cambiado el campus. La clase del recuerdo (Ing. José Antonio Fernández) estuvo de maravilla, aparte de que me causó un poco de nostalgia acordarme que alguna vez fue mi profesor.",
        ],
      },
      {
        id: "rac-retos",
        type: "retos",
        title: "Retos RAC",
        kicker: "Regreso a Casa",
        items: [
          {
            lead: "Asignación personalizada de mesas",
            body: "Llamadas 1 a 1 para definir la integración de mesas por generación, considerando preferencias de ubicación e integrantes.",
          },
          {
            lead: "Personalización manual de gafetes",
            body: "Elaboración de gafetes con información personalizada (nombre, número de mesa y número de tour).",
          },
          {
            lead: "Convocatoria y asistencia al evento",
            body: "Requiere una estrategia de difusión multicanal (WhatsApp, LinkedIn, correo, radio, redes sociales y pauta digital) para impulsar la participación.",
          },
          {
            lead: "Alta inversión y carga operativa",
            body: "Gran demanda de inversión y horas de trabajo para la planeación y ejecución del evento.",
          },
          {
            lead: "Gestión simultánea de eventos",
            body: "4 eventos de Regreso a Casa en 1 semestre, más eventos y actividades EXATEC adicionales.",
          },
        ],
      },
    ],
  },
];

/**
 * Secuencia global aplanada (con numeración 1..N) para la navegación
 * lineal con flechas. Cada item conoce su grupo y su índice local.
 */
export const SEQUENCE = GROUPS.flatMap((group, groupIndex) =>
  group.slides.map((slide, slideIndex) => ({
    ...slide,
    groupId: group.id,
    groupName: group.name,
    groupIndex,
    slideIndex,
  }))
).map((item, i) => ({ ...item, n: i + 1 }));

export const TOTAL_SLIDES = SEQUENCE.length;

/** Helpers de navegación */
export const getGroup = (groupId) => GROUPS.find((g) => g.id === groupId);

export const firstSlideOfGroup = (groupId) =>
  SEQUENCE.find((s) => s.groupId === groupId);

export const slideAt = (n) => SEQUENCE[n - 1] ?? null;

/**
 * MODO LIVE — presentación en vivo.
 * Slide de título que arranca el recorrido + la secuencia completa detrás.
 * `groupIndex: -1` marca la portada (no pertenece a ningún área).
 */
export const LIVE_INTRO = {
  id: "live-intro",
  type: "liveIntro",
  title: META.title,
  kicker: META.subtitle,
  groupName: "Inicio",
  groupIndex: -1,
};

export const LIVE_SEQUENCE = [LIVE_INTRO, ...SEQUENCE].map((item, i) => ({
  ...item,
  liveN: i + 1,
}));

export const LIVE_TOTAL = LIVE_SEQUENCE.length;
