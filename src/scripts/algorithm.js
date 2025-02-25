export const charToCode = {
  " ": "000",

  // Letters (Lowercase & Uppercase)
  "a": "010",
  A: "011",
  b: "020",
  B: "021",
  c: "030",
  C: "031",
  d: "040",
  D: "041",
  e: "050",
  E: "051",
  f: "060",
  F: "061",
  g: "070",
  G: "071",
  h: "080",
  H: "081",
  i: "090",
  I: "091",
  j: "100",
  J: "101",
  k: "110",
  K: "111",
  l: "120",
  L: "121",
  m: "130",
  M: "131",
  n: "140",
  N: "141",
  o: "150",
  O: "151",
  p: "160",
  P: "161",
  q: "170",
  Q: "171",
  r: "180",
  R: "181",
  s: "190",
  S: "191",
  t: "200",
  T: "201",
  u: "210",
  U: "211",
  v: "220",
  V: "221",
  w: "230",
  W: "231",
  x: "240",
  X: "241",
  y: "250",
  Y: "251",
  z: "260",
  Z: "261",

  // Numbers (0-9)
  0: "270",
  1: "271",
  2: "272",
  3: "273",
  4: "274",
  5: "275",
  6: "276",
  7: "277",
  8: "278",
  9: "279",

  // Common Symbols
  "!": "280",
  "@": "281",
  "#": "282",
  "$": "283",
  "%": "284",
  "^": "285",
  "&": "286",
  "*": "287",
  "(": "288",
  ")": "289",
  "-": "290",
  "_": "291",
  "+": "292",
  "=": "293",
  "[": "294",
  "]": "295",
  "{": "296",
  "}": "297",
  "|": "298",
  ";": "299",
  ":": "300",
  "'": "301",
  '"': "302",
  ",": "303",
  ".": "304",
  "<": "305",
  ">": "306",
  "/": "307",
  "?": "308",
  "\\": "309",
};

export const codeToChar = Object.fromEntries(
  Object.entries(charToCode).map(([char, code]) => [code, char])
);

export function encrypt(text, charToCode) {
  return text
    .split("")
    .map((char) => charToCode[char] || "")
    .join(".");
}

export function decrypt(encryptedText, codeToChar) {
  return encryptedText
    .split(".")
    .map((code) => codeToChar[code] || "")
    .join("");
}
