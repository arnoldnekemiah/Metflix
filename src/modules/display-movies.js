import coming from '../assets/coming-soon.jpg';
import getliked from './get-liked.js';
import { addLike, getLikes } from './likes.js';
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

    buttonsDiv.appendChild(commentBtn);
    buttonsDiv.appendChild(likeBtn);

    const likeCountSpan = document.createElement('span');
    likeCountSpan.classList.add('like-count');

    movieCard.appendChild(buttonsDiv);

    likeBtn.addEventListener('click', async () => {
      likeBtn.style.color = 'red';
      // eslint-disable-next-line camelcase
      const item_id = movie.show.id;
      try {
        const success = await addLike(item_id);

        if (success) {
          likeBtn.style.color = 'green'; // Update button color

          // Fetch updated like count
          const updatedLikes = await getLikes(getliked);
          if (updatedLikes) {
            likeCountSpan.textContent = `${updatedLikes.length} Likes`; // Update like count display
          }
        } else {
          likeBtn.style.color = 'grey';
        }
        getLikes(getliked);
        // console log to be removed later.
        console.log(getLikes(getliked));
      } catch (error) {
        likeBtn.style.color = 'yellow';
      }
      buttonsDiv.appendChild(likeCountSpan);
    });

    commentBtn.addEventListener('click', () => {
      // Handle comment button click
      const pageContent = document.querySelectorAll('header, main, footer');
      pageContent.forEach((element) => element.classList.add('hidden'));
      document.body.classList.add('black');
      renderPopup(movie);
    });
  });
};

export default displayMovies;
