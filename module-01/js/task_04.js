console.log('Task 4');

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const quantityDroid = prompt('How many drones you want by?');

if (quantityDroid === null) {
  console.log('Отменено пользователем!');
} else {
  Number(quantityDroid);
  if (quantityDroid > 0) {
    totalPrice = quantityDroid * pricePerDroid;
  } else {
    console.log('Incorrect value');
  }
}
if (totalPrice === undefined) {
  console.log('Не коректное значение totalPrice', totalPrice);
} else if (credits < totalPrice) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`,
  );
}
