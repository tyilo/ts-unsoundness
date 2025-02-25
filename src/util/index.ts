export function contradiction(v: never) {
  console.log(`Got a value with type never! Real type is ${typeof v} with value:`, v);
}
