const items = [
  ['Tableros vivos', 'Cambios visibles al instante para todo el equipo.'],
  ['Automatizaciones', 'Reglas simples que mueven el trabajo por ti.'],
  ['Integraciones', 'Conecta tus herramientas favoritas en minutos.'],
  ['Analitica', 'Entiende donde se atasca tu flujo de trabajo.'],
  ['Permisos finos', 'Cada persona ve solo lo que necesita.'],
  ['API abierta', 'Extiende Orbita con tu propio codigo.'],
];

export default function Features() {
  return (
    <section id="features">
      <h2>Funcionalidades</h2>
      <div className="grid">
        {items.map(([t, d]) => (
          <div className="card" key={t}><h3>{t}</h3><p className="muted">{d}</p></div>
        ))}
      </div>
    </section>
  );
}
