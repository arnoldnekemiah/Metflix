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
      console.log('Like created successfully');
      return true; // Indicate success
    }
    const responseText = await response.text();
    console.error('Error creating like:', responseText);
    return false; // Indicate failure
  } catch (error) {
    console.error('Error creating like:', error);
    return false; // Indicate failure
  }
};

const getLikes = async () => {
  const response = await fetch(`${involvementApi}/apps/${apiId}/likes`);
  return response.json();
};

export { addLike, getLikes };