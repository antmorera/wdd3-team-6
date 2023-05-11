import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const cartListElement = document.querySelector(".product-list");
  const cartFooter = document.querySelector(".cart-footer");
  const cartTotalElement = document.querySelector(".cart-total");
  const cartCountElement = document.querySelector(".cart-count");

  if (cartListElement && cartFooter && cartTotalElement && cartCountElement) {
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      const htmlItems = cartItems.map((item) => cartItemTemplate(item));
      cartListElement.innerHTML = htmlItems.join("");
      cartFooter.classList.remove("hide");

      const cartTotal = cartItems.reduce(
        (total, item) => total + item.FinalPrice,
        0
      );
      cartTotalElement.textContent = `Total: $${cartTotal}`;

      // Update the cart count
      cartCountElement.textContent = cartItems.length;
      cartCountElement.style.display = "inline-block";
    } else {
      cartListElement.innerHTML = "";
      cartFooter.classList.add("hide");
      cartCountElement.style.display = "inline-block";
    }
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
