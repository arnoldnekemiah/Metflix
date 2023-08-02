const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gVm054blBRYdlwCGxPpc/comments?item_id=${id}`);
  if (response.ok) {
    return response.json();
  }
  return null;
};

export default getComments;