console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body");

const newPost = document.createElement("article");
newPost.classList.add("post");

const newContent = document.createElement("p");
newContent.classList.add("post__content");
newContent.textContent = "This is another social-media-post.";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newUsername = document.createElement("span");
newUsername.classList.add("post__username");
newUsername.textContent = "@newusername";

const newButton = document.createElement("button");
newButton.type = "button";
newButton.classList.add("post__button");
newButton.setAttribute("data-js", "like-button");

newButton.textContent = "♥ Like";

body.appendChild(newPost);

newPost.appendChild(newContent);
newPost.appendChild(newFooter);

newFooter.appendChild(newUsername);
newFooter.appendChild(newButton);

newButton.addEventListener("click", handleLikeButtonClick);
