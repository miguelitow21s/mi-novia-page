import { useMemo, useState } from "react";

const floatingIcons = ["❤️", "🌸", "💕", "💖", "✨"];

function HeroSection() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Genera iconos flotantes con variaciones para que la animacion se sienta organica.
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => ({
        id: index,
        icon: floatingIcons[index % floatingIcons.length],
        left: Math.random() * 100,
        duration: 9 + Math.random() * 9,
        delay: Math.random() * 6,
        drift: -30 + Math.random() * 60,
      })),
    [],
  );

  const title = "Miguel y mi princesa".split("");

  // Calcula un desplazamiento suave para el efecto parallax segun la posicion del mouse.
  const handleMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width - 0.5) * 14;
    const y = ((event.clientY - top) / height - 0.5) * 14;
    setParallax({ x, y });
  };

  const handleLeave = () => setParallax({ x: 0, y: 0 });

  return (
    <header
      id="hero"
      className="hero-section"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="hero-bg" aria-hidden="true" />

      <div className="floating-layer" aria-hidden="true">
        {particles.map((item) => (
          <span
            key={item.id}
            className="floating-icon"
            style={{
              left: `${item.left}%`,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
              "--drift": `${item.drift}px`,
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      <div
        className="hero-content"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        <h1 aria-label="Miguel y mi princesa">
          {title.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="hero-letter"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">Desde el 16 de Septiembre de 2024</p>

        <a href="#contador" className="scroll-arrow" aria-label="Ir al contador">
          ↓
        </a>
      </div>
    </header>
  );
}

export default HeroSection;
