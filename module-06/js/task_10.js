import users from './users.js';

console.log('task_10');
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .filter((elem, index, arr) => arr.indexOf(elem) === index)
    .sort((a, b) => a.localeCompare(b, 'en'));

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// старый вариант решения
// const arr = users.reduce((acc, user) => acc + user.skills + ',', []).split(',');
// const sortedArr = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   if (!sortedArr.includes(arr[i])) {
//     sortedArr.push(arr[i]);
//   }
// }
// return sortedArr.sort();
/*
 let allSkills = [];
  let arr = [];
  allSkills = users.reduce((allSkills, user) => [...allSkills, ...user.skills], []);
  arr = allSkills.filter((elem, index, arr) => arr.indexOf(elem) === index);
  return arr.sort((a, b) => a.localeCompare(b, 'en'));
  */
/*
import users from "./users.js";
​
//console.log('->', [4,3,2,100,3,1,5,6].sort());
​
const getSortedUniqueSkills1 = users => {
  const lUsers = [...users];
​
  return lUsers.reduce((acc, el)=>{
    acc.push(...el.skills);
    return [...acc]
  }
    , []
    ).filter((el,indx, arr)=>arr.indexOf(el)===indx).sort()
};
​
const getSortedUniqueSkills2 = users => users.reduce((acc,el)=>[...acc, ...el.skills], []).filter((a,b,c)=>c.indexOf(a)===b).sort()
​
​
const getSortedUniqueSkills3 = users => {
  // твой код
};
​
console.log(getSortedUniqueSkills1(users));
console.log(getSortedUniqueSkills2(users));
console.log(getSortedUniqueSkills3(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
*/
