/* --- VARIABLES --- */
const scriptURL = 'https://script.google.com/macros/s/AKfycbwuzCiJPFKjZlV7owHZp918MDQsULmzFCjw7qnrRaeEDiAmtb89xOSKH7j7QgJkydPP/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

const sideMenu = document.getElementById("sidemenu");
const barMenu = document.getElementById("bars");

/* --- GOOGLE SHEETS SUBMISSION --- */
if(form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
    });
}

/* --- TAB LOGIC --- */
function opentab(tabname, event){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* --- MOBILE MENU TOGGLE --- */
function openmenu(){
    sideMenu.style.right = "0";
}

function closemenu(){
    sideMenu.style.right = "-200px";
}

/* --- SCROLL ANIMATION LOGIC --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.header-content, .sub-title, .about-col-1, .about-col-2, .info-card, .service-card, .work, .contact-left, .contact-right');

hiddenElements.forEach((el) => {
    el.classList.add('hidden-animate');
    observer.observe(el);
});

/* --- TYPING ANIMATION LOGIC (NEW) --- */
const textToType = "Aljon Montecalvo";
const typingElement = document.querySelector(".typing-text");
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust speed here (100ms is standard)
    }
}

// Start typing when the page loads
window.addEventListener('load', typeWriter);