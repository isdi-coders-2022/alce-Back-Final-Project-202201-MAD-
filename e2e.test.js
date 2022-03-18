import { app, server } from './index.js';
import request from 'supertest';


describe('Given the express application', () => {
  afterEach(() => {
    server.close();
  });
  describe('When GET /', () => {
    test('It returns Hello World', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
      expect(res.text).toBe('Hello World!');
    });
  });
});
