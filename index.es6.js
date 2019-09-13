import express from 'express';

import React from 'react';
import {renderToString} from 'react-dom/server';

import App from './app';

const PORT = process.env.PORT || 8080;

express()
  .use(async (request, response, next) => {
    const appHtmlString = renderToString(<App />);

    response
      .status(200)
      .send(appHtmlString);
  })

  .listen(PORT, () => {
    process.stdout.write(`\nServer Side Rendering on port ${PORT}\n`);
  });
