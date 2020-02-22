import users from './users.js';

console.log('task_07');
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => users.reduce((acc, total) => acc + total.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
