import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import path from 'path';
import fs from 'fs';

import App from '../src/App';

const app = express();
app.use(express.static(path.join(__dirname, '..', 'build'), { index: false }));
app.get('/*', (req, res, next) => {
  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  fs.readFile(
    path.join(__dirname, '..', 'build', 'index.html'),
    { encoding: 'utf-8' },
    (err, data) => {
      if (err) {
        next(err);
        return;
      }

      res
        .status(200)
        .send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${reactApp}</div>`
          )
        );
    }
  );
});

app.listen(4000, () => {
  console.log('port: 4000');
});
