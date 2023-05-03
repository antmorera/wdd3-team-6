// add to cart button event handler

import { findProductById } from "./productData.mjs";

export async function productDetails(productId) {
  const product =await findProductById(productId);
  console.log(product)
  renderProductDetails(product);
}

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart");
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}
async function addToCartHandler(e) {
  const productId = getParams("product");
  const product = await findProductById(productId);
  addProductToCart(product);
}

function renderProductDetails(product) {
  
  const htmlItems = product.map((item) => productItemTemplate(item));
  document.querySelector(".product-detail").innerHTML = htmlItems.join("");
}
function productItemTemplate(item) {
  const newItem = 
  `<section class="product-detail">
    <h3 id="productName">${item.Name}}</h3>
    <h2 class="divider" id="productNameWithoutBrand">${item.NameWithoutBrand}</h2>
    <img id="productImage" class="divider" src="${item.Image}" alt="${item.Name}" />
    <p class="product-card__price" id="productFinalPrice">$${item.FinalPrice}</p>
    <p class="product__color" id="productColorName">${item.Colors[0].ColorName}</p>
    <p class="product__description" id="productDescriptionHtmlSimple">${item.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="">Add to Cart</button>
    </div>
  </section>`;

  return newItem;
}
// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
