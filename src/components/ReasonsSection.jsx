import { useEffect, useRef, useState } from "react";

function ReasonsSection({ reasons }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section id="razones" className="reasons-section" ref={sectionRef}>
      <h2>Por que te amo, mi princesa</h2>

      <div className="reasons-grid">
        {reasons.map((reason) => (
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
        ))}
      </div>
    </section>
  );
}

export default ReasonsSection;
