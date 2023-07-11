const dynastyReign = [
  ["San Dynasty", "MXLI"],
  ["Viloria Dynasty", "MCCCIIII"],
  ["Andre Dynasty", "MCCCXCVIII"],
  ["Bon Dynasty", "MCDXLV"],
  ["Maiko Dynasty", "MDCLXIV"],
  ["Paul Dynasty", "MCMXLIX"],
  ["Tan Dynasty", "MMMXICX"],
];

function convertToNumber(romanNumeral) {
  const numeralMap = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);

  let result = 0;
  let i = 0;

  while (i < romanNumeral.length) {
    const currentSymbol = romanNumeral[i];
    const nextSymbol = romanNumeral[i + 1];

    if (nextSymbol && numeralMap.get(currentSymbol + nextSymbol)) {
      result += numeralMap.get(currentSymbol + nextSymbol);
      i += 2;
    } else {
      result += numeralMap.get(currentSymbol);
      i++;
    }
  }

  return result;
}

function convertYear(year) {
  const decimalYear = convertToNumber(year);
  if (isNaN(decimalYear)) {
    return "Invalid";
  }
  return decimalYear;
}

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestReign = 0;
  let longestDynastyName = "";

  for (let i = 0; i < dynastyReign.length; i++) {
    const currentDynasty = dynastyReign[i];
    const startYear = convertYear("M");
    const endYear = convertYear(currentDynasty[1]);

    if (isNaN(endYear)) {
      continue;
    }

    const reignLength = endYear - startYear;

    if (reignLength > longestReign) {
      longestReign = reignLength;
      longestDynastyName = currentDynasty[0];
    }
  }

  return longestDynastyName;
}
console.log(longestDynasty(dynastyReign));
