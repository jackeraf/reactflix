export const isBrowser = () =>
  typeof globalThis !== "undefined" && typeof (globalThis as any).window !== "undefined";
