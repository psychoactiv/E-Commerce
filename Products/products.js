const ratingInput = document.querySelector(".rating-slider-input");
const ratingValue = document.querySelector(".rating-value");

ratingInput.addEventListener("input", () => {
  ratingValue.textContent = `${ratingInput.value} Stars`;
});
