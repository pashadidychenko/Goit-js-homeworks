console.log('Task 2');

const total = 100;
const ordered = 20;
const noOrder = 'На складе недостаточно твоаров!';
const orderOk = 'Заказ оформлен, с вами свяжется менеджер';

ordered > total ? console.log(noOrder) : console.log(orderOk);

// if (ordered > total) {
//   console.log(noOrder);
// } else {
//   console.log(orderOk);
// }
