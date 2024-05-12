const mainContainer = document.querySelector('.main-container');
const userContainer = document.querySelector('.user-container')


// render Customers:    
document.addEventListener('DOMContentLoaded', function() {

    // lấy danh sách khách hàng:
    const customerList = JSON.parse(localStorage.getItem('customerList')) || {};
    const soldProduct = JSON.parse(localStorage.getItem('sold')) || {};
    
    // Array(customerList).forEach(user => {
    //     console.log(user);
    // })

    if (customerList && Object.keys(customerList).length > 0) {
        // Hiển thị danh sách người dùng trên HTML
        customerList.forEach(user => {
            const userItem = document.createElement("div");
            userItem.classList.add("user-item");
            userItem.innerHTML = `
                <span >
                    <div>
                        <h3>Khách Hàng:</h3><p>${user.name}</p>
                    </div>
                    <div>
                        <h3>Số Điện Thoại:</h3><p>${user.phone}</p>
                    </div>
                    <div>
                        <h3>Email:</h3><p>${user.email}</p>
                    </div>
                    <div>
                        <h3>Thành Phố:</h3><p>${user.city}</p>
                    </div>
                    <div>
                        <h3>Địa Chỉ:</h3><p>${user.address}</p>
                    </div>
                </span>
            `;
            userContainer.appendChild(userItem);
        });
    } else {
        // Nếu không có dữ liệu, hiển thị thông báo
        userContainer.innerHTML = "<p>Không có người dùng nào.</p>";
    }
});