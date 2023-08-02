const showError = (type, message) => {
  const errorElements = {
    name: document.getElementById('name-error'),
    comment: document.getElementById('comment-error'),
  };
  console.log(errorElements);
  const errorElement = errorElements[type];
  errorElement.textContent = message;
  errorElement.classList.add('show');

  // setTimeout(() => {
  //   errorElements.name.classList.remove('show');
  //   errorElements.comment.classList.remove('show');
  // }, 3000);

};

export default showError;