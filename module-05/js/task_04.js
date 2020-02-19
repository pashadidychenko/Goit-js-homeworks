console.log('task_04');

class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  set value(str) {
    return (this._value = str);
  }

  get value() {
    return this._value;
  }

  // получает парметр str (строку) и добавляет ее в конец _value
  append(str) {
    return (this._value = this._value + str);
  }

  // получает парметр str (строку) и добавляет ее в начало value
  prepend(str) {
    return (this._value = str + this._value);
  }

  // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
  pad(str) {
    return (this._value = str + this._value + str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
