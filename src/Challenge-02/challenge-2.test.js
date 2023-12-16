import { describe, it, expect } from 'vitest';
import { manufacture } from './solution-3';

describe('Challenge 2', () => {

  it('Should throw if does not have parameters', () => {
    expect( () => manufacture() ).toThrow();
  });

  it('Should throw if the second parameter is invalid input', () => {
    expect( () => manufacture(['tren'], '') ).toThrow();
    expect( () => manufacture(['tren'], {}) ).toThrow();
    expect( () => manufacture(['tren'], null) ).toThrow();
    expect( () => manufacture(['tren'], undefined) ).toThrow();
  });

  it('Should return an empty array if it is provided an empty array as the first parameter', () => {
    expect( manufacture([], 'tren') ).toEqual([]);
  });

  it('Should return an empty array if the gifts characters are not included in the material', () => {
    expect( manufacture(['libro', 'ps5'], 'psli') ).toEqual([]);
  });

  it('Should return an array with the gifts that can be manufactured', () => {
    expect( manufacture(['juego', 'puzzle'], 'jlepuz') ).toEqual(['puzzle']);
    expect( manufacture(['tren', 'oso', 'pelota'], 'tronesa') ).toEqual(["tren", "oso"]);
  });

});