document.addEventListener("scroll", () => {
    if(scrollY > 0) {
        document.getElementById("nav-bar").classList.add("reduced-opacity")
    } else {
        document.getElementById("nav-bar").classList.remove("reduced-opacity")
    }
})