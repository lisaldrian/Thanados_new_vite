document.addEventListener("DOMContentLoaded", function () {
    var myNavbar = document.getElementById("mynavbar");
    var navbarHome = document.getElementById("navbar-home");

    myNavbar.addEventListener("click", function () {
      if (navbarHome.classList.contains("show")) {
        navbarHome.classList.remove("show");
      } else {
        navbarHome.classList.add("show");
      }
    });
  });