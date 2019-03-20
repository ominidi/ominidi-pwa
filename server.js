require('newrelic');

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const host = process.env.HOST || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => app.render(req, res, '/index', req.query));
  server.get('/manifesto', (req, res) => app.render(req, res, '/index', req.query));
  server.get('/foto', (req, res) => app.render(req, res, '/photos', req.query));
  server.get('/attributions', (req, res) => app.render(req, res, '/attributions', req.query));
  server.get('/downloads', (req, res) => app.render(req, res, '/downloads', req.query));
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, host, (err) => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on ${host}:${port}`);
  });
});
