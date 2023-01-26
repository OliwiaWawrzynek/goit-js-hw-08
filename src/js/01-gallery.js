import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const list = document.querySelector('.gallery');

galleryItems.forEach(e => {
  list.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
</a>`
  );
});

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
