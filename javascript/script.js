
  // Scroll Up Button
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
      } else {
        scrollUpBtn.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    scrollUpBtn.addEventListener("click", function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });


    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu'); 

    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active'); 

      menuToggle.classList.toggle('active');
    }); 
  
    document.addEventListener('DOM-ContentLoaded', function() {
      const hamburgerMenu = document.querySelector('.hamburger-menu'); 
      const navLinks = document.querySelector('.nav-links'); 

      hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active'); 
        hamburgerMenu.classList.toggle('active'); 
      });
    });