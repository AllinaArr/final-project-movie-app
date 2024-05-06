const imgPlace = document.querySelector(".grid-container");

fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      const movieContainer = document.createElement("div");
      movieContainer.classList.add("movie-container");

      const divForImg = document.createElement("div");
      divForImg.classList.add("divForImg");
      console.log("Title:", movie.TITLE, ", IMG_POSTER:", movie.IMG_POSTER);

      const imgAdd = document.createElement("img");
      imgAdd.id = "grid-image";
      imgAdd.src = movie.IMG_POSTER;
      imgAdd.alt = movie.TITLE;

      divForImg.append(imgAdd);
      movieContainer.append(divForImg);

      const divForBut = document.createElement("div");
      divForBut.classList.add("divForBut");
      const button = document.createElement("button");

      button.textContent = "Add to watch";
      button.classList.add("overlay-button");
      divForBut.appendChild(button);

      movieContainer.append(divForBut);
      imgPlace.append(movieContainer);

      imgAdd.addEventListener("mouseover", () => handleMouseOver(imgAdd));
      imgAdd.addEventListener("mouseout", handleMouseOut);
    });
  });

function handleMouseOver(imgAdd) {
  // event.currentTarget.style.borderColor = "gold";
  event.style.display = "block";
  console.log("mouseoverWorked");
}

function handleMouseOut(event) {
  event.currentTarget.style.borderColor = "black";
  console.log("mouseoutWorked");
}

function handleSearch() {
  // const searchInput = document.querySelector("searchInput");
  // let result = [];
}
