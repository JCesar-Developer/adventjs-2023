import { describe, it, expect } from 'vitest';
import getIndexsForPalindrome from './solution-3'

describe('Challenge 11:', () => {

  it('1. Should return a function', () => {
    expect( typeof getIndexsForPalindrome ).toBe('function');
  });

  it('2. Should return a void array if no changes are necessary to achive a palindrome string', () => {
    expect(getIndexsForPalindrome('aba') ).toEqual([]);
    expect(getIndexsForPalindrome('anna') ).toEqual([]);
    expect(getIndexsForPalindrome('anena') ).toEqual([]);
    expect(getIndexsForPalindrome('aaaaaaaa') ).toEqual([]);
  });

  it('3. Should return null if it is not possible to do changes to achive a palindrome string', () => {
    expect( getIndexsForPalindrome('abc') ).toBe(null);
    expect( getIndexsForPalindrome('abac') ).toBe(null);
    expect( getIndexsForPalindrome('caababa') ).toBe(null);
  });

  it('4. Should return an array with the first match of the characters indexs to change to achive a palindrome string', () => {
    expect( getIndexsForPalindrome('abab') ).toStrictEqual([0, 1]);
    expect( getIndexsForPalindrome('aaababa') ).toStrictEqual([1, 3]);
    expect( getIndexsForPalindrome('aacbcba') ).toStrictEqual([1, 3]);
    expect( getIndexsForPalindrome('aabbcaa') ).toStrictEqual([3, 4]);
  });
});