function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  // Selectarea elementelor din DOM
  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');
  
  // Funcția care creează <div>-urile
  function createBoxes(amount) {
    const boxes = [];
    let width = 30;
    let height = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = '5px';
  
      boxes.push(box);
      width += 10;
      height += 10;
    }
  
    boxesContainer.append(...boxes);
  }
  
  // Funcția care distruge colecția
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
  
  // Event listeners pentru butoane
  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert('Introduceți un număr între 1 și 100.');
    }
  });
  
  destroyBtn.addEventListener('click', destroyBoxes);