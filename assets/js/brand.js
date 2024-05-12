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
const webTitle = document.querySelector('title');


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
                        console.log(totalPrice);
                        console.log(totalQuantity);

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

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    updateCartUI(cart);
});


// ____________________________________________________________________________________


// *****====== PRODUCT BRANDS DETAILS ======*****

// ...
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productBrand = urlParams.get('brand');

    // Brand Description List
    const brandDescriptionList = [
        {
            id: 1,
            brand: "Casio",
            title: "Đồng hồ Casio đẹp, chính hãng, BH 5 năm, 1 đổi 1, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-Casio.jpg",
            description: "Casio là thương hiệu đồng hồ lâu đời trong ngành công nghiệp đồng hồ tại Nhật Bản. Những mẫu đồng hồ Casio nam nữ được yêu thích bởi thiết kế đơn giản, dễ dàng để xem giờ, được trang bị đầy đủ các công nghệ mới nhất và có giá bán cực kỳ rẻ. Ngoài ra, đồng hồ Casio chính hãng còn nổi bật với chức năng đa dạng như bluetooth, dạ quang, giờ thế giới, báo thức, lịch ngày, thứ,…",
        },
        {
            id: 2,
            brand: "Citizen",
            title: "Đồng hồ Citizen nam, nữ Nhật Bản chính hãng 100%, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2024/04/dong-ho-citizen.jpg",
            description: "Citizen là thương hiệu Nhật Bản được thành lập vào năm 1918. Ra đời dựa trên sứ mệnh mang đến những chiếc đồng hồ đại chúng, giá bình dân – chất lượng tốt để ai cũng có thể sử dụng được. Với công nghệ phát minh độc quyền (Eco-Drive) sử dụng ánh sáng chuyển hoá thành năng lượng đã giúp hãng thăng tiến trên bản đồ đồng hồ thế giới, góp phần bảo vệ môi trường xanh trên toàn cầu.",
        },
        {
            id: 3,
            brand: "Doxa",
            title: "DOXA, đồng hồ kim cương và đá quý Thụy Sỹ | Since 1889",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-Doxa.jpg",
            description: "Doxa là thương hiệu đồng hồ Thụy Sỹ lâu đời, có bề dày lịch sử hơn 130 năm. Với những dấn ấn thăng trầm, nhưng Doxa có quyền tự hào nói với thế giới rằng: “100% chi tiết đồng hồ Doxa được sản xuất tại Thụy Sỹ – SWISS MADE đúng nghĩa, hiện thân của chất lượng kỹ thuật và chất lượng thẩm mỹ mà không có bất kỳ sự trộn lẫn nào…",
        },
        {
            id: 4,
            brand: "DW",
            title: "Đồng hồ Daniel Wellington (DW) nam, nữ chính hãng 100%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2024/04/dong-ho-dw-daniel-wellington.jpg",
            description: "Daniel Wellington – Thương hiệu đồng hồ Thuỵ Điển được thành lập năm 2011. Thế mạnh về phong cách tối giản, thanh lịch, đồng hồ DW nam, nữ rất dễ phối với mọi loại trang phục. Với sức sáng tạo và sự chuyển động không ngừng của ngành thời trang, hãng bắt đầu cho ra mắt nhiều hơn ở dòng đồng hồ DW nam, nữ, cặp đôi kiểu dây thép, kim loại, đính đá, khảm xà cừ, mặt vuông, máy cơ automatic thay vì kiểu dáng mặt tròn đơn giản như trước đó.",
        },
        {
            id: 5,
            brand: "Fossil",
            title: "Đồng hồ Fossil nam, nữ đẹp chính hãng, BH 5 năm, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-fossil.jpg",
            description: "Đồng hồ Fossil thừa hưởng những tinh hoa từ kinh đô thời trang Hoa Kỳ – Mỹ. Được thiết kế với phong cách chủ đạo là thời trang, gọn, nhẹ với đa dạng kiểu dáng và chất liệu từ dây da, kim loại, mặt vuông, mặt tròn, máy cơ automatic, pin… Đặc biệt, giá đồng hồ Fossil nam, nữ, đôi cặp chính hãng tại Việt Nam chỉ từ 3 triệu.",
        },
        {
            id: 6,
            brand: "G-Shock",
            title: "Đồng hồ Casio G-Shock chính hãng Nhật Bản, giá rẻ, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2024/04/dong-ho-g-shock.jpg",
            description: "Đồng hồ G-Shock chính hãng nam, nữ là sự kết hợp giữa thể thao và thời trang. Với G-Shock, bạn còn trải nghiệm hàng loạt tính năng như chống sốc (Protection), chống nước (Resist), chống bùn lầy, đo độ cao, nhiệt độ,… nhờ những công nghệ tiên tiến. Tại Việt Nam, Casio G-Shock thu hút được đông đảo giới trẻ nam, nữ, cặp đôi, trẻ em cho bé trai sử dụng…",
        },
        {
            id: 7,
            brand: "Longines",
            title: "Đồng hồ Longines nam, nữ Thụy Sỹ chính hãng 100%, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-Longines.jpg",
            description: "Longines là hãng đồng hồ Thuỵ Sỹ thành lập vào năm 1889, chính thức sáp nhập vào tập đoàn Swatch Group vào năm 1983. Toàn bộ đồng hồ Longines đều sử dụng bộ máy ETA cao cấp, đạt chuẩn Swiss Made danh giá trong ngành. Với phong cách chủ đạo là tối giản, tinh tế, cùng thiết kế mặt số siêu mỏng, đây chắc chắn là hãng đồng hồ cơ Thuỵ Sỹ sang trọng, đáng sở hữu nhất!",
        },
        {
            id: 8,
            brand: "Orient",
            title: "Đồng hồ Orient nam, nữ, automatic chính hãng 100%, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-orient.jpg",
            description: "Orient – Thương hiệu đồng hồ Nhật Bản thuộc Seiko Epson thành lập vào năm 1950. Orient sử dụng bộ máy inhouse mang lại chất lượng hoàn thiện nhất và được vinh danh là hãng có tỷ lệ đồng hồ cơ trên tổng số đồng hồ sản xuất ra cao nhất tại Nhật Bản. Lạc vào thế giới của Orient, bạn sẽ đắm chìm trong nhịp đập của từng cỗ máy cơ hoàn hảo!",
        },
        {
            id: 9,
            brand: "Tissot",
            title: "Đồng hồ Tissot 1853 nam, nữ chính hãng 100% Thụy Sỹ, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-Tissot.jpg",
            description: "Tissot – “Nét tinh hoa Thuỵ Sỹ hoà quyện cùng giá trị thời đại.” Thành lập năm 1853, Tissot ghi dấu mạnh mẽ trong lòng giới mộ điệu với những chiếc đồng hồ Thụy Sỹ hội tụ 3 yếu tố: Chất lượng cao cấp, thiết kế tinh tế và giá cả phải chăng. Luôn tiên phong trong đổi mới, Tissot ứng dụng công nghệ, vật liệu tiên tiến và sáng tạo trong thiết kế, mang đến những trải nghiệm độc đáo cho người dùng. Mới đây, vào năm 1998, Tissot đã chính thức trở thành thành viên của tập đoàn Swatch Group.",
        },
        {
            id: 10,
            brand: "Seiko",
            title: "Đồng hồ Seiko chính hãng, cao cấp, BH 5 năm, 1 đổi 1, góp 0%",
            img: "https://image.donghohaitrieu.com/wp-content/uploads/2024/03/dong-ho-seiko-chinh-hang-mo-ban-phien-ban-ky-niem.jpg",
            description: "Thành lập năm 1881, Seiko đã trở thành biểu tượng của sự chính xác thông qua cỗ máy bền bỉ do Seiko tự lắp ráp. 5 “từ khóa” mà giới mộ điệu dùng để mô tả về những mẫu đồng hồ Seiko chính hãng: thương hiệu dẫn đầu, cỗ máy đáng tin cậy, độ chống nước tuyệt vời, thiết kế sang trọng, vật liệu thượng hạng. Bạn dễ dàng tìm thấy điều này thông qua các mẫu đồng hồ Seiko nam, nữ chính hãng với nhiều tùy chọn dây da, kim loại, máy Quartz hoặc automatic. Trang website: seikowatches.com đã ghi nhận Hải Triều là nhà bán lẻ chính thức của Seiko tại Việt Nam.",
        },
    ];


    function getBrandDescription(productBrand) {
        const brandDescriptionHtml = document.querySelector('#brand-description');

        brandDescriptionList.forEach(desc => {
            if(desc.brand === productBrand) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('inner-box');
                newDiv.innerHTML = `
                <h3 class="collection-title">
                    ${desc.title}
                </h3>
                <div class="brand-banner">
                    <img src=${desc.img} alt="big-banner">
                </div>
                <p>${desc.description}</p>
                `;

                // render HTML
                brandDescriptionHtml.appendChild(newDiv);
                webTitle.innerText = `Thương Hiệu - ${desc.brand}`
            };
        });
    };
    getBrandDescription(productBrand);

    function getBrandProducts(productBrand) {
        const maleProductContainer = document.querySelector('.male_collection');
        const femaleProductContainer = document.querySelector('.female_collection');


        const productsApi = "http://localhost:3000/products";
        fetch(productsApi)
            .then((response) => {
                return response.json();
            })
            .then((products) => {
                products.forEach(product => {
                    let vndPrice = product.price.toLocaleString('vi-VN');

                    if(product.brand === productBrand  && product.type === "Watch") {

                        // GET MALE PRODUCTS
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


                        // GET FEMALE PRODUCTS
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
                });
            })
    };
    getBrandProducts(productBrand);
});



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
