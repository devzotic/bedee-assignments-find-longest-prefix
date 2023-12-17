import { findLongestPrefix } from "./findLongestPrefix"

describe("find the longest common prefix string amongst an array of strings ", () => {
  it("should find the longest common prefix same result in Example 1", () => {
    expect(findLongestPrefix(["flower", "flow", "flight"])).toBe("fl")
  })

  it("should find the longest common prefix same result in Example 2", () => {
    expect(findLongestPrefix(["dog", "racecar", "car"])).toBe("")
  })

  it("should find the longest common prefixes in English", () => {
    expect(
      findLongestPrefix(["extracurricular", "extramarital", "extravagant"])
    ).toBe("extra")

    expect(
      findLongestPrefix([
        "anticlimax",
        "antiaircraft",
        "antiseptic",
        "antibody",
      ])
    ).toBe("anti")

    expect(
      findLongestPrefix([
        "non existent",
        "non pareil",
        "non",
        "nonfiction",
        "nonsense",
        "nonstop",
      ])
    ).toBe("non")
  })

  it("should handle input lenght equal to 1", () => {
    expect(findLongestPrefix(["bedee"])).toBe("bedee")
  })

  it("should handle empty strings in input", () => {
    expect(findLongestPrefix(["", "flower", "flow"])).toBe("")
  })

  it("should handle no prefix", () => {
    expect(findLongestPrefix(["cat", "dog", "bat"])).toBe("")
  })

  it("should handle spacial characters", () => {
    expect(
      findLongestPrefix(["@hotmail.com", "@gmail.com", "@bedee.com"])
    ).toBe("@")
  })

  it("should handle one character prefix", () => {
    expect(
      findLongestPrefix([
        "prevent",
        "prearrangement",
        "prefer",
        "prediction",
        "prepublication",
        "pre",
      ])
    ).toBe("pre")
  })

  it("should handle prefix at the end (suffix)", () => {
    expect(findLongestPrefix(["movement", "placement", "shipment"])).toBe("")
  })
})
