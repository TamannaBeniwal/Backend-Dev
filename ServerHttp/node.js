const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (req.method === 'GET') {

    // Route: /
    if (path === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the Node.js HTTP Server');
    }

    // Route: /about
    else if (path === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
          <head><title>About</title></head>
          <body>
            <h1>About Page</h1>
            <p>This is a simple Node.js HTTP server.</p>
          </body>
        </html>
      `);
    }

    // Route
    else if (path === '/user') {
      const { name, age } = parsedUrl.query;

      const userData = {
        name: name || null,
        age: age || null
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userData));
    }

    // Invalid routes
    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Page Not Found');
    }

  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});