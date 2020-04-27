import gallery from './gallery-items.js';

const galeryList = document.querySelector('.js-gallery');
const newGalleryList = galeryList.cloneNode(true);
const modalWindow = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');

function addImageInGallery(imageList) {
  imageList.map(image => {
    newGalleryList.insertAdjacentHTML(
      'afterbegin',
      `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
    `,
    );
  });
  return newGalleryList;
}
addImageInGallery(gallery);
galeryList.replaceWith(newGalleryList);
newGalleryList.addEventListener('click', openImage);

function openImage(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();
  modalWindow.classList.add('is-open');
  modalImage.src = event.target.dataset.source;
  modalImage.alt = event.target.alt;
}
modalWindow.addEventListener('click', closeModalWindow);
document.addEventListener('keyup', escapeCloseModalWindow);

function closeModalWindow(closeWindow) {
  if (
    closeWindow.target.dataset.action === 'close-lightbox' ||
    closeWindow.target.dataset.action !== 'image'
  ) {
    modalWindow.classList.remove('is-open');
    modalImage.src = '#';
    modalImage.alt = 'no image';
  }
  return;
}

function escapeCloseModalWindow(keyClose) {
  if (keyClose.key === 'Escape') {
    modalWindow.classList.remove('is-open');
    modalImage.src = '#';
    modalImage.alt = 'no image';
  }
  if (keyClose.key === 'ArrowRight' || keyClose.key === 'ArrowLeft') {
    // const indexImage = gallery.indexOf(gallery.find(image => image.original === modalImage.src));
    const indexImage = gallery.findIndex(image => image.original === modalImage.src);
    let i = 0;
    if (keyClose.key === 'ArrowRight') {
      i = (indexImage - 1) % gallery.length;
      if (i === -1) {
        i = gallery.length - 1;
      }
      modalImage.src = gallery[i].original;
    }
    if (keyClose.key === 'ArrowLeft') {
      i = (indexImage + 1) % gallery.length;
      modalImage.src = gallery[i].original;
    }
  }
}
