const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0'; // Escutar em todas as interfaces para aceitar localhost e 127.0.0.1
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ 
  dev,
  hostname: 'localhost', // Para o Next.js usar localhost
  port,
  // Desabilitar watch para evitar problemas de "too many open files"
  webpackDevMiddleware: {
    watchOptions: {
      ignored: ['**/node_modules/**', '**/.git/**'],
      poll: false
    }
  }
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  server.listen(port, hostname, (err) => {
    if (err) {
      console.error('Failed to start server:', err);
      process.exit(1);
    }
    console.log(`> Ready on http://${hostname}:${port}`);
  });
}).catch((err) => {
  console.error('Failed to prepare Next.js app:', err);
  process.exit(1);
});
