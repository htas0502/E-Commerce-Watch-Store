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
const innerCartBox = document.querySelector('.innerCartBox')

const itemCartQuantity = document.querySelectorAll('.itemCartQUantity');


let emptyCart = false;


// ____________________________________________________________________________________


// *****====== HEADER ======*****

function renderHeader() {
    const navContainer = document.querySelector('.nav_container');

    const navTitle = [ 
        {
            id: 1,
            title: "THƯƠNG HIỆU",
            link: "/pages/brand/brand.html",
        }, 
        {
            id: 2,
            title: "NAM",
            link: "/pages/male/male.html",
        }, 
        {
            id: 3,
            title: "NỮ",
            link: "/pages/female/female.html",
        }, 
        {
            id: 4,
            title: "PHỤ KIỆN",
            link: "/pages/accessory/accessory.html",
        }, 
        {
            id: 5,
            title: "LIÊN HỆ",
            link: "/pages/info/info.html",
        },
    ];
    const dropDownInfo = [
        {
            id: 1,
            title: "THƯƠNG HIỆU",
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
            title: "NAM",
            info: `
                <div class="content-container">
                    <a href='/pages/male/male.html'>CÁC SẢN PHẨM DÀNH CHO NAM</a>
                </div>
            `
        },
        {
            id: 3,
            title: "NỮ",
            info: `
            <div class="content-container">
                <a href='/pages/female/female.html'>CÁC SẢN PHẨM DÀNH CHO NỮ</a>
            </div>
        `
        },
        {
            id: 4,
            title: "PHỤ KIỆN",
            info: `
            <div class="content-container">
                <a href='/pages/accessory/accessory.html'>PHỤ KIỆN CHO NAM & NỮ</a>
            </div>
        `
        },
        {
            id: 5,
            title: "LIÊN HỆ",
            info: `
            <div class="content-container">
                <a href='/pages/info/info.html'>THÔNG TIN LIÊN HỆ</a>
            </div>
        `
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
                        // log
                        // console.log(totalPrice);
                        // console.log(totalQuantity);

                        // ...
                        if(totalQuantity == 0) {
                            emptyCart = true;
                        }
                        console.log("Empty Cart: ", emptyCart);

                        const newDiv = document.createElement('div');
                        newDiv.classList.add('cartItem')
                        newDiv.innerHTML = `
                            <div class="imgCartContainer">
                                <img src="${dbProduct.img}" alt="img">
                            </div>
                            <p dataId=${dbProduct.id} class="productCartInfo">${dbProduct.name}</p>
                            <p class="productCartPrice">${(dbProduct.price * quantity).toLocaleString('vi-VN')} vnd</p>
                            <div class="quantityBox">
                                <div class="quantity">
                                    <button class="minusCartBtn" onclick="minusToCart(${dbProduct.id})">-</button>
                                    <p>${quantity}</p>
                                    <button class="addCartBtn" onclick="addToCart(${dbProduct.id}, '${dbProduct.name}', ${dbProduct.price})">+</button>
                                </div>
                                <button class="deleteCartBtn" onclick="deleteCart(${dbProduct.id})">x</button>
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

// Hàm reload lại trang ( CHỈ DÙNG TRONG TRANG CHECKOUT! )
function pageReload() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Lấy giỏ hàng từ localStorage
    console.log(cart);

    if(cart == {}) {
        console.log("empty cart!");
    }

    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    updateCartUI(cart);
});



// ____________________________________________________________________________________


// *****====== CHECKOUT SECTION ======*****


// Render Cart Items:
document.addEventListener('DOMContentLoaded', function() {
    // Khai báo biến...
    const innerCartBox = document.querySelector('.innerCartBox')
    const cartItem = document.querySelectorAll('.cartItem')
    const imgCartContainer = document.querySelector('.imgCartContainer')
    const infoCartContainer = document.querySelector('.infoCartContainer')
    const quantityContainer = document.querySelector('.quantityContainer')
    const quantity = document.querySelector('.quantity')
    const itemQuantity = document.querySelector('.item-quantity')
    const minusCartBtn = document.querySelector('.minusCartBtn')
    const addCartBtn = document.querySelector('.addCartBtn')
    const itemPrice = document.querySelector('.item-price')
    const cartItemPrice = document.querySelector('.cartItemPrice')
    const deleteCartItem = document.querySelector('.deleteCartItem')
    const innerCartTotalPrice = document.querySelector('.innerCartTotalPrice')
    const coupon = document.querySelector('.coupon')
    // const preTotalPrice = document.querySelector('.preTotalPrice')
    const prePrice = document.querySelector('.pre-price')
    // const totalPrice = document.querySelector('.totalPrice')
    const price = document.querySelector('.price')

    // declare alert:
    const emptyCartAlertHtml = document.querySelector('.emptyCartAlert');
    const alertInfo = document.querySelector('.emptyCartAlert p');
    const alertLink = document.querySelector('.emptyCartAlert a');


    // 
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    console.log(cart);

    if(Object.keys(cart).length === 0) {
        console.log("object empty");

        alertInfo.innerHTML = "*KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG";
        alertLink.innerHTML = "VỀ TRANG CHỦ";
    } else {
        console.log("object NOT empty");
    }




    // ...
    const cartItemIds = Object.keys(cart);
    const cartItemQuantities = Object.values(cart);

    // log test
    // console.log(cartItemIds);
    // console.log(cartItemQuantities);


    // ...
    let totalPrice = 0;
    let totalQuantity = 0


    const productsApi = "http://localhost:3000/products";
        fetch(productsApi)
            .then((response) => {
                // JSON.parse:  JSON --> JS type
                return response.json();
            })
            .then((productList) => {
                productList.forEach((product, product_Key) => {
                    cartItemIds.forEach((itemId, itemId_Key) => {
                        cartItemQuantities.forEach((itemQuantity, itemQuantity_Key) => {
                            if(product.id == itemId) {
                                if(itemId_Key == itemQuantity_Key) {
                                    // log test
                                    // console.log("Item id: ", itemId);
                                    // console.log("Item quantity: ", itemQuantity);

                                    let productPrice = product.price * itemQuantity;
                                    totalPrice += productPrice;
                                    
                                    console.log("totalPrice: ", totalPrice);

                                    // ...
                                    const newDiv = document.createElement('div');
                                    newDiv.classList.add('checkoutCartItem');
                                    newDiv.innerHTML = `
                                    <!-- img -->
                                    <div class="imgCartContainer">
                                        <img src=${product.img} alt="cart_img">
                                    </div>
                
                                    <!-- cart item info -->
                                    <div class="infoCartContainer">
                                        <h3>${product.name}</h3>
                                        <!-- quantity container -->
                                        <div class="quantityContainer">
                                            <!-- change quantity -->
                                            <div class="quantity">
                                                <span class="item-quantity">
                                                    <button class="minusCartBtn" onclick="minusToCart(${product.id}), pageReload()">-</button>
                                                    <p class="itemCartQuantity" dataId=${product.id}>${itemQuantity}</p>
                                                    <button class="addCartBtn" onclick="addToCart(${product.id}, '${product.name}', ${product.price}), pageReload()">+</button>
                                                </span>
                                                <span class="item-price">
                                                    <p>${(productPrice).toLocaleString('vi-VN')} vnd</p>
                                                </span>
                                            </div>
                                        </div>
                
                                        <!-- delete btn -->
                                        <button class="deleteCartItem" onclick="deleteCart(${product.id}), pageReload()"><i></i> Xoá</button>
                                    </div>
                                    `

                                    // render HTML
                                    innerCartBox.appendChild(newDiv);

                                    prePrice.textContent = `${totalPrice.toLocaleString('vi-VN')} vnd`;
                                    price.textContent = `${totalPrice.toLocaleString('vi-VN')} vnd`;
                                }
                            }

                        })
                    })
                })
            });
});
// === Pay Checkout ===
function checkout(event) {
    let customerList = [];
                
    // // Ngăn chặn hành động mặc định của form
    event.preventDefault();
                
    const totalPriceRender = document.querySelector("#total");
    const cartBox = document.querySelector(".cartBox");
                
                
    // user info declared:
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var payment = document.getElementsByName('payment');

                
    // Tạo một object mới chứa thông tin khách hàng:
    var customerObj = {
        name: name,
        phone: phone,
        email: email,
        address: address,
        city: city
    }; 
    
    

    if(name.trim() === '' || phone.trim() === '' || email.trim() === '' || address.trim() === '' || city.trim() === "") {
        // log test
        console.log("invalid information!");
        // alert("Bạn chưa điền đầy đủ thông tin!");
        alertBox.innerHTML = "*Bạn chưa điền đầy đủ thông tin!";

    } else {

        // Duyệt qua các input radio để kiểm tra xem có input nào được chọn không
        for (var i = 0; i < payment.length; i++) {
            if (payment[i].checked) {
                // log test
                console.log("form validated!");


                const cart = JSON.parse(localStorage.getItem('cart')) || {};
                localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi thanh toán

                // log test:
                console.log("Cart before checkout: ", cart);

                // Thêm object customerObj vào mảng customerList (nếu mảng chưa được khởi tạo, cần khởi tạo mảng trước đó)
                customerList.push(customerObj);
                // log test:
                // console.log("All Users: ", customerList);

                alertBox.innerHTML = "";
                window.location.href = "/pages/confirmCheckout/confirmCheckout.html";
            } else {
                console.log("invalid payment!");
                alertBox.innerHTML = "*Bạn chưa chọn phương thức thanh toán!";
                // alert("Bạn chưa chọn phương thức thanh toán!");
            }
        }
    }
    
                
    // const cart = JSON.parse(localStorage.getItem('cart')) || {};
    // localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi thanh toán
                
    // // log test:
    // console.log("Cart before checkout: ", cart);
                
    // // Thêm object customerObj vào mảng customerList (nếu mảng chưa được khởi tạo, cần khởi tạo mảng trước đó)
    // customerList.push(customerObj);
    // // log test:
    // console.log("All Users: ", customerList);
                
    // // reset cart & total price:
    // alert(`Total amount to pay: ${totalPrice} $ \nThank you for your purchase!`);
    // cart = [];
    // totalPrice = 0;
};
