import { describe, it, expect } from "vitest"
import { pointEstimateFormatter } from "../pages/home/utilities/pointEstimateFormatter"

describe("pointEstimateFormatter", () => {
  it("should return correct numeric string for valid inputs", () => {
    expect(pointEstimateFormatter("eight")).toBe("8")
    expect(pointEstimateFormatter("four")).toBe("4")
    expect(pointEstimateFormatter("two")).toBe("2")
    expect(pointEstimateFormatter("one")).toBe("1")
    expect(pointEstimateFormatter("zero")).toBe("0")
  })

  it("should be case insensitive", () => {
    expect(pointEstimateFormatter("Eight")).toBe("8")
    expect(pointEstimateFormatter("FoUr")).toBe("4")
    expect(pointEstimateFormatter("TWO")).toBe("2")
  })

  it('should return "undefined" for unknown inputs', () => {
    expect(pointEstimateFormatter("three")).toBe(
      "undefined"
    )
    expect(pointEstimateFormatter("ten")).toBe("undefined")
    expect(pointEstimateFormatter("")).toBe("undefined")
    expect(pointEstimateFormatter("random")).toBe(
      "undefined"
    )
  })
})
