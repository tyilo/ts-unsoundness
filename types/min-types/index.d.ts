// biome-ignore-all lint/suspicious/noShadowRestrictedNames: No shadowing occurs, this is the definition of the global values.

export {};

declare global {
	interface Array<T> {
		[n: number]: T;
	}
	interface Boolean {}
	interface CallableFunction {}
	interface Function {}
	interface IArguments {}
	interface NewableFunction {}
	interface Number {}
	interface Object {}
	interface RegExp {}
	interface String {}

	const Array: {
		(arrayLength?: number): unknown[];
		readonly prototype: unknown[];
	};

	interface Promise<T> {}
	const Promise: {
		new <T>(executor: (resolve: (value: T) => unknown) => unknown): Promise<T>;
	};

	const setTimeout: (code: () => unknown, delay: number) => unknown;
}
