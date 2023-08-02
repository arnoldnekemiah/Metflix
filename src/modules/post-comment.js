const postComment = async (id, name, message) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gVm054blBRYdlwCGxPpc/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: message,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default postComment;