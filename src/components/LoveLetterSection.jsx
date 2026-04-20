import { useEffect, useMemo, useRef, useState } from "react";

const fullLetter = `Mi princesa,

No se exactamente como decirte todo lo que siento,
pero voy a intentarlo.

Desde el dia que te conoci, el 16 de septiembre de 2024,
algo en mi cambio. No fue de golpe, fue como cuando
amanece: despacio, suave, y de repente ya es de dia
y no puedes imaginar como era todo en la oscuridad.

Me encantas, mi princesa. Me encanta como eres,
como piensas, como me miras. Me encanta que existas
y que por alguna razon que todavia no entiendo del todo,
decidiste quedarte a mi lado.

Te amo mas de lo que se expresar,
pero espero que esta pagina sea un pequeno intento
de mostrarte cuanto.

Tuyo siempre,
Miguel ❤️`;

function LoveLetterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    // Inicia el efecto de escritura cuando la carta ya es visible en pantalla.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    // Simula maquina de escribir agregando un caracter por tick.
    let index = 0;
    const speed = 18;
    const interval = setInterval(() => {
      index += 1;
      setTyped(fullLetter.slice(0, index));

      if (index >= fullLetter.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible]);

  const showHeart = useMemo(() => typed.length === fullLetter.length, [typed.length]);

  return (
    <section id="carta" className="letter-section" ref={sectionRef}>
      <div className="stars" aria-hidden="true" />

      <article className="letter-paper">
        <h2>Para mi princesa, con todo mi amor 💕</h2>
        <pre>{typed}</pre>

        {showHeart && <div className="final-heart">❤️</div>}
      </article>
    </section>
  );
}

export default LoveLetterSection;
