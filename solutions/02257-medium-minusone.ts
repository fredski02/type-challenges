/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */





type NumToStr<Num extends number> = `${Num}`
type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never
type RemoveLeadingZeros<S extends string> = S extends '0' ? S : S extends `${'0'}${infer R}` ? RemoveLeadingZeros<R> : S
type ArrToStr<Arr extends string[], Str extends string = ''> = Arr extends [...infer Rest extends string[], infer Last extends string] 
  ? ArrToStr<Rest, `${Last}${Str}`>
  : Str


type StrToArr<Str extends string, Arr extends string[] = []> = Str["length"] extends 0
  ? Arr
    : Str extends `${infer L}${infer R}`
    ? StrToArr<R, [...Arr, L]>
  : Arr

type InternalMinusOne<NumStr extends string[], Result extends string = ''> =  NumStr extends [...infer Rest extends string[], infer L extends string] 
  ? L extends "0" 
    ? InternalMinusOne<Rest, `${Result}9`>
    : Rest['length'] extends 0 
      ? `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][ParseInt<L>]}${Result}`
      : `${ArrToStr<Rest>}${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][ParseInt<L>]}`
  : Result


type MinusOne<T extends number> = ParseInt<RemoveLeadingZeros<InternalMinusOne<StrToArr<NumToStr<T>>>>>

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils"

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
