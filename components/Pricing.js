const plans = [
  ['Starter', '$0', '3 proyectos'],
  ['Team', '$12', 'Proyectos ilimitados'],
  ['Business', '$29', 'SSO y auditoria'],
];

export default function Pricing() {
  return (
    <section id="pricing">
      <h2>Precios</h2>
      <div className="grid">
        {plans.map(([n, p, d]) => (
          <div className="card" key={n}>
            <h3>{n}</h3>
            <p style={{ fontSize: '2rem', margin: 0 }}>{p}<small className="muted">/mes</small></p>
            <p className="muted">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
