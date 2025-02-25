import { contradiction } from "./util/index.js";

const f1 = (x: number): x is 1 => x === 1;
const f2 = (x: number): x is 2 => x === 2;

function g(f: typeof f1 | typeof f2, n: 1 | 2) {
  if (!f(n)) {
    contradiction(n);
  }
}

g(f1, 2);
