import { contradiction } from "./util/index.js";

// biome-ignore lint/suspicious/noExplicitAny: Needed for this example.
const anyValue: any = 1;
const stringValue: string = anyValue;
if (typeof stringValue !== "string") {
	contradiction(stringValue);
}
