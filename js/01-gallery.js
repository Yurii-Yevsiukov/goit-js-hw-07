import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class='gallery__item'>
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');

gallery.innerHTML = galleryMarkup;
gallery.addEventListener('click', onClick);

function onClick (event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="100%" height="100%">`
  );
  instance.show();

  gallery.addEventListener('keydown', onCloseModal);

  function onCloseModal (event) {
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
  }
}
