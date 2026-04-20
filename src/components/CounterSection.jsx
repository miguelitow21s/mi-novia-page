import { useEffect, useMemo, useState } from "react";

const unitLabels = [
  { key: "years", label: "anos" },
  { key: "months", label: "meses" },
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "minutos" },
  { key: "seconds", label: "segundos" },
];

function calculateElapsedTime(start) {
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  // Ajusta cada unidad para obtener un contador humano (anos/meses/dias...) y no solo milisegundos.
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const previousMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += previousMonthDays;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

function CounterSection({ startDate }) {
  const relationshipStart = useMemo(() => new Date(startDate), [startDate]);
  const [elapsed, setElapsed] = useState(() => calculateElapsedTime(relationshipStart));

  useEffect(() => {
    // Actualiza cada segundo y limpia el intervalo al desmontar para evitar fugas de memoria.
    const interval = setInterval(() => {
      setElapsed(calculateElapsedTime(relationshipStart));
    }, 1000);

    return () => clearInterval(interval);
  }, [relationshipStart]);

  return (
    <section id="contador" className="counter-section">
      <h2>Llevamos juntos...</h2>

      <div className="counter-grid" role="list" aria-label="Tiempo juntos">
        {unitLabels.map((unit) => (
          <article className="counter-card" key={unit.key} role="listitem">
            <strong className="counter-value" key={`${unit.key}-${elapsed[unit.key]}`}>
              {String(elapsed[unit.key]).padStart(2, "0")}
            </strong>
            <span>{unit.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CounterSection;
