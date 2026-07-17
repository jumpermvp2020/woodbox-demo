export function GET() {
  return Response.json({ status: "ok", service: "woodbox-demo", timestamp: new Date().toISOString() });
}
