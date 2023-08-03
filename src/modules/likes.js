import { involvementApi, apiId } from './api.js';

// eslint-disable-next-line camelcase
const addLike = async (item_id) => {
  try {
    await fetch(`${involvementApi}/apps/${apiId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    const responseText = await error.response.text();
    console.error('Error creating app:', responseText);
  }
};

const getLikes = async () => {
  const response = await fetch(`${involvementApi}/apps/${apiId}/likes`);
  return response.json();
};

export { addLike, getLikes };