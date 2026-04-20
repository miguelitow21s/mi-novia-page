import "./App.css";
import HeroSection from "./components/HeroSection";
import CounterSection from "./components/CounterSection";
import GallerySection from "./components/GallerySection";
import ReasonsSection from "./components/ReasonsSection";
import LoveLetterSection from "./components/LoveLetterSection";
import Footer from "./components/Footer";

const reasons = [
  {
    id: 1,
    emoji: "🌙",
    text: "Porque tu risa es lo mas bonito que he escuchado.",
  },
  {
    id: 2,
    emoji: "✨",
    text: "Porque me haces querer ser mejor persona cada dia.",
  },
  {
    id: 3,
    emoji: "🦋",
    text: "Porque contigo los momentos simples se vuelven magicos.",
  },
  {
    id: 4,
    emoji: "🌹",
    text: "Porque tu forma de mirarme me hace sentir el mas afortunado.",
  },
  {
    id: 5,
    emoji: "💫",
    text: "Porque eres mi calma cuando todo va rapido.",
  },
  {
    id: 6,
    emoji: "🎵",
    text: "Porque bailar contigo es mi lugar favorito.",
  },
  {
    id: 7,
    emoji: "🌅",
    text: "Porque cada manana pienso en ti primero.",
  },
  {
    id: 8,
    emoji: "🍃",
    text: "Porque me gusta como hueles a ti.",
  },
  {
    id: 9,
    emoji: "💌",
    text: "Porque tus mensajes me alegran cualquier dia.",
  },
  {
    id: 10,
    emoji: "🌊",
    text: "Porque me perderia contigo sin dudarlo.",
  },
  {
    id: 11,
    emoji: "🔥",
    text: "Porque el fuego que siento cuando estas cerca no se apaga.",
  },
  {
    id: 12,
    emoji: "🌸",
    text: "Porque a tu lado hasta los planes simples se vuelven memorias.",
  },
];

function App() {
  return (
    <div className="app">
      <nav className="main-nav" aria-label="Navegacion principal">
        <a href="#hero">Inicio</a>
        <a href="#contador">Tiempo</a>
        <a href="#galeria">Momentos</a>
        <a href="#razones">Razones</a>
        <a href="#carta">Carta</a>
      </nav>

      <HeroSection />
      <CounterSection startDate="2024-09-16T00:00:00" />
      <GallerySection />
      <ReasonsSection reasons={reasons} />
      <LoveLetterSection />
      <Footer />
    </div>
  );
}

export default App;
