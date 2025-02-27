import { contradiction } from "./util/index.js";

function modify(v: { a: unknown }) {
  v["a"] = 1;
}

const v = { a: "b" };
modify(v);
if (typeof v.a !== "string") {
  contradiction(v.a);
}
