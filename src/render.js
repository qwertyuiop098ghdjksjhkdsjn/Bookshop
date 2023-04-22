const template = document.querySelector("#template");
const container = document.querySelector (".container");

let count = 0;
let bagfinal = document.querySelector (".countBook");

export function book (info) {
    const element = template.content.cloneNode (true);

    const image = element.querySelector (".img1");
    const author = element.querySelector (".p1"); 
    const name = element.querySelector (".p2")
    const rate = element.querySelector (".rate1");
    const description = element.querySelector (".p3");
    const sale = element.querySelector (".p4");

    image.src = info.volumeInfo.imageLinks.thumbnail;
    if (info.volumeInfo.imageLinks.thumbnail) {
        image.src = info.volumeInfo.imageLinks.thumbnail;
    } else {
        image.src = "image/bookno.jpg";
    }

    if (info.volumeInfo.authors) {
        author.innerText = info.volumeInfo.authors[0];
    } 
    
    name.innerText = info.volumeInfo.title;
    
    if (info.volumeInfo.averageRating) {
        rate.innerText = info.volumeInfo.averageRating;
    } 

    if (info.volumeInfo.description) {
        description.innerText = info.volumeInfo.description;
    } 
    
    if (info.saleInfo.sale) {
        sale.innerText = info.saleInfo.sale;
    } 

    const buttonBuy = element.querySelector (".button1");

    let data = JSON.parse(localStorage.getItem("cart") || "[]");
    if(data.includes(info.id)) { 
        count +=1;
        buttonBuy.classList.add("button2");
        buttonBuy.innerText = "IN THE CART";
    } 
    bagfinal.innerHTML = count;


    buttonBuy.addEventListener ("click", function () {
        
        let data = JSON.parse(localStorage.getItem("cart") || "[]");
        if(data.includes(info.id)) {
            data = data.filter(element => element != info.id)
            localStorage.setItem("cart", JSON.stringify(data));
            count -=1;
            buttonBuy.classList.remove("button2");
            buttonBuy.innerText = "BUY NOW";
        } else {
            data.push(info.id);
            localStorage.setItem("cart", JSON.stringify(data));
            count +=1;
            buttonBuy.classList.add("button2");
            buttonBuy.innerText = "IN THE CART";
        }
        bagfinal.innerHTML = count;
    })

    container.append(element);
}; 