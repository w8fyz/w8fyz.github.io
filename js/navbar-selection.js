const overlay = document.getElementById("nav-overlay");

document.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        document.getElementById("nav-bar-container").classList.add("reduced-opacity")
    } else {
        document.getElementById("nav-bar-container").classList.remove("reduced-opacity")
    }
    checkUpdateNavBar();
})

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth <= 890) {
        document.getElementById("mobile-nav-bar").firstElementChild.click();
    }
    checkUpdateNavBar();
})

window.addEventListener("resize", () => {
    checkUpdateNavBar();
})

function toggleMobileNavBar() {
    let navbar = document.getElementById("nav-bar");
    let mobile_nav_btn = document.getElementById("mobile-nav-bar");
    if(navbar.classList.contains("hidden-navbar")) {
        navbar.classList.remove("hidden-navbar");
        mobile_nav_btn.classList.add("nav-toggle-on");
        navbar.style.top = "";
    } else {
        navbar.classList.add("hidden-navbar");
        navbar.style.top = mobile_nav_btn.getBoundingClientRect().y+"px";
        mobile_nav_btn.classList.remove("nav-toggle-on");
    }
    checkUpdateNavBar();
}


function checkUpdateNavBar() {
    let actualSection = null;
    for(let section of document.getElementsByTagName("section")) {
        if(onScreen(section)) {
            updateNavBar(section);
            return;
        }
    }
}

function tpNavOverlay(nav) {
    let position = nav.getBoundingClientRect();
    overlay.style.left = position.x + 'px';
    overlay.style.top = position.y + 'px';
    overlay.style.height = position.height + 'px';
    overlay.style.width = position.width + 'px';
}

function toggleFillClass(element, toggle) {
    if (!element || typeof element.className !== 'string') {
        console.error('Invalid element or className!');
        return;
    }

    const className = element.className.trim();
    const fillClass = '-fill';
    const fillIndex = className.indexOf(fillClass);

    if (toggle) {
        if (fillIndex === -1) {
            element.className = className + fillClass;
        }
    } else {
        if (fillIndex !== -1) {
            const newClassName = className.slice(0, fillIndex) + className.slice(fillIndex + fillClass.length);
            element.className = newClassName.trim();
        }
    }
}

function updateNavBar(section) {
    let navbar_links = document.querySelectorAll("#nav-bar ul a");
    let toUpdateNav = null;
    navbar_links.forEach((nav) => {
        if(nav.getAttribute("href").slice(1) === section.id) {
            toUpdateNav = nav;
        }
    });
    if(toUpdateNav != null) {
        let activated_nav = document.querySelector(".active-nav-item");
        if(activated_nav != null) {
            if (activated_nav === toUpdateNav) return;
            activated_nav.classList.remove("active-nav-item");
            toggleFillClass(activated_nav.firstElementChild, false);
        }
        toUpdateNav.firstElementChild.classList.add("active-nav-item");
        toggleFillClass(toUpdateNav.firstElementChild.firstElementChild, true);
        tpNavOverlay(toUpdateNav);
    }
}