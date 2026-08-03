/* =====================================
   NSIKAK CHRISTOPHER EYO PORTFOLIO
   PREMIUM JAVASCRIPT
===================================== */



/* ================================
      LOADING SCREEN
================================ */


window.addEventListener("load", () => {


    const loader = document.querySelector(".loader");


    if(loader){


        setTimeout(()=>{


            loader.style.opacity="0";


            loader.style.visibility="hidden";


        },1500);


    }


});









/* ================================
      MOBILE MENU
================================ */


const menuToggle =
document.querySelector(".menu-toggle");


const navLinks =
document.querySelector(".nav-links");



if(menuToggle){


    menuToggle.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


        menuToggle.classList.toggle("open");


    });


}







/* CLOSE MOBILE MENU AFTER CLICK */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});









/* ================================
       TYPING EFFECT
================================ */



const typingText =
document.querySelector(".typing");



if(typingText){



    const words = [


        "Software Developer",


        "Electrical Engineer",


        "Technical Support Professional",


        "Administrative Support Specialist",


        "Customer Service Professional"


    ];



    let wordIndex=0;


    let charIndex=0;


    let deleting=false;




    function type(){



        const currentWord =
        words[wordIndex];



        if(!deleting){



            typingText.textContent =
            currentWord.substring(
                0,
                charIndex++
            );



            if(charIndex >
            currentWord.length){


                deleting=true;


                setTimeout(type,1200);


                return;


            }



        }else{



            typingText.textContent =
            currentWord.substring(
                0,
                charIndex--
            );



            if(charIndex < 0){


                deleting=false;


                wordIndex++;


                if(wordIndex >= words.length){


                    wordIndex=0;


                }


            }


        }



        setTimeout(type,100);



    }




    type();


}









/* ================================
      SCROLL REVEAL
================================ */



const hiddenElements =
document.querySelectorAll(
".about-card, .stat-card, .skill-card, .project-card, .timeline-item, .education-card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},
{

    threshold:0.15

});




hiddenElements.forEach(el=>{


    el.classList.add("hidden");


    observer.observe(el);


});









/* ================================
      ACTIVE NAVIGATION
================================ */



const sections =
document.querySelectorAll("section");



const navItems =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{



let current="";



sections.forEach(section=>{


    const sectionTop =
    section.offsetTop - 150;



    if(scrollY >= sectionTop){


        current =
        section.getAttribute("id");


    }


});



navItems.forEach(link=>{


    link.classList.remove("active");



    if(link.getAttribute("href")
    === "#" + current){


        link.classList.add("active");


    }



});



});









/* ================================
      CURSOR GOLD EFFECT
================================ */


const cursorGlow =
document.createElement("div");



cursorGlow.className =
"cursor-glow";



document.body.appendChild(cursorGlow);



document.addEventListener(
"mousemove",
(e)=>{


cursorGlow.style.left =
e.clientX + "px";



cursorGlow.style.top =
e.clientY + "px";



});








/* ================================
      BACK TO TOP BUTTON
================================ */



const topButton =
document.querySelector(".back-top");



if(topButton){



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.classList.add("visible");


    }else{


        topButton.classList.remove("visible");


    }



});



topButton.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


});


}