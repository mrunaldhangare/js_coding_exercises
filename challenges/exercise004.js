export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNumbers = [];

  nums.forEach((number) => {
    if (number < 1) {
      smallNumbers.push(number)
    }
  })
  return smallNumbers;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const namesBeginningWith = [];

  names.forEach((name) => {
    if (name.charAt(0) === char) {
      namesBeginningWith.push(name);
    }
  })

  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbWords = [];

  words.forEach((word) => {
    if (word.startsWith("to ")) {
      verbWords.push(word);
    }
  })

  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integerNumbers = [];

  nums.forEach((number) => {
    if (Number.isInteger(number)) {
      integerNumbers.push(number);
    }
  })
  return integerNumbers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const usersCities = [];

  users.forEach((user) => {
    const city = user.data.city.displayName;
    usersCities.push(city);
  })

  return usersCities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = [];

  nums.forEach((number) => {
    const squareRoot = Math.round(Math.sqrt(number) * 100) / 100;
    squareRoots.push(squareRoot);
  })

  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const sentencesContainingStr = [];

  sentences.forEach((sentence) => {
    const lowerCaseSentence = sentence.toLowerCase();
    if (lowerCaseSentence.includes(str)) {
      sentencesContainingStr.push(sentence);
    }
  })

  return sentencesContainingStr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = [];

  triangles.forEach((arrayElement) => {
    let longestValue = 0;
    arrayElement.forEach((valueInArray) => {
      if (valueInArray > longestValue) {
        longestValue = valueInArray;
      }
    })
    longestSides.push(longestValue);
  })

  return longestSides;
}
