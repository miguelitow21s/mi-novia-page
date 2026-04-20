import { useEffect, useMemo, useRef, useState } from "react";

const fullLetter = `Mi princesa hermosa,

Mi amor por ti es tan grande que, de verdad, primero pienso en que tú estés bien antes que yo. Como aquella vez que nos caímos y no me importó nada, solo quería asegurarme de que tú estuvieras bien. Mi amor, yo te amo tanto, más que a mí mismo. A veces me sorprendo de lo mucho que puedo sentir por ti, de cómo tu felicidad se volvió mi prioridad, de cómo tu sonrisa es mi motor y tu tristeza mi mayor preocupación.

No puedo evitar recordar cuando te robé ese primer beso, y parecíamos dos niños chiquitos, yo nerviosos y tu en shock , en ese momento senti como si el mundo se detuviera solo para nosotros.  Y pensar en todas las cosas que hice por ti, como presentarte a mi familia sin ser nada aún, o pedirte noviazgo delante de todos, con el corazón latiendo a mil y el miedo de perderte, pero con la fe de que Dios estaba con nosotros.

Le he pedido tanto a Dios por nosotros, por paciencia, por sabiduría, por ese amor que todo lo puede y todo lo soporta. Y Él ha sido fiel, porque aquí estamos, creciendo juntos, aprendiendo a amarnos de verdad, a perdonarnos, a apoyarnos y a soñar en grande. Gracias por ser mi compañera de vida, por no soltarme la mano, por creer en mí incluso cuando yo dudo, por animarme a ser mejor y por enseñarme que el amor se construye día a día.

Gracias por cada locura, por cada aventura, por cada momento de ternura y hasta por las peleas, porque de todo hemos aprendido. Gracias por tus abrazos que me salvan, por tus besos que me devuelven la vida, por tus palabras que me levantan y por tu paciencia infinita. Gracias por tu familia, por abrirme las puertas de tu mundo, por dejarme ser parte de tus sueños y de tus días.

Sueño con un futuro a tu lado, con un hogar lleno de amor, con hijos que corran por la casa y nos llamen papá y mamá, con noches de risas y mañanas de café, con viajes, con metas cumplidas y con la certeza de que, pase lo que pase, siempre vamos a estar juntos. Sueño con envejecer contigo, con cuidarte cuando estés cansada, con celebrar cada aniversario y cada logro, con apoyarte en cada reto y levantarte en cada caída.

Prometo seguir aprendiendo a amarte mejor cada día, a escucharte, a respetarte, a pedir perdón cuando me equivoque y a perdonarte siempre. Prometo orar por ti, por nosotros, por nuestra familia. Prometo ser tu compañero, tu amigo, tu cómplice y tu refugio. Prometo no rendirme nunca, porque tú vales cada esfuerzo, cada sacrificio, cada lágrima y cada sonrisa.

"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. El amor no se deleita en la maldad sino que se regocija con la verdad. Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta. El amor jamás se extingue." (1 Corintios 13:4-8)

"Por tanto, lo que Dios ha unido, que no lo separe el hombre." (Marcos 10:9)

Gracias por ser mi inspiración, mi alegría y mi paz. Gracias por tu fe, por tu entrega, por tu dulzura y por tu amor. Te amo más de lo que las palabras pueden expresar, y espero que esta página sea solo un pequeño reflejo de todo lo que siento por ti. gracias por todas tus comidas, gracias por tus detalles, gracias por tu amor incondicional. Eres mi princesa, mi reina, mi todo., y siempre serás la razón de mi sonrisa, el latido de mi corazón y el sueño de mi vida.

creeme que solo el echo de a verme cocinado significo mucho para mi ese pequeño detalle tuyo me hizo demasiado feliz que aunque no lo demostrara por dentro estaba tan feliz como niño chiquito de poder comer lo que tu me cocinas, de ver como te ezfuerzas para aprender cosas nuevas por mi me llena de amor el corazon gracias por todo te amo.

No sé si algún día podré escribirte una carta perfecta, pero sí sé que cada palabra aquí sale de lo más profundo de mi corazón. Si alguna vez dudas de lo que siento, vuelve a leer esto y recuerda que mi amor por ti es sincero, real y para siempre. Eres mi presente y mi futuro, mi sueño y mi realidad, mi todo.

Tu niño chiquito te escribió esto desde el fondo de su corazón, con el alma en la mano y los ojos llenos de amor. Si lloras, que sean lágrimas de alegría, porque mi mayor deseo es verte feliz, amada y segura a mi lado. Gracias por existir, por elegirme y por dejarme amarte.

Tuyo siempre,
Tu niño chiquito.`;

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
