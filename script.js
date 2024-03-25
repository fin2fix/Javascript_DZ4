// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

console.log("Задание 1");
for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 !== 0) {
    console.log(`${i} - это нечетное число`);
  } else {
    console.log(`${i} - это четное число`);
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

console.log("Задание 2");
const setOfNumbers = [1, 2, 3, 4, 5, 6, 7];
const resultArray = setOfNumbers.slice(0, 3).concat(setOfNumbers.slice(5, 7));
console.log(setOfNumbers);
console.log(resultArray);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

console.log("Задание 3");
const randomArray = [];

for (let i = 0; i < 5; i++) {
  randomArray.push(Math.floor(Math.random() * 10));
}
console.log(randomArray);

//Сумма элементов массива
let sumElementsArray = 0;
for (let j = 0; j < randomArray.length; j++) {
  sumElementsArray += randomArray[j];
}
console.log(`Сумма элементов этого массива равна ${sumElementsArray}`);

//Поиск минимального элемента
console.log(
  `Минимальный элемент этого массива равен ${Math.min(...randomArray)}`
);

//Поиск числа 3 в массиве
let indexOfNumber = randomArray.indexOf(3);
console.log(
  indexOfNumber !== -1
    ? `Число 3 в массиве есть и находится под индексом ${indexOfNumber}`
    : "Числа 3 в указанном массиве нет"
);

//Задание 4
//Вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5
console.log("Задание 4");
const plusArray = [];

for (let i = 0; i < 20; i++) {
  plusArray.push("+");
  console.log(plusArray.join(""));
}
