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

	// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
	const Array: {
		(arrayLength?: number): unknown[];
		readonly prototype: unknown[];
	};

	interface Promise<T> {}
	// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
	const Promise: {
		new <T>(executor: (resolve: (value: T) => unknown) => unknown): Promise<T>;
	};

	const setTimeout: (code: () => unknown, delay: number) => unknown;
}
