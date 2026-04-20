import { useEffect, useMemo, useRef, useState } from "react";

const fullLetter = `Mi princesa hermosa,

Tú sabes que yo soy más de teclear que de escribir, pero con esta página quiero dejarte claro el porqué te amo. Gracias por siempre querer arreglar las cosas, por estar ahí en cada momento, por tenerme paciencia y por ser esa gran mujer que eres. Gracias por todos los momentos compartidos, por tu amor incondicional, por tus besos y caricias, por tus comidas que llenan mi corazón de alegría, por aprender a cocinar para mí y por cuidar cada detalle, hasta empacar mi coca con tanto amor y esmero.

Gracias por estar en las buenas y en las malas, por tu ternura, por tu risa, por tu forma de mirarme y por tu fe. Me enamoro más de ti cada día, viéndote danzar, siendo tú misma, tan auténtica y especial. Solo le pido a Dios que nos guíe y sea el centro de nuestra relación, porque quiero amarte como Cristo amó a la iglesia, entregándome por ti, cuidándote, protegiéndote y soñando juntos con ese hogar y esa familia que tanto anhelamos.

Quiero darte todo lo que tengo, aunque no sea mucho, pero mi mayor deseo es entregarte mi vida, mi tiempo, mi esfuerzo y mi corazón. Decidí morir a mí mismo, aguantar lo que sea necesario, solo por nuestro bien, por ese matrimonio y esa familia que quiero construir a tu lado. Eres mi mayor bendición, mi compañera, mi amiga, mi amor, mi todo.

Y es que contigo aprendí que el amor no es solo decirlo, es demostrarlo en los detalles, en los días buenos y en los difíciles, en los silencios y en las risas, en los abrazos largos y en las miradas que lo dicen todo. Me inspiras a ser mejor, a soñar más grande, a confiar en Dios y a creer que juntos podemos con todo. Me haces sentir que la vida tiene sentido, que cada día a tu lado es un regalo y que no cambiaría nada de nuestro camino, ni siquiera los tropiezos, porque todo me ha llevado a amarte más.

Me encanta cómo te entregas, cómo luchas por nosotros, cómo me animas cuando estoy caído y cómo celebras conmigo cada victoria, por pequeña que sea. Me fascina tu risa, tu voz, tu manera de ver la vida, tu fe y tu ternura. Eres mi refugio, mi alegría, mi paz y mi locura bonita. Eres la respuesta a tantas oraciones y el sueño que nunca pensé que se haría realidad.

"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. El amor no se deleita en la maldad sino que se regocija con la verdad. Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta. El amor jamás se extingue." (1 Corintios 13:4-8)

"Por tanto, lo que Dios ha unido, que no lo separe el hombre." (Marcos 10:9)

Gracias por ser mi inspiración, mi alegría y mi paz. Gracias por tu fe, por tu entrega, por tu dulzura y por tu amor. Te amo más de lo que las palabras pueden expresar, y espero que esta página sea solo un pequeño reflejo de todo lo que siento por ti.

No sé si algún día podré escribirte una carta perfecta, pero sí sé que cada palabra aquí sale de lo más profundo de mi corazón. Si alguna vez dudas de lo que siento, vuelve a leer esto y recuerda que mi amor por ti es sincero, real y para siempre. Eres mi presente y mi futuro, mi sueño y mi realidad, mi todo.

Tu niño chiquito te escribió esto desde el fondo de su corazón, con el alma en la mano y los ojos llenos de amor. Si lloras, que sean lágrimas de alegría, porque mi mayor deseo es verte feliz, amada y segura a mi lado. Gracias por existir, por elegirme y por dejarme amarte.

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
