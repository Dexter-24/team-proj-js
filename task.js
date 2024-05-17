// /*
// *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */
// let answer = prompt("Яка офіційна назва JavaScript?");
// console.log(answer);
// if (answer.trim() === "ECMAScript") {
//     alert("Вірно!");
// } else { alert("Не знаєте? ECMAScript!"); }
/**
 *
 *
 *
 *
 *? Напишіть цикл, який виводить у консоль
 *? всі непарні числа  від max до min  за спаданням
 */
/*const max = 50;
const min = 23;
for (let i = max; i >= min; i -= 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
*/
// for (let i = max; i >= min; i -= 1) {
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

// const answer = prompt("Введіть число");
// const hours = String(Math.floor(answer / 60)).padStart(2,0);
// console.log(hours);
// const minutes = String(answer % 60).padStart(2,0);
// console.log(minutes);
// console.log(`${hours}:${minutes}`);
/**
 * 
 * 
*? Напишіть код, який питання
*? логін за допомогою prompt та логувати результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Admin",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Canceled"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевірять так:
*? Якщо введено пароль "Password",
*? то вивести рядок "Вітаю"
*? інакше виводить рядок "Невірний пароль!"
 */
/*
const login = prompt("Your login").trim();
if (login === "Admin") {
  const password = prompt("Enter password").trim();
  if (password === "Password") {
    alert("Вітаю");
  } else {
    alert("Невірний пароль!");
  }
} else if (!login) {
  // } else if (login === null || login === "") {
  alert("Canceled");
} else {
  alert("Я вас не знаю");
}
/*


**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */
const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user)
for (let key of keys) {
  console.log(  `${key} : ${user[key]}` )  
}


console.log( )