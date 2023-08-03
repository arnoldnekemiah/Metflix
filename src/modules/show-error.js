const showError = (type, message) => {
  const errorElements = {
    name: document.getElementById('name-error'),
    comment: document.getElementById('comment-error'),
  };

  const errorElement = errorElements[type];
  errorElement.textContent = message;
  errorElement.classList.add('show');
};

export default showError;