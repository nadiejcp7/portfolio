"use strict";
const navbar = document.querySelector(".navbar");
navbar.addEventListener('mouseover', function () {
    if (Number(window.innerWidth) > 991) {
        navbar.style.width = "430px";
        navbar.style.transitionDuration = '0.7s';
        document.querySelector(".navbar-user-content").style.opacity = '1';
        const elements = document.querySelectorAll('.nav-link-big');
        elements.forEach(element => {
            element.style.willChange = 'opacity';
            element.style.opacity = "1";
            element.style.display = 'grid';
        });
    }
});
navbar.addEventListener('mouseout', function () {
    if (Number(window.innerWidth) > 991) {
        navbar.style.width = "94px";
        document.querySelector(".navbar-user-content").style.opacity = '0';
        const elements = document.querySelectorAll('.nav-link-big');
        elements.forEach(element => {
            element.style.opacity = "0";
            element.style.display = 'none';
        });
    }
});
const expand = document.getElementsByClassName('nav-links')[1];
expand.addEventListener('mouseover', function () {
    var _a;
    (_a = document.getElementById('w-dropdown-toggle-0')) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'true');
    const ver = document.getElementById('w-dropdown-list-0');
    if (ver != null) {
        ver.style.removeProperty("height");
        ver.style.opacity = '1';
        ver.classList.add('w--open');
    }
});
expand.addEventListener('mouseout', function () {
    var _a;
    (_a = document.getElementById('w-dropdown-toggle-0')) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'false');
    const ver = document.getElementById('w-dropdown-list-0');
    if (ver != null) {
        ver.classList.remove('w--open');
        ver.style.opacity = '0';
        ver.style.height = '0px';
    }
});
const age = document.getElementById('age');
if (age != null) {
    let dateFrom = new Date('1995-12-14');
    let dateTo = new Date();
    let years = dateTo.getFullYear() - dateFrom.getFullYear();
    if (dateTo.getMonth() < dateFrom.getMonth()) {
        years -= 1;
    }
    age.innerHTML = '' + (years);
}
const elements = document.querySelectorAll('.nav-link-big');
elements.forEach(element => {
    element.style.opacity = "0";
    element.style.display = 'none';
});
var showing = false;
const button = document.getElementsByClassName('menu-button')[0];
button.addEventListener('click', function () {
    const nav = document.getElementById('w-nav-overlay-0');
    if (!showing) {
        nav.style.height = '1000px';
        nav.style.display = 'block';
        const navi = document.getElementsByClassName('nav-menu')[0];
        navi.style.transition = 'all, transform 401ms';
        navi.style.transform = 'translateY(0px) translateX(0px)';
        navi.setAttribute('data-nav-menu-open', '');
        nav.append(navi);
        console.log(navi);
        navbar.style.transitionDuration = '0.7s';
        document.querySelector(".navbar-user-content").style.opacity = '1';
        const elements = document.querySelectorAll('.nav-link-big');
        elements.forEach(element => {
            element.style.willChange = 'opacity';
            element.style.opacity = "1";
            element.style.display = 'grid';
        });
        showing = true;
    }
    else {
        showing = false;
        nav.style.display = 'none';
        nav.style.height = '0px';
    }
});
