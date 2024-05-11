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
            info: `Tùm lum các thương hiệu...`
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

            // dropDown.classList.add("nav_color-change");
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


    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    // log test
    // console.log("Product id: ", typeof(Object.keys(cart)));
    // console.log("Product quantity: ", typeof(Object.values(cart)));

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
                                    newDiv.classList.add('cartItem');
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
                                                    <button class="minusCartBtn" onclick="">-</button>
                                                    <p>${itemQuantity}</p>
                                                    <button class="addCartBtn" onclick="">+</button>
                                                </span>
                                                <span class="item-price">
                                                    <p>${(productPrice).toLocaleString('vi-VN')} vnd</p>
                                                </span>
                                            </div>
                                        </div>
                
                                        <!-- delete btn -->
                                        <button class="deleteCartItem"><i></i> Xoá</button>
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
    // event.preventDefault();
                
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
        alert("Bạn chưa điền đầy đủ thông tin!");

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
                console.log("All Users: ", customerList);

                // // reset cart & total price:
                // cart = [];
                // totalPrice = 0;
            } else {
                console.log("invalid payment!");
                alert("Bạn chưa chọn phương thức thanh toán!");
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
