const header =document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY>90)
});

// menu ssection for mobile size
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navlist.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
});

// Close menu when clicking a nav link
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});

window.onscroll  =()=>{
    menuIcon.classList.remove('bx-x');
    navlist.classList.remove('open');
};


// Add this to your script file
const colorToggle = document.getElementById('color-toggle');
let currentTheme = 0; // 0 = default, 1 = blue, 2 = green, 3 = red

colorToggle.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % 4; // Cycle through 4 themes

    // Remove existing themes
    document.body.classList.remove('theme-blue', 'theme-green', 'theme-red');

    // Apply new theme based on currentTheme value
    if (currentTheme === 1) {
        document.body.classList.add('theme-blue');
    } else if (currentTheme === 2) {
        document.body.classList.add('theme-green');
    } else if (currentTheme === 3) {
        document.body.classList.add('theme-red');
    }
});