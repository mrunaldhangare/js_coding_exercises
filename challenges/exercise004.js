export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter((number) => number < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter((name) => name.charAt(0) === char)
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter((word) => word.startsWith("to "));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter((number) => Number.isInteger(number))
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map((user) => user.data.city.displayName);

}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map((number) => Math.round(Math.sqrt(number) * 100) / 100);

}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter((sentence) => {
    const lowerCaseSentence = sentence.toLowerCase();
    return lowerCaseSentence.includes(str)
  });


}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  return triangles.map((triangle) => Math.max(...triangle));
}
