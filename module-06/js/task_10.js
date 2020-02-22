import users from './users.js';

console.log('task_10');
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const arr = users.reduce((acc, user) => acc + user.skills + ',', []).split(',');
  const sortedArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (!sortedArr.includes(arr[i])) {
      sortedArr.push(arr[i]);
    }
  }
  return sortedArr.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
