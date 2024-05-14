// Image Slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    //Will populate the browser with the first image

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 5000)
        
    }
    
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }

    else if (index < 0) {
        slideIndex = slides.length - 1;

    }
    // Remove class to hidden all images, then
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    // displays block the image at index
    slides[slideIndex].classList.add("displaySlide");

}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex)

    clearInterval(intervalId)
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    
    clearInterval(intervalId);
}


/** HTML for this JS:
 * 
 * <div class="slider">
        <div class="slides">
            <img class="slide" src="/assets/chevette-1.jpeg" alt="">
            <img class="slide" src="/assets/chevette-2.jpeg" alt="">
            <img class="slide" src="/assets/chevette-3.jpeg" alt="">
        </div>

        <button class="prev" onclick="prevSlide()">&#10094</button>
        <button class="next" onclick="nextSlide()">&#10095</button>
    </div>
 */