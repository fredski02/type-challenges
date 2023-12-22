/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple

  ### Question

  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```

  > View on GitHub: https://tsch.js.org/4471
*/

/* _____________ Your Code Here _____________ */

// type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
//   k: infer I
// ) => void
//   ? I
//   : never

// // Converts union to overloaded function
// type UnionToOvlds<U> = UnionToIntersection<
//   U extends any ? (f: U) => void : never
// >

// type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never

// type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true

// // Finally me)
// type UnionToArray<T, A extends unknown[] = []> = IsUnion<T> extends true
//   ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
//   : [T, ...A]

// type Zip<T extends any[], U extends any[], Arr extends Array<any> = []> = T | U extends [infer First, ...infer Rest]
//   ? Zip<Rest, Rest, [...Arr, UnionToArray<First>]>
//   : Arr

// type B = UnionToArray<1 | 2>

// second approach
type Zip<A extends any[], B extends any[], Return extends any[] = []> = Return['length'] extends A['length'] | B['length']
  ? Return
  : Zip<A, B, [...Return, [A[Return['length']], B[Return['length']]]]>

type A = Zip<[1, 2], [true, false]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4471/answer
  > View solutions: https://tsch.js.org/4471/solutions
  > More Challenges: https://tsch.js.org
*/
