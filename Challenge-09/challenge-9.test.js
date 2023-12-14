import { describe, it, expect } from 'vitest';
import { adjustLights } from './solution-2';

describe('Challenge 5', () => {

  it('1. Should throw an error if the input is not a string[]', () => {
    expect(() => adjustLights(1)).toThrow();
    expect(() => adjustLights({})).toThrow();
    expect(() => adjustLights(undefined)).toThrow();
    expect(() => adjustLights(null)).toThrow();
  });

  it('2. Should return 0 if the array input lenght is zero or one', () => {
    expect(adjustLights([])).toBe(0);
    expect(adjustLights(['🟢'])).toBe(0);
  })

  it('3. Should return 0 if the difference between light colours is smaller or equal to one and all the event lights and odds lights are the same', () => {
    expect(adjustLights(['🔴', '🟢'])).toBe(0) // 0 | dif: 1 | i: 0 | p: 0;
    expect(adjustLights(['🟢', '🔴', '🟢'])).toBe(0) // 0 | dif: 1 | i: 0 | p: 0;
    expect(adjustLights(['🔴', '🟢', '🔴', '🟢'])).toBe(0)// 0 | dif: 1 | i: 0 | p: 0;
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)// 0 | dif: 1 | i: 0 | p: 0;
  })

  it('4. Should return the ratio goes down of the difference between light colours if the differens between light colors is greater than 1', () => {
    expect(adjustLights(['🔴', '🔴'])).toBe(1) // 1 | dif: 2 | i: 0 | p: 0 -> 2/2 = 1
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1) // 1 | dif: 3 | i: 0 | p: 0 -> 3/2 = 1
    expect(adjustLights(['🔴', '🔴', '🔴', '🔴'])).toBe(2)// 2 | dif: 4 | i: 0 | p: 0 -> 4/2 = 2
    expect(adjustLights(['🔴', '🔴', '🔴', '🔴', '🔴'])).toBe(2)// 2 | dif: 5 | i: 0 | p: 0 -> 5/2 = 2
  })

  it('5. If difference is 0 and  ', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢' ])).toBe(2) // 2 dif: 0 | i: 1 | p: 1
    expect(adjustLights(['🔴', '🔴', '🔴', '🟢', '🟢', '🟢' ])).toBe(2) // 2 dif: 0 | i: 1 | p: 1
    expect(adjustLights(['🔴', '🔴', '🔴', '🔴', '🟢', '🟢', '🟢', '🟢' ])).toBe(4) // 2 dif: 0 | i: 2 | p: 2
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🟢', '🔴' ])).toBe(2) // 2 dif: 0 | i: 1 | p: 1
  })

  it('6. ', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢' ])).toBe(1) // 1 dif: 2 | i: 0 | p: 1
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢' ])).toBe(1) // 1 dif: 3 | i: 0 | p: 1
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢', '🟢' ])).toBe(2)// 2 dif: 4 | i: 0 | p: 2
  })

  it('7. ', () => {
    expect(adjustLights(['🔴', '🔴', '🟢' ])).toBe(1) // 1 dif: 1 | i: 1 | p: 0
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴' ])).toBe(1) // 1 dif: 2 | i: 1 | p: 1
  })

  it('8. ', () => {
    expect(adjustLights(['🔴', '🟢', '🟢', '🔴', '🟢', '🟢', '🔴' ])).toBe(3) // 1 dif: 1 | i: 2 | p: 1
  })

})