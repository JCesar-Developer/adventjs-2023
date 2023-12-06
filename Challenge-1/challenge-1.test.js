import { describe, it, expect } from 'vitest';
import { findFirstRepeated } from './solution-2';

describe('Challenge 1', () => {
  it('Should throw if not an array of numbers is provided as parameter', () => {
    expect( () => findFirstRepeated('') ).toThrow();
    expect( () => findFirstRepeated({}) ).toThrow();
    expect( () => findFirstRepeated(null) ).toThrow();
    expect( () => findFirstRepeated(undefined) ).toThrow();
  })

  it('Should return -1 if the array is void', () => {
    expect( findFirstRepeated([]) ).toBe(-1);
  });

  it('Should return -1 if the array has only one element', () => {
    expect( findFirstRepeated([1]) ).toBe(-1);
  });

  it('Should return -1 if the array has no repeated numbers', () => {
    expect( findFirstRepeated([1, 2, 3, 4]) ).toBe(-1);
  });

  it('Should return the first repeated number', () => {
    expect( findFirstRepeated([1, 2, 3, 1]) ).toBe(1);
    expect( findFirstRepeated([2, 1, 3, 5, 3, 2]) ).toBe(3);
    expect( findFirstRepeated([5, 1, 5, 1]) ).toBe(5);
  });
})