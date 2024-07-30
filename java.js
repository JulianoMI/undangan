document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                return;
            }
            entry.target.classList.remove("in-view")
        });
    });


const allAnimatedElements = document.querySelectorAll(".animate");

allAnimatedElements.forEach((element) => observer.observe(element));

});

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const darkModeIcon = document.querySelector(".dark-mode-icon");
    const section = document.querySelectorAll("#page");
    const text = document.querySelectorAll("#text")
    const storedMode = localStorage.getItem('darkMode');
    //FOR SAVING THE LAST MODE IN THE WEBSITE BY USER
    if (storedMode === 'dark') {
        enableDarkMode();
    }
    //IF CLICKED WHEN WE ARE IN DARK MODE, IT WILL CHANGE TO LIGHT MODE VICE VERSA
    document.querySelector(".btn").addEventListener('click', ()  => {
        if (body.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    //ENABLES DARK MODE
    function enableDarkMode() {
        body.classList.add('dark');
        darkModeIcon.classList.add('dark');
        // section.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    }
    //ENABLES LIGHT MODE
    function disableDarkMode() {
        body.classList.remove('dark');
        darkModeIcon.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})


var countDownDate = new Date("July 25, 2025 07:30:00");
var x = setInterval(function(){
    var now = new Date().getTime();
    var countdown = countDownDate - now;
    
    var days = Math.floor(countdown/(1000*60*60*24));
    var hours = Math.floor((countdown % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((countdown %(1000*60*60))/(1000*60));
    var seconds = Math.floor((countdown%(1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(countdown < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);
