const request = require("supertest");
const app = require("./index");

test("GET / returns Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("Hello World");
});

test("GET /add?a=2&b=3 returns 5", async () => {
    const res = await request(app).get("/add?a=2&b=3");
    expect(res.body.result).toBe(5);
});