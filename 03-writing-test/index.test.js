import { sum } from "./index.js";
import assert from "node:assert";
import test from "node:test";

test("sum adds two numbers correctly", (t) => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(-5, -5), -10);
  assert.strictEqual(sum(1000, 2000), 3000);
});