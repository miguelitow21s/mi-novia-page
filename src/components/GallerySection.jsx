import { useEffect, useMemo, useRef, useState } from "react";

const descriptions = [
  "Risa compartida",
  "Abrazo eterno",
  "Un dia inolvidable",
  "Nuestro plan favorito",
  "Una tarde de paz",
  "Mirada que enamora",
  "Un capitulo hermoso",
  "Complices siempre",
  "Aventura juntos",
  "Un recuerdo precioso",
  "Momento perfecto",
  "Nuestro lugar favorito",
  "Carino sincero",
  "Tiempo bonito",
  "Corazones en calma",
  "Magia en lo simple",
  "Un dia que guardo",
  "Promesa silenciosa",
  "Vida contigo",
  "Sonrisas infinitas",
  "Instante dorado",
  "Ternura pura",
  "Recuerdo que late",
  "Mi princesa y yo",
];

const dates = [
  "2024-09", "2024-10", "2024-11", "2024-12", "2025-01", "2025-02",
  "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08",
  "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02",
  "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08",
];

function GallerySection() {
  const [expanded, setExpanded] = useState(false);
  const [visibleIds, setVisibleIds] = useState(new Set());
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);

  const photos = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index + 1,
        img: `/imagenes/${index + 1}.jpg`,
        text: descriptions[index],
        date: dates[index],
      })),
    [],
  );

  const shownPhotos = expanded ? photos : photos.slice(0, 12);

  useEffect(() => {
    // Revela las tarjetas cuando entran al viewport para una entrada progresiva.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.id);
            setVisibleIds((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [shownPhotos]);

  useEffect(() => {
    // Atajos de teclado para mejorar la navegacion dentro del modal.
    const handleKeyDown = (event) => {
      if (activeIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % photos.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, photos.length]);

  useEffect(() => {
    // Bloquea el scroll de la pagina cuando el modal esta abierto.
    if (activeIndex !== null) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }

    return undefined;
  }, [activeIndex]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  return (
    <section id="galeria" className="gallery-section">
      <h2>Nuestros Momentos</h2>
      <div className="gold-line" aria-hidden="true" />

      <div className="gallery-masonry">
        {shownPhotos.map((photo, index) => (
          <article
            key={photo.id}
            className={`gallery-card ${visibleIds.has(photo.id) ? "is-visible" : ""}`}
            data-id={photo.id}
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
          >
            <button
              type="button"
              className="gallery-image-wrap"
              onClick={() => setActiveIndex(photo.id - 1)}
              aria-label={`Abrir foto ${photo.id}`}
            >
              <img
                src={photo.img}
                alt={`${photo.text} - ${photo.date}`}
                loading="lazy"
              />
              <span className="gallery-overlay">❤️</span>
            </button>
            <p>{photo.text}</p>
            <small>{photo.date}</small>
          </article>
        ))}
      </div>

      {!expanded && (
        <button className="gallery-expand" type="button" onClick={() => setExpanded(true)}>
          Ver todas
        </button>
      )}

      {activePhoto && (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            className="modal-backdrop"
            aria-label="Cerrar modal"
            onClick={() => setActiveIndex(null)}
          />

          <article className="modal-content">
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <img
              src={activePhoto.img}
              alt={`${activePhoto.text} - ${activePhoto.date}`}
            />

            <div className="modal-meta">
              <h3>{activePhoto.text}</h3>
              <p>{activePhoto.date}</p>
            </div>

            <div className="modal-nav">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length)
                }
                aria-label="Ver foto anterior"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % photos.length)}
                aria-label="Ver foto siguiente"
              >
                Siguiente
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
