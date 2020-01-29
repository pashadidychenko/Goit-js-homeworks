console.log('Task 3');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Please enter password');
const hello = 'Добро пожаловать!';
const denied = 'Доступ запрещен, неверный пароль!';
const cenceled = 'Отменено пользователем!';

if (message === null) {
  message = cenceled;
  console.log(cenceled);
} else if (message === ADMIN_PASSWORD) {
  message = hello;
  console.log(hello);
} else {
  message = denied;
  console.log(denied);
}

alert(message);
