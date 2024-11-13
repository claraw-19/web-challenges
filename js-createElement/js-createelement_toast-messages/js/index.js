console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  event.preventDefault();
  const newMassage = document.createElement("li");
  toastContainer.appendChild(newMassage);
  newMassage.classList.add("toast-container__message");
  newMassage.innerHTML = "I'm a toast message.";
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});
