document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider .slide');
    let index = 0;

    function showNextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    setInterval(showNextSlide, 3000);

    const form = document.querySelector(".contact__form");
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const messageInput = form.querySelector("textarea");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // зупиняємо стандартну відправку

        // очищуємо попередні повідомлення про помилки
        form.querySelectorAll(".error").forEach(el => el.remove());

        let valid = true;

        // перевірка імені
        if (nameInput.value.trim() === "" || !/^[A-Za-zА-Яа-яІіЇїЄєҐґ'’\s]+$/.test(nameInput.value)) {
            showError(nameInput, "Введіть коректне ім’я");
            valid = false;
        }

        // перевірка email
        if (emailInput.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            showError(emailInput, "Введіть коректний email (наприклад: exampl@gmail.com)");
            valid = false;
        }

        // перевірка повідомлення
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Поле не може бути порожнім");
            valid = false;
        }

        // якщо все вірно — показуємо повідомлення
        if (valid) {
            alert("Дякуємо! Ваше повідомлення надіслано ");
            form.reset();
        }
    });

    // функція для показу помилки
    function showError(input, message) {
        const error = document.createElement("div");
        error.classList.add("error");
        error.textContent = message;
        error.style.color = "red";
        input.insertAdjacentElement("afterend", error);
    }
});