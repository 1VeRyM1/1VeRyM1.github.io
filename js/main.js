"use strick"

const person = document.querySelector(".promo__person"),
      emotions = document.querySelector(".promo__emotions");

person.onload = function() {
    person.style.animation = "visibled 0.7s linear";
}
emotions.onload = function() {
    emotions.style.animation = "more 1s linear 1s both";
} 

window.addEventListener("DOMContentLoaded", () =>{ 
    const body = document.querySelector("body"),
          header = document.querySelector(".header"),
          closeBurger = header.querySelector(".header__close"),
          rightBurger = header.querySelector(".header__right");
    
    function burgerControl() {
        header.classList.toggle("active-header");
        closeBurger.classList.toggle("active-close");
        rightBurger.classList.toggle("active-right");
        body.classList.toggle("body-active");
    }
    closeBurger.addEventListener("click", burgerControl);
    header.addEventListener("click", (e)=> {
        if (!(e.target == closeBurger)) {
            burgerControl();
        }
    })
})

