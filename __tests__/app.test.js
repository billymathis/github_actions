const request = require('supertest');
const app = require('../app');

describe("GET /", () => {
  test("It should respond with 'Hello World Deployed through github actions!!!'", async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});
