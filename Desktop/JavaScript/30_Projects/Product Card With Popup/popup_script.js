
let popup = document.getElementById("popup");
let productCard = document.querySelector(".product");

function openPopup() {
  popup.classList.add("open-popup");
  productCard.classList.add("invisible");
}
function closePopup() {
  popup.classList.remove("open-popup");
  productCard.classList.remove("invisible");
  location.reload();
  document.getElementById("buyForm").reset();
}
