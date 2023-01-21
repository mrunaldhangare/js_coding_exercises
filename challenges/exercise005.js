export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const getCurrentIndex = nums.indexOf(n);

  const nextNumber = getCurrentIndex === -1 ? null : nums[getCurrentIndex + 1]

  return nextNumber || null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const allNumbers = str.split('');
  const totalCoun1sAnd0s = allNumbers.reduce((initial, number) => {
    initial[number] += 1;
    return initial;
  }, { 1: 0, 0: 0 });

  return totalCoun1sAnd0s;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  return +(n.toString().split("").reverse().join(""));

};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  const sumOfArrayValues = arrs.reduce((sum, array) => {
    sum = sum + array.reduce((value, number) => value + number);
    return sum;
  }, 0);

  return sumOfArrayValues;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length > 1) {
    const firstArraytElement = arr.shift();
    const lastArrayElement = arr.pop();

    arr.push(firstArraytElement);
    arr.unshift(lastArrayElement);
  }

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  const haystackValues = Object.values(haystack);

  const isNeedleFound = haystackValues.some((element) => typeof element === "string" && element.toLowerCase().includes(lowerCaseSearchTerm));

  return isNeedleFound;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const words = str.toLowerCase().replace(/[^\w\s]/gi, '').split(" ");

  const wordFrequency = words.reduce((frequency, word) => {
    if (!frequency[word]) {
      frequency[word] = 0;
    }
    frequency[word] += 1;
    return frequency;
  }, {});
  return wordFrequency;
};
