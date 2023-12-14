import { describe, it, expect } from 'vitest'
import { decode } from './solution-2'

describe('Challenge 4 - decode', () => {

  it('1. Should throw an error if the input is not a string', () => {
    expect(() => decode(1)).toThrow();
    expect(() => decode({})).toThrow();
    expect(() => decode(undefined)).toThrow();
    expect(() => decode(null)).toThrow();
  });

  it('2. Should return a void string if the param value is a void string', () => {
    expect(decode('')).toBe('');
  });

  it('3. Should return the same string if the string passed by param does not contains parentheses', () => {
    expect(decode('hola mundo')).toBe('hola mundo');
  });

  it('4. Should return any string inside a parentheses reversed and without the parentheses', () => {
    expect(decode('(hola)')).toBe('aloh');
    expect(decode('hola (odnum)')).toBe('hola mundo');
  })

  it('5. Should return all the strings inside a parentheses respeting their order', () => {
    expect(decode('(as)(atn)')).toBe('santa');
    expect(decode('(as)(atn)(alc)(su)')).toBe('santaclaus');
    expect(decode('sa(atn)(alc)us')).toBe('santaclaus');
    expect(decode('sa(tn)ac(al)us')).toBe('santaclaus');
  })

  it('6. Should return reversed just the string inside the parenteses without change the strings at the corners of that string', () => {
    expect(decode('cl(ua)s!')).toBe('claus!');
    expect(decode('*n(adiva)d*')).toBe('*navidad*');
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!');
    expect(decode('sa(tn)a! cl(ua)s!')).toBe('santa! claus!');
  })

  it('7. Should reverse even parentheses nesteed in parentheses', () => {
    expect(decode( '((abc))' )).toBe('abc');
    expect(decode( 'sa(u(cla)atn)s' )).toBe('santaclaus');
    expect(decode( '((nta)(sa))' )).toBe('santa');
    expect(decode( '((us)(cla)(nta)(sa))' )).toBe('santaclaus');
    expect(decode( '((nta)(sa))((us)(cla))' )).toBe('santaclaus');
  })

  it('8. Corner cases', () => {
    expect(decode( '(())' )).toBe('');
    expect(decode( '(at()nas)' )).toBe('santa');
    expect(decode( '()(at()nas)()' )).toBe('santa');
    expect(decode( '(su(la)ca(nt)as)' )).toBe('santaclaus');
    expect(decode( 's(a(nt)a)c(s(au)l)!' )).toBe('santaclaus!');
    expect(decode( 's(a(nt)a) c(s(au)l)!' )).toBe('santa claus!');
    expect(decode( '((ta)(an)s)((us)(la)c)!' )).toBe('santaclaus!');
    expect(decode( '((ta)(an)s) ((us)(la)c)!' )).toBe('santa claus!');
    expect(decode( '*(h(fg)(de)(bc)a)* *(i(fg)(de)(bc)a)*' )).toBe('*abcdefgh* *abcdefgi*');
  })

})