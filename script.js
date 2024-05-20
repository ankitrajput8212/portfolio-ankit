// NAVBAR--------------------------------------------------------------
// Fade Navbar on Scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('low-opacity');
    } else {
      $('.navbar').removeClass('low-opacity');
    }
  });
  
  // Close Navbar Toggle on Click and Scroll to Section
  $('.navbar-nav .nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  
    // Add 'active' class to the clicked nav item
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });
  
  //CONTACT FORM SUBMISSION----------------------------------------------
  
  
  // Function to handle form reset
  function handleFormReset() {
    document.getElementById("contactForm").reset();
  }
  
  // Add an event listener to the reset button
  document.getElementById("resetButton").addEventListener("click", handleFormReset);
  
  //LOADER---------------------------------------------------------------
  // Wait for the whole page to load before hiding the preloader
  window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide'); // Apply 'hide' class to hide the preloader
  });
  