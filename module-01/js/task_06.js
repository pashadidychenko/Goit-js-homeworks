console.log('Task 6');

let total = 0;
let input;

while (true) {
  input = +(prompt('Введите число', '') * 10);
  if (input === 0) break;
  if (Number.isNaN(input)) {
    alert('Введите целое число');
  } else {
    total += input;
  }
}

alert(`Общая сумма чисел равна ${total / 10}`);
