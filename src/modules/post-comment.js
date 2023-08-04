const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'IXNHPoRODtuVf9PEinhq';

const postComment = async (id, name, message) => {
  await fetch(`${involvementAPI}${apiId}/comments`, {
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