import {createSSlider} from "./slider.js"; import {getBooks, setPage, nextPage} from "./API.js"; 
import "./style.css";

createSSlider ();

// let offset = 0;

// const sliderline = document.querySelector('.slider-line');
// const button1 = document.querySelector(".ellipse1");
// const button2 = document.querySelector(".ellipse2");
// const button3 = document.querySelector(".ellipse3");
// const step = sliderline.offsetWidth
// console.log(step);

// function nextSlide (){
//     if (offset>=step*2) {
//         offset = 0;
//     } else {
//         offset += step
//     }
//     sliderline.style.left = -offset + 'px';
// }; 

// setInterval(nextSlide, 5000);

// function addclass (dot) {
//     dot.classList.add("active");
// }

// function removeclass (dot) {
//     dot.classList.remove("active");
// }

// button1.addEventListener('click', function(){
//     offset = 0;
//     sliderline.style.left = -offset + 'px';
//     addclass(button1);
//     removeclass(button2);
//     removeclass(button3);
// });

// button2.addEventListener('click', function(){
//     offset = step;
//     sliderline.style.left = -offset + 'px';
//     addclass(button2);
//     removeclass(button1);
//     removeclass(button3);
// });

// button3.addEventListener('click', function(){
//     offset = step*2;
//     sliderline.style.left = -offset + 'px';
//     addclass(button3);
//     removeclass(button2);
//     removeclass(button1);
// });


// API

let page = 0;

let category = "Architecture";

// const apiKey = "AIzaSyBzK_2RluqW6X6l_LY-uRBo5adCOMyYtXo"; 
// const apiKey2 = "AIzaSyBK9zHrvC-iWU7gbJn2ts4BETKgkyZSXVA";

// // https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=<ваш ключ API>&printType=books&startIndex=0&maxResults=6&langRestrict=en

// const baseURL = "https://www.googleapis.com/books/v1/volumes?q="

// function getBooks (query) {
//     fetch (baseURL +  `${query}`  + `&key=${apiKey2}&printType=books&startIndex=${page*6}&maxResults=6&langRestrict=en`) .then (res => res.json()) .then (res => res.items.forEach(element => {
//       book (element)  
//     }));
// }

// function getBooks (query) {
//     fetch (baseURL +  `${query}`  + `&key=${apiKey2}&printType=books&startIndex=${page*6}&maxResults=6&langRestrict=en`) .then (res => res.json()) .then (res => console.log(res))
// }

getBooks ("subject:Business");

// const template = document.querySelector("#template");
const container = document.querySelector (".container");
const button = document.querySelector(".load");

// let count = 0;
// let bagfinal = document.querySelector (".countBook");

// function book (info) {
//     const element = template.content.cloneNode (true);

//     const image = element.querySelector (".img1");
//     const author = element.querySelector (".p1"); 
//     const name = element.querySelector (".p2")
//     const rate = element.querySelector (".rate1");
//     const description = element.querySelector (".p3");
//     const sale = element.querySelector (".p4");

//     image.src = info.volumeInfo.imageLinks.thumbnail;
//     if (info.volumeInfo.imageLinks.thumbnail) {
//         image.src = info.volumeInfo.imageLinks.thumbnail;
//     } else {
//         image.src = "image/bookno.jpg";
//     }

//     if (info.volumeInfo.authors) {
//         author.innerText = info.volumeInfo.authors[0];
//     } 
    
//     name.innerText = info.volumeInfo.title;
    
//     if (info.volumeInfo.averageRating) {
//         rate.innerText = info.volumeInfo.averageRating;
//     } 

//     if (info.volumeInfo.description) {
//         description.innerText = info.volumeInfo.description;
//     } 
    
//     if (info.saleInfo.sale) {
//         sale.innerText = info.saleInfo.sale;
//     } 

//     const buttonBuy = element.querySelector (".button1");

//     let data = JSON.parse(localStorage.getItem("cart") || "[]");
//     if(data.includes(info.id)) { 
//         count +=1;
//         buttonBuy.classList.add("button2");
//         buttonBuy.innerText = "IN THE CART";
//     } 
//     bagfinal.innerHTML = count;


//     buttonBuy.addEventListener ("click", function () {
        
//         let data = JSON.parse(localStorage.getItem("cart") || "[]");
//         if(data.includes(info.id)) {
//             data = data.filter(element => element != info.id)
//             localStorage.setItem("cart", JSON.stringify(data));
//             count -=1;
//             buttonBuy.classList.remove("button2");
//             buttonBuy.innerText = "BUY NOW";
//         } else {
//             data.push(info.id);
//             localStorage.setItem("cart", JSON.stringify(data));
//             count +=1;
//             buttonBuy.classList.add("button2");
//             buttonBuy.innerText = "IN THE CART";
//         }
//         bagfinal.innerHTML = count;
//     })

//     container.append(element);
// }

button.addEventListener ("click", function () {
    nextPage ();
    getBooks ("subject:" + category);
})

const allcategories = document.querySelectorAll (".booklist > li");
console.log (allcategories);

const Architecture = document.querySelector("#Architecture");
const Art = document.querySelector ("#Art");
const Biography = document.querySelector ("#Biography");
const Business = document.querySelector ("#Business");
const Crafts = document.querySelector ("#Crafts");
const Drama = document.querySelector ("#Drama");
const Fiction = document.querySelector ("#Fiction");
const Food = document.querySelector ("#Food");
const Health = document.querySelector ("#Health");
const History1 = document.querySelector ("#History");
const Humor = document.querySelector ("#Humor");
const Poetry = document.querySelector ("#Poetry");
const Psychology = document.querySelector ("#Psychology");
const Science = document.querySelector ("#Science");
const Technology = document.querySelector ("#Technology");
const Travel = document.querySelector ("#Travel");

function removingclass () {
    Array.from(allcategories).forEach (element => element.classList.remove("active1"))
}

function addingclass (element) {
    element.classList.add ("active1");
}

Architecture.addEventListener ("click", function () {
    console.log("hello");
    setPage (0);
    category = "Architecture";
    container.innerHTML="";
    getBooks("subject:Architecture"); 
    removingclass ();
    addingclass (Architecture);
});

Art.addEventListener ("click", function () {
    setPage (0);
    category = "Art";
    container.innerHTML="";
    getBooks("subject:Art"); 
    removingclass ();
    addingclass (Art);
})

Biography.addEventListener ("click", function () {
    setPage (0);
    category = "Biography and Autobiography";
    container.innerHTML="";
    getBooks("subject:Biography and Autobiography"); 
    removingclass ();
    addingclass (Biography);
})

Business.addEventListener ("click", function () {
    setPage (0);
    category = "Business";
    container.innerHTML="";
    getBooks("subject:Business"); 
    removingclass ();
    addingclass (Business);
})

Crafts.addEventListener ("click", function () {
    setPage (0);
    category = "Crafts";
    container.innerHTML="";
    getBooks("subject:Crafts"); 
    removingclass ();
    addingclass (Crafts);
})

Drama.addEventListener ("click", function () {
    setPage (0);
    category = "Drama";
    container.innerHTML="";
    getBooks("subject:Drama"); 
    removingclass ();
    addingclass (Drama);
})

Fiction.addEventListener ("click", function () {
    setPage (0);
    category = "Fiction";
    container.innerHTML="";
    getBooks("subject:Fiction"); 
    removingclass ();
    addingclass (Fiction);
})

Food.addEventListener ("click", function () {
    setPage (0);
    category = "Cooking";
    container.innerHTML="";
    getBooks("subject:Cooking"); 
    removingclass ();
    addingclass (Food);
})

Health.addEventListener ("click", function () {
    setPage (0);
    category = "Health & Fitness";
    container.innerHTML="";
    getBooks("subject:Health & Fitness"); 
    removingclass ();
    addingclass (Health);
})

History1.addEventListener ("click", function () {
    setPage (0);
    category = "History";
    container.innerHTML="";
    getBooks("subject:History"); 
    removingclass ();
    addingclass (History1);
})

Humor.addEventListener ("click", function () {
    setPage (0);
    category = "Humor";
    container.innerHTML="";
    getBooks("subject:Humor"); 
    removingclass ();
    addingclass (Humor);
})

Poetry.addEventListener ("click", function () {
    setPage (0);
    category = "Poetry";
    container.innerHTML="";
    getBooks("subject:Poetry"); 
    removingclass ();
    addingclass (Poetry);
})

Psychology.addEventListener ("click", function () {
    setPage (0);
    category = "Psychology";
    container.innerHTML="";
    getBooks("subject:Psychology"); 
    removingclass ();
    addingclass (Psychology);
})

Science.addEventListener ("click", function () {
    setPage (0);
    category = "Science";
    container.innerHTML="";
    getBooks("subject:Science"); 
    removingclass ();
    addingclass (Science);
})

Technology.addEventListener ("click", function () {
    setPage (0);
    category = "Technology";
    container.innerHTML="";
    getBooks("subject:Technology");
    removingclass ();
    addingclass (Technology);
})

Travel.addEventListener ("click", function () {
    setPage (0);
    category = "Travel";
    container.innerHTML="";
    getBooks("subject:Travel");
    removingclass ();
    addingclass (Travel);
})

