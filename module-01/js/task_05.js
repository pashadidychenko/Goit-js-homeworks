console.log('Task 5');

// const nameChile = 'Чили';
// const nameAustralia = 'Австралия';
// const nameIndia = 'Индия';
// const nameJamaica = 'Ямайка';
// const nameChina = 'Китай';
// const priceChile = 250;
// const priceAustralia = 170;
// const priceIndia = 80;
// const priceJamaica = 120;
// const priceChina = 100;

// let search = prompt('Введите в какую страну требуется доставить товар');

// if (search === null) {
//   search = 'cancel';
// }

// if (search === '') {
//   search = 'empty';
// }

// switch (search.toLowerCase()) {
//   case nameChile.toLowerCase():
//     alert(`Доставка в "${nameChile}" будет стоить ${priceChile} кредитов`);
//     break;

//   case nameAustralia.toLowerCase():
//     alert(`Доставка в "${nameAustralia}" будет стоить ${priceAustralia} кредитов`);
//     break;

//   case nameIndia.toLowerCase():
//     alert(`Доставка в "${nameIndia}" будет стоить ${priceIndia} кредитов`);
//     break;

//   case nameJamaica.toLowerCase():
//     alert(`Доставка в "${nameJamaica}" будет стоить ${priceJamaica} кредитов`);
//     break;

//   case nameChina.toLowerCase():
//     alert(`Доставка в "${nameChina}" будет стоить ${priceChina} кредитов`);
//     break;

//   case 'cancel':
//     console.log('Отменено пользователем');
//     break;

//   case 'empty':
//     console.log('Введено пустое поле');
//     break;

//   default:
//     alert(`В вашей стране "${search}" доставка не доступна`);
// }

const PRINT_COUNTRY = 'Напишите название страны в которую нужно доставить товар';
const CANCEL_BY_USER = 'Отменено пользователем!';
const NOT_DELIVERY = 'В вашей стране доставка не доступна';
const CNINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
const SOUTH_AMERICA = 'Южная америка';

let message = prompt(PRINT_COUNTRY);
let priсe = 0;
let countryName;

if (message === null) {
  message = CANCEL_BY_USER;
} else {
  countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

  switch (countryName) {
    case CNINA:
      priсe = 100;
      break;

    case SOUTH_AMERICA:
      priсe = 250;
      break;

    case AUSTRALIA:
      priсe = 170;
      break;

    case INDIA:
      priсe = 80;
      break;

    case JAMAICA:
      priсe = 120;
      break;

    default:
      message = NOT_DELIVERY;
  }
}

if (priсe > 0) {
  const PRICE_DELIVERY = `Доставка в ${countryName} будет стоить ${priсe} кредитов`;
  message = PRICE_DELIVERY;
}
alert(message);
