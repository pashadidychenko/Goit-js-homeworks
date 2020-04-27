import './styles.css';

import { error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { defaults } from '@pnotify/core';
defaults.width = '300px';
defaults.delay = '2000';
defaults.destroy = 'false';

defaultModules.set(PNotifyMobile, {});
const _ = require('lodash');

const inputText = document.getElementById('input');
const countryList = document.getElementById('countryList');
const templateList = document.getElementById('templateList').innerHTML.trim();
const template = Handlebars.compile(templateList);
const findList = document.getElementById('findList').innerHTML.trim();
const findTemplate = Handlebars.compile(findList);

inputText.addEventListener('input', _.debounce(enteredText, 500));

function enteredText(text) {
  fetch(`https://restcountries.eu/rest/v2/name/${text.target.value}`)
    .then(data => data.json())
    .then(dataName => getDataName(dataName));
  countryList.innerHTML = ``;
  function getDataName(dataList) {
    if (dataList.status === 404) {
      return error('Country not found');
    }
    if (dataList.length > 10) {
      return error('Too many country found, enter more data');
    }
    if (dataList.length === 1) {
      const greatList = template(dataList);
      return (countryList.innerHTML = greatList);
    }
    if (1 < dataList.length < 10) {
      const greatList = findTemplate(dataList);
      return (countryList.innerHTML = greatList);
    }
  }
}

//   return (countryList.innerHTML = `
// <h2>${dataList[0].name}</h2>
// <ul class='coutryList'>
// <li><ul>
// <li><b>Capital:</b> ${dataList[0].capital}</li>
// <li><b>Population:</b> ${dataList[0].population}</li>
// <li><b>Languages:</b>
// <ul>
// ${dataList[0].languages.map(el => `<li><i>${el.name}</i></li>`).join(' ')}
// </ul>
// </li>
// </ul></li>
// <li><img src="${dataList[0].flag}" alt="flag ${
//     dataList[0].name
//   } width="100px" height="100px"/></li>
// </ul>`);

//
//
// return (countryList.innerHTML = `<ul>${dataList
//   .map(el => `<li class='findList'>${el.name}</li>`)
//   .join(' ')}</ul>`);
