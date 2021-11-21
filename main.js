import { foodStock } from "./data/data.js";

const foodContainer = document.querySelector(".container");
console.log(foodContainer);

foodStock.forEach((food) => {
  foodContainer.innerHTML += `<div class="food-item">  
    <p class="food-img">${food.img}</p>
    <p class="food-name">${food.name}</p>
    <p class="food-price">£${food.price}</p>
  </div>`;
});
