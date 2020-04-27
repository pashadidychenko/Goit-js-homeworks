console.log('Task 4');

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const cenceled = 'Отменено пользователем!';
const incorrect = 'Incorrect value';
const incorrectValue = 'Не коректное значение totalPrice';
const noManey = 'Недостаточно средств на счету!';

const quantityDroid = prompt('How many drones you want by?');

if (quantityDroid === null) {
  console.log(cenceled);
} else {
  Number(quantityDroid);
  if (quantityDroid > 0) {
    totalPrice = quantityDroid * pricePerDroid;
  } else {
    console.log(incorrect);
  }
}
if (totalPrice === undefined) {
  console.log(incorrectValue, totalPrice);
} else if (credits < totalPrice) {
  console.log(noManey);
} else {
  const byDroid = `Вы купили ${quantityDroid} 
  дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
  console.log(byDroid);
}
