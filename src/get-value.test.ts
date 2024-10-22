import { describe, expect, it } from 'vitest';
import { getValue } from './get-value';

const obj = {
  array: [1, 2, 3],
  mixed: [4, 5, { key: 'str' }],
  deep: {
    obj: {
      key: 'deep',
    },
    array: [7, 8, 9],
  },
  date: new Date(),
  some: {
    value: null,
  },
  'dotted.key': 'dotted',
  'some.value': 10,
};

describe('getValue', () => {
  it('should get the correct values', () => {
    expect(getValue(obj, 'array')).toEqual([1, 2, 3]);
    expect(getValue(obj, 'array.1')).toBe(2);
    expect(getValue(obj, 'array.3')).toBe(undefined);
    expect(getValue(obj, 'mixed.2.key')).toBe('str');
    expect(getValue(obj, 'deep.obj')).toEqual({ key: 'deep' });
    expect(getValue(obj, 'deep.obj.key')).toBe('deep');
    expect(getValue(obj, 'dotted.key')).toBe('dotted');
    expect(getValue(obj, 'date')).instanceOf(Date);
    expect(getValue(obj, 'some.value')).toBe(null);
  });
});
