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

function checkout(event) {
    // // Ngăn chặn hành động mặc định của form
    event.preventDefault();

    const totalPriceRender = document.querySelector("#total");
    const cartBox = document.querySelector(".cartBox");


    // user info declared:
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;

    // Tạo một object mới chứa thông tin khách hàng:
    var customerObj = {
        name: name,
        phone: phone,
        address: address,
        city: city
    }; 

    // // Thêm object customerObj vào mảng customerList (nếu mảng chưa được khởi tạo, cần khởi tạo mảng trước đó)
    // customerList.push(customerObj);

    // // log test:
    // console.log("All Users: ", customerList);


    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi thanh toán


    // check if cart is empty:
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        // log test:
        console.log("Cart before checkout: ", cart);

        // Thêm object customerObj vào mảng customerList (nếu mảng chưa được khởi tạo, cần khởi tạo mảng trước đó)
        customerList.push(customerObj);
        // log test:
        console.log("All Users: ", customerList);

        // reset cart & total price:
        alert(`Total amount to pay: ${totalPrice} $ \nThank you for your purchase!`);
        cart = [];
        totalPrice = 0;
    }

    // remove cart element after checkout:
    while (cartBox.hasChildNodes()) {
        cartBox.removeChild(cartBox.firstChild);
    }

    // reload total price after checkout:
    totalPriceRender.innerHTML = `${totalPrice}`;
}