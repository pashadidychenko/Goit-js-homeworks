const YOU_NUMBER = 'Введите число или нажмите Отмена для подсчета суммы';
const NO_NUMBER = 'Было введено не число, попробуйте еще раз';
let input;
let total = 0;
const numbers = [];

while (input !== null) {
  input = prompt(YOU_NUMBER, 'Введите число ');
  if (input === null) break;
  const userNumber = +input;
  if (Number.isNaN(userNumber) || userNumber === 0) {
    alert(NO_NUMBER);
  } else {
    numbers.push(userNumber);
  }
}

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i] * 100;
  }
}
const inputSum = total / 100;
const message = `Общая сумма чисел равна ${inputSum}`;
alert(message);

// Тоже рабочий код но eslintrc выдает ошибку
// let input;
// const numbers = [];
// let total = 0;

// function sumInput() {
//   while (true) {
//     input = prompt('Введите число');
//     console.log(input);
//     if (isNaN(input)) {
//       alert('Было введено не число, попробуйте еще раз');
//       continue;
//     }
//     if (input === '' || input === null) break;
//     numbers.push(Number(input));
//     console.log(numbers);
//   }
//   for (const number of numbers) {
//     total += number * 100;
//   }
//   return total / 100;
// }
// alert(`Общая сумма чисел равна ${sumInput()}`);
