import crypto from 'crypto';

export const prerender = false;

const USER = 'admin';
const PASS_HASH = crypto.createHash('sha256').update('admin').digest('hex');
export const TOKEN = crypto.createHash('sha256').update('admin-session').digest('hex');

export async function POST({ request }: { request: Request }) {
  const { username, password } = await request.json();
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  if (username === USER && hash === PASS_HASH) {
    return new Response(JSON.stringify({ token: TOKEN }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
}
