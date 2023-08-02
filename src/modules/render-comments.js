const renderComments = (commentData) => {
  const commentHistory = document.querySelector('.comment-history');
  commentHistory.innerHTML = "";

  if (commentData) {
    commentData.forEach((elem) => {
      const singleComment = document.createElement('li');
      const date = document.createElement('span');
      const name = document.createElement('span');
      const message = document.createElement('span');
  
      singleComment.classList.add('single-comment');
      date.textContent = elem.creation_date.replaceAll('-', '/');
      name.textContent = elem.username + ':';
      message.textContent = elem.comment;
  
      singleComment.append(date, name, message);
      commentHistory.append(singleComment); 
    })
  } 
}

export default renderComments;