import fs from 'fs/promises';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const prerender = false;

const fileUrl = new URL('../../../../data/registrations.xml', import.meta.url);

async function ensureFile() {
  try {
    await fs.access(fileUrl);
  } catch {
    await fs.mkdir(new URL('../..', fileUrl), { recursive: true });
    await fs.writeFile(fileUrl, '<registrations></registrations>');
  }
}

export async function POST({ request }: { request: Request }) {
  const { name, email } = await request.json();
  if (!name || !email) {
    return new Response('Invalid', { status: 400 });
  }

  await ensureFile();
  let xml = await fs.readFile(fileUrl, 'utf-8');
  const entry = `  <registration>\n    <name>${escapeXml(String(name))}</name>\n    <email>${escapeXml(String(email))}</email>\n  </registration>\n`;
  xml = xml.replace('</registrations>', `${entry}</registrations>`);
  await fs.writeFile(fileUrl, xml);
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
