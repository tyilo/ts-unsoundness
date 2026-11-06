import { contradiction } from "./util/index.js";

class Foo {
	#called = false;

	get f(): number | string {
		if (this.#called) {
			return 1;
		}
		this.#called = true;
		return "a";
	}
}

const v: { f: unknown } = new Foo();

if (typeof v.f === "string") {
	if (typeof v.f === "number") {
		contradiction(v.f);
	}
}
