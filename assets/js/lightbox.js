const productItems = document.querySelectorAll(".product__img");
const totalProductItems = productItems.length;
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__img");
const lightboxClose = lightbox.querySelector(".lightbox__close");
const lightboxCounter = lightbox.querySelector(".caption__counter");
let itemIndex = 0;
for (let i = 0; i < totalProductItems; i++) {
  productItems[i].addEventListener("click", () => {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}
const toggleLightbox = () => {
  lightbox.classList.toggle("open");
};
const changeItem = () => {
  imgSrc = productItems[itemIndex]
    .querySelector(".product__img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxCounter.innerText = itemIndex + 1 + " of " + totalProductItems;
};
const prevButton = document.querySelector(".prev__item");
const nextButton = document.querySelector(".next__item");
prevButton.addEventListener("click", () => {
  if (itemIndex === 0) {
    itemIndex = totalProductItems - 1;
  } else {
    itemIndex--;
  }
  changeItem();
});
nextButton.addEventListener("click", () => {
  if (itemIndex === totalProductItems - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
});
// close lightbox

lightbox.addEventListener("click", (event) => {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});
