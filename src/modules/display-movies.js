import coming from '../assets/coming-soon.jpg';
import renderPopup from './render-popup.js';
// Function to display movies based on the selected genre
const displayMovies = (movieArray) => {
  const container = document.querySelector('main');
  container.innerHTML = ''; // Clear the current movies displayed on the page
  if (!movieArray || movieArray.length === 0) {
    // Handle the case when genreData is not available or empty
    const noMoviesMessage = document.createElement('p');
    noMoviesMessage.textContent = 'No movies found for this category.';
    container.appendChild(noMoviesMessage);
    return;
  }

  movieArray.forEach((movie) => {
    const movieCard = document.createElement('div');
    const movieTitle = document.createElement('h2');
    const movieImage = document.createElement('img');
    const buttonsDiv = document.createElement('div');
    const commentBtn = document.createElement('button');
    const likeBtn = document.createElement('i');

    movieTitle.textContent = movie.show.name;
    if (movie.show.image) {
      movieImage.src = movie.show.image.medium;
    } else {
      movieImage.src = coming;
    }

    commentBtn.textContent = 'Comments';
    likeBtn.classList.add('fa', 'fa-heart');

    movieCard.classList.add('card');
    buttonsDiv.classList.add('comment');

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieImage);
    container.appendChild(movieCard);

    buttonsDiv.appendChild(likeBtn);
    buttonsDiv.appendChild(commentBtn);
    movieCard.appendChild(buttonsDiv);

    commentBtn.addEventListener('click', () => {
      // hideContent();
      const pageContent = document.querySelectorAll('header, main, footer');
      pageContent.forEach((element) => element.classList.add('hidden'));
      document.body.classList.add('black');
      renderPopup(movie);
    });
  });
};

export default displayMovies;