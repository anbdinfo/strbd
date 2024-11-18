

async function navLinkApi(limit, skip) {
    const response = await fetch ('https://dummyjson.com/products/category-list');
    const listData = await response.json();
    console.log(listData);
    
    listData.forEach(listItem => {
        $("#ulLink").append(navLinks(listItem))
    });
    
}
navLinkApi();

async function navLinkApi2() {
    const response = await fetch ('https://dummyjson.com/products/category-list?limit=5&skip=0&select=title');
    const listData = await response.json();
    console.log(listData);
    
    listData.forEach(listItem => {
        $("#ulListLink").append(navLinks(listItem))
    });
    
}
navLinkApi2();



function navLinks(listItem){
    return`
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">${listItem}</a>
        </li>
    `;
}

async function productCard() {
    const response = await fetch ('https://dummyjson.com/products');
    const productData = await response.json();
    console.log(productData);
    
    productData.products.forEach(product => {
        $("#productCard").append(ProductCard(product))
    });
    
}
productCard();

function ProductCard(product){
    return`
       <div class="col-md-3 mt-4 card-hover">
          <div class="card">
            <img src="${product.thumbnail}" class="card-img-top img-fluid" alt="...">
            <p class="position-absolute top-10 start-0 bg-primary rounded-end-4 mt-2 px-2 text-white">Save: $ 5,000</p>
            <div class="card-body">
              <p class="card-title mb-4">${product.title}</p>
              <p class="card-text">
                <span class="text-danger fw-bold">$ ${product.price}</span>
                <span class="text-decoration-line-through offer-text ms-3">$ Off ${product.rating}</span>
              </p>
            </div>
        </div>
    `;
}