export function getAnimal(animal) {
  let result;
  if (animal === "cats") {
    result = "I totally love cats!";
  } else if (animal) {
    result = `I like ${animal}!`;
  } else {
    result = "I do not like animals at all!";
  }
  return result;
}
