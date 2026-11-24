import test from "node:test";
import assert from "node:assert/strict";
import { hello, handler } from "./index.js";

test("devuelve hola por defecto", () => {
  assert.equal(hello(), "adios mundo");
});

test("el handler responde 200 con el saludo", async () => {
  const res = await handler({ name: "eddyu" });
  const body = JSON.parse(res.body);
  assert.equal(res.statusCode, 200);
  assert.equal(body.message, "hola eddyu");
});