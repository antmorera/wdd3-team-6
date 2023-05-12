import { getData } from "./productData.mjs";


export  default async function productList(selector, category) {

  const products = await getData(category);
  if (Array.isArray(products) && products.length > 0) {
    const htmlItems = products.map((item) => productCardTemplate(item));
    document.querySelector(selector).innerHTML = htmlItems.join("");

   } //else {

     //   const htmlItems = products.Result.map((item) => productCardTemplate(item));
     //   document.querySelector(selector).innerHTML = htmlItems.join("");


     // }

  
}

function productCardTemplate(product) {
  // const productResult = product.Result
  const productCard = `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.NameWithoutBrand}"
  />
  <h3 class="card__brand">${product.Name}</h3>
  <h2 class="card__name">${product.NameWithoutBrand}</h2>
  <p class="product-card__price">${product.FinalPrice}</p></a>
</li>`

return productCard;
}       


