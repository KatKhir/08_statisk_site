console.log("loaded...");

// const id = 1163;

const id = new URLSearchParams(window.location.search).get("id");
const produktUrl = `https://kea-alt-del.dk/t7/api/products/${id}`;
const productcontainer = document.querySelector(".product");

console.log("min url ", produktUrl);

getData();

function getData() {
  console.log("getData...");
  fetch(produktUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("show data er", data);

  productcontainer.innerHTML = `
   <div class="produkt_billede">
  <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="produkt billede">
  </div>
  <div class="produkt_info">
                <h2 class="h2_margin">${data.productdisplayname}</h2>
                <br>
                <br>
                <p class="produkt_info"><strong>Brand: </strong>${data.brandname}</p>
                <br>
               <p class="produkt_info"><strong>Price: </strong>DKK ${data.price},-</p>
<br>
                <label for="size" class="size_p">Choose a size</label>
                <select name="size" id="size">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <button class="add_to_basket">Add to basket</button>
                  </div> 
  `;
}
