import itemCounter from './item-counter.js';

describe('itemCounter', () => {
  beforeAll(() => {
    // Set up the DOM structure needed for testing
    document.body.innerHTML = `
        <div id="item-counter">
          <span></span>
        </div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      `;
  });

  afterAll(() => {
    // We Clean up the DOM after testing
    document.body.innerHTML = '';
  });

  test('updates the item counter correctly', () => {
    itemCounter();

    const numberItmes = document.getElementById('item-counter');
    expect(numberItmes.parentElement.classList.contains('hidden')).toBe(false);
    expect(numberItmes.textContent).toBe('3');
  });
});