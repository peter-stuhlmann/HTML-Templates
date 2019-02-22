// MAINNAV SCROLL ANIMATION 

jQuery(document).ready(function ($) {
    $(document).ready(function () {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            let mainnav = document.querySelector("#mainnav")
            let mainnavToggle = document.querySelector(".mainnav-toggle")
            if (scroll > 10) {
                mainnav.classList.add("mainnav-scroll-style")
                mainnavToggle.classList.add("mainnav-toggle-scroll-style")
            } else {
                mainnav.classList.remove("mainnav-scroll-style")
                mainnavToggle.classList.remove("mainnav-toggle-scroll-style")
            }
        })
    })
});


if (document.querySelector("#normal")) {
// SMOOTH SCROLL
    
    
    console.log()

$(document).ready(function(){
  // Add smooth scrolling on all links inside the mainnav
  $("header ul a, .scrolldown, .anfrage").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});}