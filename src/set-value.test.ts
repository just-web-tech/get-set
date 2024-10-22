import { describe, expect, it } from 'vitest';
import { setValue } from './set-value';

describe('setValue', () => {
  it('should set the value at the object key', () => {
    const obj = { a: 1 };
    setValue(obj, 'a', 10);
    expect(obj.a).toBe(10);
  });

  it('should set the value at the deep object key', () => {
    const obj = { a: { b: 1, c: { d: 2 } } };
    setValue(obj, 'a.c.d', 30);
    expect(obj.a.c.d).toBe(30);
  });

  it("should create the nested object if it doesn't exist", () => {
    const obj: { a: number; b?: { c: string } } = { a: 1 };
    setValue(obj, 'b.c', 'str');
    expect(obj.b?.c).toBe('str');
  });

  it('should set the value at the array index', () => {
    const obj = { arr: [1, 2, 3] };
    setValue(obj, 'arr.1', 20);
    expect(obj.arr[1]).toBe(20);
  });

  it("should create the nested array if it doesn't exist", () => {
    const obj: { a: number; b?: string[] } = { a: 1 };
    setValue(obj, 'b.1', 'str');
    expect(obj.b).toEqual([, 'str']);
  });

  it('should set the value at the array with mixed values', () => {
    const obj = { arr: [1, 2, { deep: { key: 'value' as string } }] } as const;
    setValue(obj, 'arr.2.deep.key', 'str');
    expect(obj.arr[2].deep.key).toBe('str');
  });

  it('should set the value at the deep object structure', () => {
    const obj = { a: [{ b: { c: 10 } }] };
    setValue(obj, 'a.0.b.c', 20);
    expect(obj.a[0].b.c).toBe(20);
  });

  it('should return the modified object', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(setValue(obj, 'a.b.c', 10)).toEqual(obj);
  });
});
