


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
            link: "",
        }, 
        {
            id: 3,
            title: "Nữ",
            link: "",
        }, 
        {
            id: 4,
            title: "Phụ Kiện",
            link: "",
        }, 
        {
            id: 5,
            title: "Liên Hệ",
            link: "",
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





// ***** FOOTER *****
