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
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user)
// for (let key of keys) {
//   console.log(  `${key} : ${user[key]}` )
// }


// console.log( )


// /**
//  *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),
//  *? яка приймає масив об'єктів та
//  *? рядок із назвою каменю.
//  *? Функція рахує та повертає загальну вартість каменів
//  *? з таким ім'ям, ціною та кількістю з об'єкта
//  */
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];


// function calcTotalPrice(someStones, stoneName) {

//   for (let stone of someStones) {
//     // console.log(stone);
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Not Found yours Stone"
// }

// console.log(calcTotalPrice(stones, ""));


/*
///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function updateArray(arr) {
//     let newArr = [];
//     let id = 0;
//     for (const el of arr) {
//         let newel = { ...el, price: el.price * 0.8, id: id};
//         id += 1;
//         newArr.push(newel);
//     }
//     return newArr;
// }
// console.log(updateArray(fruits));
// console.log(fruits);



// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)
const arr = ["best", "the", "foo", "is", "js"];
const copyArr = [...arr]
const index = copyArr.indexOf("foo");
copyArr.splice(index, 1);
copyArr.reverse();
const string = copyArr.join(" ")
console.log(string);
console.log(arr);

const string = arr
  .slice(0, arr.indexOf("foo"))
  .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
  .reverse()
  .join(" ");