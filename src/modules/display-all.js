import getData from './get-data.js';
import displayMovies from './display-movies.js';

const displayAll = async () => {
  // get data in all genres
  const comedy = await getData('comedy');
  const action = await getData('action');
  const romance = await getData('romance');
  const drama = await getData('drama');
  const movieArray = [...comedy, ...action, ...romance, ...drama];
  // sort alphabetically
  movieArray.sort((a, b) => {
    const x = a.show.name.toLowerCase();
    const y = b.show.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  // Calculate the total movie count
  const totalMovieCount = movieArray.length;

  // Display the total movie count next to the "All Shows" label
  const allNavLink = document.getElementById('all');
  allNavLink.innerHTML = `All Shows (${totalMovieCount})`;
  // display them
  displayMovies(movieArray);
};

export default displayAll;