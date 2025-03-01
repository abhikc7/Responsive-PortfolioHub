// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

     if(top >= offset && top < offset + height){
     navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
     })
     };
    });
    // Sticky Navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .certificates-container, .portfolio-box, .contact', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Computer Science Eng.','Student','Database Developer','Frontend Developer','UI/UX Designer','Graphic Designer','Photo & Video Editor','Programmer','Designer','Keen Learner'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzv-hDEfs700_OxPCzgj8uAzcEq9P4LSygbmpsl1nPiegyuhWaoOgLarSW6XeojcWuHPQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
    