/*==========================================================
    PREMIUM CERTIFICATE GALLERY
==========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("certificateModal");

    const modalImage = document.getElementById("certificatePreview");

    const closeButton = document.querySelector(".close-modal");

    const buttons = document.querySelectorAll(".view-certificate");

    if (!modal || !modalImage) return;

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const image = button.dataset.image;

            modalImage.src = image;

            modal.style.display = "flex";

            document.body.style.overflow = "hidden";

            modal.classList.add("show");

        });

    });

    function closeGallery() {

        modal.classList.remove("show");

        setTimeout(() => {

            modal.style.display = "none";

            modalImage.src = "";

        },300);

        document.body.style.overflow = "auto";

    }

    if(closeButton){

        closeButton.addEventListener("click",closeGallery);

    }

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            closeGallery();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeGallery();

        }

    });

});