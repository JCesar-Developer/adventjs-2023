import { describe, it, expect } from "vitest";
import { drawGift } from './solution-3';

const result1 = 
` ##
###
##
`

const result2 = 
`   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`

const result3 = 
`    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`


describe("Challenge 7", () => {
  
  it('1. Should throw an error if the input is not a string', () => {
    expect(() => drawGift(1)).toThrow();
    expect(() => drawGift({})).toThrow();
    expect(() => drawGift(undefined)).toThrow();
    expect(() => drawGift(null)).toThrow();
  });

  it('2. Should throw an error if size is smaller than 1', () => {
    expect(() => drawGift(0, '-')).toThrow();
  })

  it('3. Should return only one asterisc if the size input is 1', () => {
    expect( drawGift(1, '^') ).toBe('#\n');
  })

  it('4. Should return a especial form of figure without no symbols always that the size input be 2', () => {
    expect( drawGift(2, '^') ).toBe(result1);
  })

  it('5. Should draw the gift correctly if the inpot is greater than one', () => {
    expect( drawGift(4, '+') ).toBe(result2);
    expect( drawGift(5, '*') ).toBe(result3);
  })

})