const request = require("supertest");

const db = require("../data/db-config.js");
const server = require("../server.js");
// const users = require("../users/users-router.js");

describe("server", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it('tests are running with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("returns 200 ok", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("GET /users/", () => {
    it("should return an array", () => {
      return request(server)
        .get("/users/")
        .set("Authorization", "token")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(200);
        });
    });
  });
});
