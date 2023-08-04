// Create a manual mock for the api.js module
// Import the function to be tested
import { getLikes } from './api.js';
import getLikesCount from './likesCounter.js';

jest.mock('./api.js', () => ({
  getLikes: jest.fn(),
}));

describe('getLikesCount', () => {
  test('returns the correct likes count for a given itemId', async () => {
    // Mock the getLikes function to return a specific array of likes
    const mockLikes = [
      { item_id: 1 },
      { item_id: 2 },
      { item_id: 1 },
      // ... other likes with different item_ids
    ];
    getLikes.mockResolvedValue(mockLikes);

    // Call the function with a specific itemId
    const itemId = 1;
    const result = await getLikesCount(itemId);

    // Expect the result to be the correct count of likes with the given itemId
    expect(result).toBe(2); // In this case, there are 2 likes with itemId === 1
  });

  // Testing possible edges
  test('returns 0 when there are no likes for the given itemId', async () => {
    // Mock the getLikes function to return an empty array
    getLikes.mockResolvedValue([]);

    const itemId = 1;
    const result = await getLikesCount(itemId);

    expect(result).toBe(0);
  });

  test('handles errors from the getLikes function', async () => {
    // Mock the getLikes function to throw an error
    getLikes.mockRejectedValue(new Error('API error'));

    const itemId = 1;
    // Using .catch() to handle the rejection since the function throws an error
    await expect(getLikesCount(itemId)).rejects.toThrow('API error');
  });
});