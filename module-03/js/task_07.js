console.log('task_07');

let idCounter = 0;
const currency = 'грн.';
const noManey = 'Cнятие такой суммы не возможно, недостаточно средств.';
const yourBalance = 'Ваш текущий баланс';
const debet = 'Ваш счет пополнен на';
const credit = 'Вы успешно сняли';
const operations = 'Количество средств по транзакции';
const noTransaction = 'Транзакции не найдено';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// Каждая транзакция это объект со свойствами: id, type и amount

const account = {
  balance: 0, // Текущий баланс счета
  transactions: [], // История транзакций

  // Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции.

  createTransaction(id, amount, type) {
    idCounter += 1;
    this.transactions.push({ id: idCounter, type, amount });
    return { id: idCounter, type, amount };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу. Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции и добавляет его в историю транзакций
   */

  deposit(amount) {
    this.createTransaction(this.transactions.length + 1, amount, Transaction.DEPOSIT);
    this.balance += amount;
    return `${debet} ${amount} ${currency}`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса. Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции и добавляет его в историю транзакций
   * Если amount больше чем текущий баланс, выводи сообщение недостаточно средств.
   */

  withdraw(amount) {
    if (this.balance > amount) {
      this.balance = this.balance - amount;
      this.createTransaction(this.transactions.length + 1, amount, Transaction.WITHDRAW);
      return `${credit} ${amount} ${currency}`;
    }
    return noManey;
  },

  // Метод возвращает текущий баланс

  getBalance() {
    return `${yourBalance} ${this.balance} ${currency}`;
  },

  // Метод ищет и возвращает объект транзации по id

  getTransactionDetails(id) {
    if (this.transactions[id - 1] !== undefined) {
      return this.transactions[id - 1];
    }
    return `id: ${id} - ${noTransaction}`;
  },

  // Метод возвращает количество средств iопределенного типа транзакции из всей истории транзакций

  getTransactionTotal(type) {
    let total = 0;
    for (const key of this.transactions) {
      if (key.type === type) {
        total += key.amount;
      }
    }
    return `${operations} ${type} ${total} ${currency}`;
  },
};

// Проверка скрипта

console.log(account.deposit(100));
console.log(account.deposit(200));
console.log(account.withdraw(10));
console.log(account.withdraw(3000));
console.log(account.getBalance());
console.log(account.getTransactionDetails(0));
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.transactions);
