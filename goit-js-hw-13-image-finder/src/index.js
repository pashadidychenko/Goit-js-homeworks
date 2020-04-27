import './styles.css';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

// import fetch API
import getImageData from './apiService.js';

// import basiclightbox
import * as basicLightbox from '../node_modules/basiclightbox/dist/basicLightbox.min.js';

// PNotify
import { info, error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { defaults } from '@pnotify/core';
defaults.width = '500px';
defaults.delay = '2000';
defaults.destroy = 'false';
defaultModules.set(PNotifyMobile, {});

// lodash
const _ = require('lodash');

// variables
let currentPage = 0;
const dataList = [];
let searchText;

// Handlebars
const gallery = document.getElementById('gallery');
const templateGallery = document
  .getElementById('templateGallery')
  .innerHTML.trim();
const template = Handlebars.compile(templateGallery);

// load DOM element
const searchImage = document.getElementById('search-form');
const divContainer = document.getElementById('divContainer');
const loadButton = document.getElementById('loadButton');

// Listener
searchImage.addEventListener('input', _.debounce(getSearchText, 500));
divContainer.addEventListener('click', loadMore);

function getSearchText(text) {
  searchText = text.target.value;
  dataList.splice(0, dataList.length);
  currentPage = 1;
  getImageData(searchText, currentPage, 12, addImageData);
}

function loadMore(e) {
  if (e.target.localName === 'img') {
    basicLightbox.create(`<img src="${e.target.dataset.bigsrc}">`).show();
    info('Click on image to exit');
  }
  if (e.target.id !== 'loadButton') {
    return;
  }
  currentPage += 1;
  getImageData(searchText, currentPage, 12, addImageData);
}

function addImageData(imageData) {
  if (imageData.length === 0) {
    loadButton.classList.add('hide');
    return error('Image not found');
  }
  dataList.push(...imageData);
  const greatGallery = template(dataList);
  info(
    'Click button load more for load more images or click on image to see big image',
  );
  loadButton.classList.remove('hide');
  return (gallery.innerHTML = greatGallery);
}
