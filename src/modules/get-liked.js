import { involvementApi, apiId } from './api.js';

const getliked = async () => {
  const response = await fetch(`${involvementApi}/apps/${apiId}/likes`);
  if (response.ok) {
    return response.json();
  }
  return null;
};

export default getliked;