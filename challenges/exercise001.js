// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1) + "." + lastName.substring(0, 1);
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  let addedValue = originalPrice + vatRate / 100 * originalPrice;

  return addedValue % 1 !== 0 ? Number(addedValue.toFixed(2)) : addedValue;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let salePrice = originalPrice - reduction / 100 * originalPrice;
  if (salePrice % 1 !== 0) {
    return Math.round(salePrice * 100) / 100;
  }
  return salePrice;

}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  if (str.length % 2 === 1) {
    return str.charAt((str.length / 2));
  } else {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map((element) => reverseWord(element));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  const totalLinuxUsers = users.filter(({ type }) => type === "Linux").length;
  return totalLinuxUsers;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let meanScore = scores.reduce((sum, number) => sum + number) / scores.length;
  meanScore % 1 !== 0 ? meanScore = Math.round(meanScore * 100) / 100 : meanScore;
  return meanScore;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  let output = '';

  if (n % 3 === 0) {
    output += "fizz";
  }
  if (n % 5 === 0) {
    output += "buzz";
  }

  return output ? output : n;
}
