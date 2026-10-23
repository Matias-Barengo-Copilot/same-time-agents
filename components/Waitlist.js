'use client';
import { useState } from 'react';
import styles from './Waitlist.module.css';

// FEATURE 4 (Validacion): rechazar el email vacio con un mensaje claro.
// Baseline: envia lo que haya, incluso vacio.
export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setDone(true);
  }

  return (
    <section id="waitlist">
      <h2>Unete a la waitlist</h2>
      {done ? <p>Gracias, te avisaremos.</p> : (
        <form className={styles.form} onSubmit={onSubmit}>
          <input name="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="btn" type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
}
