const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'IXNHPoRODtuVf9PEinhq';

const getComments = async (id) => {
  const response = await fetch(`${involvementAPI}${apiId}/comments?item_id=${id}`);
  if (response.ok) {
    return response.json();
  }
  return null;
};

export default getComments;