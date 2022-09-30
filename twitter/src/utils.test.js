import { describe, expect, it } from "vitest";
import { isTweetFr } from "./utils";

describe("isTweetFr", () => {
  it("should return true for a french tweet", () => {
    const result = isTweetFr({
      lang: "fr",
    });
    expect(result).toBe(true);
  });
  it("should return false for a non french tweet", () => {
    const result = isTweetFr({
      lang: "en",
    });
    expect(result).toBe(false);
  });
  it("should return true for a french canadian tweet", () => {
    const result = isTweetFr({
      lang: "fr-ca",
    });

    expect(result).toBe(true);
  });
});
