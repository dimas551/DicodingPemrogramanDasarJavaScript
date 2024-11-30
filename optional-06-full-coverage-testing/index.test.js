import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum: menambahkan dua angka positif", () => {
  const result = sum(5, 3);
  assert.strictEqual(result, 8);
});

test("sum: menambahkan angka dengan angka negatif", () => {
  const result = sum(5, -3);
  assert.strictEqual(result, 0);
});

test("sum: menambahkan dua angka negatif", () => {
  const result = sum(-5, -3);
  assert.strictEqual(result, 0);
});

test("sum: menambahkan angka dengan parameter bukan angka", () => {
  const result1 = sum(5, "3");
  const result2 = sum("5", 3);
  const result3 = sum("5", "3");

  assert.strictEqual(result1, 0);
  assert.strictEqual(result2, 0);
  assert.strictEqual(result3, 0);
});

test("sum: menambahkan angka dengan nol", () => {
  const result1 = sum(0, 5);
  const result2 = sum(5, 0);
  const result3 = sum(0, 0);

  assert.strictEqual(result1, 5);
  assert.strictEqual(result2, 5);
  assert.strictEqual(result3, 0);
});