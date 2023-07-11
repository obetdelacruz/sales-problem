const productProfitArray = [
  ["Product A", 1000],
  ["Product B", -500],
  ["Product C", 200],
  ["Product D", -100],
  ["Product E", 300],
];

//Top Product
function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = "";

  for (const [product, profit] of productProfitArray) {
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = product;
    }
  }

  return topProduct;
}

//Bottom Product
function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Infinity;
  let bottomProduct = "";

  for (const [product, profit] of productProfitArray) {
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = product;
    }
  }

  return bottomProduct;
}

//Zero Product
function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestProfit = Infinity;
  let zeroProfitProduct = "";

  for (const [product, profit] of productProfitArray) {
    const absoluteProfit = Math.abs(profit);
    if (
      absoluteProfit < Math.abs(closestProfit) ||
      (absoluteProfit === closestProfit && profit > closestProfit)
    ) {
      closestProfit = profit;
      zeroProfitProduct = product;
    }
  }

  return zeroProfitProduct;
}

console.log(topProduct(productProfitArray)); // Output: Product A
console.log(bottomProduct(productProfitArray)); // Output: Product B
console.log(zeroProfitProduct(productProfitArray)); // Output: Product C
