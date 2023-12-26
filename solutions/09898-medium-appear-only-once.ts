/*
  9898 - Appear only once
  -------
  by X.Q. Chen (@brenner8023) #medium

  ### Question

  Find the elements in the target array that appear only once. For example：input: `[1,2,2,3,3,4,5,6,6,6]`，ouput: `[1,4,5]`.

  > View on GitHub: https://tsch.js.org/9898
*/

// take the first
// does it live in T
// if it does, add to duplicates and

/* _____________ Your Code Here _____________ */

type FindEles<T extends any[], Duplicates = never> = T extends [infer First, ...infer Rest]
  ? First extends Duplicates
    ? FindEles<Rest, Duplicates>
    : First extends Rest[number]
      ? FindEles<Rest, Duplicates | First>
      : [First, ...FindEles<Rest, Duplicates>]
  : []

type A = FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>
type C = Exclude<[1, 2, 3][number], [3][number]>

type E<T extends Array<any>> = 4 extends T[number] ? true : false
type D = E<[1, 2]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9898/answer
  > View solutions: https://tsch.js.org/9898/solutions
  > More Challenges: https://tsch.js.org
*/
