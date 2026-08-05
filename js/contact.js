"use strict";

/*==========================================================
    EMAILJS CONTACT FORM
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY"
    });

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = form.querySelector("button");

        button.disabled = true;

        button.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            subject: document.getElementById("subject").value,

            message: document.getElementById("message").value

        })

        .then(() => {

            alert("Message sent successfully!");

            form.reset();

        })

        .catch(() => {

            alert("Sorry, something went wrong. Please try again.");

        })

        .finally(() => {

            button.disabled = false;

            button.innerHTML =
                '<i class="fas fa-paper-plane"></i> Send Message';

        });

    });

});