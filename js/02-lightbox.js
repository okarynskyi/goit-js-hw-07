import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = createLi(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);
// gallery.addEventListener('click', listHandler);

function createLi(array) {
    return array.reduce((acc, item) => acc + `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>` ," ")
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250'
});
