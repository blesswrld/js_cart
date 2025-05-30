window.addEventListener("DOMContentLoaded", function () {
    // При загрузке DOM:
    let products = document.querySelectorAll(".product"), // Находим все товары
        buttons = document.querySelectorAll("button"), // Находим все кнопки
        openBtn = document.querySelector(".open"); // Находим кнопку открытия корзины

    // Функция создания HTML-структуры корзины
    function createCart() {
        let cart = document.createElement("div"), // Создаем основной контейнер корзины
            field = document.createElement("div"), // Создаем поле для товаров в корзине
            heading = document.createElement("h2"), // Создаем заголовок корзины
            closeBtn = document.createElement("button"); // Создаем кнопку закрытия

        cart.classList.add("cart"); // Добавляем классы
        field.classList.add("cart-field");
        closeBtn.classList.add("close");

        heading.textContent = "В нашей корзине:"; // Устанавливаем тексты
        closeBtn.textContent = "Закрыть";

        document.body.appendChild(cart); // Добавляем корзину в DOM
        cart.appendChild(heading); // Добавляем заголовок
        cart.appendChild(field); // Добавляем поле для товаров
        cart.appendChild(closeBtn); // Добавляем кнопку закрытия
    }

    createCart(); // Вызываем создание корзины при загрузке страницы

    // Получаем ссылки на элементы корзины после их создания
    let field = document.querySelector(".cart-field"),
        cart = document.querySelector(".cart"),
        close = document.querySelector(".close");

    // Функция открытия корзины
    function openCart() {
        cart.style.display = "block"; // Показываем корзину
    }

    // Функция закрытия корзины
    function closeCart() {
        cart.style.display = "none"; // Скрываем корзину
    }

    // Слушатели событий для открытия/закрытия корзины
    openBtn.addEventListener("click", openCart);
    close.addEventListener("click", closeCart);

    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener("click", function () {
    //         let item = products[i].cloneNode(true),
    //             btn = item.querySelector("button");

    //         btn.remove();
    //         field.appendChild(item);
    //         products[i].remove();
    //     });
    // }

    //     buttons.forEach(function (item, i) {
    //         item.addEventListener("click", function () {
    //             let item = products[i].cloneNode(true),
    //                 btn = item.querySelector("button");

    //             btn.remove();
    //             field.appendChild(item);
    //             products[i].remove();
    //         });
    //     });
    // });

    // Добавление товаров в корзину:
    // Перебираем все кнопки на странице
    buttons.forEach((item, i) => {
        // Добавляем слушатель клика на каждую кнопку
        item.addEventListener("click", () => {
            let item = products[i].cloneNode(true), // Клонируем товар (весь элемент .product)
                btn = item.querySelector("button"); // Находим кнопку внутри клонированного товара

            btn.remove(); // Удаляем кнопку из клонированного товара
            field.appendChild(item); // Добавляем клонированный товар в поле корзины
            products[i].remove(); // Удаляем оригинальный товар со страницы
        });
    });
});
