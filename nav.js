const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobil-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")


    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true)
    }
});