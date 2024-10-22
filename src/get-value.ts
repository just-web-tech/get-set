import type { AnyRecord } from './utility';
import type { Path, PathValue } from './path';

export const getValue = <T extends AnyRecord, P extends Path<T>>(obj: T, path: P) => {
  const result = path.split('.').reduce((acc, key) => acc?.[key], obj);
  const value = result === undefined || obj === result ? obj[path] : result;

  return value as PathValue<T, P>;
};
