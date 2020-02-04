console.log('task_04');

const countTotalSalary = function(employees) {
  let total = 0;
  for (const key in employees) {
    total += employees[key];
  }
  return total;
};

//  или return Object.values(employees).reduce((total, value) => total + value, 0);

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
