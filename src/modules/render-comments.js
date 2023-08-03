import commentCounter from './comment-counter.js';

const renderComments = (commentData) => {
  const commentHistory = document.querySelector('.comment-history');
  const commentTitle = document.querySelector('.comment-section > h2');
  let commentCount = 0;
  commentHistory.innerHTML = '';

  if (commentData) {
    commentData.forEach((elem) => {
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

    commentCount = commentCounter();
    commentTitle.textContent = `Comments (${commentCount})`;
  }
};

export default renderComments;