console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("Price: ", 2 * numberOfHotdogs, " €");
} else if (numberOfHotdogs < 100) {
  console.log("Price: ", 1.5 * numberOfHotdogs, " €");
} else if (numberOfHotdogs < 1000000) {
  console.log("Price: ", numberOfHotdogs, " €");
} else {
  console.log("Price: ", 0.1 * numberOfHotdogs, " €");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Klaus";

const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);
