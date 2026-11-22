function formatColorInput(colorName, hexCode) {
  return {
    name: String(colorName || "").trim(),
    hex: String(hexCode || "").trim().toLowerCase()
  };
}

function isValidHexColor(hexCode) {
  return /^#[0-9a-f]{6}$/i.test(String(hexCode || "").trim());
}

function validateColorForm(colorName, hexCode) {
  const formatted = formatColorInput(colorName, hexCode);
  if (!formatted.name) {
    return { valid: false, error: "Color name is required." };
  }
  if (!isValidHexColor(formatted.hex)) {
    return { valid: false, error: "Hex code must be a valid 6-digit #RRGGBB value." };
  }
  return { valid: true, error: "", data: formatted };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    formatColorInput,
    isValidHexColor,
    validateColorForm
  };
}
