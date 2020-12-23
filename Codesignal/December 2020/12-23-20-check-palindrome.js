function checkPalindrome(inputString) {
  const reversedInput = inputString.split("").reverse().join("");
  if (reversedInput === inputString) {
    return true;
  } else {
    return false;
  }
}
