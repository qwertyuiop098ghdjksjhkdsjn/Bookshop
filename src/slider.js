let offset = 0;

const sliderline = document.querySelector('.slider-line');
const button1 = document.querySelector(".ellipse1");
const button2 = document.querySelector(".ellipse2");
const button3 = document.querySelector(".ellipse3");
const step = sliderline.offsetWidth
console.log(step);

function nextSlide () {
    if (offset>=step*2) {
        offset = 0;
    } else {
        offset += step
    }
    sliderline.style.left = -offset + 'px';
}; 

setInterval(nextSlide, 5000);

function addclass (dot) {
    dot.classList.add("active");
}

function removeclass (dot) {
    dot.classList.remove("active");
}

export function createSSlider () {

    button1.addEventListener('click', function(){
        offset = 0;
        sliderline.style.left = -offset + 'px';
        addclass(button1);
        removeclass(button2);
        removeclass(button3);
    });

    button2.addEventListener('click', function(){
        offset = step;
        sliderline.style.left = -offset + 'px';
        addclass(button2);
        removeclass(button1);
        removeclass(button3);
    });

    button3.addEventListener('click', function(){
        offset = step*2;
        sliderline.style.left = -offset + 'px';
        addclass(button3);
        removeclass(button2);
        removeclass(button1);
    });
}

