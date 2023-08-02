import postComment from "./post-comment.js";
import showError from "./show-error.js";

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

  commentBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    const message = document.getElementById('user-message').value;

    if (name === '') {
      showError('name', 'Please, enter your name');
    } else if (message === '') {
      showError('comment', 'Please, enter your message');
    } else if (name && message !== '') {
      await postComment(id, name, message);

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
}

export default commentSection;