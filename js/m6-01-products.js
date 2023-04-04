import products from "./data/products.js";
import porducts from "./data/products.js";
// Create card of product
// - In class of product may be product--on-sale product--not-available

const product = {
  name: "Сервоприводы",
  description:
    "adlkrgdlf ldkfgjsdlf gldrg jsdl;gj sdlg  sel;rgksd'l;gmdf;b mgf lhkdfphj sdrd gjsermg ols",
  price: 2000,
  available: true,
  onSale: true,
};

{
  // <article class="product">
  //     <h2 class="product__name">Название</h2>
  //     <p class="product__descr">Описание</p>
  //     <p class="product__price">Цена:</p>
  // </article>
}

// const productEl = document.createElement("article");
// productEl.classList.add("product");

// const nameEl = document.createElement("h2");
// nameEl.classList.add("product__name");
// nameEl.textContent = product.name;

// const descrEl = document.createElement("p");
// descrEl.classList.add("product__descr");
// descrEl.textContent = product.description;

// const priceEl = document.createElement("p");
// priceEl.classList.add("product__price");
// priceEl.textContent = `Цена: ${product.price}`;

// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

// //// Write a function for creating card of product ////////////

const makeProductCard = ({ name, price, description }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameEl = document.createElement("h2");
  nameEl.classList.add("product__name");
  nameEl.textContent = name;

  const descrEl = document.createElement("p");
  descrEl.classList.add("product__descr");
  descrEl.textContent = description;

  const priceEl = document.createElement("p");
  priceEl.classList.add("product__price");
  priceEl.textContent = `Цена: ${price}`;

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

const elements = products.map(makeProductCard);

console.log(elements);

const containerOfProducts = document.querySelector(".js-products");
console.log(containerOfProducts);

containerOfProducts.append(...elements);
