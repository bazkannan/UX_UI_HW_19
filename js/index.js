console.log("Your index.js file is loaded correctly!"); 
  
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
      console.log("You clicked on go to top!"); 
    });

    // Accordion 
    /* $(document).ready(function() {
        $(".accordion-header").click(function() {
            // Close other opened sections
            $(".accordion-content").not($(this).next()).slideUp();
    
            // Toggle the clicked section
            $(this).next().slideToggle();
        });
    }); */ 

    $(document).ready(function() {
        $(".accordion-header").click(function() {
            // Close other opened sections
            console.log("you clicked on the Accordion!");
            $(".accordion-content").not($(this).next()).slideUp();
            $(".accordion-header .icon i").not($(this).find(".icon i"))
                .removeClass("fa-minus")
                .addClass("fa-plus");
    
            // Toggle the clicked section
            $(this).next().slideToggle();
    
            // Toggle icon for the clicked section
            $(this).find(".icon i").toggleClass("fa-plus fa-minus");
        });
    });
    
    