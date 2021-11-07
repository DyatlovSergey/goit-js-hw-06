const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

let totalValue = Number(valueEl.textContent);

incrementEl.addEventListener(
  "click",
  () => (valueEl.textContent = totalValue += 1)
);

decrementEl.addEventListener(
  "click",
  () => (valueEl.textContent = totalValue -= 1)
);
