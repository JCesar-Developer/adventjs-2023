import { describe, it, expect } from 'vitest';
import { cyberReindeer } from './solution-3';

describe('Challenge 5', () => {

  it('1. Should throw an error if the input do not have the right value {string, number}', () => {
    expect(() => cyberReindeer(1)).toThrow();
    expect(() => cyberReindeer(1, 1)).toThrow();
    expect(() => cyberReindeer('', '')).toThrow();
    expect(() => cyberReindeer({})).toThrow();
    expect(() => cyberReindeer(undefined)).toThrow();
    expect(() => cyberReindeer(null)).toThrow();
  });

  it('2. Should return an array', () => {
    expect( typeof cyberReindeer('S...', 3) ).toBe('object');
  })

  it('3. Should show how the Reindeer moves forward if there are not obstacles', () => {
    expect( cyberReindeer('S...', 3) ).toStrictEqual(['S...', '.S..', '..S.']);
  })

  it('4. The Reindeer should stop if is in front of a wall', () => {
    expect( cyberReindeer('S.|.', 4) ).toStrictEqual( ["S.|.", ".S|.", ".S|.", ".S|."] );
  })

  it('5. All the walls must become an * after 5 seconds and the reindeer should continue forward', () => {
    expect( cyberReindeer('S.|..', 6) ).toStrictEqual( [  "S.|..", ".S|..", ".S|..", ".S|..", ".S|..", "..S.."] );
    expect( cyberReindeer('S.|.|.', 7) ).toStrictEqual( [  "S.|.|.", ".S|.|.", ".S|.|.", ".S|.|.", ".S|.|.", "..S.*.", "..*S*."] );
    expect( cyberReindeer('S.|.|.|......|.||.........', 8) ).toStrictEqual( [  "S.|.|.|......|.||.........", ".S|.|.|......|.||.........", ".S|.|.|......|.||.........", ".S|.|.|......|.||.........", ".S|.|.|......|.||.........", "..S.*.*......*.**.........", "..*S*.*......*.**.........", "..*.S.*......*.**........."] );
    expect( cyberReindeer('S..|...|..', 10) ).toStrictEqual( ["S..|...|..", ".S.|...|..", "..S|...|..", "..S|...|..", "..S|...|..", "...S...*..", "...*S..*..", "...*.S.*..", "...*..S*..", "...*...S.."] );
  })



})