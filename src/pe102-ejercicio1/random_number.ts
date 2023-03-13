/**
 * RandomNumber class represents a singleton class that can generate random numbers.
 */
export class RandomNumber {
  private static instance: RandomNumber

  /**
   * getInstance returns the global instance of this class.
   * @returns The instance of this class.
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new RandomNumber()
    }
    return this.instance
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  /**
   * randomFloat generates a number between 0 and 1.
   * @returns A number between 0 and 1.
   */
  randomFloat(): number {
    return Math.random()
  }

  /**
   * randomFloatBetween generates a number between the lower bound and upper bound provided.
   * @returns A number in the range provided.
   */
  randomFloatBetween(lowerBound: number, upperBound: number): number {
    if (lowerBound > upperBound) {
      [lowerBound, upperBound] = [upperBound, lowerBound]
    }
    return (Math.random() * (upperBound - lowerBound)) + lowerBound
  }

  /**
   * randomIntegerBetween generates an integer between the lower bound and upper bound provided.
   * @returns An integer in the range provided.
   */
  randomIntegerBetween(lowerBound: number, upperBound: number): number {
    return Math.floor(this.randomFloatBetween(lowerBound, upperBound+1))
  }
}
