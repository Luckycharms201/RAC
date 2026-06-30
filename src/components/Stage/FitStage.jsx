import { useEffect, useState } from "react";

/**
 * Escala-para-encajar: la presentación se diseña sobre un canvas base 16:9
 * y se escala completo al viewport, preservando proporción (letterbox).
 * Así el diseño broadcast se ve íntegro en cualquier pantalla o proyector.
 */
export const BASE_W = 1440;
export const BASE_H = 810;

export default function FitStage({ children }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const vv = window.visualViewport;
    const fit = () => {
      // visualViewport refleja el área visible real en móvil (al ocultarse la
      // barra del navegador), evitando saltos de escala respecto a innerHeight.
      const w = vv?.width ?? window.innerWidth;
      const h = vv?.height ?? window.innerHeight;
      setScale(Math.min(w / BASE_W, h / BASE_H));
    };
    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("orientationchange", fit);
    vv?.addEventListener("resize", fit);
    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("orientationchange", fit);
      vv?.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <div className="bg-bg-deep fixed inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="relative shrink-0"
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
