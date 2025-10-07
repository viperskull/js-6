let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const increment = () => {
  counterValue++;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue--;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);