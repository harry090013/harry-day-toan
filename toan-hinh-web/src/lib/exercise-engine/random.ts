export interface Rng {
  next: () => number; // 0 to 1
  int: (min: number, max: number) => number; // [min, max] inclusive
  element: <T>(arr: T[]) => T;
  shuffle: <T>(arr: T[]) => T[];
}

export function createRng(seed: number): Rng {
  // Mulberry32 generator
  let state = seed | 0;
  
  const next = () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const int = (min: number, max: number) => {
    return Math.floor(next() * (max - min + 1)) + min;
  };

  const element = <T>(arr: T[]): T => {
    const idx = int(0, arr.length - 1);
    return arr[idx];
  };

  const shuffle = <T>(arr: T[]): T[] => {
    const clone = [...arr];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = int(0, i);
      const temp = clone[i];
      clone[i] = clone[j];
      clone[j] = temp;
    }
    return clone;
  };

  return { next, int, element, shuffle };
}

// Generate a list of unique numbers not containing target correct value
export function uniqueNumbers(rng: Rng, count: number, min: number, max: number, exclude: number[] = []): number[] {
  const result: number[] = [];
  const excludedSet = new Set(exclude);
  
  let attempts = 0;
  while (result.length < count && attempts < 1000) {
    const num = rng.int(min, max);
    if (!excludedSet.has(num) && !result.includes(num)) {
      result.push(num);
    }
    attempts++;
  }
  return result;
}
