import { useSlideTimeline } from "../../hooks/useSlideTimeline";
import SlideHeading from "../ui/SlideHeading";
import CountUp from "../dataviz/CountUp";

/**
 * Slide de DATO duro — desglose de asistentes por evento.
 * Misma estética que <SlideMonto>: hero con el total en count-up gigante y
 * desglose en barras proporcionales. A diferencia de Monto, las cifras son
 * personas (sin prefijo "$").
 */
export default function SlideDesglose({ slide }) {
  const breakdown = slide.breakdown ?? [];
  const max = Math.max(...breakdown.map((b) => b.amount), 1);

  const scope = useSlideTimeline((tl) => {
    tl.from(".sh-kicker", { opacity: 0, y: 12, duration: 0.5 })
      .from(".sh-title", { opacity: 0, y: 24, filter: "blur(10px)", duration: 0.7 }, "-=0.2")
      .from(".mto-row", { opacity: 0, x: -24, duration: 0.5, stagger: 0.1 }, "-=0.2")
      .from(
        ".mto-fill",
        { scaleX: 0, transformOrigin: "left center", duration: 1, stagger: 0.1, ease: "power3.out" },
        "<"
      );
  });

  return (
    <div ref={scope} className="flex h-full w-full flex-col gap-6 py-2">
      <SlideHeading kicker={slide.kicker} title={slide.title} />

      {/* desglose por evento — ocupa el ancho completo */}
      <div className="flex flex-1 flex-col justify-center gap-6">
        {breakdown.map((b, i) => (
          <div key={b.name} className="mto-row">
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-text text-lg font-medium">{b.name}</span>
              <span className="text-text-dim tabular text-lg">
                <CountUp value={b.amount} duration={1.8} delay={0.3 + i * 0.1} />
              </span>
            </div>
            <div className="h-4 w-full overflow-hidden rounded-full bg-blue-900">
              <div
                className={[
                  "mto-fill h-full rounded-full",
                  i === 0 ? "bg-accent" : "bg-blue-500",
                ].join(" ")}
                style={{ width: `${(b.amount / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
