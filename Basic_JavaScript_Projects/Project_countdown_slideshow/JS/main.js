function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML =  seconds;
        setTimeout(tick, 1000); //displays alert box
        if(seconds == -1){
            alert("Time's up!");
        }
    }
    tick();
}

var slideIndex = 1; //set slideIndex to 1
showSlides(slideIndex); // set slideIndex to first picture 

function plusSlides(n) { // adds or takes away one to the slideIndex, 
    showSlides(slideIndex += n) //displays first image
}

function currentSlide(n) { //thumbnail image control
    showSlides(slideIndex = n); 
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){ //if slideIndex is higher then number of elements it is set to zero 
        slides[i].style.display = "none";
} 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //displays the element with the given slideIndex
    dots[slideIndex-1].className += " active";
}