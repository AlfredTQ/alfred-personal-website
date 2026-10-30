import { contactEmail } from '@/lib/content';

const RESEND_URL = 'https://api.resend.com/emails';
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return Response.json({ error: 'Too many messages. Please try again later.' }, { status: 429 });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const service = clean(body.service, 120);
  const message = clean(body.message, 5000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !service || message.length < 10) {
    return Response.json({ error: 'Please complete all fields.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: 'Email service is not configured.' }, { status: 503 });

  const response = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL || contactEmail],
      reply_to: email,
      subject: `Portfolio inquiry: ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
      html: `<p><b>Name:</b> ${escapeHtml(name)}<br><b>Email:</b> ${escapeHtml(email)}<br><b>Service:</b> ${escapeHtml(service)}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!response.ok) return Response.json({ error: 'Could not send your message.' }, { status: 502 });
  return Response.json({ ok: true });
}

