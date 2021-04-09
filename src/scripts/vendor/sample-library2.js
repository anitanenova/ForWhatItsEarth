const mobileMenu = document.querySelector(".menu-mobile");
const nav = document.querySelector(
  "div.site-header-secondary > div > div > div > div > nav.site-navigation-primary.site-navigation-primary"
);

mobileMenu.addEventListener("click", function (e) {
  let current = e.target.classList;

  if (current.contains("menu-open")) {
    current.remove("menu-open");
    // nav.style.display = "none";
    // nav.style.transition = "0.5s";
    nav.style.transform = "translateX(-100%)";
  } else {
    current.add("menu-open");
    // nav.style.display = "block";
    //nav.style.transition = "0.5s";
    nav.style.transform = "translateX(0)";
  }
});
