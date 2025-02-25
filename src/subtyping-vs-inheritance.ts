// Based on https://counterexamples.org/subtyping-vs-inheritance.html

import { contradiction } from "./util/index.js";

interface Base {
    f: () => string | number;
}
interface Sub {
    f: () => string;
}

class A {
    go(_: Base) {}
}
class B extends A {
    override go(x: Sub) {
        const v = x.f();
        if (typeof v !== 'string') {
            contradiction(v);
        }
    }
}

const x: Base = { f: () => 1 };
const b = new B();
const a: A = b;
a.go(x);
