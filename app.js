// const toggleBtn = document.querySelector('.toggle_btn');
// const toggleBtnIcon = document.querySelector('.toggle_btn i');
// const dropDownMenu = document.querySelector('.dropdown_menu');

// toggleBtn.onclick = function () {
//     dropDownMenu.classList.toggle('open');
//     const isOpen = dropDownMenu.classList.contains('open');

//     toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
//     toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
// };

let insidecard = document.querySelectorAll('.div-content');
let sidebarLinks = document.querySelectorAll('.pd---content-inside-card.template-pages---sidebar ul li a');

console.log("insidecard:", insidecard);
console.log("sidebarLinks:", sidebarLinks);

window.onscroll = () => {
    // Check if window width is greater than 767 pixels
    if (window.innerWidth > 767) {
        insidecard.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop + 250;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            console.log("Top:", top);
            console.log("Offset:", offset);
            console.log("height:", height);
            console.log("id:", id);

            if (top >= offset && top < offset + height) {
                sidebarLinks.forEach(links => {
                    links.classList.remove('w--current');
                    document.querySelector('a[href*=' + id + ']').classList.add('w--current');
                });
            };
        });
    } else {
        // Remove 'w--current' class from sidebarLinks when window width is less than 767 pixels
        sidebarLinks.forEach(links => {
            links.classList.remove('w--current');
        });
    }
};

// window.addEventListener("scroll", function() {
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })
