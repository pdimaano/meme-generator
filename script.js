function createMeme(e) {
  e.preventDefault();
  let img = document.createElement("img")
  img.src = document.getElementById("image-url").value;
  img.width = "150"

  let textTop = document.createElement("div");
  textTop.className = "top";
  textTop.innerText = document.getElementById("top-text").value;

  let textBottom = document.createElement("div");
  textBottom.className = "bottom";
  textBottom.innerText = document.getElementById("bottom-text").value;

  let remove = document.createElement("div");
  remove.className = "remove";
  remove.innerText = "x"

  let meme = document.createElement("div");
  meme.className = "meme";

  meme.appendChild(img);
  meme.appendChild(textTop);
  meme.appendChild(textBottom);
  meme.appendChild(remove);

  const memes = document.querySelector("#meme-container")
  memes.appendChild(meme);
  document.getElementById("meme-form").reset();

}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("make-button").addEventListener("click", function(event) {
    createMeme(event);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const memeSection = document.querySelector("#memes");
  memeSection.addEventListener("click", function(event) {
    if (event.target.parentNode.className === "meme") {
      event.target.parentNode.remove();
    }
  })
});