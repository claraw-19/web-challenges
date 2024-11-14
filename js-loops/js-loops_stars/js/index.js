console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = "assets/star-empty.svg";
    starContainer.appendChild(img);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
