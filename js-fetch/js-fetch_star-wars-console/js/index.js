console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log("entire data: ", data);

  console.log("first character: ", data.results[0].name);
  console.log(`${data.results[0].name}s height: ${data.results[0].height} cm`);

  const r2d2 = data.results.find((person) => person.name === "R2-D2");
  console.log("R2-D2's eyecolor:", r2d2.eye_color);
}

fetchData();
