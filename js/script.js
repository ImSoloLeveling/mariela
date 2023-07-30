let burgerBtnHeader = document.querySelector(".burger__btn-header");
let menuHeader = document.querySelector(".menu");
let lock = document.querySelector("body");

burgerBtnHeader.addEventListener("click", function(){
	burgerBtnHeader.classList.toggle("active");
	menuHeader.classList.toggle("active");
	lock.classList.toggle("lock");
})

let burgerBtnFooter = document.querySelector(".burger__btn-footer");
let menuFooter = document.querySelector(".footer__list");
let footerBody = document.querySelector(".footer__body");

burgerBtnFooter.addEventListener("click", function(){
    burgerBtnFooter.classList.toggle("active");
    menuFooter.classList.toggle("active");
    footerBody.classList.toggle("active");
    lock.classList.toggle("lock");
})