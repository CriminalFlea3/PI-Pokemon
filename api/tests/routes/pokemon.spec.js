/* eslint-disable import/no-extraneous-dependencies */
const session = require("supertest-session");
const app = require("../../src/app.js");


const agent = session(app);

describe("Rutas types", () => {
  describe("GET /types", () => {
    it("se espera una respuesta 200", () => agent.get("/types").expect(200));
  });
});
