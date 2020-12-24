function adjacentElementsProduct(inputArray) {
  let largest = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length - 1; i++) {
    let adjacentProduct = inputArray[i] * inputArray[i + 1];
    if (adjacentProduct > largest) {
      largest = adjacentProduct;
    }
  }
  return largest;
}
