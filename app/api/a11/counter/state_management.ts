// We cast globalThis to `any` to be able to attach our custom property.
// This is a standard pattern for persisting state in Next.js dev mode.
const globalState = globalThis as any;

if (globalState.counter_a11 === undefined) {
  globalState.counter_a11 = 0;
}

export function incrementCounter() {
  globalState.counter_a11++;
}

export function setCounter(newCount: number) {
  globalState.counter_a11 = newCount;
}

export function getCounter() {
  return globalState.counter_a11;
}