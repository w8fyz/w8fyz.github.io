function getNavbar() {
    return '    <div id="nav-bar-container">\n' +
        '    <div id="nav-bar">\n' +
        '        <div id="nav-overlay"></div>\n' +
        '        <ul>\n' +
        '            <a href="/#main" data-name="Accueil">\n' +
        '                <li> <i class="bi bi-house"></i></li>\n' +
        '            </a>\n' +
        '\n' +
        '            <a href="/#about-me" data-name="A propos de moi">\n' +
        '                <li><i class="bi bi-file-earmark-text"></i> </li>\n' +
        '            </a>\n' +
        '\n' +
        '            <a href="/#projects" data-name="Mes Projets">\n' +
        '            <li>\n' +
        '                <i class="bi bi-palette"></i>\n' +
        '            </li>\n' +
        '            </a>\n' +
        '\n' +
        '            <a href="/#veille" data-name="Veille Informatique">\n' +
        '                <li>\n' +
        '                    <i class="bi bi-book"></i></i>\n' +
        '                </li>\n' +
        '            </a>\n' +
        '\n' +
        '            <a href="/#contact" data-name="Me contacter">\n' +
        '                <li>\n' +
        '                    <i class="bi bi-send"></i></i>\n' +
        '                </li>\n' +
        '            </a>\n' +
        '        </ul>\n' +
        '    </div>\n' +
        '    <div id="mobile-nav-bar">\n' +
        '        <button onclick="toggleMobileNavBar()"><i class="bi bi-list"></i></button>\n' +
        '    </div>\n' +
        '    </div>';
}

let nav_impl = document.querySelector(".nav-impl");
nav_impl.insertAdjacentHTML('beforebegin', getNavbar());
nav_impl.remove();