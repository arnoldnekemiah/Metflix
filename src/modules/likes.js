import { postLike, getLikes } from './api.js';

const updateLikeCount = (likeCount, showId) => {
  getLikes()
    .then((likes) => {
      const showLikes = likes.find((item) => item.item_id === showId);
      likeCount.textContent = `${showLikes ? showLikes.likes : 0} Likes`;
    })
    .catch((error) => error);
};

function handleLikeButtonClick(likeBtn, likeCount) {
  const showId = likeBtn.getAttribute('data-show-id');
  updateLikeCount(likeCount, showId);
  likeBtn.addEventListener('click', async () => {
    await postLike(showId);
    // Pass the likeCount element as an argument
    updateLikeCount(likeCount, showId);
    likeBtn.style.color = 'red';
  });
}

export default handleLikeButtonClick;