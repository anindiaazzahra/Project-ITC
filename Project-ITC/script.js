const navbarIcon = document.querySelector(".navbar-icon");
navbarIcon.addEventListener("click", function(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar--close");
    const bgNavbarIcon = document.querySelector("nav");
    bgNavbarIcon.classList.toggle("nav--close");
});



const navbarItems = document.querySelectorAll(".navbar li");
for (const item of navbarItems) {
    item.addEventListener("click", function(){
        const navbar = document.querySelector(".navbar");
        navbar.classList.add("navbar--close");
        const bgNavbarIcon = document.querySelector("nav");
        bgNavbarIcon.classList.add("nav--close");
    });
}



function changeColor(){
    const bgNavbarIcon = document.querySelector("nav");
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue < 300) {
        bgNavbarIcon.classList.remove("nav-change-color");
    } else {
        bgNavbarIcon.classList.add("nav-change-color");
    }
}

window.addEventListener('scroll', changeColor)



const signInButton = document.querySelector(".sign-in-button");
signInButton.addEventListener('click', function(){
    let signIn = document.querySelector(".sign-in");
    signIn.classList.add("sign-in-active");
});

const signInClose = document.querySelector(".close-btn");
signInClose.addEventListener('click', function(){
    const signIn = document.querySelector(".sign-in");
    signIn.classList.remove("sign-in-active");
});

const signInSubmit = document.querySelector(".submit");
signInSubmit.addEventListener('click', function(){
    const signIn = document.querySelector(".sign-in");
    signIn.classList.remove("sign-in-active");
});