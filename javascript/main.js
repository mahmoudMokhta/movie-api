const URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd551351d613eae72b5219e295facfeb&page1";

fetch(URL)
  .then((response) => response.json())
  .then(response);

// console.log(data)

let input = document.querySelector(".inputSearch");
let submit = document.querySelector(".submit");
let cards = document.querySelector(".cards");
// btn  submit
submit.addEventListener("click", () => {
  cards.innerHTML = "";
  let inputSearch = input.value;
  const myAPI = `https://api.themoviedb.org/3/search/movie?api_key=bd551351d613eae72b5219e295facfeb&query=${inputSearch}`;

  fetch(myAPI)
    .then((response) => response.json())
    .then(response);
});

//  the function
function response(data) {
  let abc = data.results;

  abc.map((e) => {
    // console.log(e)
    let img = e.poster_path;
    let overview = e.overview;
    let release_date = e.release_date;
    let title = e.title;
    content = `<div class="card ">
                <div class="img">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img}">
                <div class="down-img d-flex justify-content-between">
                    <p class="one">${title}</p>
                    <p class="two">${release_date}</p>
                </div>
            </div>
            
            <p class="overview"><span>Description</span>${overview}</p>
        </div>`;

    cards.innerHTML += content;
  });
}
