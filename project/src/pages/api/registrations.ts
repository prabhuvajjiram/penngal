import fs from 'fs/promises';
import { TOKEN } from './login';

export const prerender = false;

const fileUrl = new URL('../../../data/registrations.json', import.meta.url);

export async function GET({ request }: { request: Request }) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${TOKEN}`) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    const json = await fs.readFile(fileUrl, 'utf-8');
    return new Response(json, { headers: { 'Content-Type': 'application/json' } });
  } catch {
    return new Response('[]', { headers: { 'Content-Type': 'application/json' } });
  }
}
