const checkDiv = document.getElementById('controls');
const boxes = document.getElementById('boxes');
checkDiv.addEventListener('click', inputCheck);
let amount = 0;

function inputCheck(check) {
  if (check.target === check.currentTarget) {
    return;
  }
  if (check.target.tagName === 'INPUT') {
    amount = Number(check.target.value);
  }
  if (check.target.dataset.action === 'render') {
    return createBoxes(amount);
  }
  if (check.target.dataset.action === 'destroy') {
    return destroyBoxes(boxes);
  }
}
function getRandomColor(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createBoxes(amount) {
  destroyBoxes(boxes);
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = `rgb(${getRandomColor(255)}, ${getRandomColor(
      255,
    )}, ${getRandomColor(255)})`;
    boxes.append(div);
  }
}
function destroyBoxes(el) {
  return (el.innerHTML = '');
}

// Array(amount).fill('').map((e, i) =>
