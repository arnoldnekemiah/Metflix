import './style.css';
// import bin from './assets/bin-svgrepo-com.svg';
import displayMovies from './modules/homepage.js';

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
const AllmoviesUrl = 'https://api.tvmaze.com/search/shows?q=All';
const RomanceUrl = 'https://api.tvmaze.com/search/shows?q=romance';
const COMEDY_URL = 'https://api.tvmaze.com/search/shows?q=comedy';
const ACTION_URL = 'https://api.tvmaze.com/search/shows?q=action';
const DRAMA_URL = 'https://api.tvmaze.com/search/shows?q=drama';
// we can see the data (array of movies) in browser py pasting: https://api.tvmaze.com/search/shows?q=comedy

// we retrieve this data (array of movies) by calling getData
const AllData = await getData(AllmoviesUrl);
let dramaData = await getData(DRAMA_URL);
let actionData = await getData(ACTION_URL);
let comedyData = await getData(COMEDY_URL);
let romanceData = await getData(RomanceUrl);

// we might want to sort the retrieved data because sometimes keywords appear in the name or
// location of the movie (instead of the genre)
dramaData = dramaData.filter((el) => el.show.genres.includes('Drama'));
actionData = actionData.filter((el) => el.show.genres.includes('Action'));
comedyData = comedyData.filter((el) => el.show.genres.includes('Comedy'));
romanceData = romanceData.filter((el) => el.show.genres.includes('Romance'));

// Call displayMovies with the filtered data
displayMovies(AllData, dramaData, actionData, comedyData, romanceData);