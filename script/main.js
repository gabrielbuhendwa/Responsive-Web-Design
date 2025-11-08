//working with mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
});
// Close mobile menu when clicking on a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});



//nav links scrolling behavior
const navLinks = document.querySelectorAll('#nav-menu a');
const header = document.querySelector('nav');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');

      if (targetId === '#home'){
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      else
        {
        const targetSection = document.querySelector(targetId);

        let headerOffset = header.offsetHeight + 20;
        if (targetId === '#services'){
          headerOffset = header.offsetHeight + 90;
        }

        const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  
//Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
    }
    else{
        scrollTopBtn.classList.remove('active');
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


