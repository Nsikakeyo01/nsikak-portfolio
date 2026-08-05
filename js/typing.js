/*==========================================================
    PROFESSIONAL TYPING EFFECT
==========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    const words = [

        "Software Developer",

        "Electrical Engineer",

        "Technical Support Specialist",

        "Customer Support Professional",

        "Administrative Support Specialist"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    const typingSpeed = 90;

    const deletingSpeed = 45;

    const pauseTime = 1800;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(type, pauseTime);

                return;

            }

        } else {

            typingElement.textContent = currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, deleting ? deletingSpeed : typingSpeed);

    }

    type();

});