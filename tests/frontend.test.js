/**
 * @jest-environment jsdom
 */
const {
  formatColorInput,
  isValidHexColor,
  validateColorForm
} = require("../public/colorUtils");

describe("Front-end color formatting and validation", () => {
  test("trims and normalizes hex color input", () => {
    expect(formatColorInput("  Sky Blue  ", "  #4A90E2  ")).toEqual({
      name: "Sky Blue",
      hex: "#4a90e2"
    });
  });

  test("validates valid and invalid hex codes", () => {
    expect(isValidHexColor("#12AB34")).toBe(true);
    expect(isValidHexColor("12AB34")).toBe(false);
    expect(isValidHexColor("#XYZ123")).toBe(false);
  });

  test("validates form submission fields", () => {
    expect(validateColorForm("Coral", "#FF7F50")).toEqual({
      valid: true,
      error: "",
      data: { name: "Coral", hex: "#ff7f50" }
    });

    expect(validateColorForm("", "#FF7F50").valid).toBe(false);
    expect(validateColorForm("Coral", "bad-hex").valid).toBe(false);
  });
});
