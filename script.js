//create a fetch movies and display 10 of them on the page

//https://search.imdbot.workers.dev/?q=Land/description/#IMG_POSTER -> to get a URL

const movie = "Land";
fetch(`https://search.imdbot.workers.dev/?q=${movie}/#IMG_POSTER`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // const posterUrl = data[0].poster;

    // const imgElement = document.querySelector(".grid-item img");

    // imgElement.src = posterUrl;
    // imgElement.alt = data[0].title;
  });
