import { useEffect, useState } from "react";

/**
 * Aviso "gira tu dispositivo". El deck está diseñado en 16:9 (horizontal) y se
 * aprovecha mejor en landscape; en un teléfono en vertical quedaría diminuto.
 *
 * Sólo aparece en teléfonos (puntero táctil + lado corto pequeño) en
 * orientación vertical. En tablets grandes y escritorio nunca se muestra, así
 * que el iPad en horizontal o vertical sigue funcionando sin interrupciones.
 */
export default function RotateHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const portrait = window.matchMedia("(orientation: portrait)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const update = () => {
      const phone = Math.min(window.innerWidth, window.innerHeight) < 600;
      setShow(portrait.matches && coarse.matches && phone);
    };
    update();
    portrait.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      portrait.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="bg-bg-deep jp-fade fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 px-10 text-center">
      <div className="rotate-wiggle text-accent">
        <svg
          width="76"
          height="76"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
          <line x1="11" y1="18.5" x2="13" y2="18.5" />
        </svg>
      </div>
      <div>
        <p className="text-text text-2xl font-extrabold tracking-tight">
          Gira tu dispositivo
        </p>
        <p className="text-text-dim mt-2 text-sm">
          Esta presentación se ve mejor en horizontal.
        </p>
      </div>
    </div>
  );
}
