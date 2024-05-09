
// ...

// Khai báo các BIẾN:  
const navContainer = document.querySelector('.nav_container');


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
    
    navTitle.map(nav => {
        const navItem = document.createElement('div');
        navItem.classList.add('nav_item');
        navItem.innerHTML = `
            <a href=${nav.link}>${nav.title}</a>
        `;
        navContainer.appendChild(navItem);

        const dropDown = document.querySelector(".dropdown")
        navItem.addEventListener("mouseover", e => {
            dropDown.classList.remove("hide");
            dropDown.classList.add("show");
            dropDown.classList.add("nav_color-change");
            // 
            
        })
        navItem.addEventListener("mouseleave", e => {
            dropDown.classList.remove("show");
            dropDown.classList.remove("nav_color-change");
            dropDown.classList.add("hide");
        })
    })
};
renderHeader();


// ____________________________________________________________________________________


// *****====== PRODUCT DETAILS ======*****

// Product Container:
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    function getProductDetails(productId) {
        const productsApi = "http://localhost:3000/products";
        fetch(productsApi)
            .then((response) => {
                return response.json();
            })
            .then((products) => {
                // get product info:
                products.forEach(product => {
                    let vndPrice = product.price.toLocaleString('vi-VN');

                    if(product.id === productId) {
                        const productDetailsElement = document.getElementById('productDetail');
                        productDetailsElement.innerHTML = `
                        <div class="detailContainer">
                            <div class="detailImg">
                                <a href="#"><img src=${product.img} alt="product_img"></a>
                                <div class="imgSlider">
                                    <img src=${product.img} alt="gallery_img_1" >
                                    <img src=${product.altImg_1} alt="gallery_img_2" >
                                    <img src=${product.altImg_2} alt="gallery_img_3" >
                                    <img src=${product.altImg_3} alt="gallery_img_4" >
                                </div>
                            </div>
                        <div class="detailInfo">
                            <img src=${product.brandImg} alt="brand_img">
                            <h1>${product.name}</h1>
                            <h1 class="price">Giá: ${vndPrice} vnd</h1>
                            <p>${product.description}</p>
                            <div class="cartBtn">
                                <button class="addCart">THÊM VÀO GIỎ HÀNG</button>
                                <button class="buyNow">MUA NGAY</button>
                            </div>
                        </div>
                    </div>
                        `;
                    }
                })
            })
    }
    getProductDetails(productId);
});


