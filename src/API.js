import { book } from "./render.js"; 

const apiKey = "AIzaSyBzK_2RluqW6X6l_LY-uRBo5adCOMyYtXo"; 
const apiKey2 = "AIzaSyBK9zHrvC-iWU7gbJn2ts4BETKgkyZSXVA";

// https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=<ваш ключ API>&printType=books&startIndex=0&maxResults=6&langRestrict=en

const baseURL = "https://www.googleapis.com/books/v1/volumes?q="

let page = 0;

export function getBooks (query) {
    fetch (baseURL +  `${query}`  + `&key=${apiKey2}&printType=books&startIndex=${page*6}&maxResults=6&langRestrict=en`) .then (res => res.json()) .then (res => res.items.forEach(element => {
      book (element)  
    }));
}

export function setPage (number) {
    page = number;
};

export function nextPage () {
    page++
};
 