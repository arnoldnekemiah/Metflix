import bin from '../assets/bin-svgrepo-com.svg';

const displayMovies = (AllData, actionData, dramaData, comedyData, romanceData) => {
  // Function to display movies based on the selected genre
  const displayMoviesByGenre = (genreData) => {
    const container = document.querySelector('main');
    container.innerHTML = ''; // Clear the current movies displayed on the page
    if (!genreData || genreData.length === 0) {
      // Handle the case when genreData is not available or empty
      const noMoviesMessage = document.createElement('p');
      noMoviesMessage.textContent = 'No movies found for this category.';
      container.appendChild(noMoviesMessage);
      return;
    }

    genreData.forEach((movie) => {
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
        movieImage.src = bin;
      }

      commentBtn.textContent = 'Comments';
      likeBtn.classList.add('fa', 'fa-heart');

      movieCard.classList.add('card');
      buttonsDiv.classList.add('commentLike');

      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieImage);
      container.appendChild(movieCard);

      buttonsDiv.appendChild(likeBtn);
      buttonsDiv.appendChild(commentBtn);
      movieCard.appendChild(buttonsDiv);
    });
  };

  // Add event listeners to genre menu items
  const allBtn = document.getElementById('All');
  const dramaBtn = document.getElementById('drama');
  const comedyBtn = document.getElementById('comedy');
  const actionBtn = document.getElementById('action');
  const romanceBtn = document.getElementById('romance');

  allBtn.addEventListener('click', () => {
    displayMoviesByGenre(AllData);
  });

  dramaBtn.addEventListener('click', () => {
    displayMoviesByGenre(dramaData);
  });

  actionBtn.addEventListener('click', () => {
    displayMoviesByGenre(actionData);
  });

  comedyBtn.addEventListener('click', () => {
    displayMoviesByGenre(comedyData);
  });

  romanceBtn.addEventListener('click', () => {
    displayMoviesByGenre(romanceData);
  });

  // Display all movies initially
  displayMoviesByGenre(AllData);
};

export default displayMovies;
