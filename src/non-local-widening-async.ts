import { contradiction } from "./util/index.js";

function sleep(ms: number): Promise<undefined> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(undefined), ms);
  });
}

let v: number | string = 'a';

async function modify() {
  await sleep(100);
  v = 1;
}

async function main() {
  modify();
  if (typeof v === 'string') {
    await sleep(200);
    if (typeof v === 'number') {
      contradiction(v);
    }
  }
}

await main();
