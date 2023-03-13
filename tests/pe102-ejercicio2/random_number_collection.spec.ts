import { expect } from "chai"
import { RandomNumberCollection } from "../../src/pe102-ejercicio2/random_number_collection"

describe("PE102 Ej2 - RandomNumberCollection", () => {
  it("Test constructor()", () => {
    let count = 0
    for (const value of new RandomNumberCollection(1, 1, 2, 2, 3, 3)) {
      count++
      expect(value).to.be.within(1, 3)
    }
    expect(count).to.equal(3)
  })

  it("Test randomFloat()", () => {
    const rnc = new RandomNumberCollection()
    rnc.genFloat(10)

    let count = 0
    for (const value of new RandomNumberCollection()) {
      count++
      expect(value).to.be.within(0, 1)
    }
    expect(count <= 10).to.equal(true)
  })

  it("Test randomFloat()", () => {
    const rnc = new RandomNumberCollection()
    rnc.genFloat()

    let count = 0
    for (const value of rnc) {
      count++
      expect(value).to.be.within(0, 1)
    }
    expect(count).to.equal(1)
  })

  it("Test randomFloatBetween()", () => {
    let rnc = new RandomNumberCollection()
    rnc.genFloatBetween(-5, 10, 7)
    let count = 0
    for (const value of rnc) {
      count++
      expect(value).to.be.within(-5, 10)
    }
    expect(count <= 7).to.equal(true)

    rnc = new RandomNumberCollection()
    rnc.genFloatBetween(-5, 10)
    count = 0
    for (const value of rnc) {
      count++
      expect(value).to.be.within(-5, 10)
    }
    expect(count).to.equal(1)
  })

  it("Test randomIntegerBetween()", () => {
    let rnc = new RandomNumberCollection()
    rnc.genIntegerBetween(100, 1000, 20)
    let count = 0
    for (const value of rnc) {
      count++
      expect(value).to.be.within(100, 1000)
      expect(value).to.equal(Math.trunc(value))
    }
    expect(count <= 20).to.equal(true)

    rnc = new RandomNumberCollection()
    rnc.genIntegerBetween(100, 1000)
    rnc.genIntegerBetween(100, 1000)
    rnc.genIntegerBetween(100, 1000)
    count = 0
    for (const value of rnc) {
      count++
      expect(value).to.be.within(100, 1000)
      expect(value).to.equal(Math.trunc(value))
    }
    expect(count).to.equal(3)
  })
})
