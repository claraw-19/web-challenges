function numberOfPoints(array) {
  let points = 0;
  for (let match of array) {
    let goals = match.split(":");
    let x = Number(goals[0]);
    let y = Number(goals[1]);
    if (x > y) {
      points += 3;
    } else if (x === y) {
      points++;
    }
  }
  return points;
}

const games = ["1:1", "2:0", "1:4", "0:0", "1:0"];

console.log(numberOfPoints(games));
