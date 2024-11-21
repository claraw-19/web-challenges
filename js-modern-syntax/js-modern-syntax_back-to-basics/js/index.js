/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

export const getNameAndCountry = (city) => [city.name, city.country];

export const getRelocatedCity = function (city1, city2) {
  if (city2 === undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }
  const country = city2.country;
  return {
    name: city1.name,
    country: country,
  };
};
