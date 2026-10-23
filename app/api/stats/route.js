export async function GET() {
  await new Promise((r) => setTimeout(r, 1500));
  return Response.json({
    items: [
      { label: 'Equipos activos', value: '12,480' },
      { label: 'Tareas completadas', value: '3.2M' },
      { label: 'Uptime', value: '99.99%' },
    ],
  });
}
