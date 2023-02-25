import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const imgContainer = document.querySelector(".gallery");

const imgElements = galleryItems.reduce(
  (acum, item) =>
    (acum += `<div class="gallery__item"> <a class="gallery__link" href="${item.original}"><img class="gallery__image"
      src = "${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/></a></div>`),
  ""
);

imgContainer.insertAdjacentHTML("beforeend", imgElements);

imgContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const img = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);

    instance.show();
   document.addEventListener("keydown", (e) => {
     if (e.code === "Escape") {
       instance.close();
     }
   });
});

