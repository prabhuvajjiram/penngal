import fs from 'fs/promises';
import { TOKEN } from './login';

export const prerender = false;

const fileUrl = new URL('../../../../data/registrations.xml', import.meta.url);

export async function GET({ request }: { request: Request }) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${TOKEN}`) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    const xml = await fs.readFile(fileUrl, 'utf-8');
    return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
  } catch {
    return new Response('<registrations></registrations>', { headers: { 'Content-Type': 'application/xml' } });
  }
}
