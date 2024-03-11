// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownClassEl = document.querySelectorAll(".dropdown-item");
dropdownClassEl.forEach((element) => {
  element.classList.add("super-dropdown");
  console.log(element);
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnEl = document.querySelector("div.dropdown button.btn");
btnEl.classList.toggle("btn-secondary");
console.log(btnEl);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector("div.menu");
console.log(menuEl);
menuEl.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divAfterEl = document.querySelector("div.dropdown");
divAfterEl.insertAdjacentHTML("afterEnd", '<a href="#">link</a>');

const allE = document.querySelectorAll("body");
allE.forEach((il) => {
  console.log(il);
});

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const changeId = (document.getElementById("dropdownMenuButton").id =
  "superDropdown");
// const divell = document.getElementById('div.dropdown');

console.log(changeId);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby"
//  равный "dropdownMenuButton" используя dataset.

const dataAddEl = document.querySelector(
  '[aria-labelledby = "dropdownMenuButton"]'
);
dataAddEl.setAttribute("data-dd", "3");

console.log(dataAddEl);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".


const delAtrTypeEl = document.querySelector('div.dropdown button[type="button"]');

delAtrTypeEl.removeAttribute('type');
console.log(delAtrTypeEl);