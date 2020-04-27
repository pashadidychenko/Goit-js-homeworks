const REQUEST_URL = 'https://pixabay.com/api/';
const API_KEY = '16131668-a6b5f889764d48a111b29e31c';

export default function getImageList(
  searchText,
  currentPage,
  arrLength,
  addImageData,
) {
  fetch(
    `${REQUEST_URL}?image_type=photo&orientation=horizontal&q=${searchText}&page=${currentPage}&per_page=${arrLength}&key=${API_KEY}`,
  )
    .then(data => data.json())
    .then(imageData => addImageData(imageData.hits));
}
