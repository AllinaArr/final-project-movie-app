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

      //add EventListener about mouse and click on the img here!!
      //I can create a function separete, but I have to call the FUNCTION HERE
      imgAdd.id = "grid-image";
      imgAdd.src = movie.IMG_POSTER;
      imgAdd.alt = movie.TITLE;
      imgPlace.append(imgAdd);
    });
  });
