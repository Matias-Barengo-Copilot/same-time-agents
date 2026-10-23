const faqs = [
  ['Hay plan gratis?', 'Si, Starter es gratis para siempre.'],
  ['Puedo cancelar?', 'Cuando quieras, sin letra chica.'],
  ['Donde se alojan los datos?', 'En regiones UE y EEUU a eleccion.'],
  ['Ofrecen soporte?', 'Chat 24/7 en planes pagos.'],
];

export default function Faq() {
  return (
    <section id="faq">
      <h2>Preguntas frecuentes</h2>
      {faqs.map(([q, a]) => (
        <details key={q} className="card" style={{ marginBottom: 12 }}>
          <summary>{q}</summary>
          <p className="muted">{a}</p>
        </details>
      ))}
    </section>
  );
}
