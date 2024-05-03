//getting the title and IMG_POSTER

const imgPlace = document.querySelector(".grid-container");
fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((data) => {
    // Iterate over the movies array
    data.forEach((movie) => {
      // Access the IMG_POSTER field of each movie and log it
      console.log("Title:", movie.TITLE, ", IMG_POSTER:", movie.IMG_POSTER);
      const imgAdd = document.createElement("img");
      imgAdd.id = "grid-image";
      imgAdd.src = movie.IMG_POSTER;
      imgAdd.alt = movie.TITLE;
      imgPlace.append(imgAdd);
    });
  });
