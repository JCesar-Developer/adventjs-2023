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
    expect(adjustLights(['🔴', '🟢'])).toBe(0);
    expect(adjustLights(['🟢', '🔴', '🟢'])).toBe(0);
    expect(adjustLights(['🔴', '🟢', '🔴', '🟢'])).toBe(0);
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)
  })

  it('4. Should return the ratio goes down of the difference between light colours if the differens between light colors is greater than 1', () => {
    expect(adjustLights(['🔴', '🔴'])).toBe(1);
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1);
    expect(adjustLights(['🔴', '🔴', '🔴', '🔴'])).toBe(2);
    expect(adjustLights(['🔴', '🔴', '🔴', '🔴', '🔴'])).toBe(2);
  })

  it('5. If difference is 0 and  ', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢' ])).toBe(2);
    expect(adjustLights(['🔴', '🔴', '🔴', '🟢', '🟢', '🟢' ])).toBe(2);
    expect(adjustLights(['🔴', '🔴', '🔴', '🔴', '🟢', '🟢', '🟢', '🟢' ])).toBe(4);
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🟢', '🔴' ])).toBe(2);
  })

  it('6. ', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢' ])).toBe(1);
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢' ])).toBe(1);
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢', '🟢' ])).toBe(2);
  })

  it('7. ', () => {
    expect(adjustLights(['🔴', '🔴', '🟢' ])).toBe(1);
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴' ])).toBe(1);
  })

  it('8. ', () => {
    expect(adjustLights(['🔴', '🟢', '🟢', '🔴', '🟢', '🟢', '🔴' ])).toBe(3);
  })

})