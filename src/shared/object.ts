export const mapValues = <T, U>(
  obj: Record<string, T>,
  fn: (item: T, key: string) => U
): Record<string, U> => {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k)]));
};
