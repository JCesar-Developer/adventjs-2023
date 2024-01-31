import { describe, it, expect } from 'vitest';
import createChristmasTree from './solution-2';

const tree1 =
`  x
 x x
x x x
  |
`

const tree2 = 
`   x
  o x
 o x o
x o x o
   |
`

const tree3 = 
`    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`

const tree4 = 
`  *
 @ o
* @ o
  |
`

describe('Challenge 10', () => {

  it('Should throw if the input is invalid', () => {
    expect( () => createChristmasTree() ).toThrow();
  })

  it('Should return a personalize string whit the shape of a christmas tree', () => {
    expect( createChristmasTree('x', 3) ).toBe(tree1);
    expect( createChristmasTree('xo', 4) ).toBe(tree2);
    expect( createChristmasTree('123', 5) ).toBe(tree3);
    expect( createChristmasTree('*@o', 3) ).toBe(tree4);
  })

})
