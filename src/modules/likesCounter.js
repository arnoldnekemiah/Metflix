import { getLikes } from './api.js';

const getLikesCount = async (itemId) => {
  const likes = await getLikes();
  const movieLikes = likes.filter((like) => like.item_id === itemId);
  return movieLikes.length;
};

export default getLikesCount;