// Hamberger menu
const navSearch = document.querySelector('.nav-search');
const navLeft = document.querySelector('.nav-left');

document.querySelector('.toggle').addEventListener('click', () => {
  if (navSearch.style.display === "none") {
    navSearch.style.display = "inline-block";
    navLeft.style.display = "inline-block";
  } else {
    navSearch.style.display = "none";
    navLeft.style.display = "none";
  }
});

// product info
const products = document.querySelector('#products');

products.addEventListener('click', (e) => {
  e.preventDefault();
  const main = document.querySelector('#main');

  if (e.target.classList.contains("product-img")) {
    main.innerHTML = `
      <div class="container">
        <a href="./index.html" class="mb-4"><button class="back-btn btn btn-Secondary">BACK</button></a>
        <div class="py-3 row">
          <div class="col-md-6">
            <img scr="${e.target.getAttribute("src")}" class="img-fluid">  
          </div>

          <div class="col-md-6">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <h3>${e.target.parentElement.nextSibling.nextSibling.children[0].children[0].children[0].innerText}</h3>
              </div>
              <div class="list-group-item">
                RS. <span>${e.target.parentElement.nextSibling.nextSibling.children[1].children[0].innerText}</span>
              </div>
              <div class="list-group-item">
                Gender <span class="product-gender">Male</span>
              </div>
              <div class="list-group-item">
                Size: <span class="product-size">S</span>
              </div>
              <div class="list-group-item">
                Age-group: <span class="age-group">16 - 18</span>
              </div>
              <div class="list-group-item">
                Status: <span class="product-status">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (e.target.classList.contains("product-name")) {
    main.innerHTML = `
    <div class="container">
      <a href="./index.html" class="mb-4"><button class="back-btn btn btn-Secondary">BACK</button></a>
      <div class="py-3 row">
        <div class="col-md-6">
          <img scr="${e.target.parentElement.parentElement.parentElement.previousSibling.previousSibling.children[0].getAttribute("src")}" class="img-fluid">  
        </div>

        <div class="col-md-6">
          <div class="list-group list-group-flush">
            <div class="list-group-item">
              <h3>${e.target.innerText}</h3>
            </div>
            <div class="list-group-item">
              RS. <span>${e.target.parentElement.parentElement.nextSibling.nextSibling.children[0].innerText}</span>
            </div>
            <div class="list-group-item">
              Gender <span class="product-gender">Male</span>
            </div>
            <div class="list-group-item">
              Size: <span class="product-size">S</span>
            </div>
            <div class="list-group-item">
              Age-group: <span class="age-group">16 - 18</span>
            </div>
            <div class="list-group-item">
              Status: <span class="product-status">In Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }
});

// Add to cart
const cartBtn = document.querySelectorAll('.add-cart-btn');

for (let i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener('click', (e) => {
    e.preventDefault();

    console.log(i);
  });
}