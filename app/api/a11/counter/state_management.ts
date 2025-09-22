let counter = 0;

export function incrementCounter() {
  counter++;
}

export function setCounter(newCount: number) {
  counter = newCount;
}

export function getCounter() {
  return counter;
}
