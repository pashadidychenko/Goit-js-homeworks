console.log('Task 3');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Please enter password');

if (message === null) {
  console.log((message = 'Отменено пользователем!'));
} else if (message === ADMIN_PASSWORD) {
  console.log((message = 'Добро пожаловать!'));
} else {
  console.log((message = 'Доступ запрещен, неверный пароль!'));
}

alert(message);
