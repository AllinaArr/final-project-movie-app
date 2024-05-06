const imgPlace = document.querySelector(".grid-container");
fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      console.log("Title:", movie.TITLE, ", IMG_POSTER:", movie.IMG_POSTER);
      const imgAdd = document.createElement("img");

      imgAdd.id = "grid-image";
      imgAdd.src = movie.IMG_POSTER;
      imgAdd.alt = movie.TITLE;
      imgPlace.append(imgAdd);

      imgAdd.addEventListener("mouseover", () => handleMouseOver(imgAdd));
      imgAdd.addEventListener("mouseout", handleMouseOut);
    });
  });

function handleMouseOver(imgAdd) {
  // event.currentTarget.style.borderColor = "gold";
  console.log("mouseoverWorked");
  //click event and button create
  imgAdd.addEventListener("click", () => {
    //does not work as expected
    const buttons = document.createElement("button");
    buttons.textContent = "Add to watch";
    imgAdd.appendChild(buttons);
    console.log("Button worked");
  });
}

function handleMouseOut(event) {
  event.currentTarget.style.borderColor = "black";
  console.log("mouseoutWorked");
}
