import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = createLi(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', listHandler);

function createLi(array) {
    return array.reduce((acc, item) => acc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>` ," ")
}

function listHandler(evt) {
    evt.preventDefault()
    
    const originalImg = evt.target.dataset.source;       
    const instance = basicLightbox.create(`<img src="${originalImg}" width="800" height="600">`,
        {
            onShow: () => window.addEventListener('keydown', escClick),
            onClose: () => window.removeEventListener('keydown', escClick)
        }
    )
    instance.show()
    
    
    function escClick(evt) {
        if (evt.code === 'Escape') {
            instance.close()
        }
    }
}