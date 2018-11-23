window.addEventListener('resize', function(){
  "use strict";
   window.location.reload();
});

if (window.matchMedia("(min-width: 894px)").matches) {
  window.onscroll = function() {
    scrollFunction();
    growShrinkLogo();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("navbar").style.background = "#000";
      document.getElementById("navbar").style.transition = "0.3s ease-in-out";
    } else {
      document.getElementById("navbar").style.background = "transparent";
    }
  }
  function growShrinkLogo() {
    var Logo = document.getElementById("logo");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      Logo.style.height = "45px";
      Logo.style.transition = "0.3s ease-in-out";
      Logo.style.paddingTop = "6px";
    } else {
      Logo.style.height = "66px";
    }
  }
} else {
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });
}
