// Задача 1
function changeText() {
    let targetElement = document.getElementById("target");
    targetElement.textContent = "Привет, мир!";
}

// Задача 2
function handleSubmit(event) {
    event.preventDefault();
    let inputValue = document.getElementById("inputValue").value;
    console.log("Введенное значение:", inputValue);
}

// Задача 3
function changeTriggerText() {
    let buttonElement = document.querySelector(".trigger button");
    let randomValue = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    buttonElement.textContent = "Изменить текст кнопки: " + randomValue;
}