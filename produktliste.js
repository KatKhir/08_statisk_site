console.log("HEJ FRA JAVASCRIPT");
const productListContainer = document.querySelector(".product_list_container");
const category = new URLSearchParams(window.location.search).get("category");

console.log("category", category);
getData(`https://kea-alt-del.dk/t7/api/products?category=${category}`);
//https://kea-alt-del.dk/t7/api//products?category=Footwear
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    // console.log("productdisplayname", product);
    productListContainer.innerHTML += `
    <article class="article_design ${product.soldout == 1 ? "soldOut" : ""} ${product.discount ? "discount" : ""}">
        <div class="imageContainer">
         <a href="produkt.html?id=${product.id}">
         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="id 1529">
         </a>
        <p>SOLD OUT</p>     
        </div>
        <h2>${product.productdisplayname}</h2> 
          <p class="price">
        DKK <span>${product.price}</span>,-
      </p>
      <div class="discounted_container">
        <p>
          Now DKK <span>${product.price - (product.price * product.discount) / (100).toLocaleString("dk-DK")}</span>,-
        </p>
        <p>
          <span>${product.discount}</span> %
        </p>
      </div>
    </article>`;
  });
}
