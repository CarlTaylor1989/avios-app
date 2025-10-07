export const runtime = "nodejs";

const API_BASE = process.env.AVIOS_API_BASE ?? "http://localhost:4000/api";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const response = await fetch(`${API_BASE}/price-points`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store"
    });

    const json = await response.json();
    console.log(response);
    return new Response(JSON.stringify(json), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });
  } catch {
    return new Response(JSON.stringify({ error: "Submission failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
