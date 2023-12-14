import { describe, it, expect } from 'vitest';
import { maxDistance } from './solution-3';

describe("Challenge 6", () => {
  
  it('1. Should throw an error if the input is not a string', () => {
    expect(() => maxDistance(1)).toThrow();
    expect(() => maxDistance({})).toThrow();
    expect(() => maxDistance(undefined)).toThrow();
    expect(() => maxDistance(null)).toThrow();
  });

  it('2. Should return the max distance as a number', () => {
    expect( maxDistance('>>*<') ).toBe(2);
    expect( maxDistance('<<<>') ).toBe(2);
    expect( maxDistance('>***>') ).toBe(5);
  })

  it('3. Should return the max number of asterisks if the sum of side distances is equal to zero', () => {
    expect( maxDistance('') ).toBe(0);
    expect( maxDistance('>><<') ).toBe(0);
    expect( maxDistance('><***><') ).toBe(3);
  })

})