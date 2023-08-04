const itemCounter = () => {
  const numberItmes = document.getElementById('item-counter');
  const totalItems = document.querySelectorAll('.card');
  numberItmes.parentElement.classList.remove('hidden');
  numberItmes.textContent = totalItems.length;
};

export default itemCounter;