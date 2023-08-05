import close from '../assets/close.svg';
import coming from '../assets/coming-soon.jpg';
import commentSection from './comment-section.js';

const renderPopup = (movieInfo) => {
  const movieCard = document.createElement('div');
  const closeBtn = document.createElement('button');
  const closeImg = document.createElement('img');
  const title = document.createElement('h2');
  const genres = document.createElement('ul');
  const lang = document.createElement('p');
  const image = document.createElement('img');
  const premiere = document.createElement('p');
  const score = document.createElement('p');
  const infoDiv = document.createElement('div');

  infoDiv.classList.add('info');
  movieCard.classList.add('active-popup');
  closeBtn.id = 'close-btn';
  closeImg.src = close;
  title.textContent = movieInfo.show.name;
  lang.textContent = movieInfo.show.language;
  premiere.textContent = movieInfo.show.premiered;
  score.textContent = `Score: ${(movieInfo.score * 10).toFixed(2)}`;
  score.classList.add('score');

  for (let i = 0; i < movieInfo.show.genres.length; i += 1) {
    const genre = document.createElement('li');
    genre.textContent = movieInfo.show.genres[i];
    genres.appendChild(genre);
  }

  if (movieInfo.show.image) {
    image.src = movieInfo.show.image.original;
  } else {
    image.src = coming;
  }

  closeBtn.appendChild(closeImg);
  closeBtn.addEventListener('click', () => {
    movieCard.remove();
    // showContent();
    const pageContent = document.querySelector('main');
    pageContent.classList.remove('blur');
  });

  infoDiv.append(title, score, genres, lang, premiere);
  movieCard.append(closeBtn, image, infoDiv);
  infoDiv.innerHTML += movieInfo.show.summary;

  document.body.appendChild(movieCard);
  commentSection(movieInfo.show.id);
};

export default renderPopup;