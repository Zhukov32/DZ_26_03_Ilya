function showAnswer(button) {
   let answer = button.nextElementSibling;
   answer.classList.toggle("hidden");
   if (button.innerHTML === "Показать ответ") {
      button.innerHTML = "Скрыть ответ";
   } else {
      button.innerHTML = "Показать ответ";
   }
}