/*ROSARIO MARCO GRIFASI 1000045535*/
/*JS Pagina principale DJI STORE*/

function OnHover() {
    const sfondo = document.querySelector("#top-bar-sotto");
    console.log("hover");
    sfondo.classList.add("hovered");
    sfondo.classList.remove("unhovered");
}

function OnUnhover() {
    const sfondo = document.querySelector("#top-bar-sotto");
    console.log("onunhover");
    sfondo.classList.add("unhovered");
    sfondo.classList.remove("hovered");
}

const flex_item= document.querySelectorAll(".dropdown");
for (let item of flex_item) {
    item.addEventListener("mouseover", OnHover);
    item.addEventListener("mouseout", OnUnhover); 
}


function visualizeSearchBar(){
    const menu = document.querySelector("#top-bar-sotto");
    const searchBar = document.querySelector("#search-bar");

    menu.classList.add("hidden");
    searchBar.classList.remove("hidden");
}

function visualizeMenu(){
    const menu = document.querySelector("#top-bar-sotto");
    const searchBar = document.querySelector("#search-bar");

    menu.classList.remove("hidden");
    searchBar.classList.add("hidden");
}

const searchIcon = document.querySelector("#search-icon");
const closeIcon = document.querySelector("#close-icon");
searchIcon.addEventListener("click", visualizeSearchBar);
closeIcon.addEventListener("click", visualizeMenu);







function visualizeCart(event) {
    let tooltip = document.querySelector("#cart-tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "cart-tooltip";
        tooltip.textContent = "Il tuo carrello è vuoto";

        event.currentTarget.appendChild(tooltip);
    }

    const cartImage = event.currentTarget.querySelector("img");
    if (cartImage) {
        cartImage.src = "Immagini/icons/shopping-cart.png";
    }
}

function hideCartTooltip(event) {
    const tooltip = document.querySelector("#cart-tooltip");
    if (tooltip) {
        tooltip.remove();
    }

    const cartImage = event.currentTarget.querySelector("img");
    if (cartImage) {
        cartImage.src = "Immagini/icons/online-shopping.png";
    }
}

const cart = document.querySelector("#cart");
cart.addEventListener("mouseover", visualizeCart);
cart.addEventListener("mouseout", hideCartTooltip);








function visualizeUser(event) {
    let tooltip = document.querySelector("#user-tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "user-tooltip";
        tooltip.textContent = "Accedi | Registrati";

        event.currentTarget.appendChild(tooltip);
    }

    const userImage = event.currentTarget.querySelector("img");
    if (userImage) {
        userImage.src = "Immagini/icons/user-shape.png";
    }
}

function hideUserTooltip(event) {
    const tooltip = document.querySelector("#user-tooltip");
    if (tooltip) {
        tooltip.remove();
    }

    const userImage = event.currentTarget.querySelector("img");
    if (userImage) {
        userImage.src = "Immagini/icons/user.png";
    }
}

const user = document.querySelector("#user");
user.addEventListener("mouseover", visualizeUser);
user.addEventListener("mouseleave", hideUserTooltip);












function scrollSlider_left(){
    const slider = document.querySelector("#slider");
    slider.scrollLeft -= 300;
}

function scrollSlider_right(){
    const slider = document.querySelector("#slider");
    slider.scrollLeft += 300;
}

const leftArrow = document.querySelector("#arrow-left");
const rightArrow = document.querySelector("#arrow-right");
leftArrow.addEventListener("click", scrollSlider_left);
rightArrow.addEventListener("click", scrollSlider_right);








function scrollSlider_cards_left(){
    const card_container = document.querySelector("#cards_container");
    card_container.scrollTo({
        left: card_container.scrollLeft - 400,
        behavior: "smooth"
    });
}

function scrollSlider_cards_right(){
    const card_container = document.querySelector("#cards_container");
    card_container.scrollTo({
        left: card_container.scrollLeft + 400,
        behavior: "smooth"
    });
}

const leftArrow_cards = document.querySelector("#arrow-left-card");
const rightArrow_cards = document.querySelector("#arrow-right-card");
leftArrow_cards.addEventListener("click", scrollSlider_cards_left);
rightArrow_cards.addEventListener("click", scrollSlider_cards_right);
















function closeModal() {
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
        modalOverlay.remove();
        document.body.classList.remove("modal-open");
    }
}

function stopPropagation(event) {
    event.stopPropagation();
}

function showmodal(event) {
    console.log("showmodal");
    const itemInfo = event.currentTarget;

    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "x";

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modalTitle");

    const modalText = document.createElement("p");
    modalText.classList.add("modalText");

    const modalExtra = document.createElement("a");
    modalExtra.classList.add("modalExtra");

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalExtra);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    modalTitle.textContent = itemInfo.dataset.title;
    modalText.textContent = itemInfo.dataset.text;
    modalExtra.textContent = itemInfo.dataset.extra;

    modalOverlay.style.display = "flex";

    document.body.classList.add("modal-open");

    closeButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
    modalContent.addEventListener("click", stopPropagation);
}

const modals = document.querySelectorAll(".item_info_center");
for (let modal of modals) {
    modal.addEventListener("click", showmodal);
}
















function FromVideoToImg(event) {
    const container = event.currentTarget.closest(".video-banner");
    const img = container.querySelector("img");
    const video = container.querySelector("video");

    video.style.display = "none";
    img.style.display = "block";
}

const videos=document.querySelectorAll(".video-banner video");
videos.forEach(video => {
    video.addEventListener("ended", FromVideoToImg);
});


function FromImgToVideo(event) {
    const container = event.currentTarget.closest(".video-banner");
    const img = container.querySelector("img");
    const video = container.querySelector("video");

    img.style.display = "none";
    video.style.display = "block";
    video.play();
}

const buttons = document.querySelectorAll(".video-banner .restart-button");
buttons.forEach(button => { 
    button.addEventListener("click", FromImgToVideo);
});


