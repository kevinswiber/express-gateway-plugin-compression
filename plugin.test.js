const assert = require('assert');
const http = require('http');
const path = require('path');
const express = require('express');

let Application = undefined;

beforeAll((done) => {
  const app = express();

  app.get('/', (_, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('hello world');
    next();
  });

  Application = app.listen(8081, done);
});

afterAll((done) => {
  Application.close(done);
})

describe('Route path', () => {
  it('should receive a compressed response', done => {
    const options = {
      host: 'localhost',
      port: 8080,
      headers: {
        'Accept-Encoding': 'gzip'
      }
    };

    http.get(options, res => {
      assert.equal(res.headers['content-encoding'], 'gzip');
      done();
    });
  });
});
