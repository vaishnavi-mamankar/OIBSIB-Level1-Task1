var swiper = new Swiper(".bg-slider-thumb", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});

var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    
    thumbs: {
      swiper: swiper,
    },
});

window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const navigation = document.querySelector(".navigation");

open.addEventListener("click", () => {
    navigation.classList.add("active");
});

close.addEventListener("click", () => {
    navigation.classList.remove("active");
});