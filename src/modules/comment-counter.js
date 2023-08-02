const commentCounter = () => {
  const comments = document.querySelectorAll('.single-comment');
  return comments.length;
}

export default commentCounter;