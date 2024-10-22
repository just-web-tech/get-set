import type { Path, PathValue } from './path';
import type { AnyRecord } from './utility';

const isObject = (value: unknown): value is object => {
  return value !== null && typeof value === 'object';
};

export const setValue = <T extends AnyRecord, P extends Path<T>>(obj: T, path: P, value: PathValue<T, P>) => {
  let index = -1;
  let copy: T = obj;
  const dotPath = path.split('.') as P[];
  const [length, lastIndex] = [dotPath.length, dotPath.length - 1];

  while (++index < length) {
    const key = dotPath[index];
    let newValue = value;

    if (index !== lastIndex) {
      // prettier-ignore
      newValue = !isObject(copy[key])
        ? (isNaN(+dotPath[index + 1]) ? {} : []) as T[P]
        : copy[key];
    }

    copy[key] = newValue;
    copy = copy[key];
  }

  return obj;
};
