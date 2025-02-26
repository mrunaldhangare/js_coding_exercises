export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester";

}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const MAX_BUS_CAPACITY = 40;

  return Math.ceil(people / MAX_BUS_CAPACITY);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  const animalName = "sheep";
  return arr.filter((element) => element === animalName).length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return person.address.postCode[0] === "M" && person.address.city === "Manchester";
}
