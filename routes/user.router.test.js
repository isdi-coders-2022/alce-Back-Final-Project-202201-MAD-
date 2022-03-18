const { app, server } = require('../index.js');
const request = require('supertest');

describe('Given the express application', () => {
  afterEach(() => {
    server.close();
  });
  describe('When GET /users', () => {
    test('It returns Hello World', async () => {
      const res = await request(app).get('/users');
      expect(res.status).toBe(200);
      expect(res.text).toBe('This route get all Users');
    });
  });
  describe('When GET /users/:id', () => {
    test('It returns Hello World', async () => {
      const res = await request(app).get('/users/1');
      expect(res.status).toBe(200);
      expect(res.text).toBe("This route get User with id " + 1);
    });
  });
  describe('When POST /users', () => {
    test('It returns Hello World', async () => {
      const res = await request(app)
        .post('/users/')
        .send({test: "test"})
        .set('Accept', 'application/json');
      expect(res.status).toBe(200);
      expect(res.text).toBe("This route create a User with value " + JSON.stringify({test: "test"}));
    });
  });
  describe('When PUT /users/:id', () => {
    test('It returns Hello World', async () => {
      const res = await request(app)
        .put('/users/1')
        .send({test: "test"})
        .set('Accept', 'application/json');
      expect(res.status).toBe(200);
      expect(res.text).toBe("This route update User with id " + 1+ " and value " + JSON.stringify({test: "test"}));
    });
  });
  describe('When DELETE /users/:id', () => {
    test('It returns Hello World', async () => {
      const res = await request(app).delete('/users/1');
      expect(res.status).toBe(200);
      expect(res.text).toBe("This route delete User with id " + 1);
    });
  });
});
