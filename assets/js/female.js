const productContainer = document.querySelector(".product_container");

// get male products API:
function getMaleProducts() {
    const productsApi = "http://localhost:3000/products";
    fetch(productsApi)
        .then((response) => {
            // JSON.parse:  JSON --> JS type
            return response.json();
        })
        .then((femaleProducts) => {
            femaleProducts.forEach((product) => {
                // console.log(typeof(product.price));
                let vndPrice = product.price.toLocaleString('vi-VN');
                // console.log(vndPrice);

                if(product.gender === "female") {
                    const card = document.createElement('div');
                    card.classList.add('product_card');
                    card.innerHTML = `
                        <span class="imgAndInfo">
                            <a class="product_link img_container" href="/pages/productDetail/productDetail.html?id=${product.id}">
                                <img class="main_img" src=${product.img} alt="main-image" />
                                <img class="alt_img" src=${product.altImg_1} alt="alt-image" />
                            </a>
                            <a class="product_link" href="/pages/productDetail/productDetail.html?id=${product.id}"><h3>${product.name}</h3></a>
                        </span>
                        <span class="priceAndCart">
                            <p>Giá: ${vndPrice} vnd</p>
                            <button dataKey=${product.id}>Thêm vào giỏ hàng</button>
                        </span>
                    `;
                    productContainer.appendChild(card);
                }
            })
        })
        .catch((err) => {
            console.log("Error! Unable to respond API.");
        })
}
getMaleProducts();