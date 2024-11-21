function countCharacters(string) {
  let characters = {};
  for (let char of string) {
    if (characters[char]) {
      characters[char]++;
    } else {
      characters[char] = 1;
    }
  }
  return characters;
}

const string = "ananas";

console.log(countCharacters(string));
