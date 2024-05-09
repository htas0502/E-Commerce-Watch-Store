
// ...

// Khai báo các BIẾN:  
// const navContainer = document.querySelector('.nav_container');


// ***** HEADER *****

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
    })
};
renderHeader();

// ***** INFO *****

const locationList = [
    {
        id: 1,
        title: "TP.HCM",
    },
    {
        id: 2,
        title: "Hà Nội",
    },
    {
        id: 3,
        title: "Đà Nẵng",
    },
];



