"use strict";

const app = require("../../app.js");

describe("Tests index", () => {
  it("verifies successful response", async () => {
    const result = await app.lambdaHandler({}, {});

    expect(typeof result).toBe("object");
    expect(result.statusCode).toBe(200);
    expect(typeof result.body).toBe("string");

    let response = JSON.parse(result.body);

    expect(typeof response).toBe("object");
    expect(response.message).toBe("hello world");
  });
});
