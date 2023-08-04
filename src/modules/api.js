const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'IXNHPoRODtuVf9PEinhq';

const postLike = async (id) => {
  const response = await fetch(`${involvementAPI}${apiId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

const getLikes = async () => {
  const response = await fetch(`${involvementAPI}${apiId}/likes/`);
  return response.json();
};

export { postLike, getLikes };