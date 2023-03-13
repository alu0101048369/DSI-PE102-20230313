import { RandomNumber } from "../pe102-ejercicio1/random_number"

/**
 * RandomNumberCollection class represents a set of random numbers
 */
export class RandomNumberCollection {
  private _nums: Set<number>

  /**
   * constructor creates a new RandomNumberCollection object using any number if provided.
   * @param numbers Numbers to add to the collection.
   */
  constructor(...numbers: number[]) {
    this._nums = new Set(numbers)
  }

  /**
   * iterator makes the values in this set iterable.
   * @returns An iterator for this object.
   */
  [Symbol.iterator](): IterableIterator<number> {
    return this._nums.values()
  }

  /**
   * genFloat generates N numbers between 0 and 1, and adds them to the set.
   * @param n Number of numbers to generate.
   */
  genFloat(n = 1): void {
    const generator = RandomNumber.getInstance()
    for (let i = 0; i < n; i++) {
      this._nums.add(generator.randomFloat())
    }
  }

  /**
   * genFloatBetween generates N numbers between the range provided, and adds them to the set.
   * @param n Number of numbers to generate.
   */
  genFloatBetween(lowerBound: number, upperBound: number, n = 1): void {
    const generator = RandomNumber.getInstance()
    for (let i = 0; i < n; i++) {
      this._nums.add(generator.randomFloatBetween(lowerBound, upperBound))
    }
  }

  /**
   * genIntegerBetween generates N integers between the range provided, and adds them to the set.
   * @param n Number of integers to generate.
   */
  genIntegerBetween(lowerBound: number, upperBound: number, n = 1): void {
    const generator = RandomNumber.getInstance()
    for (let i = 0; i < n; i++) {
      this._nums.add(generator.randomIntegerBetween(lowerBound, upperBound))
    }
  }
}
