const imgPlace = document.querySelector(".grid-container");
let valueSpan = 0;

fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      handleDatabase(movie);
      handleSearch();
    });
  });

function handleDatabase(movie) {
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

  button.textContent = "Add to my watchlist";
  button.classList.add("overlay-button");
  divForBut.appendChild(button);

  handleAddToWatchlist(button);

  movieContainer.append(divForBut);
  imgPlace.append(movieContainer);

  handleMouseOverAndOut(imgAdd);
}

function handleSearch() {
  const searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchInput = document.querySelector("#search-input");
    const searchValue = searchInput.value.trim().toLowerCase();

    fetch(`http://localhost:3000/movies`)
      .then((response) => response.json())
      .then((data) => {
        imgPlace.textContent = "";

        const filteredMovies = data.filter((movie) => {
          console.log(searchValue);
          return movie.TITLE.toLowerCase().includes(searchValue);
        });

        filteredMovies.forEach((movie) => {
          handleDatabase(movie);
        });

        event.target["search-input"].value = "";
      });
  });
}

function handleMouseOverAndOut(imgAdd) {
  imgAdd.addEventListener("mouseover", (event) => {
    console.log("mouseoverWorked");
  });
  imgAdd.addEventListener("mouseout", (event) => {
    event.currentTarget.style.borderColor = "black";
    console.log("mouseoutWorked");
  });
}

function handleAddToWatchlist(button) {
  button.addEventListener("click", () => {
    button.textContent = "Added to your watchlist";
    button.disabled = true;

    let value = document.querySelector("span");
    value.textContent = ++valueSpan;
  });
}
