const commentSection = async (id) => {
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
  
  commentSection.classList.add('comment-section');
  addComment.classList.add('add-comment');
  commentHistory.classList.add('comment-history');

  nameError.id = 'name-error';
  commentError.id = 'comment-error';
  commentTitle.textContent = 'Comments';
  userName.id = 'user-name';
  userName.type = 'text';
  userName.placeholder = "Your name";
  userComment.id = 'user-message';
  userComment.placeholder = "Your insights";
  commentBtn.textContent = "Comment";

  addComment.append(userName, nameError, userComment, commentError, commentBtn);
  commentSection.append(commentTitle, commentHistory, addComment);
  popup.appendChild(commentSection);
}

export default commentSection;