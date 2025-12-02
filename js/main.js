
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("sidemenu");
const barMenu = document.getElementById("bars");

// Typing Animation Variables
const textToType = "Aljon Montecalvo";
const typingElement = document.querySelector(".typing-text");
let charIndex = 0;

// Mobile Menu Toggle
function openmenu(){
    sideMenu.style.right = "0";
}

function closemenu(){
    sideMenu.style.right = "-200px";
}

// About Section Tab Switching
function opentab(tabname, event){
    // Hide all tab links and contents
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    // Activate clicked tab
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// SCROLL ANIMATION (Fade Up on Scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.header-content, .sub-title, .about-col-1, .about-col-2, .info-card, .service-card, .work, .contact-left, .contact-right');

hiddenElements.forEach((el) => {
    el.classList.add('hidden-animate'); // Hides them initially
    observer.observe(el); // Starts watching
});

// TYPING ANIMATION (Typewriter Effect)
function typeWriter() {
    if (typingElement && charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed here (100ms)
    }
}

// Play Video on Hover (Portfolio Section)
const workCards = document.querySelectorAll('.work');

workCards.forEach(card => {
    const video = card.querySelector('video');
    
    if(video) {
        // When mouse enters, play video
        card.addEventListener('mouseenter', () => {
            video.play();
        });

        // When mouse leaves, pause and reset to start
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; 
        });
    }
});

// Start the typing effect when the page fully loads
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {

    preloader.style.opacity = '0';

    setTimeout(() => {
        preloader.style.display = 'none';
        typeWriter();
    }, 500);
});