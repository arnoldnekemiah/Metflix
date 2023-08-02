import './style.css';

import displayMovies from './modules/display-movies.js';
import getData from './modules/get-data.js';
import displayAll from './modules/display-all.js';

const navLinks = document.querySelectorAll('.navlink');
const input = document.getElementById('input');
const searchBtn = document.getElementById('search-btn');

document.addEventListener('DOMContentLoaded', async () => {
  displayAll();
});

searchBtn.addEventListener('click', async () => {
  const movieArray = await getData(input.value);
  displayMovies(movieArray);
});

navLinks.forEach((link) => {
  link.addEventListener('click', async () => {
    if (link.id === 'all') {
      displayAll();
    } else {
      let movieArray = await getData(link.id);
      movieArray = movieArray.filter((el) => el.show.genres.includes(link.id.charAt(0).toUpperCase()
       + link.id.slice(1)));
      displayMovies(movieArray);
    }
  });
});