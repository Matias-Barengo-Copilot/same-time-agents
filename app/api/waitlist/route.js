export async function POST(req) {
  const { email } = await req.json();
  return Response.json({ ok: true, email });
}
