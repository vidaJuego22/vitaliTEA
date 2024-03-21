'use strict';

/**PRELOADING*/
const preloader = document.querySelector("[data-preload");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

/**MULTIPLE ELS*/
const addEventOnElements = function (elements, eventType, callback)
{
    for (let i = 0, len = elements.length; i < len; i++)
    {
        elements[i].addEventListener(eventType, callback);
    }
}

/**NAVBAR FUNCTION */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler");
const overlay = document.querySelector( "[data-overlay]" );

const toggleNavbar = function ()
{
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**HEADER */
const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function ()
{
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom)
    {
        header.classList.add("hide");
    }
    else
    {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener
(
    "scroll", function ()
    {
        if (window.scrollY >= 50)
        {
            header.classList.add("active");
            hideHeader();
        } 
        else 
        { 
            header.classList.remove("active");
        }
    }
);

/**HERO SLIDERS */
const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function ()
{
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function ()
{
    if (currentSlidePos >= heroSliderItems.length - 1)
    {
        currentSlidePos = 0;
    }
    else
    {
        currentSlidePos++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function()
{
    if (currentSlidePos <= 0)
    {
        currentSlidePos = heroSliderItems.length - 1;
    }
    else
    {
        currentSlidePos--;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);
/**AUTO SLIDERS */

let autoSlideInterval;

const autoSlide = function()
{
    autoSlideInterval = setInterval(function () {
        slideNext ();
    }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
    clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);


    // Function to open the pop-up box
    function openPopup() {
        document.getElementById("popupBox").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }

    // Function to close the pop-up box
    function closePopup() {
        document.getElementById("popupBox").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

    // Event listener for the "View Menu" link
    document.querySelector('.btn-text').addEventListener('click', openPopup);


    function calculateTotal() {
        // Get the values of the quantity inputs
        var hotDrinksQuantity = parseInt(document.getElementById('neon_bawls').value);
        var coldDrinksQuantity = parseInt(document.getElementById('banana_lumpia').value);
        var snacksQuantity = parseInt(document.getElementById('fried_squidward').value);

        // Check if the input values are valid numbers
        if (isNaN(hotDrinksQuantity)) {
            hotDrinksQuantity = 0;
        }
        if (isNaN(coldDrinksQuantity)) {
            coldDrinksQuantity = 0;
        }
        if (isNaN(snacksQuantity)) {
            snacksQuantity = 0;
        }

        // Define the prices for each item
        var hotDrinksPrice = 150;
        var coldDrinksPrice = 250;
        var snacksPrice = 300;

        // Calculate the total amount
        var totalAmount = (hotDrinksQuantity * hotDrinksPrice) + (coldDrinksQuantity * coldDrinksPrice) + (snacksQuantity * snacksPrice);

        // Update the total amount input field
        document.getElementById('total_amount').value = totalAmount.toFixed(2);
    }