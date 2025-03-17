/* Задание

1.Продолжите работу с проектом из прошлого задания
2.В файле index.htmlдобавьте блок для корзины с классом cart. 

3.В файле script.js добавьте функциональность для добавления товара в корзину при клике на кнопку "Add to Cart".
4.Реализуйте функциональность для удаления товаров из корзины при нажатии на кнопку "X". */

// Массив с продуктами
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 19.99,
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Product 2",
        price: 29.99,
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Product 3",
        price: 39.99,
        image: "https://via.placeholder.com/150",
    },
];

// Корзина
let cart = [];

// Функция для отображения продуктов
function renderProducts() {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const h2 = document.createElement("h2");
        h2.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;

        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click", () => addToCart(product));

        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(price);
        li.appendChild(button);

        productList.appendChild(li);
    });
}

// Функция для добавления товара в корзину
function addToCart(product) {
    cart.push(product);
    renderCart();
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    renderCart();
}

// Функция для отображения корзины
function renderCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Очищаем корзину перед обновлением

    cart.forEach((product) => {
        const li = document.createElement("li");
        li.className = "cart-item";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const h2 = document.createElement("h2");
        h2.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.addEventListener("click", () => removeFromCart(product.id));

        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(price);
        li.appendChild(removeButton);

        cartList.appendChild(li);
    });
}

// Инициализация
renderProducts();