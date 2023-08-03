import { involvementApi } from './api.js';
import { addLike, getLikes } from './likes.js';

const createApp = async () => {
  try {
    const response = await fetch(`${involvementApi}/apps`, {
      method: 'POST',
    });
    const data = await response.json();

    const apiId = data.app_unique_identifier;
    const likeBtn = document.createElement('i');
    // ... (set up likeBtn properties, classes, etc.)

    likeBtn.addEventListener('click', () => {
      addLike(apiId, 'item1')
        .then(() => {
          // Handle successful like
          console.log('Like created');
          likeBtn.style.color = 'red';

          setTimeout(() => {
            getLikes(apiId)
              .then((likes) => {
                console.log('Likes:', likes);
                // Perform additional actions with likes data
                likeBtn.style.color = 'green'; // Update button color
              })
              .catch((error) => {
                console.error('Error fetching likes:', error);
              });
          }, 2000);
        })
        .catch((error) => {
          console.error('Error creating like:', error);
        });
    });

    // Rest of your code for creating and appending other elements
  } catch (error) {
    console.error('Error creating app:', error);
  }
};

export default createApp;