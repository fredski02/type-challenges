/*
  5317 - LastIndexOf
  -------
  by jiangshan (@jiangshanmeta) #medium #array

  ### Question

  Implement the type version of ```Array.lastIndexOf```, ```LastIndexOf<T, U>```  takes an Array ```T```, any ```U``` and returns the index of the last ```U``` in Array ```T```

  For example:

  ```typescript
  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
  ```

  > View on GitHub: https://tsch.js.org/5317
*/

// type StringCast = string | number | bigint | undefined | null | boolean

// type IndexOf<T extends any[], U, Pass extends any[] = []> =
//   T extends [infer F, ...infer Rest]
//     ? Equal<F, U> extends true
//       ? Pass['length']
//       : IndexOf<Rest, U, [...Pass, F]>
//     : -1

/* _____________ Your Code Here _____________ */

type LastIndexOf<T extends any[], U, TLen = T extends [...infer TEelements, infer _] ? [...TEelements]['length'] : -1> =
  T extends [...infer Rest, infer Last]
    ? Equal<Last, U> extends true
      ? TLen
      : LastIndexOf<Rest, U>
    : -1

type A = LastIndexOf<[1, 2, 3, 2, 1], 2>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5317/answer
  > View solutions: https://tsch.js.org/5317/solutions
  > More Challenges: https://tsch.js.org
*/
