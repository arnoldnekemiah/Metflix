import './style.css';

import displayMovies from './modules/display-movies.js';
import getData from './modules/get-data.js';
import displayAll from './modules/display-all.js';
import itemCounter from './item-counter.js';

const navLinks = document.querySelectorAll('.navlink');
const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

document.addEventListener('DOMContentLoaded', async () => {
  displayAll();
});

searchBtn.addEventListener('click', async () => {
  const movieArray = await getData(input.value);
  displayMovies(movieArray);
  itemCounter();
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
      const numberItmes = document.getElementById('item-counter');
      numberItmes.parentElement.classList.add('hidden');
    }
  });
});

navLinks.forEach(async (link) => {
  if (link.id !== 'all') {
    let movieArray = await getData(link.id);
    movieArray = movieArray.filter((el) => el.show.genres.includes(link.id.charAt(0).toUpperCase()
     + link.id.slice(1)));

    // Calculate the movie count by genre
    const movieCount = movieArray.length;
    const counter = link.childNodes[0].childNodes[1];

    // Display the movie count next to the each navlink
    counter.textContent = ` (${movieCount})`;
  }
});