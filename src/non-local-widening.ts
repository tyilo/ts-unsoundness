import { contradiction } from "./util/index.js";

let v: number | string = 'a';

function f() {
  v = 1;
}

function main() {
  if (typeof v === 'string') {
    f();
    if (typeof v === 'number') {
      contradiction(v);
    }
  }
}

main();
