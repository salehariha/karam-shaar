// start header
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click' , function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});
window.onscroll = function () {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}
// end header
// start slider
document.addEventListener('DOMContentLoaded', function () {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slider = document.querySelector('.slider');

    next.addEventListener('click', function() {
        let slides = document.querySelectorAll('.slides');
        slider.appendChild(slides[0]);
    });
    prev.addEventListener('click', function() {
        let slides = document.querySelectorAll('.slides');
        slider.prepend(slides[slides.length - 1]);
    });
});
// end slider
// start statistics
let nums = document.querySelectorAll('.box .num');
let statistics = document.getElementById('statistics');
let started = false; 

window.onscroll = function() {
    if (window.scrollY >= statistics.offsetTop - window.innerHeight) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(e) {
    let val = parseInt(e.dataset.val); // تحويل القيمة إلى عدد صحيح
    let current = 0;
    let increment = val / 200; // تعديل قيمة الزيادة لجعل الحركة أكثر سلاسة
    let count = setInterval(() => {
        current += increment;
        e.textContent = Math.ceil(current);
        if (current >= val) {
            clearInterval(count);
            e.textContent = val; // لضمان أن القيمة النهائية هي الصحيحة
        }
    }, 10); // تحديث كل 10 مللي ثانية
}

// end statistics


