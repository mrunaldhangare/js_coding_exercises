export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNumbers = nums.filter((number) => number < 1)

  return smallNumbers;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const namesBeginningWith = names.filter((name) => name.charAt(0) === char)

  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbWords = words.filter((word) => word.startsWith("to "))

  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integerNumbers = nums.filter((number) => Number.isInteger(number))

  return integerNumbers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const usersCities = users.map((user) => user.data.city.displayName);

  return usersCities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = nums.map((number) => Math.round(Math.sqrt(number) * 100) / 100);

  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const sentencesContainingStr = sentences.filter((sentence) => {
    const lowerCaseSentence = sentence.toLowerCase();
    return lowerCaseSentence.includes(str)
  });

  return sentencesContainingStr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = triangles.map((triangle) => Math.max(...triangle))

  return longestSides;
}
