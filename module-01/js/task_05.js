console.log('Task 5');

const nameChile = 'Чили';
const nameAustralia = 'Австралия';
const nameIndia = 'Индия';
const nameJamaica = 'Ямайка';
const nameChina = 'Китай';
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
const priceChina = 100;

let search = prompt('Введите в какую страну требуется доставить товар');

if (search === null) {
  search = 'cancel';
}

if (search === '') {
  search = 'empty';
}

switch (search.toLowerCase()) {
  case nameChile.toLowerCase():
    alert(`Доставка в "${nameChile}" будет стоить ${priceChile} кредитов`);
    break;

  case nameAustralia.toLowerCase():
    alert(`Доставка в "${nameAustralia}" будет стоить ${priceAustralia} кредитов`);
    break;

  case nameIndia.toLowerCase():
    alert(`Доставка в "${nameIndia}" будет стоить ${priceIndia} кредитов`);
    break;

  case nameJamaica.toLowerCase():
    alert(`Доставка в "${nameJamaica}" будет стоить ${priceJamaica} кредитов`);
    break;

  case nameChina.toLowerCase():
    alert(`Доставка в "${nameChina}" будет стоить ${priceChina} кредитов`);
    break;

  case 'cancel':
    console.log('Отменено пользователем');
    break;

  case 'empty':
    console.log('Введено пустое поле');
    break;

  default:
    alert(`В вашей стране "${search}" доставка не доступна`);
}
