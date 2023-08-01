import './style.css';
import bin from './assets/bin-svgrepo-com.svg';

// THESE LINES WILL BE DELETED IN FUTURE, IT'S JUST A TEST OF API
// SOME OF THE CODE MIGHT BE MODIFIED, REFACTORED AND REUSED IN MODULE FILES

// a function that gives the array of movies (with properties like 'name', 'genre', 'image')
const getData = async (genreURL) => {
  const response = await fetch(
    genreURL,
    {
      method: 'GET',
    },
  );
  return response.json();
};

// we can provide URL to search movies array by keywords
const COMEDY_URL = 'https://api.tvmaze.com/search/shows?q=comedy';
const ACTION_URL = 'https://api.tvmaze.com/search/shows?q=action';
const DRAMA_URL = 'https://api.tvmaze.com/search/shows?q=drama';
// we can see the data (array of movies) in browser py pasting: https://api.tvmaze.com/search/shows?q=comedy

// we retrieve this data (array of movies) by calling getData function
let comedyData = await getData(COMEDY_URL);
let actionData = await getData(ACTION_URL);
let dramaData = await getData(DRAMA_URL);

// we might want to sort the retrieved data because sometimes keywords appear in the name or
// location of the movie (instead of the genre)
comedyData = comedyData.filter((el) => el.show.genres.includes('Comedy'));
actionData = actionData.filter((el) => el.show.genres.includes('Action'));
dramaData = dramaData.filter((el) => el.show.genres.includes('Drama'));

// we can create an array from retrieved data
const data = [comedyData, actionData, dramaData];

// and we can display all movies (but of course in future we'll display depending on which
// link the user clicked in navbar)
data.forEach((dataByGenre) => {

  dataByGenre.forEach((movie) => {
    const container = document.querySelector('main');
    const movieCard = document.createElement('div');
    const movieTitle = document.createElement('h2');
    const movieImage = document.createElement('img');

    movieTitle.textContent = movie.show.name;
    if (movie.show.image) {
      movieImage.src = movie.show.image.medium;
    } else {
      // API provides images for most movies, but in case the image is not found we want to
      // include some sample image saying "The poster will be added soon"
      movieImage.src = bin;
    }

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieImage);
    container.appendChild(movieCard);
  });
});