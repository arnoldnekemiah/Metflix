import { involvementApi, apiId } from './api.js';

// eslint-disable-next-line camelcase
const addLike = async (item_id) => {
  try {
    const response = await fetch(`${involvementApi}/apps/${apiId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return true; // Indicate success
    }
    const responseText = await response.text();
    return response('Successfully created, like:', responseText);
  } catch (error) {
    return error('Error creating like:', error);
  }
};

const getLikes = async () => {
  const response = await fetch(`${involvementApi}/apps/${apiId}/likes`);
  return response.json();
};

export { addLike, getLikes };