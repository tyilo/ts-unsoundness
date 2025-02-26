# ts-unsoundness

Examples of why TypeScript's type system is not sound.

All of the examples manages to produce a value at runtime which TypeScript thinks has the type [`never`](https://www.typescriptlang.org/docs/handbook/2/functions.html#never). This shouldn't be possible.

They then call the function `contradiction` from [src/util/index.ts](src/util/index.ts) which is defined something like:

```typescript
function contradiction(v: never) {
  console.log(`Got a value with type never!`);
}
```
