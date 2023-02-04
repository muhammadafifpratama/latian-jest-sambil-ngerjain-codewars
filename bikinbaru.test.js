const sum = require('./sums');
const request = require("supertest")
const baseURL = "http://localhost:3000"

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

request

// request(app)
//   .get("/endpoint")
//   .expect(200);