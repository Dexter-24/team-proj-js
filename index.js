//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const inputRef = document.querySelector("#alertInput");
const btnRef = document.querySelector("#alertButton");
btnRef.addEventListener("click", handlerClick);
function handlerClick() {
  alert(inputRef.value);
}

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const leftSwapInputRef = document.querySelector("#leftSwapInput");
const rightSwapInputRef = document.querySelector("#rightSwapInput");
const swapButtonRef = document.querySelector("#swapButton");

swapButtonRef.addEventListener("click", () => {
  const leftInputValue = leftSwapInputRef.value;
  const rightSwapInputValue = rightSwapInputRef.value;
  rightSwapInputRef.value = leftInputValue;
  leftSwapInputRef.value = rightSwapInputValue;
});

//TODO:==============================================
/*
Завдання 3
Кнопка "Close" ховає текст і замінює назву кнопки на
"Open", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const passwordInputRef = document.querySelector("#passwordInput");
const passwordButtonRef = document.querySelector("#passwordButton");
passwordButtonRef.addEventListener("click", () => {
  if (passwordButtonRef.textContent === "Open") {
    passwordInputRef.setAttribute("type", "text");
    passwordButtonRef.textContent = "Close";
    return;
  }
  passwordInputRef.setAttribute("type", "password");
  passwordButtonRef.textContent = "Open";
});

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
const decreaseBtnRef = document.querySelector("#decrease");
const increaseBtnRef = document.querySelector("#increase");
const boxRef = document.querySelector("#box");

decreaseBtnRef.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxRef).width);
  boxRef.style.width = size - 10 + "px";
  boxRef.style.height = size - 10 + "px";
})
increaseBtnRef.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxRef).width);
  boxRef.style.width = size + 10 + "px";
  boxRef.style.height = size + 10 + "px";
})

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
