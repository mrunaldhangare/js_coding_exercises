export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester" ? true : false;

}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const busCapacity = 40;

  return Math.ceil(people / busCapacity);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  const animalName = "sheep";
  return arr.filter((element) => element === animalName).length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  if (person.address.postCode[0] === "M" && person.address.city === "Manchester") {
    return true;
  }
  return false;
}
