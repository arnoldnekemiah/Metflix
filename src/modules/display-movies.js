import coming from '../assets/coming-soon.jpg';
import { addLike, getLikes } from './likes';
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

    likeBtn.addEventListener('click', async () => {
      likeBtn.style.color = 'red';
      // eslint-disable-next-line camelcase
      const item_id = movie.show.id;
      try {
        const success = await addLike(item_id);

        if (success) {
          // Handle successful like
          console.log('Like created successfully');
          likeBtn.style.color = 'green'; // Update button color
          // Optionally, you can also update the like count here if needed
        } else {
          // Handle unsuccessful like
          console.log('Failed to create like');
          likeBtn.style.color = 'black'; // Reset button color
        }
        // Refresh the likes count if needed
        getLikes(item_id)
          .then((likes) => {
            console.log('Likes:', likes);
            // Perform additional actions with likes data
          })
          .catch((error) => {
            console.error('Error fetching likes:', error);
          });
      } catch (error) {
        console.error('Error creating like:', error);
        likeBtn.style.color = 'black'; // Reset button color
      }
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
