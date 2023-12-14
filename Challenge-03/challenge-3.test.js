import { describe, it, expect } from "vitest";
import { findNaughtyStep } from './solution-2';

describe("Challenge 3", () => {
  it("Should throw if does not have parameters", () => {
    expect( () => findNaughtyStep() ).toThrow();
  });

  it("Should throw if the lenght difference between both parameters is greater than one", () => {
    expect( () => findNaughtyStep("a", "abc") ).toThrow();
  });

  it("Should return a void string if both parameters are equal", () => {
    expect( findNaughtyStep("abc", "abc") ).toBe('');
  });

  it("It should return the extra character between both parameters.", () => {
    expect( findNaughtyStep("abcd", "abcde") ).toBe('e');
    expect( findNaughtyStep("stepfor", "stepor") ).toBe('f');
    expect( findNaughtyStep("aaa", "aaaa") ).toBe('a');
  });
  
});