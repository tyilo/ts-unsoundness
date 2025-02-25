import { contradiction } from "./util/index.js";

const f: () => void = () => 1;

const v = f();
if (typeof v === 'number') {
  contradiction(v);
}
