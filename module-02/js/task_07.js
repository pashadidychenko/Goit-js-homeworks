const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const login = prompt('Введите новый логин', '');
// let message;

function isLoginValid(login) {
  if (login != null) return login.length < 4 || login.length > 16;
}
// function isLoginValid(login) {
//   if (login === null) {
//     message = 'Отменено пользователем';
//     return false;
//   }
//   if (login.length < 4 || login.length > 16) {
//     message = 'Ошибка! Логин должен быть от 4 до 16 символов';
//     return false;
//   }
//   return true;
// }
function isLoginUnique(logins, login) {
  return logins.includes(login);
}
// function isLoginUnique(logins, login) {
//   if (logins.includes(login)) {
//     message = 'Такой логин уже используется!';
//     return false;
//   }
//   return true;
// }

function addLogin(login) {
  if (isLoginValid(login) === false) return alert('Отменено пользователем');
  if (isLoginUnique(logins, login) === false) return alert('Такой логин уже используется!');
  if (isLoginValid(login) && isLoginUnique(logins, login))
    return logins.push(login), alert('Логин успешно добавлен!');
}

addLogin(login);
