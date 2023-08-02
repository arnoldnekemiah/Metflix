import commentCounter from './comment-counter.js';

// jest.mock('./render-list.js');

describe('count number of comments', () => {
  test('should output 2', () => {
    // arrange
    document.body.innerHTML = '<ul>'
    + '  <li class="single-comment"></li>'
    + '  <li class="single-comment"></li>'
    + '</ul>';
    // act
    const comments = commentCounter();
    // assert
    expect(comments).toBe(2);
  });
  test('should output 1', () => {
    // arrange
    document.body.innerHTML = '<ul>'
    + '  <li class="single-comment"></li>'
    + '</ul>';
    // act
    const comments = commentCounter();
    // assert
    expect(comments).toBe(1);
  });
  test('should output 1', () => {
    // arrange
    document.body.innerHTML = '<ul>'
    + '</ul>';
    // act
    const comments = commentCounter();
    // assert
    expect(comments).toBe(0);
  });
})