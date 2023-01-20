export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map((number) => Math.pow(number, 2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  const camelCaseVariable = words.reduce((initialValue, word, index) => {

    const firstCharacter = index === 0 ? word.charAt(0).toLowerCase() : word.charAt(0).toUpperCase();
    const camelCaseWord = firstCharacter + word.substring(1);

    return initialValue + camelCaseWord;

  }, '');

  return camelCaseVariable;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  const totalSubjects = people.reduce((initialValue, { subjects }) => initialValue + subjects.length, 0);

  return totalSubjects;

}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  const isIngredientAvailable = menu.some((element) => element.ingredients.includes(ingredient));
  return isIngredientAvailable;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let uniqueArr1 = [...new Set(arr1)];
  let uniqueArr2 = [...new Set(arr2)];

  const duplicateValues = uniqueArr1.filter((number) => uniqueArr2.includes(number)).sort();
  return duplicateValues;
}
