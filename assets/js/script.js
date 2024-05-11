// ...

// Khai báo các BIẾN:  
const navContainer = document.querySelector('.nav_container');
const productContainer = document.querySelector('.productContainer');
const cartBtn = document.querySelector('.cartBtn');
const sidebar = document.querySelector('.sidebar');
const deleteCartBtn = document.querySelectorAll('.deleteCart');
const totalPriceRender = document.querySelector("#total");
const cartBox = document.querySelector(".cartBox");
const productAmount = document.querySelectorAll("#productAmount");
const productLinks = document.querySelectorAll('.product_link');
const brandLinks = document.querySelectorAll('.brand-link');


// ____________________________________________________________________________________


// *****====== HEADER ======*****

function renderHeader() {
    const navContainer = document.querySelector('.nav_container');

    const navTitle = [ 
        {
            id: 1,
            title: "Thương Hiệu",
            link: "/pages/brand/brand.html",
        }, 
        {
            id: 2,
            title: "Nam",
            link: "/pages/male/male.html",
        }, 
        {
            id: 3,
            title: "Nữ",
            link: "/pages/female/female.html",
        }, 
        {
            id: 4,
            title: "Phụ Kiện",
            link: "/pages/accessory/accessory.html",
        }, 
        {
            id: 5,
            title: "Liên Hệ",
            link: "/pages/info/info.html",
        },
    ];
    const dropDownInfo = [
        {
            id: 1,
            title: "Thương Hiệu",
            info: `
                <div class="brandLayout">
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Casio">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Casio-1.jpg" alt="casio"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Citizen">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Citizen-1.jpg" alt="citizen"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Doxa">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Doxa.jpg" alt="doxa"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=DW">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Daniel-Wellington.jpg" alt="dw"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Fossil">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Fossil.jpg" alt="fossil"/>
                        </a>
                    </div>
                </div>
                <div class="brandLayout">
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=G-Shock">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/G-Shock.jpg" alt="g-shock"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Longines">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Longines.jpg" alt="longines"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Orient">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Orient-1.jpg" alt="orient"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Seiko">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Seiko.jpg" alt="seiko"/>
                        </a>
                    </div>
                    <div class="brand-box-img">
                        <a class="brand-link" href="/pages/brand/brand.html?brand=Tissot">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Tissot.jpg" alt="tissot"/>
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: "Nam",
            info: `Các sản phẩm dành cho Nam...`
        },
        {
            id: 3,
            title: "Nữ",
            info: `Thương hiệu nổi tiếng cho Nữ...`
        },
        {
            id: 4,
            title: "Phụ Kiện",
            info: `Mua phụ kiện đeee!`
        },
        {
            id: 5,
            title: "Liên Hệ",
            info: `Hãy gọi cho chúng tôi.`
        },
    ];

    // Brand Container:
    const brandList = [
        {
            id: 1,
            title: "Casio",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "Citizen",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "Doxa",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "DW",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "Fossil",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "G-Shock",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "Longines",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "Orient",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "Seiko",
            img: "",
            link: "",
        },
        {
            id: 1,
            title: "Tissot",
            img: "",
            link: "",
        },
    ];
    
    navTitle.map(nav => {
        const navItem = document.createElement('div');
        navItem.classList.add('nav_item');
        navItem.innerHTML = `
            <p>${nav.title}</p>
        `;
        navContainer.appendChild(navItem);

        const dropDown = document.querySelector(".dropdown")
        navItem.addEventListener("click", () => {
            if(dropDown.classList.contains("hide")) {
                dropDown.classList.remove("hide");
                dropDown.classList.add("show");
            } else {
                dropDown.classList.add("hide");
                dropDown.classList.remove("show");
            }
        })
        navItem.addEventListener("mouseover", () => {
            dropDownInfo.forEach(info => {
                if(info.id == nav.id) {
                    // test log
                    // console.log(info.title);

                    if(dropDown.querySelector('div') !== null) {
                        // lấy ra thẻ div cong bên trong
                        let childDiv = dropDown.querySelector('div');

                        // xoá thẻ div con bên trong
                        dropDown.removeChild(childDiv);

                        // load ra thông tin của nav
                        const newDiv = document.createElement('div');
                        newDiv.classList.add('nav_info');
                        newDiv.innerHTML = `${info.info}`;
                        dropDown.appendChild(newDiv);
                    } else {
                        // load ra thông tin của nav
                        const newDiv = document.createElement('div');
                        newDiv.classList.add('nav_info');
                        newDiv.innerHTML = `${info.info}`;
                        dropDown.appendChild(newDiv);
                    }

                }
            })
        })
    })
};
renderHeader();


//  ***** CART CONTAINER *****

// Toggle Cart Btn show/hide event handler:
cartBtn.addEventListener("click", (e) => {
    // log test:
    // console.log('cart');

    if(sidebar.classList.contains("hide")) {
        sidebar.classList.remove("hide");
        sidebar.classList.add("show");
    } else {
        sidebar.classList.add("hide");
        sidebar.classList.remove("show");
    }
});

// render cart:
function renderCart() {
    const cartContainer = document.querySelector(".cartContainer");
    const cartBox = document.createElement('div');
    cartBox.innerHTML = `
        <h2 class="cartTitle">Giỏ Hàng: 0</h2>
        <ul id="cart"></ul>
        <div class="cartBox">
            <h3>Các sản phẩm: </h3>
        </div>
        <div class="priceBox">
            <p></p>
            <p id="total"></p>
        </div>
        <button class="checkoutBtn"><a href="/pages/checkout/checkout.html">Thanh Toán</a></button>
    `;
    cartContainer.appendChild(cartBox);
}
renderCart();


// ____________________________________________________________________________________


// *****====== ADD TO CART SECTION ======*****

// Add To Cart Handler:
function addToCart(productId, productName, productPrice) {
    // log test
    console.log(productId, productName, productPrice);

    let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Lấy giỏ hàng từ localStorage
    cart[productId] = cart[productId] ? cart[productId] + 1 : 1; // Tăng số lượng sản phẩm trong giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng mới vào localStorage

    // cập nhật lại giỏ hàng
    updateCartUI(cart, productId, productName, productPrice);
}

function minusToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartTitle = document.querySelector('.cartTitle');
    const totalPriceElement = document.getElementById('total');

    if (cart[productId] && cart[productId] > 1) {
        cart[productId]--;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI(cart, productId);
    } else {
        delete cart[productId];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI(cart, productId);

        // ...
        cartTitle.textContent = '';
        cartTitle.textContent = `Giỏ Hàng: 0`;
        totalPriceElement.textContent = ``;
    }
}

function deleteCart(productId) {
    const cartTitle = document.querySelector('.cartTitle');
    const totalPriceElement = document.getElementById('total');

    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    delete cart[productId];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI(cart, productId);

    // ...
    cartTitle.textContent = '';
    cartTitle.textContent = `Giỏ Hàng: 0`;
    totalPriceElement.textContent = ``;
}

// Hàm cập nhật giao diện giỏ hàng
function updateCartUI(cart, productId, productName, productPrice) {
    const cartItems = document.querySelector('.cartBox');
    const totalPriceElement = document.getElementById('total');
    const cartTitle = document.querySelector('.cartTitle');
    let totalPrice = 0;
    let totalQuantity = 0;

    // Xóa các sản phẩm hiện tại trong giỏ hàng
    cartItems.innerHTML = '';

    // Hiển thị các sản phẩm trong giỏ hàng và tính tổng tiền
    for (const productId in cart) {
        const quantity = cart[productId];
        // const productPrice = getProductPrice(productId);
        // const productName = getProductDisplayName(productId);

        const productsApi = "http://localhost:3000/products";
        fetch(productsApi)
            .then((response) => {
                // JSON.parse:  JSON --> JS type
                return response.json();
            })
            .then((productList) => {
                productList.forEach(dbProduct => {
                    if(dbProduct.id == productId) {
                        const product = productList[productId - 1];
                        totalPrice += dbProduct.price * quantity;
                        totalQuantity += quantity;
                        console.log(totalPrice);
                        console.log(totalQuantity);

                        const newDiv = document.createElement('div');
                        newDiv.classList.add('cartItem')
                        newDiv.innerHTML = `
                            <div class="imgCartContainer">
                                <img src="${product.img}" alt="img">
                            </div>
                            <p class="productCartInfo">${product.name}</p>
                            <p class="productCartPrice">${(product.price * quantity).toLocaleString('vi-VN')} vnd</p>
                            <div class="quantityBox">
                                <div class="quantity">
                                    <button class="minusCartBtn" onclick="minusToCart(${product.id})">-</button>
                                    <p>${quantity}</p>
                                    <button class="addCartBtn" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">+</button>
                                </div>
                                <button class="deleteCartBtn" onclick="deleteCart(${product.id})">x</button>
                            </div>
                        `; 
                        cartItems.appendChild(newDiv);

                        // ...
                        cartTitle.textContent = '';
                        cartTitle.textContent = `Giỏ Hàng: ${totalQuantity}`;

                        // render total price to HTML
                        let vndPrice = totalPrice.toLocaleString('vi-VN');
                        totalPriceElement.textContent = `Tổng: ${vndPrice} vnd`;
                    }
                })
            })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    updateCartUI(cart);
});


// ____________________________________________________________________________________


// *****====== MAIN CONTAINER ======*****


// Layout Navigation:

const layoutNavList_1 = [
    {
        id: 1,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/dong-ho-xa-cu.jpg",
        title: "Đồng hồ thời trang xà cừ",
    },
    {
        id: 2,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/dong-ho-phien-ban-gioi-han.jpg",
        title: "Phiên bản giới hạn",
    },
    {
        id: 3,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/dong-ho-sieu-mong.jpg",
        title: "Mặt số siêu mỏng",
    },
    {
        id: 4,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/dong-ho-skeleton-1.jpg",
        title: "Đồng hồ Skeleton",
    },
    {
        id: 5,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/dong-ho-vang-18k-1.jpg",
        title: "Đồng hồ cao cấp vàng 18k",
    },
    {
        id: 6,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/dong-ho-vat-lieu-quy-hiem.jpg",
        title: "Đá quý – Vật liệu hiếm",
    },
];
const layoutNavList_2 = [
    {
        id: 1,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/day-da-hirsch.jpg",
        title: "Dây da Hirsch",
    },
    {
        id: 2,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/dong-ho-dinh-kim-cuong.jpg",
        title: "Đính kim cương",
    },
    {
        id: 3,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/kinh-hai-trieu-1.jpg",
        title: "Kính Hải Triều",
    },
    {
        id: 4,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/vi-da.jpg",
        title: "Ví da thật",
    },
    {
        id: 5,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/day-da-that.jpg",
        title: "Dây da đồng hồ",
    },
    {
        id: 6,
        img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/trang-suc-dep.jpg",
        title: "Trang sức",
    },
];

function getLayoutNav() {
    const layoutNavRow_1 = document.querySelector(".row-1");
    const layoutNavRow_2 = document.querySelector(".row-2");

    // layout Nav Row 1
    layoutNavList_1.forEach(item => {
        const layoutNavItem = document.createElement('div');
        layoutNavItem.classList.add('layout_nav-item');
        layoutNavItem.innerHTML = `
            <div>
                <div class="img-cover">
                    <img src=${item.img} alt="img">
                </div>
                <div class="nav_text-box">
                    <p>${item.title}</p>
                </div>
            </div>
        `;
        layoutNavRow_1.appendChild(layoutNavItem);
    });

    // layout Nav Row 2
    layoutNavList_2.forEach(item => {
        const layoutNavItem = document.createElement('div');
        layoutNavItem.classList.add('layout_nav-item');
        layoutNavItem.innerHTML = `
            <div>
                <div class="img-cover">
                    <img src=${item.img} alt="img">
                </div>
                <div class="nav_text-box">
                    <p>${item.title}</p>
                </div>
            </div>
        `;
        layoutNavRow_2.appendChild(layoutNavItem);
    });
}
getLayoutNav()


// Product Container:
// Function to dynamically generate product cards:
function generateProductCards() {
    const maleProductContainer = document.querySelector('.male_collection');
    const femaleProductContainer = document.querySelector('.female_collection');
    const accessoriesCollection = document.querySelector('.accessories_collection');

    // get male products API:
    function getMaleProducts() {
        const maleProductsApi = "http://localhost:3000/products";
        fetch(maleProductsApi)
            .then((response) => {
                // JSON.parse:  JSON --> JS type
                return response.json();
            })
            .then((maleProducts) => {
                maleProducts.forEach((product) => {
                    let vndPrice = product.price.toLocaleString('vi-VN');
                    // log test
                    console.log(product.id);

                    if(product.id % 2 == 0) {
                        if(product.gender === "male") {
                            const card = document.createElement('div');
                            card.classList.add('product_card');
                            card.innerHTML = `
                                <span class="imgAndInfo">
                                    <a class="product_link img_container" href="/pages/productDetail/productDetail.html?id=${product.id}">
                                        <img class="main_img" src=${product.img} alt="main-image" />
                                        <img class="alt_img" src=${product.altImg_1} alt="alt-image" />
                                    </a>
                                    <a class="product_link" href="/pages/productDetail/productDetail.html?id=${product.id}"><h4>${product.name}</h4></a>
                                </span>
                                <span class="priceAndCart">
                                    <p>Giá: ${vndPrice} vnd</p>
                                    <button dataKey=${product.id} onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Thêm vào giỏ hàng</button>
                                </span>
                            `;
                            maleProductContainer.appendChild(card);
                        }
                    }
                })
            })
            .catch((err) => {
                console.log("Error! Unable to respond API.");
            })
    }
    getMaleProducts();

    // get female products API:
    function getFemaleProducts() {
        const femaleProductsApi = "http://localhost:3000/products";
        fetch(femaleProductsApi)
            .then((response) => {
                // JSON.parse:  JSON --> JS type
                return response.json();
            })
            .then((femaleProducts) => {
                femaleProducts.forEach((product) => {
                    let vndPrice = product.price.toLocaleString('vi-VN');

                    if(product.id % 2 == 0) {
                        if(product.gender === "female") {
                            const card = document.createElement('div');
                            card.classList.add('product_card');
                            card.innerHTML = `
                            <span class="imgAndInfo">
                                <a class="product_link img_container" href="/pages/productDetail/productDetail.html?id=${product.id}">
                                    <img class="main_img" src=${product.img} alt="main-image" />
                                    <img class="alt_img" src=${product.altImg_1} alt="alt-image" />
                                </a>
                                <a class="product_link" href="/pages/productDetail/productDetail.html?id=${product.id}"><h4>${product.name}</h4></a>
                            </span>
                            <span class="priceAndCart">
                                <p>Giá: ${vndPrice} vnd</p>
                                <button dataKey=${product.id} onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Thêm vào giỏ hàng</button>
                            </span>
                        `;
                            femaleProductContainer.appendChild(card);
                        }
                    }
                })
            })
            .catch((err) => {
                console.log("Error! Unable to respond API.");
            })
    }
    getFemaleProducts();

    // get accessories API:
    function getAccessoryProducts() {
        const accessoryApi = "http://localhost:3000/accessories";
        fetch(accessoryApi)
            .then((response) => {
                // JSON.parse:  JSON --> JS type
                return response.json();
            })
            .then((accessories) => {
                accessories.forEach((product) => {
                    const card = document.createElement('div');
                    card.classList.add('product_card');
                    card.innerHTML = `
                        <a class="product_link" href="/pages/productDetail/productDetail.html"class="img_container">
                            <img class="main_img" src=${product.img} alt="main-image" />
                            <img class="alt_img" src=${product.altImg} alt="alt-image" />
                        </a>
                        <a class="product_link" href="/pages/productDetail/productDetail.html"><h2>${product.name} ${product.id}</h2></a>
                        <p>Price: $${product.price}</p>
                        <button>Add to Cart</button>
                    `;
                    accessoriesCollection.appendChild(card);
                })
            })
            .catch((err) => {
                console.log("Error! Unable to respond API.");
            })
    }
    getAccessoryProducts();
}
// Call the function to generate product cards when the page loads:
document.addEventListener('DOMContentLoaded', generateProductCards);


// ____________________________________________________________________________________


// *****====== PRODUCT DETAIL SECTION ======*****

// get product detail API:
document.addEventListener('DOMContentLoaded', function() {
    productLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            const productUrl = this.getAttribute('href');
            window.location.href = productUrl; // Chuyển hướng đến trang chi tiết sản phẩm
        });
    });
});


// ____________________________________________________________________________________


// *****====== BRAND DETAIL SECTION ======*****

// get BRAND detail API:
document.addEventListener('DOMContentLoaded', function() {
    brandLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            const productUrl = this.getAttribute('href');
            window.location.href = productUrl; // Chuyển hướng đến trang chi tiết sản phẩm
        });
    });
});


