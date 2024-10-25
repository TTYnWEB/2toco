// IMPs - StdLib
import { readFileSync } from 'fs';
import http from 'http';
import https from 'https';
// IMPs - ExtLib
import express from 'express';
import helmet from 'helmet';

// DATA
const optPath = '/etc/letsencrypt/live/2to.co';
const key  = readFileSync(`${optPath}/privkey.pem`);
const cert = readFileSync(`${optPath}/cert.pem`);
const ca   = readFileSync(`${optPath}/chain.pem`);
const opts = { key, cert, ca };
const loop_port = 9000;
const http_port = 80;
const https_port = 443;

// FUNC
const loop_func = () => console.log('loop server up');
const http_func = () => console.log('http server up');
const https_func = () => console.log('https server up');

// INIT - app
const app = express();

// CONF
app.use(helmet());
app.use(express.json());
app.disable('x-powered-by');

// LOOP - ROUTES
app.post('/', ({ body: { url }}, res) => {

  insert(url);

  const db = createDB();
  const q = `SELECT guid FROM urls WHERE url = ?;`;

  db.get(q, [url], (err, row) => (
    err
      ? res.send(err)
      : res.send(row)
  ));
});

app.get(/^\/[a-z]$/, ({ originalUrl }, res) => {

  const guid = originalUrl.substr(1);

  const db = createDB();
  const q = `SELECT url, date_expire FROM urls WHERE guid = ?;`;

  db.get(q, [guid], (err, row) => (
    err
      ? res.send(err)
      : res.send(row)
  ));
});

// INIT - loopserver
app.listen(loop_port, loop_func);

// MIDDLEWARE
const www2non = ({ headers: { host, protocol, originalUrl }}, res, next) => (
  (host.slice(0, 4) !== 'www.')
    ? next()
    : res.redirect(301, `${protocol}://${host.slice(4)}${originalUrl}`)
);

app.use(www2non);

// ROUTES
app.get('/', (req, res) => res.send('OK'));

// INIT - webservers
http.createServer(app).listen(http_port, http_func);
https.createServer(opts, app).listen(https_port, https_func);
