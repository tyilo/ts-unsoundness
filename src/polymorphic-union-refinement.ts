// Based on https://counterexamples.org/polymorphic-union-refinement.html

import { contradiction } from "./util/index.js";

function orSingleton<T>(x: T | T[]): T[] {
	if (Array.isArray(x)) {
		return x;
	}
	return [x];
}

function wrapInArray<T>(x: T): T[] {
	return orSingleton(x);
}

const v = wrapInArray([1, 2, 3]);
const first = v[0];
if (first !== undefined && !Array.isArray(first)) {
	contradiction(first);
}
