/*=== menu icon navbar === */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*=== scroll sections active link === */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ' ] ').classList.add(active);
            });
        };
    });

    /* ===== sticky navbar ===== */
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


  
};

window.onscroll = () => {
    /*==== remove menu icon navbar when click navabar link (scroll)======*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
 




/*==== swiper =====*/

/*
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".swiper-button-next",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

  */


/*==== dark light mode 01 =====*/
     /*
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.boby.classList.toggle('dark-mode');
};        
     */


/*==== dark light mode 02 =====*/
  
const darkModeIcon = document.getElementById('darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
  


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission par défaut

    emailjs.sendForm("service_rus7bvb", "template_tybxxxs", this, "IjTLsV0CAwNTupvGs")
    .then(() => {
        // Efface les champs du formulaire
        this.reset();
        alert("Message envoyé avec succès !");
    }, (error) => {
        console.log("Erreur:", error);
    });
});


/*==== dark light mode 03 =====*/
   /*
const darkModeIcon = document.getElementById('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.textContent = ('bx-sun');
    } else {
        darkModeIcon.textContent = ('dark-mode');
    }
});
   /*


/*==== scroll reveal =====*/

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, portfolio-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img' , { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .video, .about-content' , { origin: 'right' });


