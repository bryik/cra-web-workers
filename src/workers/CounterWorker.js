import * as Comlink from "comlink";

let count = 0;

async function increment(cb) {
  count += 1;
  await cb(count);
}

async function decrement(cb) {
  count -= 1;
  await cb(count);
}

Comlink.expose({
  increment,
  decrement,
});
