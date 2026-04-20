import "./App.css";
import HeroSection from "./components/HeroSection";
import CounterSection from "./components/CounterSection";
import ReasonsSection from "./components/ReasonsSection";
import LoveLetterSection from "./components/LoveLetterSection";
import Footer from "./components/Footer";

const reasons = [
  { id: 1, emoji: "🌙", text: "Porque tu risa es lo más bonito que he escuchado." },
  { id: 2, emoji: "✨", text: "Porque me haces querer ser mejor persona cada día." },
  { id: 3, emoji: "🦋", text: "Porque contigo los momentos simples se vuelven mágicos." },
  { id: 4, emoji: "🌹", text: "Porque tu forma de mirarme me hace sentir el más afortunado." },
  { id: 5, emoji: "💫", text: "Porque eres mi calma cuando todo va rápido." },
  { id: 6, emoji: "🎵", text: "Porque bailar contigo es mi lugar favorito." },
  { id: 7, emoji: "🌅", text: "Porque cada mañana pienso en ti primero." },
  { id: 8, emoji: "🍃", text: "Porque me gusta como hueles a ti." },
  { id: 9, emoji: "💌", text: "Porque tus mensajes me alegran cualquier día." },
  { id: 10, emoji: "🌊", text: "Porque me perdería contigo sin dudarlo." },
  { id: 11, emoji: "🔥", text: "Porque el fuego que siento cuando estás cerca no se apaga." },
  { id: 12, emoji: "🌸", text: "Porque a tu lado hasta los planes simples se vuelven memorias." },
  { id: 13, emoji: "🍫", text: "Porque compartir postres contigo es felicidad pura." },
  { id: 14, emoji: "🎨", text: "Porque juntos creamos recuerdos hermosos." },
  { id: 15, emoji: "📚", text: "Porque aprendo de ti cada día." },
  { id: 16, emoji: "🧸", text: "Porque tus abrazos son mi refugio." },
  { id: 17, emoji: "🌻", text: "Porque iluminas mis días como el sol." },
  { id: 18, emoji: "🍕", text: "Porque hasta la pizza sabe mejor contigo." },
  { id: 19, emoji: "🎬", text: "Porque ver pelis contigo es mi plan favorito." },
  { id: 20, emoji: "🛌", text: "Porque dormir a tu lado es paz." },
  { id: 21, emoji: "🌠", text: "Porque eres mi deseo cumplido." },
  { id: 22, emoji: "🍦", text: "Porque los helados contigo no tienen comparación." },
  { id: 23, emoji: "🎁", text: "Porque cada día contigo es un regalo." },
  { id: 24, emoji: "🧁", text: "Porque endulzas mi vida." },
  { id: 25, emoji: "🌈", text: "Porque llenas mi mundo de color." },
  { id: 26, emoji: "🪁", text: "Porque me haces sentir libre y feliz." },
  { id: 27, emoji: "🧭", text: "Porque eres mi norte y mi guía." },
  { id: 28, emoji: "🪐", text: "Porque eres mi universo." },
  { id: 29, emoji: "🫶", text: "Porque tu amor me completa." },
  { id: 30, emoji: "🥰", text: "Porque tu ternura me derrite." },
  { id: 31, emoji: "👑", text: "Porque eres mi reina." },
  { id: 32, emoji: "💍", text: "Porque quiero un futuro contigo." },
  { id: 33, emoji: "🫂", text: "Porque siempre estás para mí." },
  { id: 34, emoji: "🧩", text: "Porque encajamos perfecto." },
  { id: 35, emoji: "🦄", text: "Porque eres única y mágica." },
  { id: 36, emoji: "🍓", text: "Porque eres mi fruta favorita." },
  { id: 37, emoji: "🍰", text: "Porque cada momento contigo es dulce." },
  { id: 38, emoji: "🎈", text: "Porque celebraría la vida a tu lado siempre." },
  { id: 39, emoji: "🧭", text: "Porque me orientas cuando me pierdo." },
  { id: 40, emoji: "🧦", text: "Porque hasta tus calcetines me parecen lindos." },
  { id: 41, emoji: "🧃", text: "Porque compartimos hasta el jugo." },
  { id: 42, emoji: "🧼", text: "Porque me limpias el alma con tu amor." },
  { id: 43, emoji: "🧺", text: "Porque haría picnic contigo cada día." },
  { id: 44, emoji: "🪴", text: "Porque crecemos juntos." },
  { id: 45, emoji: "🧙‍♂️", text: "Porque haces magia en mi vida." },
  { id: 46, emoji: "🧚‍♀️", text: "Porque eres mi hada favorita." },
  { id: 47, emoji: "🧜‍♀️", text: "Porque eres mi sirena." },
  { id: 48, emoji: "🦜", text: "Porque me haces reír como nadie." },
  { id: 49, emoji: "🦦", text: "Porque juntos flotamos en felicidad." },
  { id: 50, emoji: "🦥", text: "Porque hasta los días lentos contigo son hermosos." },
  { id: 51, emoji: "🦚", text: "Porque eres mi orgullo." },
  { id: 52, emoji: "🦋", text: "Porque me das mariposas cada día." },
  { id: 53, emoji: "🦢", text: "Porque eres elegancia pura." },
  { id: 54, emoji: "🦩", text: "Porque eres diferente y especial." },
  { id: 55, emoji: "🦦", text: "Porque me haces sentir seguro." },
  { id: 56, emoji: "🦔", text: "Porque hasta tus enojos son tiernos." },
  { id: 57, emoji: "🦉", text: "Porque eres sabia y dulce." },
  { id: 58, emoji: "🦚", text: "Porque me llenas de orgullo." },
  { id: 59, emoji: "🦜", text: "Porque eres colorida y alegre." },
  { id: 60, emoji: "🦢", text: "Porque eres mi cisne fiel." },
  { id: 61, emoji: "🦩", text: "Porque eres mi flamenco favorito." },
  { id: 62, emoji: "🦦", text: "Porque eres mi nutria." },
  { id: 63, emoji: "🦔", text: "Porque eres mi erizo." },
  { id: 64, emoji: "🦉", text: "Porque eres mi búho sabio." },
  { id: 65, emoji: "🦚", text: "Porque eres mi pavo real." },
  { id: 66, emoji: "🦜", text: "Porque eres mi loro divertido." },
  { id: 67, emoji: "🦢", text: "Porque eres mi cisne hermoso." },
  { id: 68, emoji: "🦩", text: "Porque eres mi flamenco rosa." },
  { id: 69, emoji: "🦦", text: "Porque eres mi compañera de vida." },
  { id: 70, emoji: "🦔", text: "Porque eres mi pequeña valiente." },
  { id: 71, emoji: "🦉", text: "Porque eres mi confidente." },
  { id: 72, emoji: "🦚", text: "Porque eres mi inspiración." },
  { id: 73, emoji: "🦜", text: "Porque eres mi alegría diaria." },
  { id: 74, emoji: "🦢", text: "Porque eres mi ternura infinita." },
  { id: 75, emoji: "🦩", text: "Porque eres mi compañera de aventuras." },
  { id: 76, emoji: "🦦", text: "Porque eres mi razón de sonreír." },
  { id: 77, emoji: "🦔", text: "Porque eres mi tesoro." },
  { id: 78, emoji: "🦉", text: "Porque eres mi noche estrellada." },
  { id: 79, emoji: "🦚", text: "Porque eres mi fortuna." },
  { id: 80, emoji: "🦜", text: "Porque eres mi compañera de juegos." },
  { id: 81, emoji: "🦢", text: "Porque eres mi paz." },
  { id: 82, emoji: "🦩", text: "Porque eres mi alegría." },
  { id: 83, emoji: "🦦", text: "Porque eres mi todo." },
  { id: 84, emoji: "🦔", text: "Porque eres mi ternura." },
  { id: 85, emoji: "🦉", text: "Porque eres mi sabiduría." },
  { id: 86, emoji: "🦚", text: "Porque eres mi belleza." },
  { id: 87, emoji: "🦜", text: "Porque eres mi color." },
  { id: 88, emoji: "🦢", text: "Porque eres mi elegancia." },
  { id: 89, emoji: "🦩", text: "Porque eres mi pasión." },
  { id: 90, emoji: "🦦", text: "Porque eres mi compañera de sueños." },
  { id: 91, emoji: "🦔", text: "Porque eres mi alegría de vivir." },
  { id: 92, emoji: "🦉", text: "Porque eres mi noche tranquila." },
  { id: 93, emoji: "🦚", text: "Porque eres mi tesoro escondido." },
  { id: 94, emoji: "🦜", text: "Porque eres mi canto favorito." },
  { id: 95, emoji: "🦢", text: "Porque eres mi compañera de viaje." },
  { id: 96, emoji: "🦩", text: "Porque eres mi rosa eterna." },
  { id: 97, emoji: "🦦", text: "Porque eres mi alegría constante." },
  { id: 98, emoji: "🦔", text: "Porque eres mi ternura diaria." },
  { id: 99, emoji: "🦉", text: "Porque eres mi secreto mejor guardado." },
  { id: 100, emoji: "💖", text: "Porque simplemente eres tú, y eso basta para amarte por siempre." }
];

function App() {
  return (
    <div className="app">
      <nav className="main-nav" aria-label="Navegacion principal">
        <a href="#hero">Inicio</a>
        <a href="#contador">Tiempo</a>
        <a href="#razones">Razones</a>
        <a href="#carta">Carta</a>
      </nav>

      <HeroSection />
      <CounterSection startDate="2024-09-16T00:00:00" />
      <ReasonsSection reasons={reasons} />
      <LoveLetterSection />
      <Footer />
    </div>
  );
}

export default App;
