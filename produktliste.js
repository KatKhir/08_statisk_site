console.log("HEJ FRA JAVASCRIPT");
const productListContainer = document.querySelector(".product_list_container");

getData("https://kea-alt-del.dk/t7/api/products");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    console.log("productdisplayname", product);
    productListContainer.innerHTML += `
    <article class="article_design ${product.soldout == 1 ? "soldOut" : ""}">
        <div class="imageContainer">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="id 1529">
        <p>SOLD OUT</p>     
        </div>
        <h2>${product.productdisplayname}</h2> 
        <p>DKK ${product.price},-</p>
        <a href="https://produkt.html">Read more</a>
    </article>`;
  });
}
