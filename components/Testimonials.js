const quotes = [
  ['Ana, CTO', 'Redujimos reuniones a la mitad.'],
  ['Luis, PM', 'Por fin todos ven lo mismo.'],
  ['Sofia, Dev', 'La API es una joya.'],
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Lo que dicen</h2>
      <div className="grid">
        {quotes.map(([n, q]) => (
          <blockquote className="card" key={n} style={{ margin: 0 }}>
            &ldquo;{q}&rdquo;<br /><span className="muted">{n}</span>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
