/* Задачи:
1. Найдите элемент по id, используя getElementById, элемент с id равным
"super_link" и выведите этот элемент в консоль.
2. Внутри всех элементов на странице, которые имеют класс card-link,
поменяйте текст внутри элемента на "ссылка".
3. Найдите все элементы на странице с классом card-link, которые лежат в
элементе с классом card-body, и выведите полученную коллекцию в консоль.
4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
data-number со значением 50, и выведите его в консоль.
5. Выведите содержимое тега title в консоль.
6. Получите элемент с классом card-title и выведите его родительский узел в
консоль.
7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс card.
8. Удалите тег h6 на странице. */

/* Решение: */

// 1. Найти элемент по id и вывести его в консоль
const superLink = document.getElementById("super_link");
console.log(superLink);
// 2. Внутри всех элементов с классом "card-link" поменять текст на
"ссылка"
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach(link => {
link.textContent = "ссылка";
});
// 3. Найти все элементы с классом "card-link" внутри элемента с
классом "card-body" и вывести их в консоль
const cardBodyLinks = document.querySelectorAll(".card-body
.card-link");
console.log(cardBodyLinks);
// 4. Найти первый элемент с атрибутом data-number="50" и вывестиего в консоль
const firstDataNumber50 =
document.querySelector('[data-number="50"]');
console.log(firstDataNumber50);
// 5. Вывести содержимое тега title в консоль
const titleTag = document.querySelector("title");
console.log(titleTag ? titleTag.textContent : "Тег title не
найден");
// 6. Получить элемент с классом "card-title" и вывести его
родительский узел в консоль
const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);
// 7. Создать элемент <p>, добавить текст "Привет" и вставить его в
начало элемента с классом "card"
const newParagraph = document.createElement("p");
newParagraph.textContent = "Привет";
const card = document.querySelector(".card");
card.insertBefore(newParagraph, card.firstChild);
// 8. Удалить элемент h6 на странице
if (h6Tag) {
h6Tag.remove();}