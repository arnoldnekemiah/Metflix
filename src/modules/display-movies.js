import coming from '../assets/coming-soon.jpg';
import renderPopup from './render-popup.js';
import handleLikeButtonClick from './likes.js';

const displayMovies = async (movieArray) => {
  const container = document.querySelector('main');
  container.innerHTML = '';

  if (!movieArray || movieArray.length === 0) {
    const noMoviesMessage = document.createElement('p');
    noMoviesMessage.textContent = 'No movies found for this category.';
    container.appendChild(noMoviesMessage);
    return;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < movieArray.length; i++) {
    const movie = movieArray[i];
    const likeBtnId = `likeBtn_${movie.show.id}`;

    const movieCard = document.createElement('div');
    const movieTitle = document.createElement('h2');
    const movieImage = document.createElement('img');
    const buttonsDiv = document.createElement('div');
    const commentBtn = document.createElement('button');
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fa', 'fa-heart');
    likeBtn.id = likeBtnId;

    movieTitle.textContent = movie.show.name;

    if (movie.show.image) {
      movieImage.src = movie.show.image.medium;
    } else {
      movieImage.src = coming;
    }

    commentBtn.textContent = 'Comments';
    commentBtn.classList.add('comment-button');

    movieCard.classList.add('card');
    buttonsDiv.classList.add('commentLike-div');
    movieImage.classList.add('movieImage');

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieImage);
    container.appendChild(movieCard);

    buttonsDiv.appendChild(commentBtn);
    buttonsDiv.appendChild(likeBtn);

    const likeCountSpan = document.createElement('span');
    likeCountSpan.classList.add('like-count');
    likeCountSpan.textContent = '';
    buttonsDiv.appendChild(likeCountSpan);

    movieCard.appendChild(buttonsDiv);
    movieCard.appendChild(likeCountSpan);

    likeBtn.setAttribute('data-show-id', movie.show.id);
    handleLikeButtonClick(likeBtn, likeCountSpan, i);

    commentBtn.addEventListener('click', () => {
      const pageContent = document.querySelectorAll('header, main, footer');
      pageContent.forEach((element) => element.classList.add('hidden'));
      document.body.classList.add('black');
      renderPopup(movie);
    });
  }
};

export default displayMovies;
