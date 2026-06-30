import { useSlideTimeline } from "../../hooks/useSlideTimeline";
import SlideHeading from "../ui/SlideHeading";
import CountUp from "../dataviz/CountUp";

const ACCENT = "#46e5ff";

/**
 * Slide de DATO — asistentes egresados a RAC año contra año, como gráfica de
 * tendencia (línea + área). Estética distinta a las barras horizontales de la
 * slide de desglose, para que ambas no se confundan. El último año se resalta.
 */
export default function SlideAsistentes({ slide }) {
  const years = slide.years ?? [];
  const values = years.map((y) => y.value);
  const vMin = Math.min(...values);
  const vMax = Math.max(...values);
  const range = vMax - vMin || 1;

  // Coordenadas en un viewBox 0..100 (la gráfica se estira al contenedor).
  const padX = 8; // margen lateral
  const topY = 16; // y del valor máximo
  const botY = 70; // y del valor mínimo
  const baseY = 82; // base del área (debajo van las etiquetas de año)
  const pts = years.map((y, i) => {
    const x = padX + (years.length > 1 ? (i / (years.length - 1)) * (100 - 2 * padX) : 50);
    const norm = (y.value - vMin) / range; // 1 = máximo
    return { ...y, x, y: botY - norm * (botY - topY), isLast: i === years.length - 1 };
  });

  const lineD = pts.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ");
  const areaD = pts.length
    ? `${lineD} L ${pts[pts.length - 1].x} ${baseY} L ${pts[0].x} ${baseY} Z`
    : "";

  const scope = useSlideTimeline((tl) => {
    tl.from(".sh-kicker", { opacity: 0, y: 12, duration: 0.5 })
      .from(".sh-title", { opacity: 0, y: 24, filter: "blur(10px)", duration: 0.7 }, "-=0.2")
      .from(".as-area", { opacity: 0, duration: 0.6 }, "-=0.1")
      .from(".as-line", { strokeDashoffset: 1, duration: 1.1, ease: "power2.inOut" }, "<")
      .from(".as-year", { opacity: 0, y: 10, duration: 0.4, stagger: 0.1 }, "-=0.6")
      .from(".as-dot", { scale: 0, transformOrigin: "center", duration: 0.4, stagger: 0.1, ease: "back.out(2)" }, "<")
      .from(".as-val", { opacity: 0, y: 8, duration: 0.4, stagger: 0.1 }, "<");
  });

  return (
    <div ref={scope} className="flex h-full w-full flex-col gap-6 py-2">
      <SlideHeading kicker={slide.kicker} title={slide.title} />

      {/* gráfica de tendencia — ocupa el ancho completo */}
      <div className="relative min-h-0 w-full flex-1">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="as-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={ACCENT} stopOpacity="0.32" />
              <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* base sutil de la gráfica */}
          <line
            x1={padX}
            y1={baseY}
            x2={100 - padX}
            y2={baseY}
            stroke="#15348a"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path className="as-area" d={areaD} fill="url(#as-grad)" />
          <path
            className="as-line"
            d={lineD}
            fill="none"
            stroke={ACCENT}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            pathLength="1"
            style={{ strokeDasharray: 1 }}
          />
        </svg>

        {/* puntos, valores y años (HTML para texto nítido + count-up) */}
        {pts.map((p, i) => (
          <div key={p.year}>
            {/* valor sobre el punto */}
            <div
              className="as-val text-text absolute text-2xl font-black tabular md:text-3xl"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -190%)" }}
            >
              <CountUp value={p.value} duration={1.6} delay={0.4 + i * 0.1} />
            </div>

            {/* punto sobre la línea */}
            <div
              className="absolute"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div
                className={[
                  "as-dot rounded-full",
                  p.isLast
                    ? "bg-accent h-4 w-4 ring-4 ring-[#46e5ff]/25"
                    : "bg-blue-500 h-3 w-3 ring-2 ring-blue-500/30",
                ].join(" ")}
              />
            </div>

            {/* año debajo */}
            <div
              className={[
                "as-year absolute text-base font-semibold tracking-wide md:text-lg",
                p.isLast ? "text-accent" : "text-text-dim",
              ].join(" ")}
              style={{ left: `${p.x}%`, top: "88%", transform: "translate(-50%, 0)" }}
            >
              {p.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
