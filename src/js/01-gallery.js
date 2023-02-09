import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

// const SimpleLightbox = require("simplelightbox");

const galleryElement = document.querySelector(".gallery"); // создает переменную с галереей

// ------------------------СОЗДАНИЕ И РЕНДЕР РАЗМЕТКИ------------------------

const galleryPreviewImagesToCreate = galleryItems.map((galleryItem) => {
  // создает превьюшки в галерее
  const galleryLinkElement = document.createElement("a"); // создает теги ли, линк и картинку
  const newImageTag = document.createElement("img");

  galleryLinkElement.classList.add("gallery__item"); // добавляет класс для линка
  galleryLinkElement.href = galleryItem.original;

  addAttributesToPreviewImages(newImageTag, galleryItem); // добавляет аттрибуты на картинку

  galleryLinkElement.prepend(newImageTag); // добавляет ранее созданную картинку в линк

  return galleryLinkElement;
});

galleryElement.prepend(...galleryPreviewImagesToCreate); // добавляет все элементы в разметку

// ---------------------СОЗДАНИЕ ЛАЙТБОКСА--------------------------

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  // добавляет лайтбокс на галерею
  captionsData: "alt",
  captionDelay: 250,
});

// ----------------------ФУНКЦИИ------------------------

function addAttributesToPreviewImages(newImageTag, galleryItem) {
  // добавляет аттрибуты для первьюшек
  newImageTag.src = galleryItem.preview;
  newImageTag.alt = galleryItem.description;
  newImageTag.classList.add("gallery__image");
}

console.log(galleryItems);
