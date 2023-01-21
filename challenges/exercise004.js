export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (number < 1) {
      smallNumbers.push(number);
    }
  }
  return smallNumbers;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const namesBeginningWith = [];

  for (let i = 0; i < names.length; i++) {
    const nameBeginsWith = names[i];

    if (nameBeginsWith.charAt(0) === char) {
      namesBeginningWith.push(nameBeginsWith);
    }
  }
  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.startsWith("to ")) {
      verbWords.push(word);
    }
  }
  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integerNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (Number.isInteger(number)) {
      integerNumbers.push(number);
    }
  }
  return integerNumbers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const usersCities = [];

  for (let i = 0; i < users.length; i++) {
    const city = users[i].data.city.displayName;
    usersCities.push(city);
  }
  return usersCities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = [];

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    const squareRoot = Math.round(Math.sqrt(number) * 100) / 100;
    squareRoots.push(squareRoot);

  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const sentencesContainingStr = [];

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    const lowerCaseSentence = sentence.toLowerCase();

    if (lowerCaseSentence.includes(str)) {
      sentencesContainingStr.push(sentence);
    }
  }
  return sentencesContainingStr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = [];

  for (let i = 0; i < triangles.length; i++) {
    const arrayElement = triangles[i];
    let longestValue = 0;

    for (let j = 0; j < arrayElement.length; j++) {
      const valueInArray = arrayElement[j];
      if (valueInArray > longestValue) {
        longestValue = valueInArray;
      }
    }
    longestSides.push(longestValue);
  }
  return longestSides;
}
