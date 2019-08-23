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
        .set(
          "Authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJlZWQxIiwiand0aWQiOjEsImlhdCI6MTU2NjUzMTMyOCwiZXhwIjoxNTY2NzA0MTI4fQ.L6j5Cmg3mB3iRPRo6xl2KWrjo19R0mD8W8ds8Mz9DpM"
        )
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
  describe("POST /users/", () => {
    it("should return 201 when a user is added", () => {
      return request(server)
        .post("/auth/register")
        .send({
          username: "user2",
          password: "pass",
          departments_id: 1,
          positions_id: 1
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
  describe("POST /departments/", () => {
    it("should insert a department into the db", () => {
      return request(server)
        .post("/departments/")
        .set(
          "Authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJlZWQxIiwiand0aWQiOjEsImlhdCI6MTU2NjUzMTMyOCwiZXhwIjoxNTY2NzA0MTI4fQ.L6j5Cmg3mB3iRPRo6xl2KWrjo19R0mD8W8ds8Mz9DpM"
        )
        .send({
          name: "department three",
          description: "Department three is a test dept"
        })
        .then(res => {
          //   expect(res.body.length).toBe(2);
          expect(res.status).toBe(201);
        });
    });
  });
});
