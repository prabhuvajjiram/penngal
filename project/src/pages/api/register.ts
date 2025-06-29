import fs from 'fs/promises';

export interface Registration {
  name: string;
  email: string;
  address?: string;
  comments?: string;
}

export const prerender = false;

const fileUrl = new URL('../../../data/registrations.json', import.meta.url);

async function ensureFile() {
  try {
    await fs.access(fileUrl);
  } catch {
    await fs.mkdir(new URL('..', fileUrl), { recursive: true });
    await fs.writeFile(fileUrl, '[]');
  }
}

export async function POST({ request }: { request: Request }) {
  const { name, email, address, comments } = (await request.json()) as Partial<Registration>;
  if (!name || !email) {
    return new Response('Invalid', { status: 400 });
  }

  await ensureFile();
  const text = await fs.readFile(fileUrl, 'utf-8');
  const registrations: Registration[] = JSON.parse(text);
  registrations.push({ name, email, address, comments });
  await fs.writeFile(fileUrl, JSON.stringify(registrations, null, 2));
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
