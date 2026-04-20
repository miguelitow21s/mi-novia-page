import { useEffect, useRef, useState } from "react";


function ReasonsSection({ reasons }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Log para saber si el prop reasons llega correctamente
  useEffect(() => {
    if (!reasons) {
      console.error("[ReasonsSection] El prop 'reasons' es undefined o null");
    } else if (!Array.isArray(reasons)) {
      console.error("[ReasonsSection] El prop 'reasons' no es un array", reasons);
    } else if (reasons.length === 0) {
      console.warn("[ReasonsSection] El array 'reasons' está vacío");
    } else {
      console.log(`[ReasonsSection] Recibidas ${reasons.length} razones`);
    }
  }, [reasons]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Log para saber si el componente se está renderizando
  console.log("[ReasonsSection] Render", { visible, reasonsLength: reasons?.length });

  return (
    <section id="razones" className="reasons-section" ref={sectionRef}>
      <h2>Por que te amo, mi princesa</h2>

      <div className="reasons-grid">
        {Array.isArray(reasons) && reasons.length > 0 ? (
          reasons.map((reason) => (
            <article
              className={`reason-item ${visible ? "is-visible" : ""}`}
              style={{}}
              key={reason.id}
            >
              <span className="emoji" aria-hidden="true">
                {reason.emoji}
              </span>
              <p>{reason.text}</p>
            </article>
          ))
        ) : (
          <div style={{ color: 'red', textAlign: 'center', width: '100%' }}>
            No se recibieron razones para mostrar.
          </div>
        )}
      </div>
    </section>
  );
}

export default ReasonsSection;
