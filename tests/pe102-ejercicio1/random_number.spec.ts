import { expect } from "chai"
import { RandomNumber } from "../../src/pe102-ejercicio1/random_number"

describe("PE102 Ej1 - RandomNumber", () => {
  it("Test Singleton", () => {
    expect(RandomNumber.getInstance()).to.equal(RandomNumber.getInstance())
  })

  it("Test randomFloat()", () => {
    for (let i = 0; i < 1000; i++) {
      expect(RandomNumber.getInstance().randomFloat()).to.be.within(0, 1)
    }
  })

  it("Test randomFloatBetween()", () => {
    for (let i = 0; i < 1000; i++) {
      expect(RandomNumber.getInstance().randomFloatBetween(3, -3)).to.be.within(-3, 3)
    }
  })

  it("Test randomIntegerBetween()", () => {
    for (let i = 0; i < 1000; i++) {
      const num = RandomNumber.getInstance().randomIntegerBetween(-10, 7)
      expect(num).to.be.within(-10, 7)
      expect(num).to.equal(Math.trunc(num))
    }
  })
})
