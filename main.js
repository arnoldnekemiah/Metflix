/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/item-counter.js":
/*!*****************************!*\
  !*** ./src/item-counter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = () => {
  const numberItmes = document.getElementById('item-counter');
  const totalItems = document.querySelectorAll('.card');
  numberItmes.parentElement.classList.remove('hidden');
  numberItmes.textContent = totalItems.length;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   postLike: () => (/* binding */ postLike)
/* harmony export */ });
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'IXNHPoRODtuVf9PEinhq';
const postLike = async id => {
  const response = await fetch(`${involvementAPI}${apiId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
  return response;
};
const getLikes = async () => {
  const response = await fetch(`${involvementAPI}${apiId}/likes/`);
  return response.json();
};


/***/ }),

/***/ "./src/modules/comment-counter.js":
/*!****************************************!*\
  !*** ./src/modules/comment-counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = () => {
  const comments = document.querySelectorAll('.single-comment');
  return comments.length;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/comment-section.js":
/*!****************************************!*\
  !*** ./src/modules/comment-section.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-comments.js */ "./src/modules/get-comments.js");
/* harmony import */ var _render_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-comments.js */ "./src/modules/render-comments.js");
/* harmony import */ var _post_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-comment.js */ "./src/modules/post-comment.js");
/* harmony import */ var _show_error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-error.js */ "./src/modules/show-error.js");




const commentSection = async id => {
  const popup = document.querySelector('.active-popup');
  const commentSection = document.createElement('div');
  const commentTitle = document.createElement('h2');
  const commentHistory = document.createElement('ul');
  const addComment = document.createElement('div');
  const userName = document.createElement('input');
  const nameError = document.createElement('span');
  const userComment = document.createElement('textarea');
  const commentError = document.createElement('span');
  const commentBtn = document.createElement('button');
  const commentData = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  commentSection.classList.add('comment-section');
  addComment.classList.add('add-comment');
  commentHistory.classList.add('comment-history');
  nameError.id = 'name-error';
  commentError.id = 'comment-error';
  commentTitle.textContent = 'Comments (0)';
  userName.id = 'user-name';
  userName.type = 'text';
  userName.placeholder = 'Your name';
  userComment.id = 'user-message';
  userComment.placeholder = 'Your insights';
  commentBtn.textContent = 'Comment';
  commentBtn.addEventListener('click', async event => {
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    const message = document.getElementById('user-message').value;
    if (name === '') {
      (0,_show_error_js__WEBPACK_IMPORTED_MODULE_3__["default"])('name', 'Please, enter your name');
    } else if (message === '') {
      (0,_show_error_js__WEBPACK_IMPORTED_MODULE_3__["default"])('comment', 'Please, enter your message');
    } else if (name && message !== '') {
      await (0,_post_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id, name, message);
      const commentData = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
      (0,_render_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentData);
      document.getElementById('user-name').value = '';
      document.getElementById('user-message').value = '';
    }
  });
  userName.addEventListener('keyup', () => {
    nameError.classList.remove('show');
  });
  userComment.addEventListener('keyup', () => {
    commentError.classList.remove('show');
  });
  addComment.append(userName, nameError, userComment, commentError, commentBtn);
  commentSection.append(commentTitle, commentHistory, addComment);
  popup.appendChild(commentSection);
  (0,_render_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentData);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentSection);

/***/ }),

/***/ "./src/modules/display-all.js":
/*!************************************!*\
  !*** ./src/modules/display-all.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data.js */ "./src/modules/get-data.js");
/* harmony import */ var _display_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-movies.js */ "./src/modules/display-movies.js");


const displayAll = async () => {
  // get data in all genres
  const comedy = await (0,_get_data_js__WEBPACK_IMPORTED_MODULE_0__["default"])('comedy');
  const action = await (0,_get_data_js__WEBPACK_IMPORTED_MODULE_0__["default"])('action');
  const romance = await (0,_get_data_js__WEBPACK_IMPORTED_MODULE_0__["default"])('romance');
  const drama = await (0,_get_data_js__WEBPACK_IMPORTED_MODULE_0__["default"])('drama');
  const movieArray = [...comedy, ...action, ...romance, ...drama];
  // sort alphabetically
  movieArray.sort((a, b) => {
    const x = a.show.name.toLowerCase();
    const y = b.show.name.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  // Calculate the total movie count
  const totalMovieCount = movieArray.length;

  // Display the total movie count next to the "All Shows" label
  const allNavLink = document.getElementById('all');
  allNavLink.innerHTML = `All Shows (${totalMovieCount})`;
  // display them
  (0,_display_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(movieArray);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAll);

/***/ }),

/***/ "./src/modules/display-movies.js":
/*!***************************************!*\
  !*** ./src/modules/display-movies.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_coming_soon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/coming-soon.jpg */ "./src/assets/coming-soon.jpg");
/* harmony import */ var _render_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-popup.js */ "./src/modules/render-popup.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");



const displayMovies = async movieArray => {
  const container = document.querySelector('main');
  container.innerHTML = '';
  if (!movieArray || movieArray.length === 0) {
    const noMoviesMessage = document.createElement('p');
    noMoviesMessage.textContent = 'No movies found for this category.';
    container.appendChild(noMoviesMessage);
    return;
  }
  for (let i = 0; i < movieArray.length; i += 1) {
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
      movieImage.src = _assets_coming_soon_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
    (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(likeBtn, likeCountSpan, i);
    commentBtn.addEventListener('click', () => {
      const pageContent = document.querySelector('main');
      pageContent.classList.add('blur');
      (0,_render_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(movie);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);

/***/ }),

/***/ "./src/modules/get-comments.js":
/*!*************************************!*\
  !*** ./src/modules/get-comments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'IXNHPoRODtuVf9PEinhq';
const getComments = async id => {
  const response = await fetch(`${involvementAPI}${apiId}/comments?item_id=${id}`);
  if (response.ok) {
    return response.json();
  }
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/modules/get-data.js":
/*!*********************************!*\
  !*** ./src/modules/get-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getData = async query => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`, {
    method: 'GET'
  });
  return response.json();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");

const updateLikeCount = (likeCount, showId) => {
  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)().then(likes => {
    const showLikes = likes.find(item => item.item_id === showId);
    likeCount.textContent = `${showLikes ? showLikes.likes : 0} Likes`;
  }).catch(error => error);
};
function handleLikeButtonClick(likeBtn, likeCount) {
  const showId = likeBtn.getAttribute('data-show-id');
  updateLikeCount(likeCount, showId);
  likeBtn.addEventListener('click', async () => {
    await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(showId);
    // Pass the likeCount element as an argument
    updateLikeCount(likeCount, showId);
    likeBtn.style.color = 'red';
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleLikeButtonClick);

/***/ }),

/***/ "./src/modules/post-comment.js":
/*!*************************************!*\
  !*** ./src/modules/post-comment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'IXNHPoRODtuVf9PEinhq';
const postComment = async (id, name, message) => {
  await fetch(`${involvementAPI}${apiId}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: message
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);

/***/ }),

/***/ "./src/modules/render-comments.js":
/*!****************************************!*\
  !*** ./src/modules/render-comments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-counter.js */ "./src/modules/comment-counter.js");

const renderComments = commentData => {
  const commentHistory = document.querySelector('.comment-history');
  const commentTitle = document.querySelector('.comment-section > h2');
  let commentCount = 0;
  commentHistory.innerHTML = '';
  if (commentData) {
    commentData.forEach(elem => {
      const singleComment = document.createElement('li');
      const date = document.createElement('span');
      const name = document.createElement('span');
      const message = document.createElement('span');
      singleComment.classList.add('single-comment');
      date.textContent = elem.creation_date.replaceAll('-', '/');
      name.textContent = `${elem.username}:`;
      message.textContent = elem.comment;
      singleComment.append(date, name, message);
      commentHistory.append(singleComment);
    });
    commentCount = (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    commentTitle.textContent = `Comments (${commentCount})`;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);

/***/ }),

/***/ "./src/modules/render-popup.js":
/*!*************************************!*\
  !*** ./src/modules/render-popup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _assets_coming_soon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/coming-soon.jpg */ "./src/assets/coming-soon.jpg");
/* harmony import */ var _comment_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-section.js */ "./src/modules/comment-section.js");



const renderPopup = movieInfo => {
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
  closeImg.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_0__;
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
    image.src = _assets_coming_soon_jpg__WEBPACK_IMPORTED_MODULE_1__;
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
  (0,_comment_section_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movieInfo.show.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPopup);

/***/ }),

/***/ "./src/modules/show-error.js":
/*!***********************************!*\
  !*** ./src/modules/show-error.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showError = (type, message) => {
  const errorElements = {
    name: document.getElementById('name-error'),
    comment: document.getElementById('comment-error')
  };
  const errorElement = errorElements[type];
  errorElement.textContent = message;
  errorElement.classList.add('show');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showError);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

main {
  display: grid;
  padding: 5rem;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  flex: 2;
  justify-content: center;
}

header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px #0000001a;
  position: sticky;
  top: 0;
  z-index: 3;
  font-family: 'Public Sans', sans-serif;
}

#search-bar {
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 2px;
}

#search-input {
  border: 1px black solid;
  padding: 0.3rem;
}

#search-btn {
  border: none;
  display: block;
  background-color: #d6d6d6;
  padding: 0.3rem;
  cursor: pointer;
}

.desktop-menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
  width: auto;
  height: 50px;
}

.categories {
  display: flex;
  gap: 3rem;
}

.categories .navlink {
  list-style: none;
  border-bottom: #fff solid 1px;
  cursor: pointer;
  text-align: center;
}

.categories .navlink a {
  color: black;
  text-decoration: none;
}

.navlink:hover {
  border-bottom: #222121 solid 1px;
}

.movieImage {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.movieImage:hover {
  transform: scale(1.05);
}

.card {
  display: grid;
  padding: 2rem;
  gap: 1rem;
  place-items: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

.comment-button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.comment-button:hover {
  transform: scale(1.05);
}

.fa-heart {
  margin-top: 5px;
  cursor: pointer;
}

.commentLike-div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
}

.like-count {
  font-family: 'Public Sans', sans-serif;
  display: block;
  margin-top: 5px;
  font-size: 12px;
  color: rgb(27, 72, 207);
}

footer {
  padding: 2rem;
  background-color: #a0a0a0;
  font-family: 'Public Sans', sans-serif;
  text-align: center;
}

.active-popup {
  margin: 6% 20%;
  padding: 4rem 5% 4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: absolute;
  align-self: center;
  border: 2px solid rgb(54, 54, 54);
  z-index: 2;
}

.active-popup * {
  font-family: 'Public Sans', sans-serif;
}

.active-popup #close-btn {
  all: unset;
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.active-popup .info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  width: 70%;
}

.active-popup .info p:nth-child(4) {
  width: 100%;
}

.active-popup > img {
  height: auto;
  width: 100%;
  max-width: 300px;
}

.active-popup button img {
  height: 2rem;
  width: 2rem;
}

.active-popup h2,
.active-popup .score {
  font-size: 1.5rem;
}

.info ul {
  list-style: none;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
}

.info ul li {
  border: black 1px solid;
  background-color: #a0a0a0;
  padding: 0.4rem 1rem;
}

.info ul li:hover {
  background-color: #3b3838;
  cursor: pointer;
}

.hidden {
  opacity: 0;
}

.blur {
  filter: blur(0.5rem);
}

.comment-section {
  margin-top: 1rem;
  width: 70%;
}

.comment-section h2 {
  text-align: center;
}

.comment-section *::placeholder {
  font-family: 'Public Sans', sans-serif;
  font-style: italic;
}

.add-comment input,
.add-comment textarea {
  padding: 0.3rem;
  height: 1.5rem;
}

.add-comment {
  margin: 1.5rem auto 0;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-comment textarea {
  height: 5rem;
}

.add-comment button {
  border: none;
  border: black 1px solid;
  background-color: #a0a0a0;
  padding: 0.5rem;
}

.comment-section button:hover {
  background-color: #3b3838;
  cursor: pointer;
}

.comment-history {
  margin: 1rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.single-comment {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.3rem;
}

.single-comment span:nth-of-type(1) {
  color: #6b6b6b;
  width: 100%;
}

.single-comment span:nth-of-type(2) {
  font-size: 1.2rem;
}

.single-comment span:nth-of-type(3) {
  font-style: italic;
}

#name-error,
#comment-error {
  opacity: 0;
}

#name-error.show,
#comment-error.show {
  opacity: 1;
}

#search-bar p {
  text-align: center;
  display: block;
  height: 1rem;
  font-size: 0.8rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  padding: 5rem;\r\n  grid-template-columns: repeat(auto-fill, 300px);\r\n  gap: 30px;\r\n  flex: 2;\r\n  justify-content: center;\r\n}\r\n\r\nheader {\r\n  background: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 2rem;\r\n  box-shadow: 0 0 10px #0000001a;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 3;\r\n  font-family: 'Public Sans', sans-serif;\r\n}\r\n\r\n#search-bar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 250px;\r\n  gap: 2px;\r\n}\r\n\r\n#search-input {\r\n  border: 1px black solid;\r\n  padding: 0.3rem;\r\n}\r\n\r\n#search-btn {\r\n  border: none;\r\n  display: block;\r\n  background-color: #d6d6d6;\r\n  padding: 0.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.desktop-menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  width: auto;\r\n  height: 50px;\r\n}\r\n\r\n.categories {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.categories .navlink {\r\n  list-style: none;\r\n  border-bottom: #fff solid 1px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.categories .navlink a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.navlink:hover {\r\n  border-bottom: #222121 solid 1px;\r\n}\r\n\r\n.movieImage {\r\n  transition: all 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.movieImage:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.card {\r\n  display: grid;\r\n  padding: 2rem;\r\n  gap: 1rem;\r\n  place-items: center;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.comment-button {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 8px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.comment-button:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.fa-heart {\r\n  margin-top: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentLike-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin-top: 5px;\r\n}\r\n\r\n.like-count {\r\n  font-family: 'Public Sans', sans-serif;\r\n  display: block;\r\n  margin-top: 5px;\r\n  font-size: 12px;\r\n  color: rgb(27, 72, 207);\r\n}\r\n\r\nfooter {\r\n  padding: 2rem;\r\n  background-color: #a0a0a0;\r\n  font-family: 'Public Sans', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.active-popup {\r\n  margin: 6% 20%;\r\n  padding: 4rem 5% 4rem;\r\n  background-color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  position: absolute;\r\n  align-self: center;\r\n  border: 2px solid rgb(54, 54, 54);\r\n  z-index: 2;\r\n}\r\n\r\n.active-popup * {\r\n  font-family: 'Public Sans', sans-serif;\r\n}\r\n\r\n.active-popup #close-btn {\r\n  all: unset;\r\n  position: absolute;\r\n  right: 1rem;\r\n  top: 1rem;\r\n}\r\n\r\n.active-popup .info {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  width: 70%;\r\n}\r\n\r\n.active-popup .info p:nth-child(4) {\r\n  width: 100%;\r\n}\r\n\r\n.active-popup > img {\r\n  height: auto;\r\n  width: 100%;\r\n  max-width: 300px;\r\n}\r\n\r\n.active-popup button img {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n.active-popup h2,\r\n.active-popup .score {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.info ul {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.info ul li {\r\n  border: black 1px solid;\r\n  background-color: #a0a0a0;\r\n  padding: 0.4rem 1rem;\r\n}\r\n\r\n.info ul li:hover {\r\n  background-color: #3b3838;\r\n  cursor: pointer;\r\n}\r\n\r\n.hidden {\r\n  opacity: 0;\r\n}\r\n\r\n.blur {\r\n  filter: blur(0.5rem);\r\n}\r\n\r\n.comment-section {\r\n  margin-top: 1rem;\r\n  width: 70%;\r\n}\r\n\r\n.comment-section h2 {\r\n  text-align: center;\r\n}\r\n\r\n.comment-section *::placeholder {\r\n  font-family: 'Public Sans', sans-serif;\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment input,\r\n.add-comment textarea {\r\n  padding: 0.3rem;\r\n  height: 1.5rem;\r\n}\r\n\r\n.add-comment {\r\n  margin: 1.5rem auto 0;\r\n  min-width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.add-comment textarea {\r\n  height: 5rem;\r\n}\r\n\r\n.add-comment button {\r\n  border: none;\r\n  border: black 1px solid;\r\n  background-color: #a0a0a0;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.comment-section button:hover {\r\n  background-color: #3b3838;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-history {\r\n  margin: 1rem 0 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.single-comment {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: baseline;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n  border: 1px solid black;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.single-comment span:nth-of-type(1) {\r\n  color: #6b6b6b;\r\n  width: 100%;\r\n}\r\n\r\n.single-comment span:nth-of-type(2) {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.single-comment span:nth-of-type(3) {\r\n  font-style: italic;\r\n}\r\n\r\n#name-error,\r\n#comment-error {\r\n  opacity: 0;\r\n}\r\n\r\n#name-error.show,\r\n#comment-error.show {\r\n  opacity: 1;\r\n}\r\n\r\n#search-bar p {\r\n  text-align: center;\r\n  display: block;\r\n  height: 1rem;\r\n  font-size: 0.8rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "close.svg";

/***/ }),

/***/ "./src/assets/coming-soon.jpg":
/*!************************************!*\
  !*** ./src/assets/coming-soon.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coming-soon.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_display_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display-movies.js */ "./src/modules/display-movies.js");
/* harmony import */ var _modules_get_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-data.js */ "./src/modules/get-data.js");
/* harmony import */ var _modules_display_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display-all.js */ "./src/modules/display-all.js");
/* harmony import */ var _item_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-counter.js */ "./src/item-counter.js");





const navLinks = document.querySelectorAll('.navlink');
const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
document.addEventListener('DOMContentLoaded', async () => {
  (0,_modules_display_all_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
searchBtn.addEventListener('click', async () => {
  const movieArray = await (0,_modules_get_data_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input.value);
  (0,_modules_display_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(movieArray);
  (0,_item_counter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
navLinks.forEach(link => {
  link.addEventListener('click', async () => {
    if (link.id === 'all') {
      (0,_modules_display_all_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else {
      let movieArray = await (0,_modules_get_data_js__WEBPACK_IMPORTED_MODULE_2__["default"])(link.id);
      movieArray = movieArray.filter(el => el.show.genres.includes(link.id.charAt(0).toUpperCase() + link.id.slice(1)));
      (0,_modules_display_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(movieArray);
      const numberItmes = document.getElementById('item-counter');
      numberItmes.parentElement.classList.add('hidden');
    }
  });
});
navLinks.forEach(async link => {
  if (link.id !== 'all') {
    let movieArray = await (0,_modules_get_data_js__WEBPACK_IMPORTED_MODULE_2__["default"])(link.id);
    movieArray = movieArray.filter(el => el.show.genres.includes(link.id.charAt(0).toUpperCase() + link.id.slice(1)));

    // Calculate the movie count by genre
    const movieCount = movieArray.length;
    const counter = link.childNodes[0].childNodes[1];

    // Display the movie count next to the each navlink
    counter.textContent = ` (${movieCount})`;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map