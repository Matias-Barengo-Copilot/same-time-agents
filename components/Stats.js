'use client';
import { useEffect, useState } from 'react';
import styles from './Stats.module.css';

// FEATURE 3 (Loading indicator): agregar el indicador de carga aqui.
// /api/stats responde con ~1.5s de latencia a proposito.
export default function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/api/stats').then((r) => r.json()).then(setStats);
  }, []);

  return (
    <section id="stats">
      <h2>Orbita en numeros</h2>
      <div className={styles.row}>
        {stats && stats.items.map((s) => (
          <div className="card" key={s.label}><strong>{s.value}</strong><p className="muted">{s.label}</p></div>
        ))}
      </div>
    </section>
  );
}
