import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { getLocalStorage } from "./utils.mjs";

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart");
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const productId = e.target.dataset.id;
  const product = await findProductById(productId);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
