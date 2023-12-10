import { describe, it, expect } from 'vitest';
import { organizeGifts } from './solution-3';

describe('Challenge 8', () => {

  it('1. Should throw an error if the input is not a string', () => {
    expect(() => organizeGifts(1)).toThrow();
    expect(() => organizeGifts({})).toThrow();
    expect(() => organizeGifts(undefined)).toThrow();
    expect(() => organizeGifts(null)).toThrow();
  });

  //it('2. Should throw an error if the string input is not formed by number with giftCode', () => {
  //  expect(() => organizeGifts('abc') ).toThrow();
  //});

  it('3. Should return as many characterss as gifts less than ten and grouped in differents bags if necessary', () => {
    expect( organizeGifts('3a') ).toBe('(aaa)');
    expect( organizeGifts('5b') ).toBe('(bbbbb)');
    expect( organizeGifts('3a5b') ).toBe('(aaa)(bbbbb)');
  })

  it('4. Should return as many boxes as gifts multiples of 10 and grouped', () => {
    expect( organizeGifts('10a') ).toBe('{a}');
    expect( organizeGifts('20b') ).toBe('{b}{b}');
    expect( organizeGifts('10a20b') ).toBe('{a}{b}{b}');
  })

  it('5. Should return as many boxes as gifts multiples of 10 and bags with the reminders. And grouped', () => {
    expect( organizeGifts('14a') ).toBe('{a}(aaaa)');
    expect( organizeGifts('23b') ).toBe('{b}{b}(bbb)');
    expect( organizeGifts('14a23b') ).toBe('{a}(aaaa){b}{b}(bbb)');
  })

  //Should return pallets & pallets + boxes & pallets + boxes + bags  & gruped

})