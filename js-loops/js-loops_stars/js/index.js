console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    const type = i <= filledStars ? "filled" : "empty";
    // img.setAttribute("src", `assets/star-${type}.svg`);
    img.src = `assets/star-${type}.svg`;
    img.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.appendChild(img);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
