// Scrolling in page
//Change NaveBar Style on Scroll
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// Show scroll Up Btn
window.addEventListener("scroll", () => {
    document.querySelector(".btn-up").classList.toggle("show-btn",window.scrollY > 200);
})
document.querySelector(".btn-up").onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


//show hide FAQ answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        //change the icon
        const icon = faq.querySelector(".faq-icon i");
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})


//show / Hide nav menu
const menu = document.querySelector(".nav-menu")
const openMenu = document.querySelector("#open-menu-btn")
const closeMenu = document.querySelector("#close-menu-btn")
//Open Menu
openMenu.addEventListener("click",()=> {
    menu.style.display="flex";
    closeMenu.style.display="inline-block";
    openMenu.style.display="none";
})
//Close Menu
const closeNavBar = () => {
    menu.style.display="none";
    closeMenu.style.display="none";
    openMenu.style.display="inline-block";
}

closeMenu.addEventListener("click", closeNavBar)


//Add Active Link
$(document).ready(function() {
    var loc = window.location.pathname;
    $('.nav-menu ul li').find('a').each(function() {
        $(this).toggleClass('active', $(this).attr('href') == loc);
    });
})

//Swiper to tchange Comments
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
});