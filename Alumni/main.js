let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
var hamburger = document.querySelector(".hamburger");

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});


  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
