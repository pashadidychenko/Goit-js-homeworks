console.log('Start Game');
let value = Math.random() * 100;
value = Math.round(value);

let userValue;
do {
  userValue = prompt('pleas enter value');
  if (userValue === null) {
    break;
  }
  userValue = Number.parseInt(userValue);

  if (value < userValue) {
    alert('Задумане число менше', userValue);
  }
  if (value > userValue) {
    alert('Задумане число більше', userValue);
  }
} while (userValue !== value);

alert('Ви вгадали, число', userValue);
