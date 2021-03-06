import users from './users.js';

console.log('task_01');
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(({ name }) => name);

// const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// sort((a, b) => b.localeCompare(a, 'en'))
