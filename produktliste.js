console.log("HEJ FRA JAVASCRIPT");
const productListContainer = document.querySelector(".product_list_container");
const category = new URLSearchParams(window.location.search).get("category");
let allData;

document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", filterKlik);
});

function filterKlik(evt) {
  showFiltered(evt.currentTarget.dataset.gender);
}

function showFiltered(filter) {
  if (filter == "All") {
    showProducts(allData);
  } else {
    const filteredProductsArr = allData.filter((products) => products.gender === filter);
    showProducts(filteredProductsArr);
  }
  console.log("showFiltered", filter);
  console.log(allData.filter((products) => products.gender === filter));
}

console.log("category", category);
getData(`https://kea-alt-del.dk/t7/api/products?category=${category}`);
function getData(url) {
  fetch(url).then((res) =>
    res.json().then((data) => {
      allData = data;
      showProducts(data);
    })
  );
}

function showProducts(products) {
  productListContainer.innerHTML = "";
  console.log("products", products);
  products.forEach((product) => {
    productListContainer.innerHTML += `
    <article class="article_design ${product.soldout == 1 ? "soldOut" : ""} ${product.discount ? "discount" : ""}">
        <div class="imageContainer">
         <a href="produkt.html?id=${product.id}">
         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="id 1529">
         </a>
        <p>SOLD OUT</p>     
        </div>
        <hr>
        <h3>${product.productdisplayname}</h3> 
          <p class="price">
        DKK <span>${product.price}</span>,-
      </p>
      <div class="discounted_container">
        <p>
          Now DKK <span>${(product.price - (product.price * product.discount) / 100).toLocaleString("da-DK")}</span>,-
        </p>
        <p>
          <span>${product.discount}</span> %
        </p>
      </div>
    </article>`;
  });
}
