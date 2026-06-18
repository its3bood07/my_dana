export default function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const expectedPassword = process.env.SITE_PASSWORD || "dana2024";

  let body = {};

  try {
    body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
  } catch (error) {
    return response.status(400).json({ error: "Invalid JSON body" });
  }

  const submittedPassword = String(body.password ?? "").trim();

  if (submittedPassword !== expectedPassword) {
    return response.status(401).json({ error: "Incorrect password" });
  }

  const host = request.headers.host || "";
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("0.0.0.0");
  const cookieOptions = [
    "site_auth=1",
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=86400",
    isLocalhost ? "" : "Secure",
  ].filter(Boolean).join("; ");

  response.setHeader("Set-Cookie", [cookieOptions]);

  return response.status(200).json({
    ok: true,
    redirect: "/",
  });
}
