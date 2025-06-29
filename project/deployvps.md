Option 1: Deploy as Static Site (recommended if using default Astro setup)
🔧 1. Build the site
SSH into your VPS and run:

bash
Copy
Edit
cd /path/to/your/penngal/project
npm install
npm run build
This generates a dist/ folder with static HTML/CSS/JS.

🌐 2. Serve the static site
Option A: Use serve (simple)
Install and run:

bash
Copy
Edit
npm install -g serve
serve -s dist
This will serve your site at http://your-vps-ip:3000 by default.

Option B: Use NGINX (production-grade)
Copy built site to a directory:

bash
Copy
Edit
cp -r dist /var/www/penngal
Create NGINX config (e.g., /etc/nginx/sites-available/penngal):

nginx
Copy
Edit
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/penngal;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
Enable and restart NGINX:

bash
Copy
Edit
ln -s /etc/nginx/sites-available/penngal /etc/nginx/sites-enabled/
systemctl restart nginx
✅ Option 2: Deploy as SSR Server (only if you're using Astro SSR)
If you're using adapter-node, do this instead:

Install the node adapter:

bash
Copy
Edit
npm install @astrojs/node
Update astro.config.mjs:

js
Copy
Edit
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
Build and run:

bash
Copy
Edit
npm run build
node ./dist/server/entry.mjs
Optionally run as service (using PM2 or systemd):

bash
Copy
Edit
npm install -g pm2
pm2 start ./dist/server/entry.mjs --name "penngal"
🔐 Optional: Add SSL (Let’s Encrypt)
If using NGINX and a real domain:

bash
Copy
Edit
apt install certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com
Summary
Setup Type	Use When...	Hosting Method
Static Site	You use default Astro (output: static)	NGINX / serve
SSR Site	You need server logic (auth, API, etc)	Node.js with PM2

Let me know which method you're using (static vs SSR), and I can give you exact commands or help with the NGINX config.