/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal

  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */
type StrToArr<S> = S extends `${infer x}${infer xs}` ? [1, ...StrToArr<xs>] : []
type b = StrToArr<'abc'>

type LengthOfString<S extends string> = StrToArr<S>['length']
type a = LengthOfString<'aa'>

type LenOStr<S extends string, T extends string[] = []> = S extends `${infer A}${infer B}` ? LenOStr<B, [A, ...T]> : T['length']

// iterations
// first i, A = a, B = bcd, T = [a]
// second i, A = b, B = cd, T = [a, b]
// third i, A = c, B = d, T = [a,b,c]
// fourth i, A = d, B = never, T = [a,b,c,d]
// fifth i, A = never, B = never, T['length] // 4

// key insight is you can't just get the prop of a string, must be an array first.

type c = LenOStr<'abcd'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/
