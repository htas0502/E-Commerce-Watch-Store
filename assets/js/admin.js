const mainContainer = document.querySelector('.main-container');
const userContainer = document.querySelector('.user-container')


// 
document.addEventListener('DOMContentLoaded', function() {

    // lấy danh sách khách hàng:
    const customerList = JSON.parse(localStorage.getItem('customerList')) || {};
    
    Array(customerList).forEach(user => {
        console.log(user);
    })



    if (customerList && Object.keys(customerList).length > 0) {
        // Hiển thị danh sách người dùng trên HTML
        customerList.forEach(user => {
            const userItem = document.createElement("div");
            userItem.classList.add("user-item");
            userItem.innerHTML = `
                <h3>Khách Hàng: ${user.name}</h3>
                <h3>Số Điện Thoại: ${user.phone}</h3>
                <h3>Email: ${user.email}</h3>
                <p>Thành Phố: ${user.city}</p>
                <p>Địa Chỉ: ${user.address}</p>
                <br>
            `;
            userContainer.appendChild(userItem);
        });
    } else {
        // Nếu không có dữ liệu, hiển thị thông báo
        userContainer.innerHTML = "<p>Không có người dùng nào.</p>";
    }
});