// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
function addGalleryEL() {
  const result = galleryItems
    .map(el => {
      return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`;
    })
    .join(' ');
  galleryEl.insertAdjacentHTML('afterbegin', result);
  return;
}
function handleImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  createModalWindow(evt);
  return;
}

function createModalWindow() {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

galleryEl.addEventListener('click', handleImgClick);
addGalleryEL();
