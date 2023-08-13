/*
  2688 - StartsWith
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal

  ### Question

  Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

  For example

  ```typescript
  type a = StartsWith<'abc', 'ac'> // expected to be false
  type b = StartsWith<'abc', 'ab'> // expected to be true
  type c = StartsWith<'abc', 'abcd'> // expected to be false
  ```

  > View on GitHub: https://tsch.js.org/2688
*/
// get length of 2nd Str
// get substring of 1st using the length of 2nd str
// check if they match using extend

/* _____________ Your Code Here _____________ */

// initially attempt
// type StartsWith<T extends string, U extends string> = T['length'] extends 0 
//   ? false
//   : T extends `${infer TL}${infer TR}` 
//     ? U extends `${infer UL}${infer UR}`
//       ? TL extends UL 
//         ? StartsWith<TR, UR>
//         : false
//       : true
//     : T extends U
//       ? true
//       : false

// take advantage of the fact we can match any string in the extend
type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false


type a = StartsWith<'', 'd'> // expected to be false
type b = StartsWith<'abc', 'abc'> // expected to be true


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2688/answer
  > View solutions: https://tsch.js.org/2688/solutions
  > More Challenges: https://tsch.js.org
*/
