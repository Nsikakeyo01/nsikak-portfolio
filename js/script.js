/*==========================================================
    NSIKAK CHRISTOPHER EYO PORTFOLIO
==========================================================*/

"use strict";

/*==========================================================
    SELECTORS
==========================================================*/

const loader = document.getElementById("loader");

const header = document.getElementById("header");

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-menu a");

const progressBar = document.getElementById("scroll-progress");

const backToTop = document.getElementById("backToTop");

const revealElements = document.querySelectorAll(
".reveal"
);

const counterElements = document.querySelectorAll(
".counter"
);

/*==========================================================
    LOADER
==========================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

    }, 1200);

});

/*==========================================================
    MOBILE MENU
==========================================================*/

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

if(navMenu.classList.contains("active")){

menuToggle.innerHTML='<i class="fas fa-times"></i>';

}else{

menuToggle.innerHTML='<i class="fas fa-bars"></i>';

}

});

}

/*==========================================================
    CLOSE MENU AFTER CLICK
==========================================================*/

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

if(menuToggle){

menuToggle.innerHTML='<i class="fas fa-bars"></i>';

}

});

});

/*==========================================================
    STICKY HEADER
==========================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==========================================================
    SCROLL PROGRESS BAR
==========================================================*/

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progress=

(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

});

/*==========================================================
    BACK TO TOP
==========================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================================
    ACTIVE NAVIGATION
==========================================================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=

section.offsetTop-150;

const sectionHeight=

section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

});

/*==========================================================
    SMOOTH SCROLL
==========================================================*/

navLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=

document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*==========================================================
    REVEAL ON SCROLL
==========================================================*/

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/*==========================================================
    ANIMATED COUNTERS
==========================================================*/

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    const speed = 40;

    let current = 0;

    const increment = Math.ceil(target / 100);

    const updateCounter = () => {

        current += increment;

        if (current >= target) {

            counter.innerText = target + "+";

        } else {

            counter.innerText = current + "+";

            setTimeout(updateCounter, speed);

        }

    };

    updateCounter();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counterElements.forEach(counter => {

    counterObserver.observe(counter);

});


/*==========================================================
    CERTIFICATE LIGHTBOX
==========================================================*/

const modal = document.getElementById("certificateModal");

const modalImage = document.getElementById("certificatePreview");

const closeModal = document.querySelector(".close-modal");

const certificateButtons = document.querySelectorAll(".view-certificate");

certificateButtons.forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImage.src = button.dataset.image;

        document.body.style.overflow = "hidden";

    });

});

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


/*==========================================================
    ESC KEY CLOSE
==========================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (modal) {

            modal.style.display = "none";

        }

        if (navMenu.classList.contains("active")) {

            navMenu.classList.remove("active");

            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

            document.body.style.overflow = "auto";

        }

        document.body.style.overflow = "auto";

    }

});


/*==========================================================
    MOBILE MENU SCROLL LOCK
==========================================================*/

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        if (navMenu.classList.contains("active")) {

            document.body.style.overflow = "hidden";

        } else {

            document.body.style.overflow = "auto";

        }

    });

}


/*==========================================================
    CLOSE MENU WHEN CLICKING OUTSIDE
==========================================================*/

document.addEventListener("click", (event) => {

    if (

        navMenu.classList.contains("active") &&

        !navMenu.contains(event.target) &&

        !menuToggle.contains(event.target)

    ) {

        navMenu.classList.remove("active");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        document.body.style.overflow = "auto";

    }

});


/*==========================================================
    IMAGE LAZY LOADING
==========================================================*/

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.loading = "lazy";

});


/*==========================================================
    CONSOLE MESSAGE
==========================================================*/

console.log("%cWelcome to Nsikak Christopher Eyo's Portfolio",
"color:#D4AF37;font-size:18px;font-weight:bold;");

console.log("%cInterested in working together? Email: mrnsikakeyo@gmail.com",
"color:#ffffff;font-size:14px;");
/*==========================================================
    ANIMATED SKILL BARS
==========================================================*/

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(() => {

                bar.style.transition = "width 1.5s ease";

                bar.style.width = width;

            }, 200);

            skillObserver.unobserve(bar);

        }

    });

}, {
    threshold: 0.5
});

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/*==========================================================
    BUTTON RIPPLE EFFECT
==========================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*==========================================================
    PARALLAX HERO
==========================================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    hero.style.backgroundPositionY = (window.scrollY * 0.3) + "px";

});


/*==========================================================
    CURRENT YEAR
==========================================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Nsikak Christopher Eyo. All Rights Reserved.`;

}


/*==========================================================
    PRELOAD IMPORTANT IMAGES
==========================================================*/

[
    "images/profile/profile.jpg",
    "images/projects/quiz-app.jpg",
    "images/projects/task-manager.jpg"
].forEach(src => {

    const img = new Image();

    img.src = src;

});


/*==========================================================
    PAGE READY
==========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});