let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productImg.src = "image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  productImg.src = "image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  productImg.src = "image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

let titleColor = document.getElementById("casual");
let buyColor = document.getElementById("buy");
let colorbtn = document.getElementsByClassName("color-btn");

colorbtn[0].onclick = function () {
  titleColor.style.color = "red";
  buyColor.style.backgroundColor = "red";
};
colorbtn[1].onclick = function () {
  titleColor.style.color = "green";
  buyColor.style.backgroundColor = "green";
};
colorbtn[2].onclick = function () {
  titleColor.style.color = "blue";
  buyColor.style.backgroundColor = "blue";
};
colorbtn[3].onclick = function () {
  titleColor.style.color = "rgb(247, 0, 255)";
  buyColor.style.backgroundColor = "rgb(247, 0, 255)";
};

document.addEventListener("DOMContentLoaded", function () {
let priceElement = document.getElementById("price");
let discountElement = document.getElementById("discount");
let quantityInput = document.querySelector('.quantity-select input');
let finalPriceSpan = document.querySelector(".finalPrice");

// Check if elements are found
if (!priceElement || !discountElement || !quantityInput || !finalPriceSpan) {
console.error('Could not find required elements.');
return;
}

// Function to calculate and update final price
function updateFinalPrice() {
let price = parseFloat(priceElement.textContent.replace('$', ''));
let discount = parseFloat(discountElement.textContent.replace('% OFF', ''));
let quantity = parseInt(quantityInput.value);

// Check if numeric values are valid
if (isNaN(price) || isNaN(discount) || isNaN(quantity)) {
console.error('Invalid numeric values.');
return;
}

let finalPriceValue = (price - (price * discount) / 100) * quantity;
finalPriceValue = finalPriceValue.toFixed(2); // Round to 2 decimal places

// Update the content of the span element
finalPriceSpan.textContent = "$" + finalPriceValue;
}

// Initial call to update the final price
updateFinalPrice();

// Event listener for the quantity input
quantityInput.addEventListener('input', updateFinalPrice);
});